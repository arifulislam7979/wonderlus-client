"use client";

import { useSession } from "@/lib/auth-client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Plane,
  Globe,
  TrendingUp,
  DollarSign,
  MapPin,
  Edit3,
  Camera,
  ShieldCheck,
} from "lucide-react";
import { useRef, useState } from "react";

const Profile = () => {
  const { data: session, isPending } = useSession();
  const user = session?.user;

  // 1. File input ke reference korar jonno useRef use kora holo
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewImage] = useState<string | null>(null);

  // 2. Camera button-e click korle hidden input-e trigger korbe
  const handleCameraClick = () => {
    fileInputRef.current?.click();
  };

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-8 h-8 border-4 border-[#00a8cc] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-serif text-gray-900 font-normal mb-1">
            My Profile
          </h1>
          <p className="text-gray-500 text-xs sm:text-sm font-light">
            Manage your account settings and travel preferences
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT SIDE: User Card */}
          <div className="lg:col-span-4 bg-white border border-gray-100 rounded-md shadow-sm p-6 space-y-6">
            <div className="flex flex-col items-center text-center">
              {/* Avatar with Camera Icon Overlay */}
              <div className="relative mb-4">
                <Avatar className="w-24 h-24 border-2 border-[#00a8cc]/20 shadow-sm">
                  <AvatarImage
                    referrerPolicy="no-referrer"
                    src={previewImage || (user?.image as string)}
                    alt={user?.name || "User"}
                  />
                  <AvatarFallback className="bg-[#00a8cc] text-white text-2xl font-medium">
                    {user?.name?.charAt(0) || "U"}
                  </AvatarFallback>
                </Avatar>

                {/* Hidden File Input */}
                <input
                  type="file"
                  ref={fileInputRef}
                  // onChange={handleFileChange}
                  accept="image/*"
                  className="hidden"
                />

                {/* Camera Button */}
                <div
                  onClick={handleCameraClick}
                  className="absolute bottom-0 right-0 bg-[#00a8cc] text-white p-1.5 rounded-full shadow-md cursor-pointer hover:bg-[#0091b0] transition"
                >
                  <Camera className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* User Name & Email */}
              <h2 className="text-xl font-serif text-gray-900 font-medium">
                {user?.name || "Traveler"}
              </h2>
              <p className="text-xs text-gray-400 font-light mt-0.5 break-all">
                {user?.email || "user@example.com"}
              </p>

              {/* Location */}
              <div className="flex items-center gap-1.5 text-xs text-gray-500 font-light mt-2">
                <MapPin className="w-3.5 h-3.5 text-gray-400" />
                <span>Bangladesh</span>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Additional Meta Info */}
            <div className="space-y-3 text-xs">
              <div className="flex justify-between text-gray-500 font-light">
                <span>Member since</span>
                <span className="font-medium text-gray-800">
                  {user?.createdAt
                    ? new Date(user.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                      })
                    : "May 2025"}
                </span>
              </div>
              <div className="flex justify-between text-gray-500 font-light">
                <span>Account Status</span>
                <span className="inline-flex items-center gap-1 font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  <ShieldCheck className="w-3 h-3" /> Verified
                </span>
              </div>
            </div>

            {/* Edit Profile Button */}
            <button className="w-full flex items-center justify-center gap-2 bg-[#00a8cc] hover:bg-[#0091b0] text-white text-xs font-medium py-3 rounded-sm transition cursor-pointer shadow-sm">
              <Edit3 className="w-3.5 h-3.5" />
              Edit Profile
            </button>
          </div>

          {/* RIGHT SIDE: Travel Statistics */}
          <div className="lg:col-span-8 space-y-6">
            <h3 className="text-xl font-serif text-gray-900 font-normal">
              Travel Statistics
            </h3>

            {/* Stats Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1: Total Bookings */}
              <div className="bg-white border border-gray-100 rounded-md p-6 shadow-sm flex items-center justify-between transition hover:shadow-md">
                <div>
                  <p className="text-xs text-gray-400 font-light uppercase tracking-wider mb-1">
                    Total Bookings
                  </p>
                  <h4 className="text-3xl font-serif font-medium text-gray-900">
                    12
                  </h4>
                </div>
                <div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center text-[#00a8cc]">
                  <Plane className="w-6 h-6" />
                </div>
              </div>

              {/* Card 2: Countries Visited */}
              <div className="bg-white border border-gray-100 rounded-md p-6 shadow-sm flex items-center justify-between transition hover:shadow-md">
                <div>
                  <p className="text-xs text-gray-400 font-light uppercase tracking-wider mb-1">
                    Countries Visited
                  </p>
                  <h4 className="text-3xl font-serif font-medium text-gray-900">
                    18
                  </h4>
                </div>
                <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <Globe className="w-6 h-6" />
                </div>
              </div>

              {/* Card 3: Upcoming Trips */}
              <div className="bg-white border border-gray-100 rounded-md p-6 shadow-sm flex items-center justify-between transition hover:shadow-md">
                <div>
                  <p className="text-xs text-gray-400 font-light uppercase tracking-wider mb-1">
                    Upcoming Trips
                  </p>
                  <h4 className="text-3xl font-serif font-medium text-gray-900">
                    2
                  </h4>
                </div>
                <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-500">
                  <TrendingUp className="w-6 h-6" />
                </div>
              </div>

              {/* Card 4: Total Spent */}
              <div className="bg-white border border-gray-100 rounded-md p-6 shadow-sm flex items-center justify-between transition hover:shadow-md">
                <div>
                  <p className="text-xs text-gray-400 font-light uppercase tracking-wider mb-1">
                    Total Spent
                  </p>
                  <h4 className="text-3xl font-serif font-medium text-gray-900">
                    $15,750
                  </h4>
                </div>
                <div className="w-12 h-12 rounded-full bg-fuchsia-50 flex items-center justify-center text-fuchsia-500">
                  <DollarSign className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;

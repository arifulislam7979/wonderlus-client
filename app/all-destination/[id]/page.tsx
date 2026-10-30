import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Star, Calendar, MapPin, Check } from "lucide-react";
import { Destination } from "@/type";
import EditDestination from "@/components/destination/EditDestination";
import DeleteDestination from "@/components/destination/DeleteDastination";
import BookNowButton from "@/components/BookNowButton";
import { getTokenFromServer } from "@/lib/getTokenServer";

// Destination Type Definition

interface DetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const DetailsPage = async ({ params }: DetailsPageProps) => {
  const { id } = await params;

 const token = await getTokenFromServer()

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/add-destination/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const data: Destination = await res.json();

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-md shadow-sm border border-gray-100 p-6 sm:p-10">
        {/* TOP BAR: Back Link & Edit/Cancel Buttons */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
          <Link
            href="/all-destination"
            className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-900 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Destinations
          </Link>

          <div className="flex items-center gap-2">
            <EditDestination userData={data} />
            <DeleteDestination id={id} />
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="relative w-full h-[350px] sm:h-[450px] rounded-sm overflow-hidden mb-8 bg-gray-100">
          <Image
            src={data.imageUrl}
            alt={data.destinationName || "Destination Image"}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT DETAILS COLUMN */}
          <div className="lg:col-span-2 space-y-6">
            {/* Country */}
            <div className="flex items-center gap-1 text-gray-400 text-xs font-light">
              <MapPin className="w-3.5 h-3.5" />
              <span>{data.country || "Indonesia"}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-serif text-gray-900 font-normal">
              {data.destinationName || "Bali Paradise"}
            </h1>

            {/* Meta Badges */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-current text-gray-900" />
                <span className="font-semibold text-gray-900">4.9</span>
                <span className="text-gray-400">(234 reviews)</span>
              </div>
              <div className="flex items-center gap-1 text-gray-500">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span>
                  {data.duration
                    ? `${data.duration} Days`
                    : "7 Days / 6 Nights"}
                </span>
              </div>
            </div>

            {/* Overview Section */}
            <div className="pt-4 border-t border-gray-100">
              <h3 className="text-lg font-serif text-gray-900 mb-2">
                Overview
              </h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                {data.description ||
                  "Discover the magic of Bali with pristine beaches, ancient temples, and vibrant culture. Experience luxury resorts, tropical landscapes, and unforgettable sunsets."}
              </p>
            </div>

            {/* Highlights Section */}
            <div className="pt-4 border-t border-gray-100">
              <h3 className="text-lg font-serif text-gray-900 mb-3">
                Highlights
              </h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed mb-4">
                Discover the magic of Bali with pristine beaches, ancient
                temples, and vibrant culture. Experience luxury resorts,
                tropical landscapes, and unforgettable sunsets.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00a8cc]" />
                  <span>Luxury beachfront accommodation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00a8cc]" />
                  <span>Visit Uluwatu Temple at sunset</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00a8cc]" />
                  <span>Traditional Balinese spa treatment</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00a8cc]" />
                  <span>Private beach dinner experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00a8cc]" />
                  <span>Sunrise trek to Mount Batur</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT BOOKING CARD COLUMN */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-100 shadow-sm rounded-sm p-6 sticky top-6">
              <p className="text-xs text-gray-400 font-light mb-1">
                Starting from
              </p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-serif font-medium text-[#00a8cc]">
                  ${data.price || "1299"}
                </span>
                <span className="text-gray-400 text-xs font-light">
                  per person
                </span>
              </div>

              {/* Departure Date Input */}

              {/* Book Now Button */}
              <BookNowButton data={data} />

              {/* Features list */}
              <div className="space-y-2.5 text-xs text-gray-500 font-light border-t border-gray-100 pt-4">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#00a8cc]" />
                  <span>Free cancellation up to 7 days</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#00a8cc]" />
                  <span>Travel insurance included</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#00a8cc]" />
                  <span>24/7 customer support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;

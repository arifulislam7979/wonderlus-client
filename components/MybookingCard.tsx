'use client'
import { getTokenFromClient } from "@/lib/getTokenClient";
import { Destination } from "@/type";
import { Calendar, Eye, MapPin, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { MouseEvent } from "react";
import { toast } from "sonner";

interface MybookingProps {
  booking: Destination;
}

const MybookingCard = ({ booking }: MybookingProps) => {
  const router = useRouter();

  const handleView = async (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    let destinationId = booking.destinationId;

    if (!destinationId) {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/add-destination`, {
          cache: "no-store",
        });
        const destinations: Destination[] = await res.json();
        const match = destinations.find(
          (d) =>
            d.destinationName === booking.destinationName &&
            (!booking.country || d.country === booking.country),
        );
        destinationId = match?._id;
      } catch (error) {
        console.error("Resolve destination error:", error);
      }
    }
    router.push(`/all-destination/${destinationId || booking._id}`);
  };

  const handleDelete = async () => {
    const token = await getTokenFromClient()
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/my-bookings/${booking._id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${token}`
        }
      });
      const deleteData = await res.json();
      
      if (deleteData.deletedCount > 0) {
        toast.success('Delete Successfully');
        router.refresh(); 
      } else {
        toast.error('Delete Failed');
      }
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  return (
    <div>
      <div className="bg-white border border-gray-100 rounded-md shadow-sm p-4 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition hover:shadow-md">
        {/* Left Side: Image & Details */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 w-full md:w-auto">
          {/* Image Thumbnail */}
          <div className="relative w-full sm:w-[220px] h-[140px] rounded-sm overflow-hidden bg-gray-100 flex-shrink-0">
            <Image
              src={
                booking.imageUrl ||
                "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
              }
              alt={booking.destinationName || "Booking Image"}
              fill
              className="object-cover"
            />
          </div>
              
          {/* Details Info */}
          <div className="space-y-2">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-600 border border-emerald-100">
              <p>complete</p>
            </div>

            {/* Destination Title */}
            <h3 className="text-xl font-serif text-gray-900 font-normal">
              {booking.destinationName}
            </h3>

            {/* Departure Date */}
            <div className="flex items-center gap-1.5 text-xs text-gray-500 font-light">
              <Calendar className="w-3.5 h-3.5 text-gray-400" />
              <span>Departure: {booking.departureDate}</span>
            </div>

            {/* Booking ID */}
            <div className="flex items-center gap-1.5 text-xs text-gray-400 font-light">
              <MapPin className="w-3.5 h-3.5 text-gray-300" />
              <span>Booking ID: {booking._id}</span>
            </div>
          </div>
        </div>

        {/* Right Side: Price & Action Buttons */}
        <div className="flex md:flex-col items-center md:items-end justify-between w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-gray-100 gap-4">
          {/* Price */}
          <div className="text-left md:text-right">
            <span className="text-2xl sm:text-3xl font-serif font-medium text-gray-900">
              ${booking.price}
            </span>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2">
            <button 
              onClick={handleDelete} 
              className="inline-flex items-center gap-1.5 px-3.5 py-2 border border-red-200 text-red-500 hover:bg-red-50 text-xs font-medium rounded-sm transition cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Cancel
            </button>

            
            <Link
              href={`/all-destination/${booking.destinationId || booking._id}`}
              onClick={handleView}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#00a8cc] hover:bg-[#0091b0] text-white text-xs font-medium rounded-sm transition whitespace-nowrap"
            >
              <Eye className="w-3.5 h-3.5" />
              View now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MybookingCard;
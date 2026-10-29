import Image from "next/image";
import Link from "next/link";
import { Star, Calendar, MapPin, ArrowUpRight } from "lucide-react";
import { Destination } from "@/type";

const AllDestination = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/add-destination`, {
    cache: "no-store",
  });
  const userData: Destination[] = await res.json();

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto w-full">
      {/* Page Title & Subtitle */}
      <h2 className="text-4xl sm:text-5xl font-serif text-gray-900 mb-2 font-normal">
        Explore All Destinations
      </h2>
      <p className="text-gray-500 text-sm mb-2 font-light">
        Find your perfect travel experience from our curated collection
      </p>
      
      {/* Showing destinations count */}
      <p className="text-gray-400 text-xs sm:text-sm mb-10 font-light">
        Showing {userData.length} destinations
      </p>

      {/* GRID CONTAINER */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {userData.map((data) => (
          <div
            key={data._id}
            className="bg-white rounded-sm overflow-hidden flex flex-col justify-between group border border-transparent hover:border-gray-100 transition duration-300"
          >
            <div>
              {/* Image Container */}
              <div className="relative w-full h-[240px] overflow-hidden rounded-sm bg-gray-100 mb-4">
                <Image
                  src={data.imageUrl}
                  alt={data.destinationName || "Destination"}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                {/* Rating Badge */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-sm flex items-center gap-1 shadow-sm">
                  <Star className="w-3.5 h-3.5 fill-current text-gray-900" />
                  <span className="text-xs font-medium text-gray-900">4.5</span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-1 text-gray-400 text-xs font-light mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{data.country || "Nepal"}</span>
              </div>

              {/* Title & Price Row */}
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-xl font-serif text-gray-900 font-normal truncate">
                  {data.destinationName || "Bali Paradise"}
                </h3>
                <div className="text-right flex-shrink-0">
                  <span className="text-lg font-medium text-gray-900">
                    ${data.price || "2700"}
                  </span>
                  <span className="text-gray-400 text-xs font-light">
                    /Person
                  </span>
                </div>
              </div>

              {/* Duration */}
              <div className="flex items-center gap-1.5 text-gray-500 text-xs font-light mb-4">
                <Calendar className="w-3.5 h-3.5 text-gray-400" />
                <span>{data.duration ? `${data.duration} Days` : "7 Days/6 Nights"}</span>
              </div>
            </div>

            {/* Book Now Action */}
            <div className="pt-2 border-t border-gray-100">
              <Link
                href={`/all-destination/${data._id}`}
                className="inline-flex items-center gap-1 text-[#00a8cc] hover:text-[#0086a3] text-xs font-medium uppercase tracking-wider transition-colors"
              >
                BOOK NOW
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllDestination;
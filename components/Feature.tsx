import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { MapPin, Calendar, Star, ArrowRight } from "lucide-react";
import { Destination } from "@/type";



const Feature = async () => {
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/feature-destination`, {
    cache: 'no-store' 
  });
  const data: Destination[] = await res.json();

  return (
    <section className="py-12 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <h2 className="text-3xl sm:text-4xl font-serif text-gray-900 font-normal mb-1">
            Featured Destinations
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm font-light">
            Handpicked travel experiences for the adventure seekers
          </p>
        </div>
        
        <Link 
          href="/all-destination"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-800 hover:text-[#00a8cc] tracking-wider uppercase transition"
        >
          All Destinations <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Shadcn Carousel */}
      <Carousel 
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {data?.map((d) => (
            <CarouselItem key={d._id} className="pl-4 md:basis-1/2 lg:basis-1/2">
              <div className="bg-white border border-gray-100 rounded-md overflow-hidden shadow-sm hover:shadow-md transition group">
                
                {/* Image & Rating Badge */}
                <div className="relative w-full h-[260px] sm:h-[300px] bg-gray-100 overflow-hidden">
                  <Image
                    src={d.imageUrl || "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"}
                    alt={d.destinationName}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                  
                  {/* Rating Badge */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-sm text-xs font-medium flex items-center gap-1 shadow-sm">
                    <Star className="w-3.5 h-3.5 fill-black text-black" />
                    <span>{ "4.5"}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  
                  {/* Location */}
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 font-light">
                    <MapPin className="w-3.5 h-3.5 text-gray-400" />
                    <span>{d.country || "Nepal"}</span>
                  </div>

                  {/* Title & Price Row */}
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-serif text-gray-900 font-normal">
                      {d.destinationName}
                    </h3>
                    <div className="text-right">
                      <span className="text-2xl font-serif font-medium text-gray-900">
                        ${d.price}
                      </span>
                      <span className="text-[10px] text-gray-400 font-light block">
                        /Person
                      </span>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 font-light pt-1">
                    <Calendar className="w-3.5 h-3.5 text-gray-400" />
                    <span>{d.duration || "7 Days/6 Nights"}</span>
                  </div>

                  <hr className="border-gray-100 my-2" />

                  {/* Book Now Button */}
                  <div>
                    <Link
                      href={`/all-destination/${d._id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00a8cc] hover:text-[#0091b0] uppercase tracking-wider transition"
                    >
                      Book Now <span className="text-sm">↗</span>
                    </Link>
                  </div>

                </div>

              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Carousel Navigation Buttons (Bottom Right) */}
        <div className="flex items-center justify-end gap-2 mt-6">
          <CarouselPrevious className="static translate-y-0 h-9 w-9 rounded-sm border-gray-200 hover:bg-gray-50 cursor-pointer" />
          <CarouselNext className="static translate-y-0 h-9 w-9 rounded-sm border-gray-200 hover:bg-gray-50 cursor-pointer" />
        </div>
      </Carousel>

    </section>
  );
};

export default Feature;
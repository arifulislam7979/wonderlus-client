

import Image from "next/image"; 
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Travels = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          {/* HEADER WITH CONTROLS */}
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl sm:text-5xl font-serif text-gray-900 tracking-tight mb-2">
                What Travelers Say
              </h2>
              <p className="text-gray-500 text-sm sm:text-base font-light">
                Real experiences from our happy travelers
              </p>
            </div>

            {/* CAROUSEL NAVIGATION BUTTONS */}
            <div className="flex items-center gap-3 relative">
              <CarouselPrevious className="static translate-y-0 h-11 w-11 rounded-full border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 shadow-none" />
              <CarouselNext className="static translate-y-0 h-11 w-11 rounded-full border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 shadow-none" />
            </div>
          </div>

          {/* CAROUSEL CONTENT */}
          <CarouselContent className="-ml-6">
            
            {/* ITEM 1 */}
            <CarouselItem className="pl-6 md:basis-1/2">
              <div className="border border-gray-100/80 rounded-sm p-8 sm:p-10 flex flex-col-reverse sm:flex-row gap-6 items-stretch justify-between h-full bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.04)]">
                <div className="flex flex-col justify-between flex-1">
                  <p className="text-gray-800 text-lg sm:text-xl font-serif font-normal leading-snug mb-8">
                    &quot;The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable.&quot;
                  </p>
                  <div>
                    <h4 className="text-[#00a8cc] font-medium text-base mb-0.5">
                      — Michael Chen
                    </h4>
                    <p className="text-gray-400 text-xs font-light">
                      Singapore
                    </p>
                  </div>
                </div>
                <div className="relative w-full sm:w-[180px] h-[200px] sm:h-auto  rounded-sm overflow-hidden">
                  <Image
                    src="/images/person1.png"
                    alt="Michael Chen"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </CarouselItem>

            {/* ITEM 2 */}
            <CarouselItem className="pl-6 md:basis-1/2">
              <div className="border border-gray-100/80 rounded-sm p-8 sm:p-10 flex flex-col-reverse sm:flex-row gap-6 items-stretch justify-between h-full bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.04)]">
                <div className="flex flex-col justify-between flex-1">
                  <p className="text-gray-800 text-lg sm:text-xl font-serif font-normal leading-snug mb-8">
                    &quot;Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!&quot;
                  </p>
                  <div>
                    <h4 className="text-[#00a8cc] font-medium text-base mb-0.5">
                      — Sarah Johnson
                    </h4>
                    <p className="text-gray-400 text-xs font-light">
                      New York, USA
                    </p>
                  </div>
                </div>
                <div className="relative w-full sm:w-[180px] h-[200px] sm:h-auto rounded-sm overflow-hidden">
                  <Image
                    src="/images/person1.png"
                    alt="Sarah Johnson"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </CarouselItem>

            {/* ITEM 3 (Extra Card for Smooth Carouseling) */}
            <CarouselItem className="pl-6 md:basis-1/2">
              <div className="border border-gray-100/80 rounded-sm p-8 sm:p-10 flex flex-col-reverse sm:flex-row gap-6 items-stretch justify-between h-full bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.04)]">
                <div className="flex flex-col justify-between flex-1">
                  <p className="text-gray-800 text-lg sm:text-xl font-serif font-normal leading-snug mb-8">
                    &quot;An unforgettable journey! Everything was seamlessly organized from local transportation to hotel stays.&quot;
                  </p>
                  <div>
                    <h4 className="text-[#00a8cc] font-medium text-base mb-0.5">
                      — David Lee
                    </h4>
                    <p className="text-gray-400 text-xs font-light">
                      London, UK
                    </p>
                  </div>
                </div>
                <div className="relative w-full sm:w-[180px] h-[200px] sm:h-auto rounded-sm overflow-hidden">
                  <Image
                    src="/images/person2.png"
                    alt="David Lee"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </CarouselItem>

          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Travels;
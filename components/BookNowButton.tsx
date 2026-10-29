"use client";

import { useSession } from "@/lib/auth-client";
import { Destination } from "@/type";
import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

interface BookNowButtonProps {
  data: Destination;
}

const BookNowButton = ({ data }: BookNowButtonProps) => {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  
  const { _id, ...destinationData } = data;
  const user = session?.user;

  const handleBooking = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const departureDate = (e.currentTarget.departureDate.value)

    const alldata = {
      username: user?.name,
      email: user?.email,
      destinationId: _id,
      ...destinationData,
      departureDate: departureDate,
      bookingDate: new Date().toLocaleDateString(),
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(alldata),
      });
      const bookingRes = await res.json();

      if (bookingRes.insertedId) {
        toast.success('Booking successful!');
      } else if (bookingRes.message) {
        toast.error(bookingRes.message); 
      } else {
        toast.error('Booking Failed');
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error('Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleBooking}>
        <div className="mb-4">
          <input
            type="date"
            name="departureDate"
            defaultValue={data.departureDate}
            className="w-full bg-gray-50 border border-gray-200 text-gray-700 text-xs rounded-sm p-3 outline-none"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#00a8cc] hover:bg-[#0091b0] disabled:bg-[#00a8cc]/70 text-white text-xs font-medium uppercase tracking-wider py-3.5 cursor-pointer rounded-sm transition flex items-center justify-center gap-2 mb-6"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              Book Now
              <span className="text-sm">→</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default BookNowButton;
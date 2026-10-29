import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Destination } from "@/type";
import MybookingCard from "@/components/MybookingCard";
import { getTokenFromServer } from "@/lib/getTokenServer";

const MyBookings = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  if (!user?.email) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-xl font-medium text-gray-700">Please login to view your bookings.</h1>
      </div>
    );
  }
  const token = await getTokenFromServer()
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/my-bookings/${user.email}`,{
    headers: {
      authorization: `Bearer ${token}`
    }
  } );
  const bookings: Destination[] = await res.json();

  return (
    <section className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-serif text-gray-900 font-normal mb-1">
            My Bookings
          </h1>
          <p className="text-gray-500 text-xs sm:text-sm font-light">
            Manage and view your upcoming travel plans
          </p>
        </div>

        {bookings.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[50vh] bg-white rounded-md border border-gray-100 shadow-sm">
            <h2 className="text-xl font-medium text-gray-700 mb-2">
              No Bookings Yet
            </h2>
            <p className="text-gray-400 text-xs font-light">
              You haven&apos;t booked any destinations yet.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {bookings.map((booking) => 
              <MybookingCard key={booking._id} booking={booking}></MybookingCard>
            )}
          </div>
        )}

      </div>
    </section>
  );
};

export default MyBookings;
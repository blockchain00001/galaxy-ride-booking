import Layout from "@/components/Layout";
import BookingInterface from "@/components/BookingInterface";

const Booking = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 min-h-screen">
        <div className="text-center mb-8 animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold bg-cosmic bg-clip-text text-transparent mb-4">
            Book Your Galaxy Ride
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Travel through the cosmos with our premium ride booking service. 
            Experience comfort and reliability that's out of this world.
          </p>
        </div>
        <BookingInterface />
      </div>
    </Layout>
  );
};

export default Booking;
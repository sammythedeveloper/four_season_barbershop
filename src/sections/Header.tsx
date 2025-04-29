import Scissors from "@/assets/images/scissors.svg";
export const Header = () => {
  return (
    <div className="sticky top-0 z-40 backdrop-blur-lg">
      <div className="container">
        <div className="flex justify-between items-center h-24 md:h-28">
          <div className=" flex  font-heading ml-12 text-4xl font-bold">
            <Scissors className=" w-10 h-10 text-blue-500 " />
            <h1 className=" ml-6 " >Four Season </h1>
          </div>
          <div className="flex items-center gap-4">
            {/* Links visible on large screens */}
            <div className="flex gap-4 items-center">
              <div className="hidden md:inline-flex">Service & Pricing </div>
              <div className="hidden md:inline-flex">Location</div>
              <div className="hidden md:inline-flex">Studio Membership</div>
              <div className="hidden md:inline-flex">Contact Us</div>
              <div className="hidden md:inline-flex">Book Now</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

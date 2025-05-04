import Scissors from "@/assets/images/scissors.svg";
export const Header = () => {
  return (
    <div className="sticky top-0 z-40 backdrop-blur-lg">
      <div className="container mb-7  ">
        <div className="flex justify-between items-center h-24 md:h-28">
          <div className=" flex  font-heading  text-xl font-bold">
            <Scissors className=" w-10 h-10 text-blue-500 " />
            <h2 className=" ml-6 ">Four Season </h2>
          </div>
          <div className="flex items-center gap-2 text-sm whitespace-nowrap">
            <div className="flex gap-2 items-center">
              <div className="hidden md:inline-flex">Service & Pricing</div>
              <div className="hidden md:inline-flex">Location</div>
              <div className="hidden md:inline-flex">Studio Membership</div>
              <div className="hidden md:inline-flex">Contact Us</div>
              <div className="hidden md:inline-flex bg-white text-black rounded-full py-1.5 px-4 hover:bg-black hover:text-white">
                Book Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

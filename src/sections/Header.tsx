import Scissors from "@/assets/images/scissors.svg";
import MenuIcon from "@mui/icons-material/Menu";
export const Header = () => {
  return (
    <div className="sticky top-0 z-40 backdrop-blur-lg">
      <div className="container mb-7  ">
        <div className="flex justify-between items-center h-24 md:h-28">
          <div className=" flex items-center text-base font-bold  ">
            <p><Scissors className=" w-10 h-10  " /></p>
            <p className=" ml-4 ">Four Season </p>
          </div>
          <div className="hidden md:flex items-center gap-4 text-sm whitespace-nowrap">
            <div className="flex gap-4 items-center">
              <div>Service & Pricing</div>
              <div>Location</div>
              <div>Studio Membership</div>
              <div>Contact Us</div>
              <div className="bg-white text-black rounded-full py-1.5 px-4 hover:bg-black hover:text-white">
                Book Now
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <MenuIcon className="w-8 h-8 text-black cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

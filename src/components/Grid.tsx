import one from "@/assets/images/3.jpg";
import two from "@/assets/images/2.jpg";
import three from "@/assets/images/4.jpg";
import four from "@/assets/images/four.jpg";
import Image from "next/image";

export const Grid = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-4 w-[600px] h-[400px] flex-none">
      <div className="relative col-span-1 row-span-1">
        <Image src={one} alt="One" fill className="object-cover rounded-lg" />
      </div>
      <div className="relative col-span-2 row-span-2">
        <Image src={two} alt="Two" fill className="object-cover rounded-lg" />
      </div>
      <div className="relative col-span-1 row-span-1">
        <Image
          src={three}
          alt="Three"
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="relative col-span-2 row-span-1">
        <Image src={four} alt="Four" fill className="object-cover rounded-lg" />
      </div>
    </div>
  );
};

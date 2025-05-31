import one from "../../public/assets/images/3.jpg";
import two from "../../public/assets/images/2.jpg";
import three from "../../public/assets/images/4.jpg";
import four from "../../public/assets/images/four.jpg";
import five from "../../public/assets/images/five.jpg";
import six from "../../public/assets/images/6.jpg";
import seven from "../../public/assets/images/7.jpg";
import eight from "../../public/assets/images/8.jpg";
import nine from "../../public/assets/images/12.jpg";
import ten from "../../public/assets/images/11.jpg";
import eleven from "../../public/assets/images/10.jpg";
import Image from "next/image";
import { Fragment } from "react";
import { Card } from "@/components/Card";

const cuts = [
  { avatar: "/assets/images/3.jpg" },
  { avatar: "/assets/images/2.jpg" },
  { avatar: "/assets/images/4.jpg" },
  { avatar: "/assets/images/four.jpg" },
  { avatar: "/assets/images/five.jpg" },
  { avatar: "/assets/images/6.jpg" },
  { avatar: "/assets/images/7.jpg" },
  { avatar: "/assets/images/8.jpg" },
  { avatar: "/assets/images/12.jpg" },
  { avatar: "/assets/images/11.jpg" },
  { avatar: "/assets/images/10.jpg" },
];


export const Collection = () => {
  return (
    <div className="py-16 lg:py-24 ">
      <div className="container">
        <div className=" mt-5 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4  ">
          <div className=" flex gap-8 pr-8 flex-none animate-move-left [animation-duration:80s] hover:[animation-play-state:paused] ">
            {[...new Array(2)].fill(0).map((_, outerIndex) => (
              <Fragment key={outerIndex}>
                {cuts.map((testimonial, innerIndex) => (
                  <Card
                    key={`card-${outerIndex}-${innerIndex}`} // ✅ unique key using both indexes
                    className="max-w-xs md:max-w-md p-6  md:p-8 hover:-rotate-3 transition duration-400"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-648 inline-flex items-center justify-center ">
                        <Image
                          src={testimonial.avatar}
                          alt="Haircut style preview"
                          width={300}     // required for static export
                          height={400}  
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold"></div>
                        <div className=" text-sm "></div>
                      </div>
                    </div>
                    <p className=" mt-4 md:mt-6 text-sm md:text-base"></p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

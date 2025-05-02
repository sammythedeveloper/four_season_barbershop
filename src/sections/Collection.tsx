import one from "@/assets/images/3.jpg";
import two from "@/assets/images/2.jpg";
import three from "@/assets/images/4.jpg";
import four from "@/assets/images/four.jpg";
import five from "@/assets/images/five.jpg";
import six from "@/assets/images/6.jpg";
import seven from "@/assets/images/7.jpg";
import eight from "@/assets/images/8.jpg";
import nine from "@/assets/images/12.jpg";
import ten from "@/assets/images/10.jpg";
import Image from "next/image";
import { Fragment } from "react";
import { Card } from "@/components/Card";


const cuts = [
  
  {
    avatar: one,
  },
  {
    avatar: two,
  },
  {
    avatar: three,
  },
  {
    avatar:four ,
  },
  {
    avatar: five,
  },
  {
    avatar:six ,
  },
  {
    avatar:seven ,
  },
  {
    avatar:eight ,
  },
  {
    avatar:nine,
  },
  {
    avatar:ten ,
  },


];

export const Collection = () => {
    return (
      <div className="py-16 lg:py-24 ">
        <div className="container">
          <div className=" mt-16 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4  ">
          <div className=" flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused] ">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {cuts.map((testimonial) => (
                  <Card
                    key={""}
                    className="max-w-xs md:max-w-md p-6  md:p-8 hover:-rotate-3 transition duration-300 "
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-648 inline-flex items-center justify-center ">
                        <Image
                          src={testimonial.avatar}
                          alt={""}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold"></div>
                        <div className=" text-sm text-white/40 ">
                        </div>
                      </div>
                    </div>
                    <p className=" mt-4 md:mt-6 text-sm md:text-base">
                    </p>
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

"use client";
import Image from "next/image";
import { Fragment, useRef } from "react";
import { Card } from "@/components/Card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cuts = [
  { avatar: "/assets/images/2.jpg" },
  { avatar: "/assets/images/4.jpg" },
  { avatar: "/assets/images/9.jpg" },
  { avatar: "/assets/images/five.jpg" },
  { avatar: "/assets/images/6.jpg" },
  { avatar: "/assets/images/7.jpg" },
  { avatar: "/assets/images/8.jpg" },
  { avatar: "/assets/images/12.jpg" },
  { avatar: "/assets/images/10.jpg" },
  { avatar: "/assets/images/11.jpg" },
  { avatar: "/assets/images/13.jpg" },
  { avatar: "/assets/images/14.jpg" },
];

export const Collection = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = direction === "left" ? -400 : 400;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="relative py-16 lg:py-24 group">
      <div className="container">
        <div
          ref={scrollRef}
          className="mt-5 lg:mt-20 flex overflow-x-scroll scrollbar-hide scroll-smooth [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4"
        >
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:80s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, outerIndex) => (
              <Fragment key={outerIndex}>
                {cuts.map((cut, innerIndex) => (
                  <Card
                    key={`card-${outerIndex}-${innerIndex}`}
                    className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-400"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="inline-flex items-center justify-center">
                        <Image
                          src={cut.avatar}
                          alt="Haircut style preview"
                          width={300}
                          height={400}
                          className="rounded-2xl object-cover"
                        />
                      </div>
                    </div>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>

        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black backdrop-blur-lg p-3 rounded-full shadow-lg text-white opacity-0 group-hover:opacity-100 transition hover:bg-gray-400"
          aria-label="Scroll left"
        >
          <ChevronLeft className="sm:w-6 sm:h-6 w-24 h-24 " />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black backdrop-blur-lg p-3 rounded-full shadow-lg text-white opacity-0 group-hover:opacity-100 transition hover:bg-gray-400 "
          aria-label="Scroll right"
        >
          <ChevronRight className="sm:w-6 sm:h-6 w-24 h-24 " />
        </button>
      </div>
    </div>
  );
};

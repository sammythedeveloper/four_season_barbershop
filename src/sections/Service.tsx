"use client";
import Link from "next/link";
import {
  Wifi,
  Accessibility,
  Pets,
  CreditCard,
  Loyalty,
  ChildCare,
} from "@mui/icons-material";

import Hair from "@/assets/icons/haircut.svg";
import Braids from "@/assets/icons/braids.svg";
import Press from "@/assets/icons/press.svg";
import Cosmetics from "@/assets/icons/cosmetics.svg";
import Shave from "@/assets/icons/shave.svg";
import VIP from "@/assets/icons/vip.svg";

const services = [
  {
    service: "HAIRCUT",
    image: Hair,
    description:
      "Refined haircuts and styling, tailored to perfection for a look that leaves a lasting impression.",
    price: "$29 | 40 Min",
    path: "/haircut",
  },
  {
    service: "SHAVE",
    image: Shave,
    description:
      "Treat yourself to a premium shave, where expert precision meets effortless smoothness.",
    price: "$50 | 45 - 50 Mins ",
    path: "/shave",
  },
  {
    service: "SILK PRESS",
    image: Press,
    description:
      "A smooth, sleek, and bouncy straight style with a hydrating steam treatment for extra moisture and shine.",
    price: "$80 | 2hrs",
    path: "/silkpress",
  },
  {
    service: "COSMETICS",
    image: Cosmetics,
    description:
      "High-end cosmetics artistry designed to enhance and define your natural beauty with sophistication.",
    price: "Hours & Prices Vary",
    path: "/cosmetics",
  },
  {
    service: "BRAIDS",
    image: Braids,
    description:
      "Elite grooming services tailored to refine and elevate your personal style.",
    price: "Hours & Prices Vary",
    path: "/braid",
  },
  {
    service: "VIP",
    image: VIP,
    description:
      "A premium grooming experience with expert detailing, hot towel treatment, and personalized finishing touches.",
    price: "Hours & Prices Vary",
    path: "/vip",
  },
];

export const Service = () => {
  return (
    <div id="services" className=" py-16 lg:py-24  ">
      <div className="container px-4">
        <div className="mb-10 items-center text-center text-2xl md:text-3xl font-extrabold text-black uppercase">
          <p className="py-10">Our Services</p>
          <hr />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full max-w-[400px] sm:max-w-full shadow-md rounded-lg text-center p-6 bg-white flex flex-col items-center"
            >
              <service.image className="w-16 h-16 mb-4" />
              <h2 className="text-lg font-semibold mb-2">{service.service}</h2>
              <hr className="w-16 border-t-2 border-gray-300 mb-4" />
              <p className="text-sm text-gray-700 mb-4">
                {service.description}
              </p>
              <p className="text-sm font-medium text-black mb-4">
                {service.price}
              </p>
              {service.path && (
                <Link
                  href={service.path}
                  className="mt-auto inline-block bg-black  hover:bg-purple-700 text-white py-2 px-4 rounded-md text-sm transition border hover:border-black "
                >
                  BOOK NOW
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="text-center my-8 py-8 text-black bg-gray-200 h-auto ">
        <p className="text-xl mb-6  ">Amenities</p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 justify-center">
          {[
            { Icon: Wifi, label: "Wi-Fi", color: "text-blue-500" },
            {
              Icon: Accessibility,
              label: "Accessible for people with disabilities",
              color: "text-green-500",
            },
            { Icon: Pets, label: "Pets Allowed", color: "text-yellow-500" },
            {
              Icon: CreditCard,
              label: "Credit cards accepted",
              color: "text-purple-500",
            },
            { Icon: Loyalty, label: "Loyalty Program", color: "text-pink-500" },
            {
              Icon: ChildCare,
              label: "Child-friendly",
              color: "text-teal-500",
            },
          ].map(({ Icon, label, color }, idx) => (
            <div
              key={idx}
              className="flex items-center justify-start space-x-3 max-w-[320px] mx-auto"
            >
              <Icon className={`h-6 w-6 ${color}`} />
              <p className="text-md font-thin text-left">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        id="membership"
        className="m-10 items-center text-center text-2xl md:text-3xl font-extrabold text-black uppercase"
      >
        <p className="p-10">Stay Connected with Us</p>
        <p className=" text-md font-normal">
          Join the Community Explore Membership and check out latest updates to
          stay connected and Grow.
        </p>
      </div>
      <div className=" container p-5 text-lg max-w-[2000px] grid grid-cols-1 md:grid-cols-2 gap-16 text-center items-center  ">
        <div className="bg-gray-400 h-[300px] text-left p-12 rounded-br-3xl rounded-tr-3xl rounded-tl-3xl  ">
          <p className="text-2xl font-semibold mb-2">SHOP MEMBERSHIPS</p>
          <p className="">
            Help people become familiar with the business and its offerings,
            creating a sense of connection and trust.
          </p>
          <button className="mt-8 inline-block  hover:bg-purple-700 text-black py-2 px-4 rounded-br-3xl rounded-tr-3xl rounded-tl-3xl text-sm transition border hover:text-white  ">
            Coming Soon
          </button>
        </div>
        <div className=" bg-black h-[300px] text-left  text-white items-center p-12 rounded-br-3xl rounded-tr-3xl rounded-tl-3xl    ">
          <p className="text-2xl font-semibold mb-2">CHECK OUT OUR NEWSLETTE</p>
          <p>
            Subscribe to our newsletter for exclusive updates, tips, and offers
            delivered straight to your inbox!
          </p>
          <button className="mt-4 inline-block hover:bg-purple-700 text-white  py-2 px-4 rounded-br-3xl rounded-tr-3xl rounded-tl-3xl text-sm transition border hover:border-black ">
            Coming Soon
          </button>
        </div>
      </div>
    </div>
  );
};

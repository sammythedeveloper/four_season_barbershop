// import Hair from "@/assets/icons/haircut.svg";
// import Braids from "@/assets/icons/braids.svg";
// import Press from "@/assets/icons/press.svg";
// import Cosmetics from "@/assets/icons/cosmetics.svg";
// import Shave from "@/assets/icons/shave.svg";
// import VIP from "@/assets/icons/vip.svg";

// const services = [
//   {
//     service: "HAIRCUT",
//     image: Hair,
//     description:
//       "Refined haircuts and styling, tailored to perfection for a look that leaves a lasting impression.",
//     price: "$29 | 40 Min",
//     link: "BOOK NOW",
//   },
//   {
//     service: "SHAVE",
//     image: Shave,
//     description:
//       "Treat yourself to a premium shave, where expert precision meets effortless smoothness.",
//     price: "$25",
//     link: "BOOK NOW",
//   },
//   {
//     service: "SILK PRESS",
//     image: Press,
//     description:
//       "A smooth, sleek, and bouncy straight style with the addition of a hydrating steam treatment for extra moisture and shine.",
//     price: "$80",
//     link: "BOOK NOW",
//   },
//   {
//     service: "COSMETICS",
//     image: Cosmetics,
//     description:
//       "High-end cosmetics artistry designed to enhance and define your natural beauty with sophistication.",
//     price: "Hours & Prices Vary",
//     link: "BOOK NOW",
//   },
//   {
//     service: "BRAIDS",
//     image: Braids,
//     description:
//       "Elite grooming services tailored to refine and elevate your personal style.",
//     price: "Hours & Prices Vary",
//     link: "BOOK NOW",
//   },
//   {
//     service: "VIP",
//     image: VIP,
//     description:
//       "A premium grooming experience with expert detailing, hot towel treatment, and personalized finishing touches.",
//     price: "Hours & Prices Vary",
//     link: "BOOK NOW",
//   },
// ];

// export const Service = () => {
//   return (
//     <div className="py-16 lg:py-24">
//       <div className="container px-4">
//         <div className=" mb-10 items-center text-center text-2xl md:text-3xl font-extrabold text-black uppercase ">
//           <p className=" py-10 " >Our Services</p>
//           <hr />
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="w-full max-w-[400px] sm:max-w-full shadow-md rounded-lg text-center p-6 bg-white flex flex-col items-center"
//             >
//               <service.image className="w-16 h-16 mb-4" />
//               <h2 className="text-lg font-semibold mb-2">{service.service}</h2>
//               <hr className="w-16 border-t-2 border-gray-300 mb-4" />
//               <p className="text-sm text-gray-700 mb-4">
//                 {service.description}
//               </p>
//               <p className="text-sm font-medium text-black mb-4">
//                 {service.price}
//               </p>
//               {service.link && (
//                 <a
//                   href="#"
//                   className="mt-auto inline-block bg-black text-white py-2 px-4 rounded-md text-sm hover:bg-gray-800 transition"
//                 >
//                   {service.link}
//                 </a>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
'use client';

import Link from "next/link";

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
    price: "$25",
    path: "/shave",
  },
  {
    service: "SILK PRESS",
    image: Press,
    description:
      "A smooth, sleek, and bouncy straight style with a hydrating steam treatment for extra moisture and shine.",
    price: "$80",
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
    path: "/braids",
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
    <div className="py-16 lg:py-24">
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
              <p className="text-sm text-gray-700 mb-4">{service.description}</p>
              <p className="text-sm font-medium text-black mb-4">{service.price}</p>
              {service.path && (
                <Link
                  href={service.path}
                  className="mt-auto inline-block bg-black text-white py-2 px-4 rounded-md text-sm hover:bg-gray-800 transition"
                >
                  BOOK NOW
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

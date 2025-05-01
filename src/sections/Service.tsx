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
    link: "BOOK NOW"
  },
  {
    service: "SHAVE",
    image: Shave,
    description:
      "Treat yourself to a premium shave, where expert precision meets effortless smoothness.",
    price: "$25",
    link: "BOOK NOW"
  },
  {
    service: "SILK PRESS",
    image: Press,
    description:
      "A smooth, sleek, and bouncy straight style with the addition of a hydrating steam treatment for extra moisture and shine.",
    price: "$80",
    link: "BOOK NOW"
  },
  {
    service: "COSMETICS",
    image: Cosmetics,
    description:
      "High-end cosmetics artistry designed to enhance and define your natural beauty with sophistication.",
    price: "Hours & Prices Vary",
    link: "BOOK NOW"
  },
  {
    service: "BRAIDS",
    image: Braids,
    description:
      "Elite grooming services tailored to refine and elevate your personal style.",
    price: "Hours & Prices Vary",
    link: "BOOK NOW"
  },
  {
    service: "VIP",
    image: VIP,
    description:
      "A premium grooming experience with expert detailing, hot towel treatment, and personalized finishing touches.",
    price: "Hours & Prices Vary",
    link: "BOOK NOW"
  },
];

export const Service = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center py-4">
          {services.map((service, index) => (
            <div key={index} className="w-60 h-100 shadow-md text-center p-4">
              <service.image className="mx-auto w-16 h-16" /> {/* Render SVG component directly */}
              <h3 className="mt-4 text-lg font-semibold">{service.service}</h3>
              <hr className="mt-2" />
              <p className="mt-4">{service.description}</p>
              <p className="mt-2 text-sm text-black ">{service.price}</p>
              {service.link && (
                <a
                  href="#"
                  className="mt-4 inline-block bg-black text-white py-2 px-4 rounded-md text-sm"
                >
                  {service.link}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

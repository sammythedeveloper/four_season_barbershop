import { ServiceBooking } from "@/components/ServiceBooking";

export default function CosmeticsPage() {
  return (
    <ServiceBooking
      title="Cosmetics"
      description="Select your service, pick a date and time, and let us take care of the rest!"
      services={[
        { name: "Wash", time: "15 mins", price: "$20" },
        { name: "Color", time: "1 hr", price: "$45" },
        { name: "Haircut", time: "45 mins", price: "$58" },
        { name: "Beard Line-Up", time: "30 mins", price: "$25" },
        { name: "Hair Line-Up", time: "30 mins", price: "$25" },
        { name: "Combo Package", time: "1 hr 15 mins", price: "$70" },
      ]}
      gallery={[
        { img: "/assets/images/cosmetic1.jpg", title: "Makeup Look 1" },
        { img: "/assets/images/cosmetic2.jpg", title: "Makeup Look 2" },
        { img: "/assets/images/cosmetic3.jpg", title: "Makeup Look 3" },
        { img: "/assets/images/cosmetic4.jpg", title: "Makeup Look 4" },
        { img: "/assets/images/cosmetic5.jpg", title: "Makeup Look 5" },
        { img: "/assets/images/cosmetic6.jpg", title: "Makeup Look 6" },
      ]}
    />
  );
}

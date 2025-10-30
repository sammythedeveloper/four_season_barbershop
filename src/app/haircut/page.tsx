import { ServiceBooking } from "@/components/ServiceBooking";
export default function HairCutPage() {
  return (
    <ServiceBooking
      title="Hair Cut"
      description="Choose your haircut style, pick a date and time, and leave the rest to us!"
      services={[
        { name: "Buzz Cut", time: "30 mins", price: "$25" },
        { name: "Fade Cut", time: "45 mins", price: "$35" },
        { name: "Classic Haircut", time: "1 hr", price: "$50" },
        { name: "Hair Line-Up", time: "30 mins", price: "$25" },
        { name: "Beard Trim", time: "45 mins", price: "$25" },
        { name: "Combo Package", time: "1 hr 15 mins", price: "$70" },
      ]}
      gallery={[
        { img: "/assets/images/haircut1.jpg", title: "Buzz Cut" },
        { img: "/assets/images/haircut2.jpg", title: "Fade Cut" },
        { img: "/assets/images/haircut3.jpg", title: "Classic Haircut" },
        { img: "/assets/images/haircut4.jpg", title: "Line-Up" },
        { img: "/assets/images/haircut5.jpg", title: "Beard Trim" },
        { img: "/assets/images/haircut6.jpg", title: "Combo Style" },
      ]}
    />
  );
}

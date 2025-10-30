import { ServiceBooking } from "@/components/ServiceBooking";

export default function BraidsPage() {
  return (
    <ServiceBooking
      title="Braids"
      description="Select your braiding style, pick a date and time, and get the perfect look!"
      services={[
        { name: "Retwist Locs (Top Only)", time: "45 mins", price: "$100+" },
        { name: "Retwist Locs (Full Head)", time: "1 hr", price: "$150" },
        { name: "Natural Twist", time: "30 mins", price: "$115" },
        { name: "Beard Line-Up", time: "45 mins", price: "$25" },
        { name: "Cornrows", time: "1 hr 15 mins", price: "$120" },
        { name: "Box Braids", time: "2 hr", price: "$180" },
      ]}
      gallery={[
        { img: "/assets/images/braid1.jpg", title: "Box Braids" },
        { img: "/assets/images/braid2.jpg", title: "Cornrows" },
        { img: "/assets/images/braid3.jpg", title: "Feed-In Braids" },
        { img: "/assets/images/braid4.jpg", title: "Lemonade Braids" },
        { img: "/assets/images/braid5.jpg", title: "Goddess Braids" },
        { img: "/assets/images/braid6.jpg", title: "Knotless Braids" },
      ]}
    />
  );
}

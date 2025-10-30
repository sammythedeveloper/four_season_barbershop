import { ServiceBooking } from "@/components/ServiceBooking";

export default function ShavePage() {
  return (
    <ServiceBooking
      title="Shave"
      description="Experience a premium shave with precision and care!"
      services={[
        { name: "Classic Shave", time: "30 mins", price: "$40" },
        { name: "Hot Towel Shave", time: "45 mins", price: "$50" },
        { name: "Beard Shaping", time: "30 mins", price: "$25" },
        { name: "Line-Up Shave", time: "30 mins", price: "$25" },
        { name: "Combo Shave + Beard Trim", time: "1 hr", price: "$65" },
        { name: "Premium Grooming Package", time: "1 hr 15 mins", price: "$80" },
      ]}
      gallery={[
        { img: "/assets/images/shave1.jpg", title: "Classic Shave" },
        { img: "/assets/images/shave2.jpg", title: "Hot Towel" },
        { img: "/assets/images/shave3.jpg", title: "Beard Shaping" },
        { img: "/assets/images/shave4.jpg", title: "Line-Up" },
        { img: "/assets/images/shave5.jpg", title: "Combo Grooming" },
        { img: "/assets/images/shave6.jpg", title: "Premium Package" },
      ]}
    />
  );
}

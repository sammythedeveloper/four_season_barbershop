import { ServiceBooking } from "@/components/ServiceBooking";

export default function VIPPage() {
  return (
    <ServiceBooking
      title="VIP"
      description="Enjoy a luxurious grooming experience with personalized treatments!"
      services={[
        { name: "VIP Haircut", time: "1 hr", price: "$80" },
        { name: "VIP Shave", time: "45 mins", price: "$70" },
        { name: "VIP Beard Trim", time: "45 mins", price: "$60" },
        { name: "VIP Combo Package", time: "1 hr 30 mins", price: "$150" },
        { name: "VIP Silk Press", time: "2 hr", price: "$180" },
        { name: "Ultimate VIP Package", time: "2 hr 30 mins", price: "$220" },
      ]}
      gallery={[
        { img: "/assets/images/vip1.jpg", title: "VIP Haircut" },
        { img: "/assets/images/vip2.jpg", title: "VIP Shave" },
        { img: "/assets/images/vip3.jpg", title: "VIP Beard" },
        { img: "/assets/images/vip4.jpg", title: "Combo Package" },
        { img: "/assets/images/vip5.jpg", title: "Silk Press" },
        { img: "/assets/images/vip6.jpg", title: "Ultimate Package" },
      ]}
    />
  );
}

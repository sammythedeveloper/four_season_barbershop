import { ServiceBooking } from "@/components/ServiceBooking";

export default function SilkPressPage() {
  return (
    <ServiceBooking
      title="Silk Press"
      description="Get smooth, sleek, and shiny hair with our Silk Press treatments!"
      services={[
        { name: "Short Hair Silk Press", time: "1 hr", price: "$80" },
        { name: "Medium Hair Silk Press", time: "1 hr 30 mins", price: "$100" },
        { name: "Long Hair Silk Press", time: "2 hr", price: "$120" },
        { name: "Silk Press + Deep Conditioning", time: "2 hr", price: "$130" },
        { name: "Silk Press + Blowout", time: "1 hr 45 mins", price: "$110" },
        { name: "Premium Silk Press Package", time: "2 hr 30 mins", price: "$150" },
      ]}
      gallery={[
        { img: "/assets/images/silk1.jpg", title: "Short Hair" },
        { img: "/assets/images/silk2.jpg", title: "Medium Hair" },
        { img: "/assets/images/silk3.jpg", title: "Long Hair" },
        { img: "/assets/images/silk4.jpg", title: "Deep Conditioning" },
        { img: "/assets/images/silk5.jpg", title: "Blowout" },
        { img: "/assets/images/silk6.jpg", title: "Premium Package" },
      ]}
    />
  );
}

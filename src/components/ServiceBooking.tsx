"use client";
import React, { useState, useEffect, useRef } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { useRouter } from "next/navigation";
// @ts-ignore
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";
import Image from "next/image";
import { send } from "@emailjs/browser";

interface Service {
  name: string;
  time: string;
  price: string;
}

interface GalleryItem {
  img: string;
  title: string;
}

interface ServiceBookingProps {
  title: string;
  description: string;
  services: Service[];
  gallery: GalleryItem[];
}

export const ServiceBooking: React.FC<ServiceBookingProps> = ({
  title,
  description,
  services,
  gallery,
}) => {
  const router = useRouter();
  const [selectedService, setSelectedService] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<any>(null);
  const [timeOptions, setTimeOptions] = useState([
    { value: "09:00", label: "09:00 AM" },
    { value: "10:00", label: "10:00 AM" },
    { value: "11:00", label: "11:00 AM" },
    { value: "12:00", label: "12:00 PM" },
    { value: "13:00", label: "01:00 PM" },
    { value: "14:00", label: "02:00 PM" },
    { value: "15:00", label: "03:00 PM" },
    { value: "16:00", label: "04:00 PM" },
    { value: "17:00", label: "05:00 PM" },
  ]);

  const serviceOptions = services.map((s) => ({
    value: s.name,
    label: `${s.name} – ${s.time} – ${s.price}`,
  }));

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      borderRadius: "1rem",
      minHeight: "3.5rem",
      borderColor: "#d1d5db",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      "&:hover": { borderColor: "#10b981" },
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#10b981" : "white",
      color: state.isFocused ? "white" : "black",
      padding: 15,
      cursor: "pointer",
    }),
    placeholder: (provided: any) => ({ ...provided, color: "#6b7280" }),
    singleValue: (provided: any) => ({ ...provided, color: "#111827" }),
    menu: (provided: any) => ({
      ...provided,
      borderRadius: "1rem",
      overflow: "hidden",
      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    }),
  };

  // ✅ Refs for form inputs
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedService || !selectedDate || !selectedTime) {
      alert("Please select service, date and time!");
      return;
    }

    if (!nameRef.current || !emailRef.current) {
      alert("Form inputs not loaded properly. Please reload the page.");
      return;
    }

    const templateParams = {
      email: emailRef.current.value, // must match {{email}} in EmailJS template
      name: nameRef.current.value,
      service: selectedService.value,
      date: selectedDate.toISOString().split("T")[0],
      time: selectedTime.value,
    };

    console.log(
      "ENV:",
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    );

    try {
      await send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      router.push("/thank-you"); // ✅ navigate after successful booking
      setSelectedService(null);
      setSelectedDate(null);
      setSelectedTime(null);
      e.currentTarget.reset();
    } catch (err) {
      console.error("Email error", err);
      alert("Failed to send email. Check your keys and template.");
    }
  };

  useEffect(() => {
    if (!selectedDate) return;
    const now = new Date();
    const todayStr = now.toISOString().split("T")[0];
    const selectedStr = selectedDate.toISOString().split("T")[0];

    let filteredTimes = [
      { value: "09:00", label: "09:00 AM" },
      { value: "10:00", label: "10:00 AM" },
      { value: "11:00", label: "11:00 AM" },
      { value: "12:00", label: "12:00 PM" },
      { value: "13:00", label: "01:00 PM" },
      { value: "14:00", label: "02:00 PM" },
      { value: "15:00", label: "03:00 PM" },
      { value: "16:00", label: "04:00 PM" },
      { value: "17:00", label: "05:00 PM" },
    ];

    if (selectedStr === todayStr) {
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();
      filteredTimes = filteredTimes.filter((t) => {
        const [hour, minute] = t.value.split(":").map(Number);
        return (
          hour > currentHour || (hour === currentHour && minute > currentMinute)
        );
      });
    }

    setTimeOptions(filteredTimes);
    setSelectedTime(null);
  }, [selectedDate]);

  return (
    <>
      {/* Header */}
      <div className="text-center py-20 bg-gradient-to-r from-black to-purple-700 text-white text-xl font-semibold">
        <h2 className="text-5xl font-extrabold mb-4">{title}</h2>
        <p className="text-lg font-extralight">{description}</p>
      </div>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-4xl font-extralight text-black text-center mb-12">
          Choose Your Inspiration
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {gallery.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:scale-105 transition transform bg-white/30 backdrop-blur-lg"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={500}
                height={500}
                className="object-cover w-full h-80 rounded-3xl group-hover:opacity-70 transition"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <span className="bg-black/60 text-white px-4 py-2 rounded-full text-lg font-extralight">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Form */}
      <div className="min-h-screen flex items-center justify-center py-10 px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-10 space-y-8"
        >
          <input
            type="hidden"
            name="selectedService"
            value={selectedService?.value || ""}
          />
          <input
            type="hidden"
            name="selectedDate"
            value={selectedDate ? selectedDate.toISOString().split("T")[0] : ""}
          />
          <input
            type="hidden"
            name="selectedTime"
            value={selectedTime?.value || ""}
          />

          <div>
            <label className="block text-gray-700 font-semibold mb-2 text-lg">
              Select a Service
            </label>
            <Select
              options={serviceOptions}
              value={selectedService}
              onChange={(option) => setSelectedService(option)}
              placeholder="Select a service"
              styles={customStyles}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-lg">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                ref={nameRef} // ✅ attach ref
                required
                placeholder="John Doe"
                className="w-full h-14 px-5 border border-gray-300 rounded-full focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-lg">
                Email
              </label>
              <input
                type="email"
                name="email"
                ref={emailRef} // ✅ attach ref
                required
                placeholder="example@gmail.com"
                className="w-full h-14 px-5 border border-gray-300 rounded-full focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-lg">
                Preferred Date
              </label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                minDate={new Date()}
                placeholderText="Select a date"
                className="w-full h-14 px-5 border border-gray-300 rounded-full focus:ring-2 focus:ring-emerald-500"
                dateFormat="yyyy-MM-dd"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-lg">
                Preferred Time
              </label>
              <Select
                options={timeOptions}
                value={selectedTime}
                onChange={(option) => setSelectedTime(option)}
                placeholder="Select a time"
                styles={customStyles}
                isDisabled={!selectedDate}
              />
            </div>
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              name="consent"
              required
              className="mt-2 accent-emerald-500 w-5 h-5"
            />
            <label className="text-gray-700 text-sm leading-relaxed">
              I agree to receive communications. By submitting this form, you
              agree to our{" "}
              <Link
                href="/privacy-policy"
                className="text-emerald-500 underline"
              >
                Privacy Policy
              </Link>
              .
            </label>
          </div>

          <button
            type="submit"
            className="w-full h-14 bg-gradient-to-r from-black to-purple-700 hover:opacity-90 text-white text-xl font-semibold rounded-full shadow-lg hover:scale-105 transition transform"
          >
            Book Now
          </button>
        </form>
      </div>
    </>
  );
};

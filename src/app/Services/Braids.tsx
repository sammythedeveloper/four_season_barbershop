"use client";

import React, { useState, useEffect } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";

export const Braids = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
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

  const singleServices = [
    {
      name: "Retwist Locs (Top of Head Only)",
      time: "45 mins",
      price: "$100+",
    },
    { name: "Retwist Locs (Full Head)", time: "1 hr", price: "$150" },
    { name: "Natural Twist", time: "30 mins", price: "$115" },
    { name: "Beard Line-Up", time: "45 mins", price: "$25" },
  ];

  const serviceOptions = singleServices.map((s) => ({
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
    placeholder: (provided: any) => ({
      ...provided,
      color: "#6b7280",
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: "#111827",
    }),
    menu: (provided: any) => ({
      ...provided,
      borderRadius: "1rem",
      overflow: "hidden",
      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    }),
  };

  // Update time options based on selected date
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

    // If booking for today, filter out past times
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
    setSelectedTime(null); // reset selected time when date changes
  }, [selectedDate]);

  return (
    <div>
      <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-6">
        Book a Braids Service
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Select your service, pick a date and time, and let us give you the
        perfect style!
      </p>
      <div className="min-h-screen flex items-center justify-center py-16 px-4">
        <form
          action="https://formsubmit.co/millionfitaa@gmail.com"
          method="POST"
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
          <input
            type="hidden"
            name="_next"
            value="http://localhost:3000/thank-you"
          />
          <input type="hidden" name="_captcha" value="false" />

          {/* Service Dropdown */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2 text-lg">
              Select a Service
            </label>
            <Select
              options={serviceOptions}
              value={selectedService}
              onChange={setSelectedService}
              placeholder="Select a service"
              styles={customStyles}
            />
          </div>

          {/* Name & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-lg">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="John Doe"
                className="w-full h-14 px-5 border border-gray-300 rounded-full shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-lg">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="+1 xxx-xxx-xxxx"
                className="w-full h-14 px-5 border border-gray-300 rounded-full shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
              />
            </div>
          </div>

          {/* Date & Time */}
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
                className="w-full h-14 px-5 border border-gray-300 rounded-full shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
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
                onChange={setSelectedTime}
                placeholder="Select a time"
                styles={customStyles}
                isDisabled={!selectedDate} // disable until date is selected
              />
            </div>
          </div>

          {/* Consent */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              name="consent"
              required
              className="mt-2 accent-emerald-500 w-5 h-5"
            />
            <label className="text-gray-700 text-sm leading-relaxed">
              I agree to receive communications from Four Season Barbershop. By
              submitting this form, you agree to our{" "}
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
            className="w-full h-14 bg-gradient-to-r bg-black hover:bg-purple-700 text-white text-xl font-semibold rounded-full shadow-lg hover:scale-105 transition transform"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

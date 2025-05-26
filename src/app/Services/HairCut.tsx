"use client";

import React, { useState } from "react";
import Select from "react-select";
import { useRouter } from "next/navigation";

export const HairCut = () => {
  const [category, setCategory] = useState("single");
  const [selectedService, setSelectedService] = useState("");
  const router = useRouter();

  const options = [
    { value: "single", label: "Single Services" },
    { value: "combo", label: "Combo Services" },
  ];

  const singleServices = [
    { name: "Buzzcut/Beard Trim", time: "45 mins", price: "$43" },
    { name: "Beard Shaping/Beard Fade", time: "1 hr", price: "$30" },
    { name: "Hair Line-Up", time: "30 mins", price: "$25" },
    { name: "Beard Line-Up", time: "45 mins", price: "$25" },
    { name: "Haircut", time: "45 mins", price: "$58" },
  ];

  const comboServices = [
    { name: "Line up hair + Beard", time: "1 hr", price: "$38" },
    { name: "Haircut + Steam Razor Shave", time: "1 hr", price: "$78" },
    { name: "Haircut + Beard Trim", time: "1 hr", price: "$68" },
  ];

  const servicesToShow = category === "single" ? singleServices : comboServices;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Append state-managed fields
    formData.append("category", category);
    formData.append("selectedService", selectedService);

    try {
      await fetch("https://formsubmit.co/millionfiaa@gmail.com", {
        method: "POST",
        body: formData,
      });

      router.push("/thank-you");
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-2xl p-6 rounded-lg space-y-6"
    >
      <h2 className="text-3xl font-bold mb-4 text-purple-800 underline underline-offset-8 text-center">
        Book a Service
      </h2>

      {/* Category Selection */}
      <div>
        <label className="block text-purple-800 font-thin mb-1 text-base">
          Service Category
        </label>
        <Select
          options={options}
          value={options.find((opt) => opt.value === category)}
          onChange={(selectedOption) => {
            if (selectedOption) {
              setCategory(selectedOption.value);
              setSelectedService("");
            }
          }}
          className="react-select-container"
          classNamePrefix="react-select"
          styles={{
            control: (base) => ({
              ...base,
              backgroundColor: "#fff",
              borderColor: "#808080",
              minHeight: "3rem",
              boxShadow: "none",
              padding: "0 0.25rem",
            }),
            menu: (base) => ({
              ...base,
              backgroundColor: "#fff",
              color: "#374151",
              zIndex: 20,
            }),
            option: (base, state) => ({
              ...base,
              backgroundColor: state.isFocused ? "#C084FC" : "#fff",
              color: "#1f2937",
              cursor: "pointer",
            }),
          }}
        />
      </div>

      {/* Service Selection */}
      <div>
        <label className="block text-purple-800 font-thin mb-1 text-base">
          Select a Service
        </label>
        <select
          className="w-full h-12 px-4 py-2 text-base border border-gray-500 rounded focus:ring-blue-500 focus:border-blue-500"
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
          required
        >
          <option value="" disabled>
            Select a service
          </option>
          {servicesToShow.map((service, idx) => {
            const label = `${service.name} – ${service.time} – ${service.price}`;
            return (
              <option key={idx} value={label}>
                {label}
              </option>
            );
          })}
        </select>
      </div>

      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-purple-800 font-thin mb-1 text-base"
        >
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full h-12 px-4 py-2 text-base border border-gray-500 rounded focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block text-purple-800 font-thin mb-1 text-base"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="w-full h-12 px-4 py-2 text-base border border-gray-500 rounded focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Date & Time */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="date"
            className="block text-purple-800 font-thin mb-1 text-base"
          >
            Preferred Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            required
            className="w-full h-12 px-4 py-2 text-base border border-gray-500 rounded focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="time"
            className="block text-purple-800 font-thin mb-1 text-base"
          >
            Preferred Time
          </label>
          <input
            type="time"
            id="time"
            name="time"
            required
            className="w-full h-12 px-4 py-2 text-base border border-orange-300 rounded focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Consent */}
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            required
            className="mt-1 accent-orange-500 w-4 h-4"
          />
          <label
            htmlFor="consent"
            className="text-sm text-gray-700 font-thin leading-relaxed"
          >
            I agree to receive communications from Four Season Barber. By
            submitting this form, you agree to the Four Season Barbershop
            <a
              href="/privacy-policy"
              className="text-orange-500 underline hover:text-orange-400 ml-1"
            >
              Privacy Policy
            </a>
            .
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full h-12 bg-orange-500 hover:bg-purple-700 text-white text-lg font-semibold rounded"
      >
        Book Now
      </button>
    </form>
  );
};

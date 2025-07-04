"use client";
import React, { useState } from "react";

export const Cosmetics = () => {
  const [category, setCategory] = useState("single");
  const [selectedService, setSelectedService] = useState("");

  const singleServices = [
    { name: "Wash", time: "15 mins", price: "$20" },
    { name: "Color", time: "1 hr", price: "$45" },
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

  return (
    <form
      action="https://formsubmit.co/millionfitaa@gmail.com"
      method="POST"
      className="mx-auto max-w-2xl p-6 rounded-lg space-y-6"
    >
      {/* Hidden Fields for React-controlled values */}
      <input type="hidden" name="category" value={category} />
      <input type="hidden" name="selectedService" value={selectedService} />
      <input
        type="hidden"
        name="_next"
        value="http://localhost:3000/thank-you"
      />
      <input type="hidden" name="_captcha" value="false" />
      <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">
        Book a Cosmetics Service
      </h2>

      {/* Category Selection */}
      <div>
        <label className="block text-gray-700 font-medium mb-1 text-base">
          Service Category
        </label>
        <select
          className="w-full h-12 px-4 py-2 text-base border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setSelectedService("");
          }}
        >
          <option value="single">Single Services</option>
          <option value="combo">Combo Services</option>
        </select>
      </div>

      {/* Service Selection */}
      <div>
        <label className="block text-gray-700 font-medium mb-1 text-base">
          Select a Service
        </label>
        <select
          className="w-full h-12 px-4 py-2 text-base border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
          required
        >
          <option value="" disabled>
            Select a service
          </option>
          {servicesToShow.map((service, idx) => (
            <option key={idx} value={service.name}>
              {`${service.name} – ${service.time} – ${service.price}`}
            </option>
          ))}
        </select>
      </div>

      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-gray-700 font-medium mb-1 text-base"
        >
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full h-12 px-4 py-2 text-base border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block text-gray-700 font-medium mb-1 text-base"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="w-full h-12 px-4 py-2 text-base border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Date & Time */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="date"
            className="block text-gray-700 font-medium mb-1 text-base"
          >
            Preferred Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            required
            min={new Date().toISOString().split("T")[0]} // today
            className="w-full h-12 px-4 py-2 text-base border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="time"
            className="block text-gray-700 font-medium mb-1 text-base"
          >
            Preferred Time
          </label>
          <input
            type="time"
            id="time"
            name="time"
            required
            className="w-full h-12 px-4 py-2 text-base border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        {/* Consent */}
        <div className="flex items-start gap-2 col-span-full">
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
        className="w-full h-12 bg-gray-600 hover:bg-purple-700 text-white text-lg font-semibold rounded"
      >
        Book Now
      </button>
    </form>
  );
};

"use client";

import React, { useState, useEffect } from "react";

export const HairCut = () => {
  const [category, setCategory] = useState("single");
  const [selectedService, setSelectedService] = useState("");
  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    setMinDate(new Date().toISOString().split("T")[0]);
  }, []);

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

  return (
    <form
      action="https://formsubmit.co/millionfitaa@gmail.com"
      method="POST"
      className="mx-auto max-w-2xl p-8 bg-white rounded-2xl shadow-xl space-y-6"
    >
      {/* Hidden fields */}
      <input type="hidden" name="category" value={category} />
      <input type="hidden" name="selectedService" value={selectedService} />
      <input type="hidden" name="_next" value="http://localhost:3000/thank-you" />
      <input type="hidden" name="_captcha" value="false" />

      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-black border-b-2 pb-3 mb-6 border-purple-600">
        Book a HairCut Service
      </h2>

      {/* Category Selection */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">Service Category</label>
        <select
          className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
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
        <label className="block text-gray-700 font-medium mb-1">Select a Service</label>
        <select
          className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
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

      {/* Full Name */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">Full Name</label>
        <input
          type="text"
          name="name"
          required
          className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
          placeholder="John Doe"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
        <input
          type="tel"
          name="phone"
          required
          className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
          placeholder="+1 (123) 456-7890"
        />
      </div>

      {/* Date & Time */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Preferred Date</label>
          <input
            type="date"
            name="date"
            required
            min={minDate}
            className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Preferred Time</label>
          <input
            type="time"
            name="time"
            required
            className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
      </div>

      {/* Consent */}
      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 accent-purple-500 w-4 h-4"
        />
        <label className="text-gray-600 text-sm leading-relaxed">
          I agree to receive communications from Four Season Barber. By submitting this form, you agree to the{' '}
          <a
            href="/privacy-policy"
            className="text-purple-500 underline hover:text-purple-400"
          >
            Privacy Policy
          </a>
          .
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full h-12 bg-purple-700 hover:bg-purple-800 text-white font-bold rounded-lg transition"
      >
        Book Now
      </button>
    </form>
  );
};

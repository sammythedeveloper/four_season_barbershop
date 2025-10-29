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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-16 px-4">
      <form
        action="https://formsubmit.co/millionfitaa@gmail.com"
        method="POST"
        className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-10 space-y-8"
      >
        {/* Hidden Fields */}
        <input type="hidden" name="category" value={category} />
        <input type="hidden" name="selectedService" value={selectedService} />
        <input type="hidden" name="_next" value="http://localhost:3000/thank-you" />
        <input type="hidden" name="_captcha" value="false" />

        {/* Header */}
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-4">
          Book a Cosmetics Service
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Choose your service, pick a date and time, and let us take care of the rest!
        </p>

        {/* Category Selection */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2 text-lg">
            Service Category
          </label>
          <select
            className="w-full h-14 px-5 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition text-gray-800"
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
          <label className="block text-gray-700 font-semibold mb-2 text-lg">
            Select a Service
          </label>
          <select
            className="w-full h-14 px-5 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition text-gray-800"
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

        {/* Name & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2 text-lg">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              required
              className="w-full h-14 px-5 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2 text-lg">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="+1 234 567 890"
              required
              className="w-full h-14 px-5 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
            />
          </div>
        </div>

        {/* Date & Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2 text-lg">
              Preferred Date
            </label>
            <input
              type="date"
              name="date"
              required
              min={new Date().toISOString().split("T")[0]}
              className="w-full h-14 px-5 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2 text-lg">
              Preferred Time
            </label>
            <input
              type="time"
              name="time"
              required
              className="w-full h-14 px-5 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
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
            <a href="/privacy-policy" className="text-emerald-500 underline">
              Privacy Policy
            </a>
            .
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full h-14 bg-gradient-to-r from-emerald-500 to-purple-600 text-white text-xl font-semibold rounded-xl shadow-lg hover:scale-105 transition transform"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

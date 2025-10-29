"use client";
import React, { useState } from "react";

export const Braids = () => {
  const [selectedService, setSelectedService] = useState("");

  const singleServices = [
    { name: "Retwist Locs (Top of Head Only)", time: "45 mins", price: "$100+" },
    { name: "Retwist Locs (Full Head)", time: "1 hr", price: "$150" },
    { name: "Natural Twist", time: "30 mins", price: "$115" },
    { name: "Beard Line-Up", time: "45 mins", price: "$25" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-16 px-4">
      <form
        action="https://formsubmit.co/millionfitaa@gmail.com"
        method="POST"
        className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-10 space-y-8"
      >
        <input type="hidden" name="selectedService" value={selectedService} />
        <input type="hidden" name="_next" value="http://localhost:3000/thank-you" />
        <input type="hidden" name="_captcha" value="false" />

        {/* Header */}
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-6">
          Book a Braids Service
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Select your service, pick a date and time, and let us give you the perfect style!
        </p>

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
            {singleServices.map((service, idx) => (
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
              required
              placeholder="John Doe"
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
              required
              placeholder="+1 234 567 890"
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

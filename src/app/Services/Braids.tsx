"use client";
import React, { useState } from "react";


export const Braids = () => {
  const [selectedService, setSelectedService] = useState("");

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

  const servicesToShow = singleServices; // Always show single services

  return (
    <form
    action="https://formsubmit.co/millionfitaa@gmail.com"
    method="POST"
    className="mx-auto max-w-2xl p-6 rounded-lg space-y-6"
    >
      <input type="hidden" name="selectedService" value={selectedService} />
      <input
        type="hidden"
        name="_next"
        value="http://localhost:3000/thank-you"
      />
      <input type="hidden" name="_captcha" value="false" />
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg space-y-6">
        <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">
          Book a Service
        </h2>

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
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full h-12 bg-gray-600 hover:bg-purple-700 text-white text-lg font-thin rounded"
        >
          Book Now
        </button>
      </div>

      {/* Six P's Section */}

    </form>
  );
}
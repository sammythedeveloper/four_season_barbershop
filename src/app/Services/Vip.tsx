"use client";
import React, { useState } from "react";
import DiamondIcon from "@mui/icons-material/Diamond";

export const Vip = () => {
  const [selectedService, setSelectedService] = useState("");

  const vipServices = [
    {
      name: "The Executive Cut & Royal Treatment",
      time: "1 hr 30 mins",
      price: "$150",
      desc: "Luxury precision haircut, essential oil scalp massage, hot towel treatment, and premium product styling.",
    },
    {
      name: "Gold Beard Ritual & Steam Facial",
      time: "1 hr 15 mins",
      price: "$120",
      desc: "Signature beard sculpting with gold-infused oils, steam facial, and high-frequency skin therapy.",
    },
    {
      name: "Silk Scalp & Hair Therapy",
      time: "1 hr 30 mins",
      price: "$135",
      desc: "Scalp detox with silk serum infusion, deep-conditioning hair mask, and consultation.",
    },
    {
      name: "Presidential Grooming Experience",
      time: "2 hrs",
      price: "$200",
      desc: "Haircut, beard shaping, steam razor shave, facial cleanse, hydration mask, and complimentary premium drink.",
    },
    {
      name: "Jetsetter's Luxe Reset",
      time: "1 hr",
      price: "$110",
      desc: "Express haircut, under-eye treatment, shoulder massage, and luxury finishing touch — ideal for travelers.",
    },
  ];

  return (
    <form
      action="https://formsubmit.co/millionfitaa@gmail.com"
      method="POST"
      className="mx-auto max-w-2xl p-6 rounded-lg space-y-6"
    >
      {/* Hidden Fields for React-controlled values */}
      <input type="hidden" name="selectedService" value={selectedService} />
      <input
        type="hidden"
        name="_next"
        value="http://localhost:3000/thank-you"
      />
      <input type="hidden" name="_captcha" value="false" />
      <h2 className="text-3xl font-bold mb-4 text-gold text-center">
        <DiamondIcon /> Book a VIP Service
      </h2>

      {/* Service Selection */}
      <div>
        <label className="block text-gray-700 font-medium mb-1 text-base">
          Select a VIP Service
        </label>
        <select
          className="w-full h-12 px-4 py-2 text-base border border-gray-300 rounded focus:ring-purple-600 focus:border-purple-600"
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
          required
        >
          <option value="" disabled>
            Choose a premium experience
          </option>
          {vipServices.map((service, idx) => (
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
          className="w-full h-12 px-4 py-2 text-base border border-gray-300 rounded focus:ring-purple-600 focus:border-purple-600"
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
          className="w-full h-12 px-4 py-2 text-base border border-gray-300 rounded focus:ring-purple-600 focus:border-purple-600"
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
            className="w-full h-12 px-4 py-2 text-base border border-gray-300 rounded focus:ring-purple-600 focus:border-purple-600"
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
            className="w-full h-12 px-4 py-2 text-base border border-gray-300 rounded focus:ring-purple-600 focus:border-purple-600"
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
        className="w-full  h-12 bg-gold hover:bg-purple-800 text-black text-lg hover:text-gold font-semibold rounded"
      >
        Book your VIP Experience
      </button>
    </form>
  );
};

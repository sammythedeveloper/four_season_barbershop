"use client";

import React from "react";

export const Privacy = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div>
      <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-4">
          Privacy Policy
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Your privacy is important to us. This policy explains how we collect, use, and protect your information.
        </p>
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-2xl space-y-6">
     

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Information We Collect</h2>
          <p className="text-gray-700">
            We may collect personal information like your name, email address, phone number, and any other information you provide when booking an appointment.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">How We Use Your Information</h2>
          <p className="text-gray-700">
            Your information is used to provide and improve our services, process appointments, and communicate with you regarding your bookings or promotions. We never sell your personal information to third parties.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Cookies and Tracking</h2>
          <p className="text-gray-700">
            We may use cookies and similar technologies to enhance your experience on our website. These cookies help us understand website traffic and improve our services.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Data Security</h2>
          <p className="text-gray-700">
            We implement appropriate security measures to protect your information. However, please note that no online platform is 100% secure.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Your Rights</h2>
          <p className="text-gray-700">
            You have the right to access, update, or delete your personal information. To exercise these rights, please contact us via our contact page or email.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Changes to This Policy</h2>
          <p className="text-gray-700">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about this Privacy Policy, please reach out to us at{" "}
            <a href="mailto:info@fourseasonbarbershop.com" className="text-emerald-500 underline">
              info@fourseasonbarbershop.com
            </a>.
          </p>
        </section>
        </div>
        </div>
    </div>
  );
};

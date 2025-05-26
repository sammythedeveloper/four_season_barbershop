// src/pages/ThankYou.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 4000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-3xl font-bold text-purple-800 mb-4">
        Thank you for choosing us!
      </h1>
      <p className="text-lg text-gray-700">
        Your appointment has been received. See you soon!
      </p>
      <p className="text-sm mt-2 text-gray-500">
        Redirecting to the homepage...
      </p>
    </div>
  );
};

export default ThankYou;

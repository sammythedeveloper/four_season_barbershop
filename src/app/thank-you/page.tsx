// app/thank-you/page.tsx

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-purple-800 mb-4">Thank You!</h1>
        <p className="text-lg text-gray-700">
          Your appointment has been successfully booked.
        </p>
        <p className="text-md text-gray-500 mt-2">
          We look forward to seeing you soon.
        </p>
        <a
          href="/"
          className="inline-block mt-6 px-6 py-2 bg-orange-500 hover:bg-purple-700 text-white text-sm font-semibold rounded"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
}

import React from "react";

const SuccessPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      <h1 className="text-xl sm:text-3xl font-bold mb-4">
        Payment Successful!
      </h1>
      <p className="sm:text-lg text-sm mb-6 text-center">
        Thank you for your purchase. Your payment was processed successfully.
      </p>
      <button
        onClick={() => (window.location.href = "/ugc-actor")}
        className="px-6 py-3 sm:text-lg text-sm bg-black text-white rounded-md hover:bg-gray-800 transition"
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default SuccessPage;

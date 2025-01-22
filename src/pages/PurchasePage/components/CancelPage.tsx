import React from "react";

const CancelPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black px-5 sm:px-0">
      <h1 className="text-xl sm:text-3xl font-bold mb-4">Payment Canceled</h1>
      <p className="sm:text-lg text-sm  mb-6 text-center">
        It looks like you canceled the payment. Please try again or contact
        support if you need help.
      </p>
      <button
        onClick={() => (window.location.href = "/purchase")}
        className="px-6 py-3 sm:text-lg text-sm bg-black text-white rounded-md hover:bg-gray-800 transition"
      >
        Try Again
      </button>
    </div>
  );
};

export default CancelPage;

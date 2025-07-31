import React from 'react';

const OfferPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-100 to-rose-200 flex flex-col items-center justify-center px-4 py-10">
      <div className="bg-white rounded-3xl shadow-lg max-w-3xl w-full p-8 text-center">
        <h1 className="text-4xl font-bold text-rose-600 mb-4">✨ Special Offer Just for You! ✨</h1>
        <p className="text-lg text-gray-700 mb-6">
          Enroll in any of our makeup courses and get up to <span className="font-bold text-rose-500">30% OFF</span> for a limited time!
        </p>

        <div className="bg-rose-100 p-6 rounded-xl shadow-inner mb-6">
          <h2 className="text-2xl font-semibold text-rose-700">💋 Offer Highlights:</h2>
          <ul className="text-left text-gray-700 mt-4 space-y-2 pl-4 list-disc">
            <li>Up to 30% discount on selected courses</li>
            <li>Free beauty kit with full course enrollment</li>
            <li>1-on-1 mentorship session for early birds</li>
            <li>Access to exclusive pro makeup tutorials</li>
          </ul>
        </div>

        <button className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300">
          🎓 Claim Your Offer Now
        </button>

        <p className="text-sm text-gray-500 mt-4">* Offer valid until August 31st, 2025</p>
      </div>
    </div>
  );
};

export default OfferPage;

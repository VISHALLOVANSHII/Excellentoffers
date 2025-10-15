import React from "react";
import { Link } from "react-router-dom";

const HealthWellness = () => {
  return (
    <div className="bg-white border lg:min-w-96 rounded-lg p-6 shadow-sm">
      <h3 className="text-xl font-bold mb-3">Vitalband</h3>
      <img
        src="https://secure.vitalbands.com/order/us/vitalband/images/vital-band-logo.png"
        alt="Health & Wellness"
        className="w-64 h-32 object-contain mb-4"
      />
      <p className="text-gray-700 mb-4">
        VitalBand is a premium back pain-relief device that functions as a
        stretching aid for restoring mobility and flexibility, alleviating
        sciatica and joint pain by providing flexion and extension to the spine
        and joints. It can be used to reduce pain, improve flexibility,
        strengthen the back, and ease the effects of aging and stress.
      </p>
      <Link
        to="https://amol8a1p.com/?E=VL7tw%2bzYaZkY7tn%2b31pgmS9GOm3iJU0T&s1="
        className="block bg-green-600 hover:bg-green-700 text-white text-center py-2 rounded-md"
      >
        Get Help Now
      </Link>
    </div>
  );
};

export default HealthWellness;

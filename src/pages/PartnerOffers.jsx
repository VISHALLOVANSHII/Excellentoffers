import React, { useState } from "react";
import OfferRenderer from "../components/OfferRenderer.jsx";

const topPicks = [
  "Bankrate Credit Cards",
  "Credit Score Improvement",
  "Credit Score Monitoring",
  "Cybersecurity",
  "Debt Relief",
  "GLP-1 Medications",
  "Government Programs",
  "Health & Wellness",
  "Male Enhancement",
  "Nutraceuticals",
  "Online Banking",
  "Personal Loan",
  "Seniors",
  "Weight loss",
];

const PartnerOffers = () => {
  const [selectedTopPick, setSelectedTopPick] = useState(topPicks[0]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-white min-h-screen">
      <div className="flex flex-col mt-20 md:flex-row gap-6">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 bg-white p-4 h-fit sticky right-0 top-4">
          <h2 className="text-lg font-semibold mb-4">
            Spotlight Offer Categories
          </h2>
          <ul className="space-y-2 text-sm">
            {topPicks.map((pick, index) => (
              <li
                key={index}
                className={`cursor-pointer px-3 py-2 rounded border text-sm font-medium ${
                  selectedTopPick === pick
                    ? "bg-blue-100 border-blue-800 text-blue-800"
                    : "hover:bg-gray-50 border-gray-200 text-gray-700"
                }`}
                onClick={() => setSelectedTopPick(pick)}
              >
                {pick}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="lg:w-full md:flex-1">
          <h2 className="text-2xl font-bold mb-6">Featured Partner Offers</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6  ">
            {/* Dynamic component based on selected top pick */}
            <OfferRenderer selected={selectedTopPick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerOffers;

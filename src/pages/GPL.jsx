import React from "react";
import { Link } from "react-router-dom";

const GPL = () => {
  return (
    <>
      <div className="bg-white border rounded-lg p-4">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm font-medium">
            1
          </div>
          <h3 className="text-lg font-bold">MyStart GLP1</h3>
        </div>
        {/* <h3 className="text-lg font-bold mb-2">Instaflex</h3> */}
        <img
          src="https://www.mystarthealth.com/images/MyStart-Health-PersonalizedGLP-1-Access-InjectionBTTL-AMBR.webp"
          alt=""
          className="w-40 h-45"
        />
        <p>
          Thousands of MyStart patients have lost a meaningful amount of weight
          in their first months of treatment.
        </p>
        <Link
          to="https://www.mystarthealth.com/wellness/weightloss/2508/p18w/"
          className="block bg-blue-600 text-white text-center py-2 rounded mt-4"
        >
          Join Now
        </Link>{" "}
      </div>
      {/* card 2 */}

      <div className="bg-white border rounded-lg p-4">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm font-medium">
            2
          </div>
          <h3 className="text-lg font-bold">Brightmeds</h3>
        </div>
        {/* <h3 className="text-lg font-bold mb-2">Instaflex</h3> */}
        <img
          src="https://images.everydayhealth.com/images/marketplace/2025-(q4-only)/brightmeds-logo.png?w=525"
          alt=""
          className="w-40 h-15"
        />
        <p>
          Looking for medical guidance for your health goals? BrightMeds
          connects you with licensed providers through a simple online process.
          Complete a quick consultation to see if treatment may be appropriate
          for you. Prescription requires online consultation.{" "}
          <strong>
            <em>Medications prescribed at provider's discretion.</em>
          </strong>
        </p>
        <Link
          to="https://brightmeds.com/apply/glp1"
          className="block bg-blue-600 text-white text-center py-2 rounded mt-4"
        >
          Join Now
        </Link>{" "}
      </div>
    </>
  );
};

export default GPL;

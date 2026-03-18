import React from "react";
import beuty from "/src/images/Buety.png";
import { Link } from "react-router-dom";
const HealthWellness = () => {
  return (
  <>
   <div className="bg-white border rounded-lg p-4">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm font-medium">
            1
          </div>
          <h3 className="text-lg font-bold">
           Trilane Anti-Aging Wrinkle Serum{" "}
          </h3>
        </div>

        <img
          src={beuty}
          alt=""
          className="w-40 h-25 "
        />

        <p className="mt-3">
Trilane Dramatic Rescue Anti-Aging Wrinkle Serum is changing the game for mature skin. Packed with powerful, plant-based ingredients—including hyaluronic acid, kiwi, biotin, astaxanthin, and bambooextract—this antioxidant-rich formula deeply nourishes for a noticeably smoother, firmer, and younger-looking complexion. Get your 30-day sample today!
        </p>
        <Link
          to="https://noklnk.com/x/6028493?subid1="
          className="block bg-blue-600 text-white text-center py-2 rounded mt-4"
        >
          Join Now
        </Link>
      </div>
  </>
 
);


};

export default HealthWellness;

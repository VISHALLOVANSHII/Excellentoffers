import React from "react";
import { Link } from "react-router-dom";
import hims from "../images/him.png";
const MaleEnhashment = () => {
  return (
    <>
      <div className="bg-white border rounded-lg p-4">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm font-medium">
            1
          </div>
          <h3 className="text-lg font-bold">
            HIMS - Erectile Dysfunction Treatment{" "}
          </h3>
        </div>

        <img src={hims} alt="" className="w-50 h-30" />

        <p>
          Say goodbye to awkward appointments and hello to a new way of taking
          care of your health. Through HIMS, everything from your assessment to
          doorstep delivery, if prescribed, is designed to be quick, simple, and
          completely stress-free. Because getting the care you need shouldn't be
          complicated.
        </p>
        <Link
          to="https://www.hims.com/lp/consult-start-qn-mbg-dlp-holiday"
          className="block bg-blue-600 text-white text-center py-2 rounded mt-4"
        >
          Join Now
        </Link>
      </div>
    </>
  );
};

export default MaleEnhashment;

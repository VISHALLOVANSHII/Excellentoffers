import React from "react";
import { Link } from "react-router-dom";
import hims from "../images/him.png";
const MaleEnhancement = () => {
  return (
    <>
     {/* Card 2 nd */}

      <div className="bg-white border rounded-lg p-4">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm font-medium">
            1
          </div>
          <h3 className="text-lg font-bold">
            Rugient Health Male Enhancement{" "}
          </h3>
        </div>

        <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSRR0AOmbzDQTeWYopr-MHE8PnMUtm1G96ELBD7HxX28TOmx69d" alt="" className="w-50 h-30 mb-2" />

        <p>
         Powerful treatments for your best sex ever. Fast-acting formulas with up to 3X the power of generics — built for real performance.
        </p>
        <Link
          to="https://nee3uq.com/?E=VL7tw%2BzYaZn7Xrr%2BdXmyJC9GOm3iJU0T&s1="
          className="block bg-blue-600 text-white text-center py-2 rounded mt-4"
        >
          Join Now
        </Link>
      </div>
      <div className="bg-white border rounded-lg p-4">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm font-medium">
            2
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

export default MaleEnhancement;

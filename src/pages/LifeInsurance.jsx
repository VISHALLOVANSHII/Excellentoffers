import React from "react";
import { Link } from "react-router-dom";
Link;
const LifeInsurance = () => {
  return (
    <>
      <div className="bg-white border rounded-lg p-4">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm font-medium">
            1
          </div>
          <h3 className="text-lg font-bold">Ethos Life Insurance </h3>
        </div>

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3NT2G4NH0LejMOc-xGzhcZVDpqM09T9pjozVdFu2I2L22Hc-D"
          alt=""
          className="w-60 h-15 "
        />

        <p className="mt-3">
          Ethos offers personalized life insurance quote online with no medical
          exams or blood tests—just answer a few health questions to see your
          potential rate instantly.
        </p>
        <Link
          to="https://nee3uq.com/?E=YecseDisQq%2bVd5Y3fHc0uFYPSW8R8mtX&s1="
          className="block bg-blue-600 text-white text-center py-2 rounded mt-4"
        >
          Apply Now
        </Link>
      </div>

      {/* Card 2nd */}
      <div className="bg-white border rounded-lg p-4">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm font-medium">
            2
          </div>
          <h3 className="text-lg font-bold">Everyday Life Insurance </h3>
        </div>

        <img
          src="https://www.supermoney.com/_next/image?url=https://cdn-reviews.supermoney.com/businesses/1/everyday-life-inc-28e0a8361670e17e920796d51e6b5622_thumb.png&w=256&q=75"
          alt=""
          className="w-40 h-25 "
        />

        <p className="mt-0">
          Everyday Life Insurance is the premier life insurance platform for everyday people. We are an independent, online insurance broker that uses cutting edge technology to make it easy for you to get the best life insurance plan for your unique needs & budget. Get a quote today!
        </p>
        <Link
          to="https://everyday-life.sjv.io/zx1J9G"
          className="block bg-blue-600 text-white text-center py-2 rounded mt-4"
        >
          Apply Now
        </Link>
      </div>
    </>
  );
};

export default LifeInsurance;

import React from "react";
import { Link } from "react-router-dom";

const Seniors = () => {
  return (
    <>
      <div className="bg-white border rounded-lg p-4">
        <h3 className="text-lg font-bold mb-2">AARP</h3>
        <img
          src="https://d28wu8o6itv89t.cloudfront.net/images/aarplogojpg-1591088946516.jpeg"
          alt=""
          className="w-50 h-25"
        />
        <p>
          AARP is the nation's largest nonprofit, nonpartisan organization
          geared towards individuals aged 50 and older. Explore all the benefits
          that come with AARP membership. From travel and insurance to fraud
          protection, AARP has you covered. Join for as low as $15.00 per year
          with automatic renewals.
        </p>
        <Link
          to="https://www.keisuflate.com/BHQNJDPP/J4FMNNR/"
          className="block bg-blue-600 text-white text-center py-2 rounded mt-4"
        >
          Join Now
        </Link>
      </div>
    </>
  );
};

export default Seniors;

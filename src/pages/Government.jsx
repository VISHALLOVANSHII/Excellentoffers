import React from "react";
import { Link } from "react-router-dom";

const Government = () => {
  return (
    <>
      <div className="bg-white border rounded-lg p-4">
        <h3 className="text-lg font-bold mb-2">Citizens Disability</h3>
        <img
          src="https://i.vimeocdn.com/player/373343?sig=f51d8e14821b4d2b76871e5f6854cedfcbc9afd5fac3afac01fc1db41831fbd4&v=1"
          alt=""
          className="w-50 h-25"
        />
        <p>
          Citizens Disability is a leading advocacy group dedicated to helping
          hardworking Americans navigate the complex Social Security Disability
          process. If you’re struggling with paperwork, deadlines, or past
          denials, we’re here to simplify the journey and give you the best
          chance at securing the benefits you deserve.
        </p>
        <Link
          to="https://grow24.o18a.com/c?o=21726216&m=25206&a=671619&aff_click_id={replace_it}&sub_aff_id={replace_it}&aff_sub1={replace_it}"
          className="block bg-blue-600 text-white text-center py-2 rounded mt-4"
        >
          Join Now
        </Link>
      </div>
    </>
  );
};

export default Government;

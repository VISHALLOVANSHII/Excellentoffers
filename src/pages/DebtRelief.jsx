import React from "react";
import { Link } from "react-router-dom";

const DebtRelief = () => {
  return (
    <>
      <div className="bg-white border rounded-lg p-4">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm font-medium">
            1
          </div>
          <h3 className="text-lg font-bold">
           National Debt Relief{" "}
          </h3>
        </div>
       <img
  src="https://i.pinimg.com/736x/20/cb/9d/20cb9d88a880e1071d720b7cd0eb0267.jpg"
  alt="National Debt Relief"
  className="w-50 h-13 mt-2"
/>

<p className="mt-3">
  We cover most unsecured debt and negotiate with major credit card
  issuers and banks every day to reduce debts. Our certified debt
  counselors can help you achieve financial stability faster. Apply for
  a quote. BBB A+ accredited. No fees to start. One low monthly
  payment.
</p>

        <Link
          to="https://grow24.o18a.com/c?o=21879140&m=25206&a=671619&aff_click_id=%7Breplace_it%7D&sub_aff_id=%7Breplace_it%7D&aff_sub1="
          className="block bg-blue-600 text-white text-center py-2 rounded mt-4"
        >
          Apply Now
        </Link>
      </div>
    </>
  );
};

export default DebtRelief;

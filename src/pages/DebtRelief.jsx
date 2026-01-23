import React from "react";
import { Link } from "react-router-dom";

const DebtRelief = () => {
  return (
    <>
      <div className="bg-white border rounded-lg p-4">
        <h3 className="text-lg font-bold mb-2">National Debt Relief</h3>
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
          to=""
          className="block bg-blue-600 text-white text-center py-2 rounded mt-4"
        >
          Apply Now
        </Link>
      </div>
    </>
  );
};

export default DebtRelief;

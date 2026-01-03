import React from "react";
import { Link } from "react-router-dom";

const DebtRelief = () => {
  return (
    <>
      <div className="bg-white border rounded-lg p-4">
        <h3 className="text-lg font-bold mb-2">National Debit Relief</h3>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJxivUIS9weBiXtkc8Rbgl2IpeRy1h80f6Ig&s"
          alt=""
          className="w-50 h-25"
        />
        <p>
          We cover most unsecured debt and negotiate with major credit card
          issuers and banks every day to reduce debts. Our certified debt
          counselors can help you achieve financial freedom faster. Apply for a
          quote. BBB A+ accredited. No fees to start. One monthly payment.
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

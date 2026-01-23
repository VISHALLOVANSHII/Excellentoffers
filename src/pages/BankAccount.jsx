import React from "react";
import { Link } from "react-router-dom";

const BankAccount = () => {
  return (
    <>
      <div className="bg-white border rounded-lg p-4">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm font-medium">
            1
          </div>
          <h3 className="text-lg font-bold">
            Chime Checking Account{" "}
          </h3>
        </div>

        <img
          src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQGiy-IeLX19ol78rFZSiABeaM0wX0RBRUIn28wKvA4P55Ah2Ml"
          alt=""
          className="w-60 h-15 "
        />

        <p className="mt-3">
          Chime is a financial technology company that offers simple, fee-free
          banking through its mobile app. Open a Chime Checking Account in
          minutes and enjoy no monthly fees, no minimum balance requirements,
          access to fee-free ATMs, and get paid up to two days early with direct
          deposit. Eligible users can also earn a cash bonus when they set up
          qualifying direct deposits.
        </p>
        <Link
          to="https://www.chime.com/apply-introductory-3/"
          className="block bg-blue-600 text-white text-center py-2 rounded mt-4"
        >
          Join Now
        </Link>
      </div>
    </>
  );
};

export default BankAccount;

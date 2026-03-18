import React from "react";
import { Link } from "react-router-dom";

const OnlineBanking = () => {
  return (
    <>
      <div className="bg-white border rounded-lg p-4">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm font-medium">
            1
          </div>
          <h3 className="text-lg font-bold">Chime Checking Account </h3>
        </div>

        <img
          src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQGiy-IeLX19ol78rFZSiABeaM0wX0RBRUIn28wKvA4P55Ah2Ml"
          alt=""
          className="w-60 h-15 "
        />

        <p className="mt-3">
          Chime is a financial technology company that offers simple, fee-free
          banking* through its mobile app. Open a Chime Checking Account in
          minutes and enjoy no monthly fees, no minimum balance requirements,
          access to fee-free ATMs~, and get paid up to two days early with
          direct deposit^.
        </p>
        <Link
          to="https://nee3uq.com/?E=zeDzUSKl9A%2F%2FRPLqLAT%2BVS9GOm3iJU0T&s1="
          className="block bg-blue-600 text-white text-center py-2 rounded mt-4"
        >
          Join Now
        </Link>
        <p className="mt-4 text-xs text-gray-500 leading-relaxed">
          <span className="font-semibold">Disclaimer:</span> *Optional services
          and products may have fees or charges, such as outbound instant
          transfers, out-of-network transactions, and credit products.{" "}
          <a
            href="#"
            className="text-blue-600 hover:text-blue-700 underline font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more
          </a>
          . here
          <br />
          <br />
          ~Out-of-network ATM withdrawal and over the counter advance fees may
          apply except at FCTI® ATMs in a 7-Eleven® or Speedway, or any Allpoint
          or Visa Plus Alliance ATM participating in the Allpoint
          <br />
          <br />
          ^Early access to direct deposit funds depends on the timing of the
          submission of the payment file from the payer. We generally make these
          funds available on the day the payment file is received, which may be
          up to 2 days earlier than the scheduled payment date.
          <br />
          <br />
          Chime is a financial technology company, not a bank. Banking services
          provided by The Bancorp Bank, N.A. or Stride Bank, N.A., Members FDIC.
        </p>
      </div>
    </>
  );
};

export default OnlineBanking;

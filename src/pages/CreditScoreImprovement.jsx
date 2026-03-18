import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const CreditScoreImprovement = () => {
  return (
    <>
      {/*  Card 1 */}
      <div className="bg-white border rounded-lg p-4">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm font-medium">
            1
          </div>
          <h3 className="text-lg font-bold">Magnum</h3>
        </div>{" "}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNwo_CnJ61RkvbEjBUVc9KdIPq6lcdDjoVkNzBE-xvid8Uq4Ue"
          alt=""
          className="w-40 h-25"
        />
        <p>
          Get an +86 point average FICO Score increase on autopilot. Build
          credit with the largest credit builder loan in the nation with low
          monthly payments.{" "}
        </p>
        <Link
          to="https://www.htgg0h0u.com/2J75T3/7XDN2/?uid=6"
          className="block bg-blue-600 text-white text-center py-2 rounded mt-4"
        >
          {" "}
          Join Now
        </Link>
      </div>

      {/*  Card 4*/}
      <div className="bg-white border rounded-lg p-4">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm font-medium">
            2
          </div>
          <h3 className="text-lg font-bold">Self Credit Builder </h3>
        </div>{" "}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTciJ7oA38D9JYg-QEGnZbCIczBaRbYxRCZBkK28K0Vwy0SlWDfsfK8--0g4lC5dQ8ywAw&usqp=CAU"
          alt=""
          className="w-40 h-25"
        />
        <p>
          Build credit and savings every month with a Self Credit Builder
          account. Get started in minutes. Use Self's Credit Builder account
          program to establish payment history & build credit.
        </p>
        <Link
          to="https://www.l4djtrk.com/28PDXSJ/B8GM3KK/"
          className="block bg-blue-600 text-white text-center py-2 rounded mt-4"
        >
          {" "}
          Join Now
        </Link>
      </div>
      {/* AA */}
      <div className="bg-white border rounded-lg p-4  ">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm font-medium">
            3
          </div>
          <h3 className="text-lg font-bold">Kikoff</h3>
        </div>

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9q5lQxOXRlomDLhyrlmlIRHFkyEeUjcmyaFLRvJbQ_xYzWCMA"
          alt="Kikoff"
          className="w-40 h-24"
        />

        <p className="mt-2 text-sm text-gray-700 leading-relaxed">
          Kikoff users grow their credit
          {/* First Disclaimer */}
          <span className="group font-semibold cursor-pointer relative">
            {" "}
            +25 points in their first month
            <span
              className="absolute hidden group-hover:block
    w-[260px] sm:w-[300px]
    bg-white text-gray-700 text-xs font-normal
    p-3 rounded-lg border shadow-lg
    top-[-150px] left-[-40px]
    z-20"
            >
              Average first-month credit score impact of +25 points
              (VantageScore 3.0) between Jan-2024 & Nov-2024 for Kikoff Credit
              Account users who started with a score below 600; who purchased at
              least one item with Credit Account; and who paid one on-time in
              their first month. Late payments may negatively impact your credit
              score. Individual results may vary.
            </span>
          </span>{" "}
          on average. No credit check, no interest, and no predatory fees.
          Kikoff helps establish and build credit history and
          {/* Second Disclaimer */}
          <span className="relative group font-semibold cursor-pointer">
            {" "}
            reports to all three credit bureaus
            <span
              className="absolute hidden group-hover:block
    w-[240px] sm:w-[260px]
    bg-white text-gray-700 text-xs font-normal
    p-3 rounded-lg border shadow-lg
    bottom-full mb-2
    left-1/2 -translate-x-1/2
    z-10"
            >
              Features may vary depending on availability, location, &
              plan/product purchase.
            </span>
          </span>
          .
        </p>

        <Link
          to="https://kikoff.pxf.io/19rYNz"
          className="block bg-blue-600 text-white text-center py-2 rounded mt-4"
        >
          Join Now
        </Link>
      </div>
    </>
  );
};

export default CreditScoreImprovement;

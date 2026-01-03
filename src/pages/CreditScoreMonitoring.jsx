import React from "react";
import { Link } from "react-router-dom";
import free from "/src/images/free360.jpeg";
import myscore from "/src/images/myscore.jpeg";
import creditiq from "/src/images/creditscoreiq.jpeg";
const CreditScoreMonitoring = () => {
  return (
    <>
      <p className="lg:w-4xl h-auto   border-blue-400 p-2">
        <span className="font-bold">Disclaimer</span> - Only subscribe to a
        single credit monitoring program below. If you're already subscribed to
        a credit monitoring service, and pay a monthly subscription for access
        to that service, please DO NOT enroll.
      </p>
      <br />
      {/*  Card 1 */}
      <div className="bg-white border rounded-lg p-4">
       <div className="flex items-center space-x-3 mb-2">
  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm font-medium">
    1
  </div>
  <h3 className="text-lg font-bold">CreditScoreIQ</h3>
</div>

        <img
          src={creditiq}
          alt=""
          className="w-40 h-25"
        />

        <p>
          We search your credit report for factors negatively affecting your
          score, so you can easily dispute inaccuracies and send them to the
          major credit bureaus.
        </p>
        <Link
          to="https://www.i2gtrk.com/3NLRH4H/2JR72T4/"
          className="block bg-blue-600 text-white text-center py-2 rounded mt-4"
        >
          Join Now
        </Link>
      </div>
      {/*  Card 2 */}
      <div className="bg-white border rounded-lg p-4">
<div className="flex items-center space-x-3 mb-2">
  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm font-medium">
    2
  </div>
  <h3 className="text-lg font-bold">FreeScore360</h3>
</div>
        
        <img src={free} alt="" className="w-50 h-20" />

        <p>
          Access your credit scores from Experian, Equifax, and TransUnion. Get
          a free trial to access your credit reports and scores. Monitor your
          credit and get alerts for changes.
        </p>
        <Link
          to="https://www.freescore360.com/welcome/5v/landing-qh398h4f.html"
         
          className="block bg-blue-600 text-white text-center py-2 rounded mt-4"
        >
          Join Now
        </Link>
      </div>
      {/*  Card 3 */}
      <div className="bg-white border rounded-lg p-4">
        <div className="flex items-center space-x-3 mb-2">
  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm font-medium">
    3
  </div>
  <h3 className="text-lg font-bold">MyMonthlyScore</h3>
</div>
        <img
          src={myscore}
          alt=""
          className="w-50 h-15"
        />

        <p>
          MyMonthlyScore is the ultimate resource for obtaining your credit score and protecting your online identity. Our service provides your freshest credit score available, identity theft insurance coverage to $1 million, dispute center assistance to address errors with credit bureaus, real-time credit monitoring / alerts, and credit cards or loans matched to you.
        </p>
        <Link
          to="https://grow24.o18a.com/c?o=21670643&m=25206&a=671619&aff_click_id=%7Breplace_it%7D&sub_aff_id=%7Breplace_it%7D&aff_sub1="
         
          className="block bg-blue-600 text-white text-center py-2 rounded mt-4"
        >
          Join Now
        </Link>
      </div>
      {/*  Card 4*/}
      {/* <div className="bg-white border rounded-lg p-4">
       <h3 className="text-lg font-bold mb-2">Credit Score Monitoring</h3>
       <p>Details about the best Credit Score Monitoring plans...</p>
       <a href="#" className="block bg-blue-600 text-white text-center py-2 rounded mt-4">Join Now</a>
     </div> */}
    </>
  );
};

export default CreditScoreMonitoring;

import React from "react";
import { Link } from "react-router-dom";

const Nutraceuticals = () => {
  return (
    <>
      {/*  Card 1 */}
      <div className="bg-white border rounded-lg p-4">

  <div className="flex items-center space-x-3 mb-2">
  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm font-medium">
    1
  </div>
  <h3 className="text-lg font-bold">Neuro Tech IQ Supplement</h3>
</div>


        <img
          src="https://m.media-amazon.com/images/I/71aZmLD-owL._AC_UF1000,1000_QL80_.jpg"
          alt=""
          className="w-40 h-25"
        />
        <p>
          Neuro Tech IQ’s unique formula is scientifically designed and tested
          to meet the highest standards of supreme cognitive function. We
          manufacture every pill with the utmost care in our ultra-modern
          facilities with full scientific quality assurance testing at every lab
          stage. Where other products depend on fillers and synthetic products,
          Neuro Tech IQ is formulated with only the best natural ingredients
          that are clinically proven to give you the mental boost you need!
        </p>
        <Link
          to="https://www.infernotrak.com/CBS8TP/GTSC3"
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
  <h3 className="text-lg font-bold">Instaflex</h3>
</div>

        
       {/* <h3 className="text-lg font-bold mb-2">Instaflex</h3> */}
        <img
          src="https://ww1.prweb.com/prfiles/2013/03/11/10915777/Instaflex%20Logo-blue.jpg"
          alt=""
          className="w-40 h-25"
        />
       <p>You’re Just One Step Away from Relief. Complete the short questionnaire, enter your ZIP code, and claim your 14-day sample for only $5.99 (shipping & handling)!</p>
  <Link
          to="https://noklnk.com/x/6018512?subid1="
          className="block bg-blue-600 text-white text-center py-2 rounded mt-4"
        >
          Join Now
        </Link>     </div>
      {/*  Card 3 */}
      {/* <div className="bg-white border rounded-lg p-4">
       <h3 className="text-lg font-bold mb-2">Weight Loss Offer</h3>
       <p>Details about the best weight loss plans...</p>
       <a href="#" className="block bg-blue-600 text-white text-center py-2 rounded mt-4">Join Now</a>
     </div> */}
      {/*  Card 4*/}
      {/* <div className="bg-white border rounded-lg p-4">
       <h3 className="text-lg font-bold mb-2">Weight Loss Offer</h3>
       <p>Details about the best weight loss plans...</p>
       <a href="#" className="block bg-blue-600 text-white text-center py-2 rounded mt-4">Join Now</a>
     </div> */}
    </>
  );
};

export default Nutraceuticals;

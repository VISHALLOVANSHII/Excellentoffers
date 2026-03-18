import React from "react";
import { Link } from "react-router-dom";

const Weightloss = () => {
  return (
    <>
      {/*  Card 1 */}

      <div className="bg-white border rounded-lg p-4">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm font-medium">
            1
          </div>
          <h3 className="text-lg font-bold">Simple Weight Loss</h3>
        </div>

        <img
          src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTTmpOw0ZK7vxofl14tmuVbtqpykYbzT4iOupYr6SJYue7rDhvN"
          alt=""
          className="w-40 h-25"
        />

        <p>
          Simplify the way you lose weight. Finally, a health journey that
          actually feels good. Lasting results. Zero stress. Use the discount
          code "MO60" for 60% off!
        </p>
        <Link
          to="https://monetisetrk4.co.uk/?a=26325&c=50889&s1="
          className="block bg-blue-600 text-white text-center py-2 rounded mt-4"
        >
          Join Now
        </Link>
      </div>

      {/*  Card 2 */}
      {/* <div classNam e="bg-white border rounded-lg p-4 ">


    <div className="flex items-center space-x-3 mb-2">
  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm font-medium">
    2
  </div>
  <h3 className="text-lg font-bold"> Nutrisystem</h3>
</div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf64JPvPbTsr9gfxP593xvEjIACUIO38KYv77GAF7GoNZyllewk2YIlcfRMZQbubdFoV0&usqp=CAU"
          alt=""
          className="w-40 h-25"
        />
        <p>
         Meal delivery plans – New, convenient, and fits in with your weight loss goals. 2-week or 4-week options for deliveries.
        </p>
        <Link
          to="https://amol8a1p.com/?E=YecseDisQq%2FoqIE6%2BYxVwS9GOm3iJU0T&s1="
          className="block bg-blue-600 text-white text-center py-2 rounded mt-4"
        >
          Join Now
        </Link>
      </div> */}

      {/*  Card 3 */}
      {/* <div className="bg-white border rounded-lg p-4">
   <h3 className="text-lg font-bold mb-2">Weight Loss Offer</h3>
   <img src="https://mma.prnewswire.com/media/82714/nutrisystem_logo.jpg?p=facebook" alt="" className='w-40 h-15' />

   <p>Details about the best weight loss plans...</p>
   <a href="#" className="block bg-blue-600 text-white text-center py-2 rounded mt-4">Join Now</a>
 </div> */}
      {/*  Card 4*/}
      {/* <div className="bg-white border rounded-lg p-4">
   <h3 className="text-lg font-bold mb-2">Weight Loss Offer</h3>
   <img src="https://mma.prnewswire.com/media/82714/nutrisystem_logo.jpg?p=facebook" alt="" className='w-40 h-15' />

   <p>Details about the best weight loss plans...</p>
   <a href="#" className="block bg-blue-600 text-white text-center py-2 rounded mt-4">Join Now</a>
 </div> */}
    </>
  );
};

export default Weightloss;

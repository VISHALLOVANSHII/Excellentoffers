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
  <h3 className="text-lg font-bold">Jenny Craig</h3>
</div>


        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbndG0Yq-mSHOt0oNpcHqGWQ9CgXnvvum5NpeC_4HPJwge65Gc"
          alt=""
          className="w-40 h-25"
        />

        <p>
          Get Jenny Craig food delivered to your home. Open your door to the new
          Jenny Craig. Delicious, effective and more convenient than ever. Get
          meals delivered 2 weeks at a time + great savings and benefits. Get
          all your meals and snacks for as low as $112 per week.
        </p>
        <Link
          to="https://www.keisuflate.com/BHQNJDPP/K3S7BXX/"
          className="block bg-blue-600 text-white text-center py-2 rounded mt-4"
        >
          Join Now
        </Link>
      </div>

      {/*  Card 2 */}
<div className="bg-white border rounded-lg p-4 ">


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
          to="https://noklnk.com/x/6016375?subid1="
          className="block bg-blue-600 text-white text-center py-2 rounded mt-4"
        >
          Join Now
        </Link>
      </div>



     
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

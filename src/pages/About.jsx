import React from 'react'
import ab from "/src/images/AB.png"
const About = () => {
  return (
    <>
     



<div id="about" className="sm:flex items-center max-w-screen-xl">
  <div className="sm:w-1/2 p-5">
    <div className="image object-center  text-center mt-15">
      <img src={ab} />
    </div>
  </div>
  <div className="sm:w-1/2 p-5 ">
    <div className="text">
      <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
        About us
      </span>
      <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
        About <span className="text-indigo-600">Our Company</span>
      </h2>
      <p className="text-gray-700">
      Welcome to ExcellentOffers! We’re a destination site that curates and reviews top tier offers in numerous verticals ranging from credit monitoring, nutraceuticals, identity theft, credit score improvement, weight loss, cybersecurity, and many others. We do the legwork to review and approve top tier services so you don’t. This way when you join one of our third-party programs, you’ll know you’re getting true value for your investment! Check out our spotlight pages that categorize products by vertical and see for yourself!
      </p>
    </div>
  </div>
</div>



    </>
  )
}

export default About

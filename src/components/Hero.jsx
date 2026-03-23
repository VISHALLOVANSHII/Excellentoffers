import React from "react";
import { Link } from "react-router-dom";
import couple from "/src/images/coupls.jpg";
import logo from "/src/images/logo.png";
import RegistrationFlow from "../pages/RegistrationFlow";

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        className="relative text-white overflow-hidden h-screen sm:h-screen"
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://www.indium.tech/wp-content/uploads/2025/04/Indian-Organizations-Tend-To-Follow-The-Global-Market-In-Adoption-Of-New-Tech.jpg")',
            filter: "brightness(0.4)",
          }}
        />
        <div className="container  mx-auto lg:px-12 px-5 py-24 md:py-32 relative z-10 lg:h-auto h-full flex items-center">
          <div className="flex flex-col md:flex-row mt-12 lg:mt-0 justify-around">
            {/* Left Text Content */}
            <div className="w-full md:w-1/2 mb-15 md:mb-0 relative">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Welcome To
                <br />
                <span className="bg-gradient-to-r from-blue-700 via-green-400 to-indigo-400 inline-block text-transparent bg-clip-text">
                  ExcellentOffers
                </span>
              </h1>
              <p className="mb-5 text-4xl text-gray-300 text-sm sm:text-base">
                At ExcellentOffers we review and approve brands in credit
                monitoring, credit score improvement, cybersecurity,
                nutraceuticals, weight loss, and other product categories.
              </p>
              <Link to="/registration">
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <button className="group relative w-full sm:w-auto px-6 py-3 min-w-[160px]">
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-lg" />
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-lg lg:blur-md blur-0 group-hover:opacity-60 transition-opacity duration-500" />
                    <div className="relative flex items-center justify-center gap-2">
                      <span className="text-white font-medium">
                        Get Started
                      </span>
                      <svg
                        className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </Link>
            </div>

            {/* Right Card */}
            <div className="w-full md:w-2/5 md:pl-12 sm:h-auto">
              <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg relative rounded-xl p-6 sm:p-8 shadow-2xl h-full">
                <h2 className="text-2xl font-semibold text-blue-800 mb-6">
                  Why Choose Us?
                </h2>
                <img
                  src={logo}
                  alt="Logo"
                  className="h-12 absolute top-4 right-4 hidden md:block"
                />
                <ul className="space-y-4 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="text-black">
                      <span className="text-fuchsia-900 font-semibold">
                        🔍 Thorough Research:
                      </span>{" "}
                      We do the legwork on subscribing and testing out
                      advertiser brands — so you don’t have to. If a brand
                      appears on our site, you'll have full confidence in
                      knowing it was reviewed and approved by our team first
                      before recommending it to you.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black">
                      <span className="text-fuchsia-900 font-semibold">
                        🛡️ Campaign Categories:
                      </span>{" "}
                      Credit monitoring, credit score improvement,
                      cybersecurity, nutraceuticals, weight loss, and other
                      current or emerging product categories.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black">
                      <span className="text-fuchsia-900 font-semibold">
                        📂 Spotlight Pages:
                      </span>{" "}
                      Brands are organized by category for a quick comparison,
                      exploration, and registration.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave SVG */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-white">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg p-4 sm:p-10">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                About Us
              </h2>
              <p className="mt-4 text-gray-600 text-sm sm:text-lg">
                Welcome to ExcellentOffers — your trusted source for curated
                deals in credit monitoring, identity theft protection,
                nutraceuticals, and more. We research and review third-party
                services so you can make confident choices.
              </p>
              <div className="mt-8">
                <Link to="/about">
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <button className="group relative w-full sm:w-auto px-6 py-3 min-w-[160px]">
                      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-lg" />
                      <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-700 to-emerald-300 rounded-lg lg:blur-md blur-0 group-hover:opacity-60 transition-opacity duration-500" />
                      <div className="relative flex items-center justify-center gap-2">
                        <span className="text-white font-medium">
                          Get Started
                        </span>
                        <svg
                          className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </div>
                    </button>
                  </div>
                </Link>
              </div>
            </div>
            <div className="mt-12 md:mt-0">
              <img
                src={couple}
                alt="About Us"
                className="object-cover rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

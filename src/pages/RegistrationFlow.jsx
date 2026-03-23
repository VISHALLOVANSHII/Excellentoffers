import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegistrationFlow = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    fullName: "",
    email: "",
    agreeToTerms: false,

    // Step 2 - Profile
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    emailAddress: "",
    gender: "",
    dateOfBirth: "",
    phoneNumber: "",

    // Step 3 - Address
    address: "",
    city: "",
    state: "",
    zipCode: "",
    yearlyIncome: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmitStep1 = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.agreeToTerms) {
      alert("Please fill in all required fields");
      return;
    }
    setStep(2);
  };

  const handleSubmitStep2 = (e) => {
    e.preventDefault();
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.password ||
      !formData.emailAddress ||
      !formData.gender ||
      !formData.dateOfBirth ||
      !formData.phoneNumber
    ) {
      alert("Please fill in all required fields");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    setStep(3);
  };

  const handleSubmitStep3 = (e) => {
    e.preventDefault();
    if (
      !formData.address ||
      !formData.city ||
      !formData.state ||
      !formData.zipCode ||
      !formData.yearlyIncome
    ) {
      alert("Please fill in all required fields");
      return;
    }
    // Redirect to Spotlight Offers page
    window.location.href = "/partnerOffers";
  };

  const states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
    "Armed Forces Americas",
    "Armed Forces Europe",
    "Armed Forces Pacific",
  ];

  const incomeRanges = [
    "$200,000.00+",
    "$150,000.00 - $199,999.99",
    "$100,000.00 - $149,999.99",
    "$75,000.00 - $99,999.99",
    "$50,000.00 - $74,999.99",
    "$35,000.00 - $49,999.99",
    "$25,000.00 - $34,999.99",
    "$15,000.00 - $24,999.99",
    "$0.00 - $14,999.99",
  ];

  const genderOptions = ["Male", "Female", "Rather Not Say"];

  return (
    <div className="min-h-screen  bg-black">
      {/* Progress Steps */}
      <div className="border-b border-white/10  bg-white/5">
        <div className="max-w-2xl mx-auto px-4  py-6">
          <div className="flex items-center mt-20 justify-between">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`
                    w-10 h-10 rounded-full flex items-center justify-center font-semibold
                    ${
                      step >= num
                        ? "bg-cyan-500 text-white"
                        : "bg-white/10 text-gray-500"
                    }
                  `}
                  >
                    {num}
                  </div>
                  <span className="text-xs mt-2 text-gray-500">
                    {num === 1 && "Sign Up"}
                    {num === 2 && "Profile"}
                    {num === 3 && "Address"}
                  </span>
                </div>
                {num < 3 && (
                  <div
                    className={`flex-1 h-[2px] ${step > num ? "bg-cyan-500" : "bg-white/10"}`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-12">
        {/* Step 1 - Sign Up */}
        {step === 1 && (
          <div className="border border-white/10 rounded-2xl bg-white/5 p-6 md:p-8">
            <div className="text-center mb-8">
              <h1 className="text-xl md:text-xl font-bold text-white mb-3">
                Register For Our Custom Newsletter!
              </h1>
              <div className="inline-block bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1 mb-4">
                <span className="text-cyan-400 text-sm">US Residents Only</span>
              </div>
              <p className="text-gray-400 text-sm">
                Sign up for our custom newsletter and receive email
                notifications third-party products and services to improve your
                life!
              </p>
            </div>

            <form onSubmit={handleSubmitStep1} className="space-y-6">
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 w-full">
                <div className="w-full">
                  <label className="block text-white text-sm font-medium mb-2">
                    First Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="FirstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-all"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div className="w-full">
                  <label className="block text-white text-sm font-medium mb-2">
                    Last Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="LastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-all"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
                <div className="w-full">
                  <label className="block text-white text-sm font-medium mb-2">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-all"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 accent-cyan-500"
                    required
                  />
                  <span className="text-gray-400 text-sm">
                    I understand and agree that the receipt of a Excellent
                    offers is not guaranteed and based on availability, and that
                    I may cancel my account at any time by contacting Daily
                    Excellent offers. I also have read and agree to the{" "}
                    <Link
                      to="/privacy-policy"
                      className="text-cyan-400 hover:text-cyan-300"
                    >
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link
                      to="/terms-of-service"
                      className="text-cyan-400 hover:text-cyan-300"
                    >
                      Terms of Service
                    </Link>
                    .
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-xl transition-all transform hover:scale-[1.02]"
              >
                SIGN UP
              </button>
            </form>
          </div>
        )}

        {/* Step 2 - Profile */}
        {step === 2 && (
          <div className="border border-white/10 rounded-2xl bg-white/5 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Your Profile</h2>

            <form onSubmit={handleSubmitStep2} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    First Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                    placeholder="First name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Last Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                  placeholder="Email address"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Password <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                    placeholder="Password"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Confirm Password <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                    placeholder="Confirm password"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Gender <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-cyan-500"
                    required
                  >
                    <option value="" className="bg-black">
                      Select gender
                    </option>
                    {genderOptions.map((option) => (
                      <option key={option} value={option} className="bg-black">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Date of Birth <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    placeholder="MM/DD/YYYY"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Phone Number <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="(201) 555-0123"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                  required
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 py-3 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 transition-all"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-xl transition-all"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Step 3 - Address */}
        {step === 3 && (
          <div className="border border-white/10 rounded-2xl bg-white/5 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Your Address</h2>
            <p className="text-gray-400 text-sm mb-6">
              Where you want us to send your boxes
            </p>

            <form onSubmit={handleSubmitStep3} className="space-y-6">
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                  placeholder="Street address"
                  required
                />
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  City <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                  placeholder="City"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    State <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-cyan-500"
                    required
                  >
                    <option value="" className="bg-black">
                      Select state
                    </option>
                    {states.map((state) => (
                      <option key={state} value={state} className="bg-black">
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    ZIP Code <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    maxLength="5"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                    placeholder="5-digit ZIP"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Yearly Household Income{" "}
                  <span className="text-red-400">*</span>
                </label>
                <select
                  name="yearlyIncome"
                  value={formData.yearlyIncome}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-cyan-500"
                  required
                >
                  <option value="" className="bg-black">
                    Select income range
                  </option>
                  {incomeRanges.map((range) => (
                    <option key={range} value={range} className="bg-black">
                      {range}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex-1 py-3 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 transition-all"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-xl transition-all"
                >
                  SAVE
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistrationFlow;

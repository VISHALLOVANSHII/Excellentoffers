import React, { useState } from "react";

const cardFeatures = [
  {
    label: "Best cards",
    icon: "🏆",
    href: "https://oc.brcclx.com/t?lid=26760266",
    pera: "Check out some of the best credit cards.",
  },
  {
    label: "Balance transfer",
    icon: "💵",
    href: "https://oc.brcclx.com/t?lid=26760273",
    pera: "Lock in a 0% introductory APR on a balance transfer card. Consolidate and reduce your credit card debt.",
  },
  {
    label: "Cash back",
    icon: "💰",
    href: "https://oc.brcclx.com/t?lid=26760267",
    pera: "Maximize your rewards. Learn about the best cash-back cards for every type of purchase.",
  },
  {
    label: "0% APR",
    icon: "🅾️",
    href: "https://oc.brcclx.com/t?lid=26760265",
    pera: "Explore cards that offer 0% introductory APRs for a set period, giving you the breathing room to tackle your balances without interest piling up.",
  },
  {
    label: "Travel",
    icon: "✈️",
    href: "https://oc.brcclx.com/t?lid=26760269",
    pera: "The best options for your first travel rewards card. Earn points and miles for every qualifying purchase you make",
  },
  {
    label: "Rewards",
    icon: "🎁",
    href: "https://oc.brcclx.com/t?lid=26760268",
    pera: "Find a rewards card tailored to your lifestyle. See the top-rated rewards cards for cash back, travel, and more.",
  },
  {
    label: "Business",
    icon: "💼",
    href: "https://oc.brcclx.com/t?lid=26760286",
    pera: "Get the most out of your business expenses. Save thousands with rewards like hotel stays, cash back, and valuable discounts.",
  },
  {
    label: "No annual fee",
    icon: "📅",
    href: "https://oc.brcclx.com/t?lid=26760287",
    pera: "Explore options for credit cards with No Annual Fee.",
  },
  {
    label: "Bad credit",
    icon: "📉",
    href: "https://oc.brcclx.com/t?lid=26760288",
    pera: "Check out cards that can help build your credit.",
  },
];

const CreditCardSection = () => {
  const [showDisclosure, setShowDisclosure] = useState(false);

  return (
    <section className="bg-[#d6e8ed] py-10 px-0 relative lg:w-lvh  ">
      {/* Disclosure Top-Right for Desktop */}
      <div className="hidden md:block absolute top-4 right-4 ">
        <div className="group relative text-sm text-blue-700 font-medium cursor-pointer">
          Advertiser Disclosure
          <div className="absolute left-full top-0 ml-4 w-80 p-4 bg-white border border-gray-300 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
            <p className="text-gray-700 text-xs leading-relaxed">
              This site is part of an affiliate sales network and receives
              compensation for sending traffic to the partners’ sites such as{" "}
              <strong>BankRate.com</strong>. This may impact how and where links
              appear on this site. This site does not include all financial
              companies or all available finance offers.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Disclosure (in-flow) */}
      <div className="block md:hidden px-4 mb-4">
        <button
          onClick={() => setShowDisclosure(!showDisclosure)}
          className="text-sm text-blue-700 font-medium underline"
        >
          Advertiser Disclosure
        </button>
        {showDisclosure && (
          <div className="mt-2 p-4 bg-white border border-gray-300 rounded-md shadow">
            <p className="text-gray-700 text-xs leading-relaxed">
              This site is part of an affiliate sales network and receives
              compensation for sending traffic to the partners’ sites such as{" "}
              <strong>BankRate.com</strong>. This may impact how and where links
              appear on this site. This site does not include all financial
              companies or all available finance offers.
            </p>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="w-full px-4 flex flex-col md:flex-row items-start justify-between gap-10 max-w-none relative">
        <div className="flex-1 w-full md:w-3/4">
          <p className="text-sm font-semibold text-red-500 uppercase">
            Credit Cards
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Cards that work as hard as you do
          </h1>
          <p className="text-gray-700 mb-6">
            From earning rewards to building credit — find a credit card with
            the right benefits for you.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {cardFeatures.map((item, idx) => (
            <a
  key={idx}
  href={item.href}
  className="group bg-white shadow-sm border border-gray-200 px-4 py-3 text-sm flex flex-col items-start gap-1 rounded-md hover:shadow-md transition focus:outline-none focus:ring-2 focus:ring-blue-200 active:ring-2 active:ring-blue-200"
>
  <div className="flex items-center gap-2">
    <span className="text-lg">{item.icon}</span>
    <span className="font-medium text-gray-800 
      group-hover:underline group-hover:text-blue-600 
      group-focus:underline group-focus:text-blue-600 
      group-active:underline group-active:text-blue-600 
      decoration-blue-600"
    >
      {item.label}
    </span>
  </div>
  <p className="text-gray-600 text-xs mt-1">{item.pera}</p>
</a>

            ))}
          </div>

          <p className="text-sm text-gray-500 mt-4">
            Cards from our partner <strong>Bankrate</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CreditCardSection;

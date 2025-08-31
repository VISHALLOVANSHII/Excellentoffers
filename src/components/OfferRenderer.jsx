import React from "react";
import WeightLoss from "../pages/WeightLoss";
import Nutraceuticals from "../pages/Nutraceuticals";
import CreditScoreMonitoring from "../pages/CreditScoreMonitoring";
import CreditScoreImprovement from "../pages/CreditScoreImprovement";
import Cybersecurity from "../pages/Cybersecurity";
import Government from "../pages/Government";
import DebtRelief from "../pages/DebtRelief";
import Seniors from "../pages/Seniors";
import CreditCardSection from "../pages/CreditCardSection";

const OfferRenderer = ({ selected }) => {
  switch (selected) {

    case "Credit Cards":
      return <CreditCardSection/>
;
    case "Government Programs":
      return <Government />;
    case "Cybersecurity":
      return <Cybersecurity />;

    case "Seniors":
      return <Seniors />;

    case "Weight loss":
      return <WeightLoss />;
    case " Debt Relief":
      return <DebtRelief />;
    case "Nutraceuticals":
      return <Nutraceuticals />;
    case "Credit Score Monitoring":
      return <CreditScoreMonitoring />;
    case "Credit Score Improvement":
      return <CreditScoreImprovement />;
    default:
      return <div>No offer selected</div>;
  }
};

export default OfferRenderer;

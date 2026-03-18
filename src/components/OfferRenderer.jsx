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
import HealthWellness from "../pages/HealthWellness";
import PersonalLoan from "../pages/PersonalLoan";
import MaleEnhancement from "../pages/MaleEnhancement";
import GPL from "../pages/GPL";
// import BankAccount from "../pages/OnlineBanking";
import LifeInsurance from "../pages/LifeInsurance";
import OnlineBanking from "../pages/OnlineBanking";

const OfferRenderer = ({ selected }) => {
  switch (selected) {
    case "Online Banking":
      return <OnlineBanking />;

    case "Bankrate Credit Cards":
      return <CreditCardSection />;

    case "Government Programs":
      return <Government />;

    case "Cybersecurity":
      return <Cybersecurity />;

    case "Seniors":
      return <Seniors />;

    case "Weight Loss":
      return <WeightLoss />;

    case "Debt Relief":
      return <DebtRelief />;

    case "GLP-1 Medications":
      return <GPL />;

    case "Health & Beauty":
      return <HealthWellness />;

    case "Life Insurance":
      return <LifeInsurance />;

    case "Male Enhancements":
      return <MaleEnhancement />;

    case "Nutraceuticals":
      return <Nutraceuticals />;

    case "Personal Loan":
      return <PersonalLoan />;

    case "Credit Score Monitoring":
      return <CreditScoreMonitoring />;

    case "Credit Score Improvement":
      return <CreditScoreImprovement />;

    default:
      return <div>No offer selected</div>;
  }
};

export default OfferRenderer;

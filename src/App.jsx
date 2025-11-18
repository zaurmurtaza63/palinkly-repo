// App.jsx
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useScrollToTop } from "./hooks/useScrollToTop";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import About from "./Components/About";
import OnlineInvoicingSystem from "./Components/OnlineInvoicingSystem";
import CreditCard from "./Components/CreditCard";
import OnlinePayment from "./Components/OnlinePayment";
import ChargeBack from "./Components/ChargeBack";
import AnalyticalReports from "./Components/AnalyticalReports";
import MerchantAccount from "./Components/MerchantAccount";
import RetailCreditCard from "./Components/RetailCreditCard"
import MobileCreditCardPayments from "./Components/MobileCreditCardPayments"
import ZeroCostCreditCard from "./Components/ZeroCostCreditCard"
import Contact from "./Components/Contact"
import Leads from "./Components/Leads"
import Thankyou from "./Components/Thankyou";

import ACHPaymentProcessing from "./Components/ACHPaymentProcessing"
import CryptoPaymentProcessing from "./Components/CryptoPaymentProcessing"
import ECheckPaymentProcessing from "./Components/ECheckPaymentProcessing"

import ChargeBackRepresents from "./Components/ChargeBackRepresents"
import RealTimeChargeBackAlerts from "./Components/RealTimeChargeBackAlerts"
import ReduceManageAndWinChargeBacks from "./Components/ReduceManageAndWinChargeBacks"
import StopAndPreventFraud from "./Components/StopAndPreventFraud"

import FAQ from "./Components/FAQ"
import PrivacyPolicy from "./Components/PrivacyPolicy"
import TermsOfServices from "./Components/TermsOfService"


const Layout = () => {
  useScrollToTop();
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      {path: "online-invoicing-system", element: <OnlineInvoicingSystem />},
      {path: "credit-card", element: <CreditCard />},
      {path: "online-payment-processing", element: <OnlinePayment />},
      {path: "chargeback-services", element: <ChargeBack />},
      {path: "analytical-reports", element: <AnalyticalReports />},
      {path: "merchant-account-analysis", element: <MerchantAccount />},

      {path: "retail-credit-card-processing", element: <RetailCreditCard />},
      {path: "mobile-credit-card-payments", element: <MobileCreditCardPayments />},
      {path: "zero-cost-credit-card", element: <ZeroCostCreditCard />},

      {path: "ach-payment-processing", element: <ACHPaymentProcessing />},
      {path: "crypto-payment-processing", element: <CryptoPaymentProcessing />},
      {path: "e-check-payment-processing", element: <ECheckPaymentProcessing />},

      {path: "charge-back-represents", element: <ChargeBackRepresents />},
      {path: "real-time-chargeBack-alerts", element: <RealTimeChargeBackAlerts />},
      {path: "reduce-manage-and-win-chargebacks", element: <ReduceManageAndWinChargeBacks />},
      {path: "stop-and-prevent-fraud", element: <StopAndPreventFraud />},

      {path: "contact", element: <Contact />},

      {path: "leads", element: <Leads />},
      {path: "thankyou", element: <Thankyou />},

      {path: "faq", element: <FAQ />},
      {path: "privacy-policy", element: <PrivacyPolicy />},
      {path: "terms-of-services", element: <TermsOfServices />},
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

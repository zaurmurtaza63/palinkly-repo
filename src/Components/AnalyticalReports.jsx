import React from "react";
import HeroSection from "./HeroSection";
import PaymentForm from "./PaymentForm";
import PaymentBoxes from "./PaymentBoxes";
import CustomSlider from "./HeroSlider";
import CustomMarquee from "./CustomMarquee";
import Testimonials from "./Testimonials";
import CardsSection from "./CardsSection"
import Representment from "./Representment"
import HeroBg from "../assets/Images/analytical-reports-new.webp"




// custom slider images
import NmiLogo from "../assets/Images/nmi-logo.svg";
import ATM_Machine from "../assets/Images/atm-machine.svg";

// payment-boxes custom icons
import EnergyIcon from "../assets/Images/paid.svg";
import CheckIcon from "../assets/Images/check.svg";
import BagIcon from "../assets/Images/paymentMethod.svg";
import HeadphonesIcon from "../assets/Images/headphones.svg";
import LockIcon from "../assets/Images/lock.svg";

// Four Step Process
import FourStepProcess from "./FourStepProcess";
import FourStepImg from "../assets/Images/why-choose-us-img.svg";

const AnalyticalReports = () => {
  const featuresList = [
    "Fast approvals for most business types",
    "Gateway options: NMI · Authorize.net · Payarc",
    "Card, ACH/eCheck, payment links & QR",
    "PCI-aware setup and onboarding support",
    "24/7 merchant support",
    "Customizable payment solutions for unique needs",
    "Integrated invoicing and billing features available",
    "Robust fraud detection and security measures",
    "Comprehensive analytics and reporting tools",
  ];
  // Slider Data
  const mySlides = [
    {
      title: "High-Risk Merchants",
      sub: "High-risk businesses require analytical reporting to detect fraud, manage disputes, and prevent chargebacks. Paylinkly's reports provide insights to secure your business and improve profitability.",
      cta: { label: "Get Started For Free", href: "#" },
      phone: NmiLogo,
      device: ATM_Machine,
      features: [
        "Enhanced Fraud Detection",
        "Improved Customer Insights",
        "Informed Decision Making",
        "Optimized Marketing Strategies",
        "Increased Operational Efficiency",
        "Proactive Risk Management",
        "Streamlined Compliance Processes",
        "Comprehensive Performance Tracking",
        "Tailored Business Solutions",
        "Boosted Customer Retention",
      ],
    },
    {
      title: "PayPal Merchant Stack",
      sub: "Built for instant checkout with low-latency transactions.",
      cta: { label: "Connect PayPal", href: "#" },
      phone: NmiLogo,
      device: ATM_Machine,
      features: ["One Click Pay", "Crypto Support", "24/7 Protection"],
    },
  ];

    // representment section
  const featuresListLeft = [
    "Hidden processing costs",
    "Inconsistent gateway data",
    "Undetected fraud trends",
    "Poor dispute visibility",
    "Manual reconciliation",
  ];

  const featuresListRight = [
    "Real-time, unified visibility",
    "Actionable insights and alerts",
    "Reduced operational overhead",
    "Data-driven decision-making",
  ];

  // Four Step Process Data
  const stepsData = [
    {
      num: "01.",
      title: "Connect Your Gateways",
      desc: "NMI, Authorize.Net, and Payarc integrations.",
    },
    {
      num: "02.",
      title: "Sync Live Data",
      desc: "Your dashboard updates automatically every few minutes.",
    },
    {
      num: "03.",
      title: "View Insights",
      desc: "Filter, export, and visualize your metrics.",
    },
    {
      num: "04.",
      title: "Automate Reporting",
      desc: "Schedule recurring reports for your team.",
    },
    {
      num: "05.",
      title: "Optimize and Grow ",
      desc: "Use insights to improve payment flow and reduce risk.",
    },
  ];



  return (
    <>
      <HeroSection
        title="Turn Payment Data Into Powerful "
        highlightText="Business Insights"
        subtitle="Monitor sales, track disputes, and analyze trends in real time with Paylinkly’s unified reporting and analytics."
        buttonText="Get your Report"
        buttonLink="#"
        backgroundImage={HeroBg}
      />
      <section className="pt-5 md:pt-15 lg:pt-24">
        <PaymentForm
          title="Make smarter decisions. Detect"
          highlightText="issues early."
          subtitle="Tell us a bit about your business and we’ll set you up with our analytical reporting services."
          features={featuresList}
        />
      </section>
       <section className="pt-5 md:pt-15 lg:pt-24">
        <Representment
          title="Why"
          highlightText=" Analytical Reports"
          title2=" Matters"
          subtitle="Analytical Reports are critical for businesses because it gives you real-time visibility into every aspect of your payment performance. With Paylinkly's analytical reporting services, you'll get:"
          representmentTitle="Merchants struggle without centralized reporting:"
          withoutpaylinklyTitle="With Paylinkly Analytics, you get:"
          representmentfeatures={featuresListLeft}
          withoutpaylinkly={featuresListRight}
        />
      </section>

      <section>
        <PaymentBoxes
          paymentsRef={null}
          isVisible={true}
          title="Why Businesses Trust"
          highlight=" Paylinkly"
          title2=" with Fraud Prevention"
          description="Do you need to detect fraud? Reduce fraud? Eliminate fraud? Step into the future! With Paylinkly, you'll enjoy:"
          features={[
            {
              icon: EnergyIcon,
              title: "Access transaction data across gateways and accounts.",
            },
            {
              icon: BagIcon,
              title: "Instantly identify trends that impact your revenue flow.",
            },
            {
              icon: CheckIcon,
              title: "Track and analyze chargeback activity with precision",
            },
            {
              icon: HeadphonesIcon,
              title: "Monitor high-risk activity and detect fraud patterns",
            },
            {
              icon: LockIcon,
              title: "Track your daily funding and deposits",
            },
          ]}l
        />
      </section>

     <section>
      <CardsSection
      title="Report Types for" 
      highlighted=" Every Scenario"
      subtitle="From transactions to revenue, we offer specialized reporting for diverse sectors. Discover the perfect analytics solution tailored for your business model."
      />
     </section>

      <section>
        <CustomSlider
          slides={mySlides}
          heading="Analytical Reports"
          highlight=" Perfect"
          heading2=" for:"
          subheading="Discover why analytical reports are essential for eCommerce, SaaS Platforms, and Global Merchants."
        />
      </section>

      {/* Custom Marquee */}
      <section className="pt-10">
        <CustomMarquee />
      </section>

      {/* FOUR STEP PROCESS */}
      <section className="pt-10">
        <FourStepProcess
          header={{
            title: "How It Works – ",
            highlight: "Simple 5-Step Process",
            description:
              "Our system uses a streamlined four-step process to prevent fraud. Benefit from unparalleled efficiency, from immediate warnings to automatic actions.",
          }}
          steps={stepsData}
          image={FourStepImg}
        />
      </section>

      {/* TESTIMONIALS */}
      <section className="lg:pt-24 md:pb-16 pt-7">
        <Testimonials
          cta={{
            title: "Stop Paying Processing Fees —",
            highlight: "Keep Every Dollar You Earn",
            des: "Apply now to join Paylinkly’s Zero-Cost Credit Card Processing Program. Approvals in as little as 24 hours.",
            primaryBtn: { label: "Try It Free", href: "/signup" },
            secondaryBtn: { label: "Watch Demo", href: "/demo" },
          }}
        />
      </section>
    </>
  );
};

export default AnalyticalReports;

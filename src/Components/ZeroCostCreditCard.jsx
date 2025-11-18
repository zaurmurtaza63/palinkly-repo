import React from "react";
import HeroSection from "./HeroSection";
import PaymentForm from "./PaymentForm";
import PaymentBoxes from "./PaymentBoxes";
import CustomSlider from "./HeroSlider";
import CustomMarquee from "./CustomMarquee";
import Testimonials from "./Testimonials";
import HeroBg from "../assets/Images/zero-cost.webp"



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


const ZeroCostCreditCard = () => {
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
      title: "The Ultimate White-Label Payment Gateway",
      sub: "Best For: High-risk merchants, multi-location businesses, SaaS platforms, and businesses requiring advanced transaction routing",
      cta: { label: "Enable Visa", href: "#" },
      phone: NmiLogo,
      device: ATM_Machine,
      features: [
        "Multi-MID Management",
        "Advanced Transaction Routing (ATRI)",
        "Virtual Terminal",
        "125+ Shopping Cart Integrations",
        "Customer Vault & Tokenization",
        "iSpyFraud™",
        "Recurring Billing",
        "Level II & III Processing",
        "Global Currency Support",
        "Mobile Payment Ready",
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

  // Four Step Process Data
  const stepsData = [
    {
      num: "01.",
      title: "Apply for a Merchant Account",
      desc: "Submit your business info via our secure form.",
    },
    {
      num: "02.",
      title: "Select Gateway and Equipment",
      desc: "Select NMI, Authorize.Net, or Payarc, and your POS hardware.",
    },
    {
      num: "03.",
      title: "Auto-Configure Surcharge Rules",
      desc: "We handle all legal & compliance setup for you.",
    },
    {
      num: "04.",
      title: "Start Saving Instantly",
      desc: "No more monthly processing bills.",
    },
  ];

  return (
    <>
      <HeroSection
        highlightText="Keep 100%"
        title2="of Your Credit Card Sales"
        subtitle="Stop paying processing fees. With Paylinkly’s Zero-Cost Credit Card Processing, you can pass the cost of card transactions directly to customers — legally and transparently."
        buttonText="Start Saving Today"
        buttonLink="#"
        backgroundImage={HeroBg}
      />
      <section className="pt-5 md:pt-15 lg:pt-24">
        <PaymentForm features={featuresList} />
      </section>

      <section>
        <PaymentBoxes
          paymentsRef={null}
          isVisible={true}
          title="Why Merchants Love"
          highlight=" Zero-Cost Processing"
          title2=""
          description="You never pay processing fees — only customers using credit cards cover the difference."
          features={[
            {
              icon: EnergyIcon,
              title: "Works for online, in-store, and mobile payments.",
            },
            {
              icon: BagIcon,
              title: "Eliminate 100% of card fees from day one.",
            },
            {
              icon: CheckIcon,
              title: "Surcharges applied only to eligible transactions.",
            },
            {
              icon: HeadphonesIcon,
              title: "Fully compatible with NMI, Authorize.Net, and Payarc.",
            },
            {
              icon: LockIcon,
              title: "Configure receipts, emails, and on-screen disclosures.",
            },
          ]}
        />
      </section>

      <section>
        <CustomSlider
          slides={mySlides}
          heading="Paylinkly’s"
          highlight=" Zero-Cost Program"
          heading2=" integrates with"
          subheading="Our zero-cost program seamlessly integrates with industry-leading payment gateways:"
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
            highlight: "Simple 4-Step Process",
            description:
              "Learn how our credit card processing system streamlines payments in four simple steps. From secure transactions to fast deposits, we ensure a smooth process.",
          }}
          steps={stepsData}
          image={FourStepImg}
        />
      </section>


        {/* TESTIMONIALS */}
      <section className="lg:pt-24 md:pb-16 pt-7">
        <Testimonials
  cta={{
    title: "Stop Paying Processing Fees — ",
    highlight: " Keep Every Dollar You Earn",
    title2: "",
    des: "Apply now to join Paylinkly’s Zero-Cost Credit Card Processing Program. Approvals in as little as 24 hours.",
    primaryBtn: { label: "Apply Now", href: "/signup" },
    secondaryBtn: { label: "Schedule a Demo", href: "/demo" },
  }}
/>
      </section>
    </>
  );
};

export default ZeroCostCreditCard;

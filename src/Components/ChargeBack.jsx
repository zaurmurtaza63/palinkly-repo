import React from "react";
import HeroSection from "./HeroSection";
import PaymentForm from "./PaymentForm";
import PaymentBoxes from "./PaymentBoxes";
import CustomSlider from "./HeroSlider";
import CustomMarquee from "./CustomMarquee";
import Testimonials from "./Testimonials";

// custom slider images
import ATM_Machine from "../assets/Images/atm-machine.svg";
import GolderSliderImg from "../assets/Images/golden_slider_img.png";

// payment-boxes custom icons
import BagIcon from "../assets/Images/paymentMethod.svg";
import Menu from "../assets/Images/menu.svg";
import Bell from "../assets/Images/bell.svg";
import CurlyArrow from "../assets/Images/curlyArrow.svg";

// Four Step Process
import FourStepProcess from "./FourStepProcess";
import FourStepImg from "../assets/Images/why-choose-us-img.svg";


const ChargeBack = () => {
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
      device: GolderSliderImg,
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
      title: "Integrate and Go Live",
      desc: "Connect your website, mobile app, or terminal in minutes.",
    },
    {
      num: "04.",
      title: "Accept Payments and Get Paid",
      desc: "Funds are deposited into your bank account securely.",
    },
  ];



  return (
    <>
      <HeroSection
        title="Manage"
        highlightText="chargebacks"
        title2="to protect revenue."
        subtitle="Prevent fraud, reduce disputes, and win chargebacks automatically — with Paylinkly’s real-time monitoring and defense tools."
        buttonText="Get Protected Today"
        buttonLink="#"
        backgroundImage="charge-back-hero-img"
      />
      <section className="pt-5 md:pt-15 lg:pt-24">
        <PaymentForm
          title="Every lost chargeback is lost revenue —"
          highlightText=" and lost trust."
          features={featuresList}
        />
      </section>

      <section>
        <PaymentBoxes
          paymentsRef={null}
          isVisible={true}
          title="Why Paylinkly"
          highlight=" Chargeback"
          title2=" Management Stands Out"
          description="Do you need advanced chargeback protection? Do you want simple integration? Are you looking for automated dispute resolution? Step into the future! With Paylinkly Chargeback Management, you'll enjoy:"
          features={[
            {
              icon: Bell,
              title: "Instant Alerts via Verifi and Ethoca",
            },
            {
              icon: BagIcon,
              title: "Automatic Evidence Collection and Submission",
            },
            {
              icon: Menu,
              title: "Unified Dashboard for Multiple Gateways",
            },
            {
              icon: CurlyArrow,
              title: "Reduced Chargeback Ratio and Higher Recovery Rate",
            },
            {
              icon: BagIcon,
              title: "Compliant with Visa, Mastercard, Amex, Discover.",
            },
          ]}
        />
      </section>

      <section>
        <CustomSlider
          slides={mySlides}
          heading="Chargeback Services"
          highlight=" Ideal"
          heading2=" for:"
          subheading="Find out how we are ideal for eCommerce Stores, Tech & SaaS Platforms, and High-Risk / International Merchants."
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
            title: "Stop Paying Processing Fees —",
            highlight: "Keep Every Dollar You Earn",
            des: "Apply now to join Paylinkly’s Zero-Cost Credit Card Processing Program. Approvals in as little as 24 hours.",
            primaryBtn: { label: "Apply Now", href: "/signup" },
            secondaryBtn: { label: "Schedule a Demo", href: "/demo" },
          }}
        />
      </section>
    </>
  );
};

export default ChargeBack;

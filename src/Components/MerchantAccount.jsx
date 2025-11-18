import React from "react";
import HeroSection from "./HeroSection";
import PaymentForm from "./PaymentForm";
import PaymentBoxes from "./PaymentBoxes";
import CustomSlider from "./HeroSlider";
import CustomMarquee from "./CustomMarquee";
import Testimonials from "./Testimonials";
import CardsSection from "./CardsSection"
import HeroBg from "../assets/Images/merchant-account.webp"



// custom slider images
import NmiLogo from "../assets/Images/nmi-logo.svg";
import ATM_Machine from "../assets/Images/atm-machine.svg";

// payment-boxes custom icons
import EnergyIcon from "../assets/Images/paid.svg";
import CheckIcon from "../assets/Images/check.svg";
import BagIcon from "../assets/Images/paymentMethod.svg";
import HeadphonesIcon from "../assets/Images/headphones.svg";
import LockIcon from "../assets/Images/lock.svg";
import CurlyArrowIcon from "../assets/Images/curlyArrow.svg";

// Four Step Process
import FourStepProcess from "./FourStepProcess";
import FourStepImg from "../assets/Images/why-choose-us-img.svg";


const MerchantAccount = () => {
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
      sub: "High-risk businesses need merchant account analysis to spot unusual activity, manage disputes, and cut down on chargebacks. Paylinkly's reports give you the insights you need to protect income and increase profits.",
      cta: { label: "Get Started For Free", href: "#" },
      phone: NmiLogo,
      device: ATM_Machine,
      features: [
        "Reduced Transaction Fees",
        "Enhanced Fraud Protection",
        "Access to High-Risk Payment Options",
        "Better Cash Flow Management",
        "Increased Customer Trust",
        "Customizable Payment Solutions",
        "Streamlined Dispute Resolution",
        "Comprehensive Reporting Tools",
        "Improved Merchant Support",
        "Access to Industry-Specific Insights",
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
      title: "Upload Your Latest Statements",
      desc: "We securely collect 1–3 months of processing data.",
    },
    {
      num: "02.",
      title: "Comprehensive Review",
      desc: "Our analysts audit fees, chargebacks, and gateway health.",
    },
    {
      num: "03.",
      title: "Receive Detailed Report",
      desc: "You get a breakdown of savings, risks, and performance.",
    },
    {
      num: "04.",
      title: "Implementation Guidance",
      desc: "We help improve or migrate to better pricing.",
    },
  ];


  
  return (
    <>
      <HeroSection
        title="Optimize Your Merchant Account with"
        highlightText=" Expert Analysis"
        subtitle="Uncover hidden fees, reduce chargeback risk, and improve processing performance with Paylinkly’s in-depth Merchant Account Analysis."
        buttonText="Request a Free Account Review"
        buttonLink="#"
        backgroundImage={HeroBg}
      />
      <section className="pt-5 md:pt-15 lg:pt-24">
        <PaymentForm
        title="Get clarity, uncover savings, and"
        highlightText="protect your business"
        subtitle="Tell us a bit about your business and we’ll set you up with our merchant account analysis services."
        features={featuresList} />
      </section>

      <section>
        <PaymentBoxes
          paymentsRef={null}
          isVisible={true}
          title="Why Merchant Account Analysis"
          highlight=" Matters"
          description="Want to optimize your merchant account? Reduce chargebacks? Protect your revenue? Step into the future! With Paylinkly, you'll enjoy:"
          features={[
            {
              icon: EnergyIcon,
              title: "Identify and eliminate hidden or redundant charges",
            },
            {
              icon: BagIcon,
              title: "Optimize gateway routing and processor logic",
            },
            {
              icon: CheckIcon,
              title: "Deploy early alerts and fraud filters",
            },
            {
              icon: HeadphonesIcon,
              title: "24/7 Merchant Support — Real humans, not chatbots.",
            },
            {
              icon: LockIcon,
              title: "Improve your risk profile with documentation",
            },
            {
              icon: CurlyArrowIcon,
              title:
                "Centralize all merchant data into one clear dashboard",
            },
          ]}
        />
      </section>

      <>
      <CardsSection
      title="What You’ll Receive in" 
      highlighted=" your Report"
      subtitle="After your analysis, you get a detailed Merchant Performance Report including:"
      />
      </>
      
  

      <section>
        <CustomSlider
          slides={mySlides}
          heading="Merchant Account Analysis"
          highlight=" Perfect"
          heading2=" for:"
          subheading="Discover why merchant account analysis is essential for eCommerce, SaaS Platforms, and Global Merchants."
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
    primaryBtn: { label: "Try It Free", href: "/signup" },
    secondaryBtn: { label: "Watch Demo", href: "/demo" },
  }}
/>
      </section>
    </>
  );
};

export default MerchantAccount;


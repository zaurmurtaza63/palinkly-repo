import React from "react";
import HeroSection from "./HeroSection";
import PaymentForm from "./PaymentForm";
import PaymentBoxes from "./PaymentBoxes";
import CustomSlider from "./HeroSlider";
import CustomMarquee from "./CustomMarquee";
import Testimonials from "./Testimonials";
import Representment from "./Representment"
import HeroBg from "../assets/Images/stop-prevent.webp"


// custom slider images
import UniImg from "../assets/Images/ACH-slider-img.svg";
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


const StopAndPreventFraud = () => {
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

  // representment section
  const featuresListLeft = [
    "Lost revenue from stolen cards",
    "Expensive chargeback fees",
    "Frozen funds or terminated accounts",
    "Damaged reputation with processors",
  ];

  const featuresListRight = [
    "Stop attacks in real time",
    "Lower chargeback ratios",
    "Improve approval rates",
    "Maintain merchant compliance",
    "Safeguard your data and customers",
  ];


  // Slider Data
  const mySlides = [
    {
      title: "High-Risk Merchants",
      sub: "High-risk businesses require robust fraud prevention to protect against substantial financial losses, maintain their reputation, and ensure compliance. Paylinkly delivers advanced solutions tailored for high-risk sectors, minimizing risks and maximizing profitability.",
      cta: { label: "Get Started For Free", href: "#" },
      device: UniImg,
      features: [
        "Enhanced Customer Trust",
        "Lower Fraudulent Transactions",
        "Improved Compliance with Regulations",
        "Increased Revenue Through Secure Transactions",
        "Advanced Analytics for Behavior Monitoring",
        "Rapid Identification of Suspicious Activities",
        "Minimized Financial Losses",
        "Seamless Integration with Existing Systems",
        "Proactive Risk Management Strategies",
        "24/7 Monitoring and Support",
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
      title: "Activate Fraud Protection",
      desc: "Enable it from your Paylinkly dashboard.",
    },
    {
      num: "02.",
      title: "Customize Your Filters",
      desc: "Set fraud rules, thresholds, and block lists.",
    },
    {
      num: "03.",
      title: "Monitor Transactions in Real Time",
      desc: "Approve, challenge, or block with one click.",
    },
    {
      num: "04.",
      title: "Review and Learn",
      desc: "Adjust filters using analytics to enhance your fraud score.",
    },

  ];


  return (
    <>
      <HeroSection
        highlightText="Stop and Prevent "
        title2="Fraud Before It Costs You"
        subtitle="Protect your business with real-time fraud detection, risk scoring, and AI-powered transaction monitoring — all built into the Paylinkly platform."
        buttonText="Activate Fraud Protection"
        buttonLink="#"
        backgroundImage={HeroBg}
      />

      <section className="pt-5 md:pt-15 lg:pt-24">
        <PaymentForm
          title="Fraud isn’t just expensive — it’s"
          highlightText="exhausting."
          subtitle="Tell us a bit about your business and we’ll set you up with the best fraud prevention services."
          features={featuresList} />
      </section>

      <section className="pt-5 md:pt-15 lg:pt-24">
        <Representment
          title="Why"
          highlightText=" Fraud Prevention"
          title2="Matters"
          subtitle="Fraud prevention is critical for businesses because it reduces financial losses, protects brand reputation, and maintains customer trust. With Paylinkly, you'll get:"
          representmentTitle="Without advanced fraud protection, you face:"
          withoutpaylinklyTitle="With Paylinkly Fraud Defense, you can:"
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
              title: "Fraud protection for all merchants.",
            },
            {
              icon: BagIcon,
              title: "Real-time machine learning and adaptive risk logic",
            },
            {
              icon: CheckIcon,
              title: "Multi-gateway and multi-channel coverage",
            },
            {
              icon: HeadphonesIcon,
              title: "Automated alerts and manual analyst review",
            },
            {
              icon: LockIcon,
              title: "Transparent reporting and full control",
            },

          ]}
        />
      </section>

      <section>
        <CustomSlider
          slides={mySlides}
          heading="Fraud Prevention Services "
          highlight=" Ideal"
          heading2=" for:"
          subheading="Find out how we fraud prevention is absolutely necessary for eCommerce Stores, Tech & SaaS Platforms, and High-Risk / International Merchants."
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
            title: "How It Works –",
            highlight: " Simple 4-Step Process",
            title2: "",
            description: "Our system uses a streamlined four-step process to prevent fraud. Benefit from unparalleled efficiency, from immediate warnings to automatic actions.",
          }}
          steps={stepsData}
          image={FourStepImg}
        />
      </section>


      {/* TESTIMONIALS */}
      <section className="lg:pt-24 md:pb-16 pt-7">
        <Testimonials
          cta={{
            title: "Protect Every Transaction with",
            highlight: " Smart Fraud Prevention",
            title2: "",
            des: "Apply now to activate Paylinkly’s AI-powered Fraud Detection Suite and stop fraudulent activity before it reaches your bank.",
            primaryBtn: { label: "Apply Now", href: "/signup" },
            secondaryBtn: { label: "Schedule a Demo", href: "/demo" },
          }}
        />
      </section>
    </>
  );
};

export default StopAndPreventFraud;

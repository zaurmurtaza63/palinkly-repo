import React from "react";
import HeroSection from "./HeroSection";
import PaymentForm from "./PaymentForm";
import PaymentBoxes from "./PaymentBoxes";
import CustomSlider from "./HeroSlider";
import CustomMarquee from "./CustomMarquee";
import Testimonials from "./Testimonials";
import Representment from "./Representment"
import HeroBg from "../assets/Images/chargeback-services.webp"

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

const ChargeBackRepresents = () => {
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
    "Lost revenue on false chargebacks",
    "Manual paperwork and long response times",
    "Poor merchant reputation & high chargeback ratio",
    "Missed response deadlines",
  ];

  const featuresListRight = [
    "Recovered funds through evidence-backed resubmission",
    " Automated case handling and faster resolution",
    "Reduced risk and improved processing stability",
    "Guaranteed 24–48 hour turnaround",
  ];

  // Slider Data
  const mySlides = [
    {
      title: "High-Risk Merchants",
      sub: "Frequent false claims can significantly disrupt operations and lead By utilizing expert-managed evidence and ensuring compliance, businesses can effectively navigate these challenges, presenting a robust defense that minimizes the impact of such claims and protects their interests.",
      cta: { label: "Get Started For Free", href: "#" },
      device: UniImg,
      features: [
        "Lower Transaction Fees",
        "Access to Educational Discounts",
        "Enhanced Financial Transparency",
        "Flexible Payment Schedules",
        "Dedicated Customer Support",
        "Improved Cash Flow Management",
        "User-Friendly Integration with Existing Systems",
        "Secure and Compliant Transactions",
        "Ability to Accept Recurring Donations",
        "Support for Grants and Fundraising Initiatives",
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
    title: "Identify the Dispute",
    desc: "The system flags eligible chargebacks automatically.",
  },
  {
    num: "02.",
    title: "Collect Evidence",
    desc: "Data and documents are retrieved from your gateway or CRM.",
  },
  {
    num: "03.",
    title: "Expert Review",
    desc: "Our analysts verify completeness and accuracy.",
  },
  {
    num: "04.",
    title: "Submit Representation",
    desc: "The packet is resubmitted to the issuer for review.",
  },
  {
    num: "05.",
    title: "Track Outcome",
    desc: "Monitor your win rate and recovery amount in real time.",
  },
  ];

  return (
    <>
      <HeroSection
        highlightText="Win Disputes"
        title2="with Chargeback Representment"
        subtitle="Recover lost revenue, defend legitimate sales, and protect your merchant account — with Paylinkly’s automated representment system and expert dispute handling."
        buttonText="Start Winning Chargebacks"
        buttonLink="#"
        backgroundImage={HeroBg}
      />
      <section className="pt-5 md:pt-15 lg:pt-24">
        <PaymentForm
          title="Every lost chargeback is lost revenue —"
          highlightText=" and lost trust."
          subtitle="Tell us a bit about your business and we’ll set you up with the best chargeback services."
          features={featuresList}
        />
      </section>

      <section className="pt-5 md:pt-15 lg:pt-24">
        <Representment
          title="Why"
          highlightText=" Representment"
          title2=" Matters"
          subtitle="Chargeback representment is essential for businesses because it protects revenue, safeguards merchant accounts, and ensures fair resolution of disputes. With Paylinkly, you'll get:"
          representmentTitle="Without Representment"
          withoutpaylinklyTitle="With Paylinkly"
          representmentfeatures={featuresListLeft}
          withoutpaylinkly={featuresListRight}
        />
      </section>

      <section>
        <PaymentBoxes
          paymentsRef={null}
          isVisible={true}
          title="Why Businesses Choose"
          highlight=" Paylinkly"
          title2="for Representment"
          description="Do you need chargeback representment? Do you want simple integration? Are you looking for automated dispute resolution? Step into the future! With Paylinkly Chargeback Management, you'll enjoy:"
          features={[
            {
              icon: EnergyIcon,
              title: "Automated dispute intelligence and rule-based workflows",
            },
            {
              icon: BagIcon,
              title: "Human expert review for final compliance checks",
            },
            {
              icon: CheckIcon,
              title: "High success rate across multiple industries",
            },
            {
              icon: HeadphonesIcon,
              title: "Centralized dashboard for all disputes and recoveries",
            },
            {
              icon: LockIcon,
              title: "Works seamlessly with your existing gateways",
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
            highlight: " Simple 5-Step Process",
            title2: "",
            description:
              "See how our chargeback representment system simplifies everything in five steps. From immediate alerts to automatic defenses, discover peak efficiency.",
          }}
          steps={stepsData}
          image={FourStepImg}
        />
      </section>

      {/* TESTIMONIALS */}
      <section className="lg:pt-24 md:pb-16 pt-7">
        <Testimonials
          cta={{
            title: "Ready to Win More",
            highlight: " Chargebacks?",
            title2: "",
            des: "Join thousands of merchants using Paylinkly’s Representment Services to recover lost revenue and protect their processing accounts.",
            primaryBtn: { label: "Apply Now", href: "/signup" },
            secondaryBtn: { label: "Schedule a Demo", href: "/demo" },
          }}
        />
      </section>
    </>
  );
};

export default ChargeBackRepresents;

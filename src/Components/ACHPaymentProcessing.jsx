import React from "react";
import HeroSection from "./HeroSection";
import PaymentForm from "./PaymentForm";
import PaymentBoxes from "./PaymentBoxes";
import CustomSlider from "./HeroSlider";
import CustomMarquee from "./CustomMarquee";
import Testimonials from "./Testimonials";
import HeroBg from "../assets/Images/ach.webp"


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


const ACHPaymentProcessing = () => {
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
      title: "Education and Nonprofits",
      sub: "Tuition fees and donations are essential components of our funding model, and we strive to keep these costs as low as possible while ensuring quality education. ",
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
      title: "Customer Authorizes Payment",
      desc: "They enter their bank details or sign an authorization form.",
    },
    {
      num: "02.",
      title: "Funds Transfer Initiated",
      desc: "The ACH network securely transfers money between banks.",
    },
    {
      num: "03.",
      title: "Transaction Processes",
      desc: "Typically clears in 1–2 business days (or same-day ACH)..",
    },
    {
      num: "04.",
      title: "You Receive Funds",
      desc: "Funds are deposited into your bank account.",
    },
  ];
  

  return (
    <>
      <HeroSection
        title="Process Bank Payments easily with"
        highlightText="— ACH Solutions"
         subtitle="Accept direct bank transfers with lower fees, fewer chargebacks, and faster settlement — powered by Paylinkly’s trusted payment network."
        buttonText="Start ACH Payments Today"
        backgroundImage={HeroBg}
      />
      <section className="pt-5 md:pt-15 lg:pt-24">
        <PaymentForm
         features={featuresList} />
      </section>

      <section>
        <PaymentBoxes
          paymentsRef={null}
          isVisible={true}
          title="Why Businesses Choose Paylinkly for"
          highlight=" ACH Processing"
          title2=""
          description="Is security a top priority? Are you looking for transparent pricing? Ready to move beyond outdated payment methods? Make the switch today! With Paylinkly ACH Payment Processing, you'll gain:"
          features={[
            {
              icon: EnergyIcon,
              title: "Use ACH payments in any channel",
            },
            {
              icon: BagIcon,
              title: "Great for recurring invoices, memberships, or B2B.",
            },
            {
              icon: CheckIcon,
              title: "Paylinkly offers protection for ACH transactions.",
            },
            {
              icon: HeadphonesIcon,
              title: "ACH payments average 0.5% per transaction.",
            },
            {
              icon: LockIcon,
              title: "Quick and Secure Bank Transfers Made Easy",
            },
            
          ]}
        />
      </section>

      <section>
        <CustomSlider
          slides={mySlides}
          heading="ACH Processing "
          highlight=" Perfect"
          heading2=" for:"
          subheading="Find out how we are ideal for healthcare, retail, and e-commerce businesses."
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
            title: "How",
            highlight: " ACH Payments",
            title2: "Work",
            description:"Learn how our ACH payment system streamlines transactions in four simple steps. Benefit from secure encryption and swift transfers for a seamless experience.",
          }}
          steps={stepsData}
          image={FourStepImg}
        />
      </section>


        {/* TESTIMONIALS */}
      <section className="lg:pt-24 md:pb-16 pt-7">
        <Testimonials
  cta={{
    title: "Start",
    highlight: " Accepting",
    title2: " ACH Payments Today",
    des: "Apply now to activate direct bank payments with lower fees and faster funding. Approvals in 24–48 hours.",
    primaryBtn: { label: "Apply Now", href: "/signup" },
    secondaryBtn: { label: "Schedule a Demo", href: "/demo" },
  }}
/>
      </section>
    </>
  );
};

export default ACHPaymentProcessing;

import React from "react";
import HeroSection from "./HeroSection";
import PaymentForm from "./PaymentForm";
import PaymentBoxes from "./PaymentBoxes";
import CustomSlider from "./HeroSlider";
import CustomMarquee from "./CustomMarquee";
import TabsSection from "./TabsSection";
import Testimonials from "./Testimonials";
import HeroBg from "../assets/Images/credit-card-new.webp"



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

// Tabs Section Images
import FirstTabImg from "../assets/Images/first_tab_img.svg";
import SecondTabImg from "../assets/Images/second_tab_img.svg";
import ImgArrow from "../assets/Images/img-arrow.svg";

const RetailCredit = () => {
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
      title: "Integrate and Go Live",
      desc: "Connect your website, mobile app, or terminal in minutes.",
    },
    {
      num: "04.",
      title: "Accept Payments and Get Paid",
      desc: "Funds are deposited into your bank account securely.",
    },
  ];

  const tabs = [
    "Countertop Terminals",
    "Mobile Card Readers",
    "Smart POS Systems",
    "Portable Solutions",
  ];

  // Tabs Content Data
  const content = {
    CheckIcon, // ✅ Available everywhere
    "Countertop Terminals": {
      title: "Countertop Terminals",
      desc: "Our countertop terminals are equipped with EMV chip card readers, NFC/contactless payment capabilities, built-in receipt printers, multi-application support, and end-to-end encryption for secure transactions.",
      features: [
        " EMV chip card ready",
        " NFC/contactless payments",
        " Built-in receipt printers",
        " Multi-application support",
        " End-to-end encryption",
      ],
      boxTitle: "Clover Station Duo",
      boxText: "Full POS system with customer-facing display",
      TabImg: FirstTabImg,
      BoxArrowImg: ImgArrow,
    },
    "Mobile Card Readers": {
      title: "Mobile Card Readers",
      desc: "Take payments on the go with mobile card readers that connect via Bluetooth or USB, ideal for food trucks, delivery services, and on-site professionals.",
      features: [
        " Connects via Bluetooth or USB",
        " Supports tap, chip, and swipe",
        " Long battery life",
        " Instant digital receipts",
        " Lightweight & portable",
      ],
      boxTitle: "PayLink Reader Pro",
      boxText: "Compact, mobile, and built for fast transactions",
      TabImg: SecondTabImg,
      BoxArrowImg: ImgArrow,
    },
    "Smart POS Systems": {
      title: "Smart POS Systems",
      desc: "Streamline your checkout process with smart POS systems that integrate analytics, inventory tracking, and multi-terminal synchronization.",
      features: [
        " Built-in analytics dashboard",
        " Inventory management",
        " Multi-terminal sync",
        " Cloud data backup",
        " Encrypted data security",
      ],
      boxTitle: "SmartHub X2",
      boxText: "Next-gen POS with cloud sync and advanced insights",
      TabImg: FirstTabImg,
      BoxArrowImg: ImgArrow,
    },
    "Portable Solutions": {
      title: "Portable Solutions",
      desc: "Accept payments anywhere using compact terminals with built-in wireless, 4G LTE, and all payment method support.",
      features: [
        " Works with Wi-Fi & 4G LTE",
        " Extended battery life",
        " All payment types supported",
        " Multi-currency ready",
        " Pocket-sized convenience",
      ],
      boxTitle: "SwiftPay Mini",
      boxText: "Wireless POS that fits in your palm",
      TabImg: FirstTabImg,
      BoxArrowImg: ImgArrow,
    },
  };

  return (
    <>
      <HeroSection
        title="Accept Credit Cards"
        highlightText="Anywhere, Anytime"
        subtitle="Power your business with secure, flexible credit card processing — whether you sell online, in-store, or on the go."
        buttonText="Try Invoicing Now"
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
          title="Why Choose"
          highlight=" Paylinkly"
          title2=" for Credit Card Processing"
          description="Manual billing. Paper invoices. Late payments. It’s time-consuming and costly. With the Paylinkly Invoicing System, you get:"
          features={[
            {
              icon: EnergyIcon,
              title: "Get approved within 24–48 hours for most business types.",
            },
            {
              icon: BagIcon,
              title: "All Card Brands Accepted — Visa, Mastercard, AMEX, etc.",
            },
            {
              icon: CheckIcon,
              title: "No Hidden Fees — Transparent rates, simple billing.",
            },
            {
              icon: HeadphonesIcon,
              title: "24/7 Merchant Support — Real humans, not chatbots.",
            },
            {
              icon: LockIcon,
              title: "Secure and Compliant — PCI-DSS, EMV, and tokenization.",
            },
            {
              icon: CurlyArrowIcon,
              title:
                "Scalable — From startups to enterprises, we grow with you.",
            },
          ]}
        />
      </section>

      <section>
        <CustomSlider
          slides={mySlides}
          heading="Integrated with"
          highlight=" Leading"
          heading2=" Gateways"
          subheading="Paylinkly’s credit card processing is powered by three global leaders:"
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

      {/* TABS SECTION */}
     <section>
       <TabsSection
        header={{
          title: "Accept Payments Anywhere with",
          highlight: "Advanced POS Systems",
        }}
        tabs={tabs}
        content={content}
        defaultTab="Countertop Terminals"
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

export default RetailCredit;

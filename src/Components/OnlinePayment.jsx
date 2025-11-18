import React from "react";
import HeroSection from "./HeroSection";
import PaymentForm from "./PaymentForm";
import PaymentBoxes from "./PaymentBoxes";
import CustomSlider from "./HeroSlider";
import CustomMarquee from "./CustomMarquee";
import TabsSection from "./TabsSection";
import Testimonials from "./Testimonials";


// custom slider images
import NmiLogo from "../assets/Images/nmi-logo.svg";
import ATM_Machine from "../assets/Images/atm-machine.svg";

// payment-boxes custom icons
import EnergyIcon from "../assets/Images/paid.svg";
import CheckIcon from "../assets/Images/check.svg";
import BagIcon from "../assets/Images/line-bag.svg";
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

const OnlinePayment = () => {
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
      cta: { label: "Set Up NMI Gateway", href: "#" },
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
      title: "Apply Online",
      desc: "Submit your business details for quick approval.",
    },
    {
      num: "02.",
      title: "Select a Gateway",
      desc: "Choose NMI, Authorize.Net, or Payarc for integration.",
    },
    {
      num: "03.",
      title: "Integrate Payments",
      desc: "Add hosted checkout, embedded form, or API.",
    },
    {
      num: "04.",
      title: "Start Accepting Payments",
      desc: "Go live within days and receive instant deposits.",
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
        title="Accept Online Payments with"
        highlightText="Confidence"
        subtitle="Enable secure, seamless transactions on your website or app — powered by Paylinkly’s trusted online payment gateways."
        buttonText="Start Accepting Online Payments"
        buttonLink="#"
        backgroundImage="online-payment-hero-img"
      />
      <section className="pt-5 md:pt-15 lg:pt-24">
        <PaymentForm features={featuresList} />
      </section>

      <section>
        <PaymentBoxes
          paymentsRef={null}
          isVisible={true}
          title="Why Businesses Choose"
          highlight=" Paylinkly"
          description="Worried about security? Tired of hidden fees? Sticking with outdated systems? Upgrade today! With Paylinkly Online Payment Processing, you'll receive:"
          features={[
            {
              icon: EnergyIcon,
              title: "Go live in less than 48 hours with instant sandbox testing.",
            },
            {
              icon: CheckIcon,
              title: "No hidden fees — clear interchange / flat-rate models.",
            },
            {
              icon: BagIcon,
              title: "Choose from NMI, Authorize.Net, or Payarc.",
            },
            {
              icon: HeadphonesIcon,
              title: "Sell globally with built-in conversion.",
            },
            {
              icon: LockIcon,
              title: "White-label checkout pages that match your website.",
            },
          ]}
        />
      </section>

      <section>
        <CustomSlider
          slides={mySlides}
          heading="Your online transactions are backed by "
          highlight=" industry leaders:"
          subheading="All three gateways are fully PCI DSS Level-1 certified, giving your business bank-grade security."
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
    title: "Start",
    highlight: " Accepting",
    title2: " Online Payments Today ",
    des: "Get approved and integrate your website or app with Paylinkly’s secure payment gateways in under 48 hours.",
    secondaryBtn: { label: "Schedule a Demo", href: "/signup" },
    primaryBtn: { label: "Apply Now", href: "/demo" },
  }}
/>
      </section>
    </>
  );
};

export default OnlinePayment;

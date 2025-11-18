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

// Four Step Process
import FourStepProcess from "./FourStepProcess";
import FourStepImg from "../assets/Images/why-choose-us-img.svg";

// Tabs Section Images
import FirstTabImg from "../assets/Images/first_tab_img.svg";
import SecondTabImg from "../assets/Images/second_tab_img.svg";
import ImgArrow from "../assets/Images/img-arrow.svg";

const RetailCreditCard = () => {
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
      title: "Boutiques and Apparel Stores",
      sub: "Explore our stylish POS terminals that enhance your retail space and streamline operations. Our barcode scanners ensure quick transactions, while inventory integration keeps stock levels in check.",
      cta: { label: "Get Started For Free", href: "#" },
      phone: NmiLogo,
      device: ATM_Machine,
      features: [
        "Simplified Transaction Reporting",
        "Competitive Processing Rates",
        "Seamless Integration with POS Systems",
        "Enhanced Security Features",
        "24/7 Customer Support",
        "Customizable Payment Solutions",
        "Real-Time Analytics and Insights",
        "Flexible Payments for Customers",
        "Loyalty Program Integration",
        "User-Friendly Dashboard",
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
      desc: "Complete a form to find the best gateway and pricing.",
    },
    {
      num: "02.",
      title: "Select Your POS Setup",
      desc: "Choose from wired, wireless, or mobile terminals.",
    },
    {
      num: "03.",
      title: "Connect and Configure",
      desc: "Devices come pre-programmed with your merchant ID.",
    },
    {
      num: "04.",
      title: "Start Selling and Get Paid",
      desc: "Accept cards instantly, with next-day deposits.",
    },
  ];
  const tabs = [
    "Countertop Terminals",
    "Mobile Card Readers",
    "Smart POS Systems",
    "Portable Solutions",
  ];

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
        title=""
        highlightText="Smart, Secure"
        title2="Retail Credit Card Processing"
        subtitle="Accept chip, tap, or swipe payments at your counter — powered by Paylinkly’s trusted merchant network and gateway partners NMI, Authorize.Net, and Payarc."
        buttonText="Get Started For Free"
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
          title="Why Retailers Choose"
          highlight=" Paylinkly"
          title2=""
          description="Outdated terminals. Excessive fees. Data breaches. It's time for a change. With Paylinkly Retail Credit Card Processing, you'll receive:"
          features={[
            {
              icon: EnergyIcon,
              title: "Fast deposits to your account every business day.",
            },
            {
              icon: BagIcon,
              title: "EMV chip, contactless (NFC), and magnetic-stripe support",
            },
            {
              icon: CheckIcon,
              title: "Choose from our fully certified POS hardware line-up",
            },
            {
              icon: HeadphonesIcon,
              title: "Secure and Compliant — PCI-DSS, EMV, and tokenization.",
            },
            {
              icon: LockIcon,
              title: "Use Paylinkly’s discount or surcharge programs.",
            },
            
          ]}
        />
      </section>

      <section>
        <CustomSlider
          slides={mySlides}
          heading="For Every Type of"
          highlight=" Retail Business"
          heading2=""
          subheading="Paylinkly's credit card processing solutions are tailored for:"
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
          title: "Seamless",
          highlight: " Integration",
          title2: " and Management",
          des:"Integrate seamlessly with POS systems like Clover, Vend, and Square, as well as accounting software and custom integrations via REST API.",
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
    title: "Need Help",
    highlight: " Choosing",
    title2: " the Right Setup?",
    des: "Our payment specialists will help you find the ideal POS system and merchant program for your business size and transaction volume.",
    primaryBtn: { label: "Talk to a Specialist", href: "/signup" },
    secondaryBtn: { label: "Compare Devices", href: "/demo" },
  }}
/>
      </section>
    </>
  );
};

export default RetailCreditCard;

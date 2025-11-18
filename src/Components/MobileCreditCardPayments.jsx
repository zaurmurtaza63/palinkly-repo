import React from "react";
import HeroSection from "./HeroSection";
import PaymentForm from "./PaymentForm";
import PaymentBoxes from "./PaymentBoxes";
import CustomSlider from "./HeroSlider";
import TabsSection from "./TabsSection";
import Testimonials from "./Testimonials";
import HeroBg from "../assets/Images/mobile-credit-card.webp"



// custom slider images
import NmiLogo from "../assets/Images/nmi-logo.svg";
import ATM_Machine from "../assets/Images/atm-machine.svg";

// payment-boxes custom icons
import EnergyIcon from "../assets/Images/paid.svg";
import CheckIcon from "../assets/Images/check.svg";
import BagIcon from "../assets/Images/paymentMethod.svg";
import LockIcon from "../assets/Images/lock.svg";
import CurlyArrowIcon from "../assets/Images/curlyArrow.svg";

// Four Step Process
import FourStepProcess from "./FourStepProcess";
import FourStepImg from "../assets/Images/why-choose-us-img.svg";

// Tabs Section Images
import FirstTabImg from "../assets/Images/first_tab_img.svg";
import SecondTabImg from "../assets/Images/second_tab_img.svg";
import ImgArrow from "../assets/Images/img-arrow.svg";

const MobileCreditCardPayments = () => {
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
      desc: "Submit a quick mobile merchant application.",
    },
    {
      num: "02.",
      title: "Download the App",
      desc: "iOS or Android, with secure login and device pairing.",
    },
    {
      num: "03.",
      title: "Connect Your Reader",
      desc: "Pair Bluetooth or use a standalone mobile terminal.",
    },
    {
      num: "04.",
      title: "Start Accepting Payments",
      desc: "Tap, chip, or swipe, and funds go straight to your bank.",
    },
  ];
  const tabs = [
    "QuickBooks and Xerox",
    "Inventory and CRM systems",
    "REST API & SDK",
    "Multi-location reporting",
  ];

const content = {
    CheckIcon, // ✅ Available everywhere
    "QuickBooks and Xerox": {
      title: "QuickBooks and Xerox",
      desc: "Our QuickBooks and Xerox are equipped with EMV chip card readers, NFC/contactless payment capabilities, built-in receipt printers, multi-application support, and end-to-end encryption for secure transactions.",
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
    "Inventory and CRM systems": {
      title: "Inventory and CRM systems",
      desc: "Take payments on the go with Inventory and CRM systems that connect via Bluetooth or USB, ideal for food trucks, delivery services, and on-site professionals.",
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
    "REST API & SDK": {
      title: "REST API & SDK",
      desc: "Streamline your checkout process with REST API & SDK that integrate analytics, inventory tracking, and multi-terminal synchronization.",
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
    "Multi-location reporting": {
      title: "Multi-location reporting",
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
        title="Accept Payments Anywhere —"
        highlightText="Right from Your Phone"
        subtitle="Turn your smartphone or tablet into a secure card terminal and start taking payments anywhere your business goes — powered by Paylinkly’s mobile merchant network."
        buttonText="Get Started Now"
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
          title="Why Mobile Merchants Choose"
          highlight=" Paylinkly"
          title2=""
          description="Legacy systems? High transaction costs? Security concerns? It's time to upgrade. With Paylinkly Mobile Credit Card Processing, you'll receive:"
          features={[
            {
              icon: EnergyIcon,
              title: "Download the app, link your account, and start processing.",
            },
            {
              icon: BagIcon,
              title: "Accept major cards with portable EMV mobile readers.",
            },
            {
              icon: CheckIcon,
              title: "Customers receive digital receipts via SMS or email.",
            },
            {
              icon: LockIcon,
              title: "Secure and Compliant — PCI-DSS, EMV, and tokenization.",
            },
            {
              icon: CurlyArrowIcon,
              title: "Securely queue transactions with our mobile systems.",
            },
          ]}
        />
      </section>

      <section>
        <CustomSlider
          slides={mySlides}
          heading="Powerful"
          highlight=" Gateways Partners"
          heading2=""
          subheading="Paylinkly’s credit card processing is powered by three global leaders:"
        />
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
          title: "POS &",
          highlight: "Hardware",
          title2: " Options",
          des:"Upgrade your checkout experience with Paylinkly’s supported hardware lineup:",
        }}
        tabs={tabs}
        content={content}
        defaultTab="QuickBooks and Xerox"
      />
     </section>

        {/* TESTIMONIALS */}
      <section className="lg:pt-24 md:pb-16 pt-7">
        <Testimonials
  cta={{
    title: "Ready to Go",
    highlight: " Mobile?",
    title2: "",
    des: "Apply now and start accepting payments from your phone or tablet within 24 hours.",
    primaryBtn: { label: "Apply Now", href: "/signup" },
    secondaryBtn: { label: "Schedule a Demo", href: "/demo" },
  }}
/>
      </section>
    </>
  );
};

export default MobileCreditCardPayments;

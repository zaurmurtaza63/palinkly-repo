import React, { useEffect, useState, useRef } from "react";
import BottomLogoText from "../assets/Images/bottom-logo-text.svg";
import AdvancedIcon from "../assets/Images/Vector.svg";
import Integration from "../assets/Images/integration.svg";
import Subscription from "../assets/Images/subscription.svg";
import Terminal from "../assets/Images/terminal.svg";
import PaymentMethod from "../assets/Images/paymentMethod.svg";
import CardsSection from "./CardsSection"
import SplitText from "./SplitText";
import { Link } from "react-router-dom";

// Components
import Testimonials from "./Testimonials";
import TabsSection from "./TabsSection";
import CustomSlider from "./HeroSlider";
import PaymentBoxes from "./PaymentBoxes";

// custom slider images
import NmiLogo from "../assets/Images/nmi-logo.svg";
import ATM_Machine from "../assets/Images/atm-machine.svg";

// Tabs Section Images
import FirstTabImg from "../assets/Images/first_tab_img.svg";
import SecondTabImg from "../assets/Images/second_tab_img.svg";
import ImgArrow from "../assets/Images/img-arrow.svg";
import CheckIcon from "../assets/Images/check.svg";


const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isCounterVisible, setIsCounterVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({
    volume: 0,
    transactions: 0,
    uptime: 0,
  });

  const tailoredRef = useRef(null);
  const paymentsRef = useRef(null);
  const counterRef = useRef(null);
  const finalRef = useRef(null);

  // HERO animation
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  // Tailored animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsTailoredVisible(true);
      },
      { threshold: 0.2 }
    );

    if (tailoredRef.current) observer.observe(tailoredRef.current);
    return () => observer.disconnect();
  }, []);

  // Payments section animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsPaymentsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (paymentsRef.current) observer.observe(paymentsRef.current);
    return () => observer.disconnect();
  }, []);

  // Counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsCounterVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.4 }
    );

    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  // Final CTA section animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsFinalVisible(true);
      },
      { threshold: 0.3 }
    );

    if (finalRef.current) observer.observe(finalRef.current);
    return () => observer.disconnect();
  }, []);

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

    const tabs = [
        "Countertop Terminals",
        "Mobile Card Readers",
        "Smart POS Systems",
        "Portable Solutions",
      ];
    
      // Tabs Content Data
      const content = {
        CheckIcon,
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

  // Counter logic
  useEffect(() => {
    if (!isCounterVisible) return;

    const duration = 2000;
    const frameRate = 30;
    const steps = duration / frameRate;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      setCounts({
        volume: Math.min(50 * (currentStep / steps), 50),
        transactions: Math.min(500000 * (currentStep / steps), 500000),
        uptime: Math.min(99.9 * (currentStep / steps), 99.9),
      });

      if (currentStep >= steps) clearInterval(interval);
    }, frameRate);

    return () => clearInterval(interval);
  }, [isCounterVisible]);

  return (
    <>
      {/* HERO SECTION */}
      <section
        className={`hero-bg-img bg-cover bg-center relative w-full flex flex-col items-center justify-center text-center px-6 md:px-8 pb-24 pt-28 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        <div className="max-w-[1200px] flex flex-col gap-4 justify-center items-center mx-auto">
          <h1 className="main-heading  lg:tracking-[-2.56px] md:tracking-[-1.56px] tracking-[-0.56px] gradient-text leading-tight">
            <SplitText>
              Fast and Secure Platform for <br />
              <span className="blue-text">Merchant Solutions</span>
            </SplitText>
          </h1>

          <p className="gradiant-para text-base max-w-[700px] mx-auto">
            Process payments seamlessly, reduce chargebacks, and grow your
            business with secure, customized merchant services powered by
            industry-leading gateways.
          </p>

          <Link to="/leads">
          <button className="hover:cursor-pointer blue-btn max-w-fit hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 text-white font-bold">
            Get Started Today
          </button>
          </Link >

        </div>
        {/* FLOATING HERO CARDS */}
       <div className="relative justify-center mt-16 pointer-events-none hidden md:flex">
          <div className="flex pointer-events-auto">
            {/* LEFT CARD */}
            <div className="left-card hero-card rotate-[-8deg] hover:rotate-0 z-0" />

            {/* CENTER CARD */}
            <div className="center-card hero-card scale-[1.05] z-10 hover:scale-[1.12]" />

            {/* RIGHT CARD */}
            <div className="right-card hero-card rotate-[8deg] hover:rotate-0 z-0" />
          </div>
        </div>
      </section>

       <section>
      <CardsSection
      title="Tailored Solutions for" 
      highlighted=" Every Industry"
      subtitle="We provide tailored merchant solutions for every industry, from adult services to travel and timeshares. Find the perfect fit for your unique business needs."
      />
     </section>

      {/* SLIDER SECTION */}
      <section>
    <CustomSlider
    slides={mySlides}
    heading="Powered by Industry-Leading"
    highlight=" Payment Gateways"
    subheading="Choose from three premium payment gateways tailored to your business needs. Seamless integration, maximum flexibility."
  />
    </section>

      {/* PAYMENTS SECTION */}
      <PaymentBoxes
        title="Everything You Need to"
        highlight=" Accept Payments"
        description=" Maximize revenue and streamline operations with our integrated suite
            of payment solutions. Tailor-made for your business, ensuring
            efficiency and growth."
        bottomLogo={BottomLogoText}
        isVisible={true}
        paymentsRef={null}
        features={[
          { icon: AdvancedIcon, title: "Advanced Security", desc: "Next-gen fraud detection and AI monitoring." },
          { icon: Integration, title: "Seamless Integration", desc: "Plug into your systems with one API." },
          { icon: PaymentMethod, title: "Multiple Payment Methods", desc: "Accept cards, crypto, and bank transfers." },
          { icon: Subscription, title: "Subscription Billing", desc: "Automate recurring payments effortlessly." },
          { icon: Terminal, title: "Smart Terminals", desc: "Powerful POS systems built for speed." },
          { icon: PaymentMethod, title: "Instant Settlements", desc: "Withdraw revenue in real-time globally." },
        ]}
      />




      {/* COUNTER SECTION */}
      <section ref={counterRef} className="counter-section mt-6 md:mt-8 lg:mt-20">
        <div
          className={`max-w-[1200px] mx-auto px-5 md:px-10 text-center grid grid-cols-1 sm:grid-cols-3 lg:gap-10 gap-5 transition-all duration-1000 ease-out ${isCounterVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
            }`}
        >
          <div>
            <h1 className="main-heading counter-gradiant-text">
              ${counts.volume.toFixed(0)}M+
            </h1>
            <p className="text-gray-600 md:mt-2 text-sm md:text-base">
              In Payment Volume
            </p>
          </div>
          <div>
            <h1 className="main-heading counter-gradiant-text">
              {counts.transactions.toLocaleString()}+
            </h1>
            <p className="text-gray-600 md:mt-2 text-sm md:text-base">
              Transactions Processed Monthly
            </p>
          </div>
          <div>
            <h1 className="main-heading counter-gradiant-text">
              {counts.uptime.toFixed(1)}%
            </h1>
            <p className="text-gray-600 md:mt-2 text-sm md:text-base">
              Uptime Guarantee
            </p>
          </div>
        </div>
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
    <section className=" mt-6 md:mt-8 lg:mt-[100px] md:pb-14 pb-8">
          <Testimonials
  cta={{
    title: "Ready to Transform Your",
    highlight: " Payment Processing?",
    des: "Join thousands of merchants who trust Paylinkly for secure, reliable payment solutions.",
    primaryBtn: { label: "Get Started Now", href: "/signup" },
  }}
/>
    </section>


    </>
  );
};

export default Home;

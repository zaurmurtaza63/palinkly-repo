import React from "react";
import HeroSection from "./HeroSection";
import PaymentForm from "./PaymentForm";
import PaymentBoxes from "./PaymentBoxes";
import CustomSlider from "./HeroSlider";
import CustomMarquee from "./CustomMarquee";
import Testimonials from "./Testimonials";
import HeroBg from "../assets/Images/reduce-manage-win.webp"



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


const ReduceManageAndWinChargeBacks = () => {
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
      sub: "High-risk merchants face unique challenges. Paylinkly offers tailored chargeback solutions that include fraud prevention, dispute management, and representment, ensuring your business remains secure and profitable.",
      cta: { label: "Get Started For Free", href: "#" },
      device: UniImg,
      features: [
        "Improved Customer Management",
        "Faster Resolution Times for Disputes",
        "Increased Merchant Credibility",
        "Improved Cash Flow Management",
        "Access to Detailed Analytics and Insights",
        "Strengthened Fraud Prevention Measures",
        "Simplified Documentation Processes",
        "Greater Control Over Financial Transactions",
        "Lower Costs from Chargebacks",
        "Boosted Competitive Edge in the Market",
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
  title: "Connect Your Gateway or Processor",
  desc: "NMI, Authorize.Net, or Payarc syncs with Paylinkly.",
},
{
  num: "02.",
  title: "Enable Real-Time Alerts and Automation",
  desc: "Start intercepting disputes instantly.",
},
{
  num: "03.",
  title: "Manage Everything in One Dashboard",
  desc: "Track alerts, manage cases, and view reports.",
},
{
  num: "04.",
  title: "Win More Chargebacks",
  desc: "Let our system handle representment automatically.",
},
{
  num: "05.",
  title: "Optimize Continuously",
  desc: "Analyze results and adjust fraud filters to stay protected.",
},

  ];


  return (
    <>
      <HeroSection
        title="Reduce, Manage, Win Chargebacks —"
        highlightText=" All in One Platform"
        subtitle="Protect your revenue with Paylinkly’s complete chargeback defense system — from real-time alerts and fraud prevention to expert dispute management and representment."
        buttonText="Start Protecting Your Business"
        buttonLink="#"
        backgroundImage={HeroBg}
      />
      <section className="pt-5 md:pt-15 lg:pt-24">
        <PaymentForm
          title="Prevent chargebacks. Preserve revenue. Protect your"
          highlightText=" merchant status."
          subtitle="Tell us a bit about your business and we’ll set you up with the best chargeback services."
          features={featuresList} />
      </section>

      <section>
        <PaymentBoxes
          paymentsRef={null}
          isVisible={true}
          title="Why Businesses Choose"
          highlight=" Paylinkly"
          title2=""
          description="Do you need to manage chargebacks? Reduce chargebacks? Win chargebacks? Step into the future! With Paylinkly, you'll enjoy:"
          features={[
            {
              icon: EnergyIcon,
              title: "End-to-end chargeback lifecycle management",
            },
            {
              icon: BagIcon,
              title: "Real-time alert and representment automation",
            },
            {
              icon: CheckIcon,
              title: "Transparent reporting and measurable results",
            },
            {
              icon: HeadphonesIcon,
              title: "Expert dispute analysts available 24/7",
            },
            {
              icon: LockIcon,
              title: "Works across multiple processors and card networks",
            },

          ]}
        />
      </section>

      <section>
        <CustomSlider
          slides={mySlides}
          heading="Complete Chargeback Suite "
          highlight=" Ideal"
          heading2=" for:"
          subheading="Find out how we chargeback alerts are absolutely necessary for eCommerce Stores, Tech & SaaS Platforms, and High-Risk / International Merchants."
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
            description: "Learn how our ACH payment system streamlines transactions in four simple steps. Benefit from secure encryption and swift transfers for a seamless experience.",
          }}
          steps={stepsData}
          image={FourStepImg}
        />
      </section>


      {/* TESTIMONIALS */}
      <section className="lg:pt-24 md:pb-16 pt-7">
        <Testimonials
          cta={{
            title: "Protect Every Transaction — ",
            highlight: " Reduce, Manage and Win",
            title2: " Chargebacks with Paylinkly",
            des: "Apply now to activate your full chargeback suite — including real-time alerts, automated management, and expert representment.",
            primaryBtn: { label: "Apply Now", href: "/signup" },
            secondaryBtn: { label: "Schedule a Demo", href: "/demo" },
          }}
        />
      </section>
    </>
  );
};

export default ReduceManageAndWinChargeBacks;

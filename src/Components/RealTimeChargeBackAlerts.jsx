import React from "react";
import HeroSection from "./HeroSection";
import PaymentForm from "./PaymentForm";
import PaymentBoxes from "./PaymentBoxes";
import CustomSlider from "./HeroSlider";
import CustomMarquee from "./CustomMarquee";
import Testimonials from "./Testimonials";
import HeroBg from "../assets/Images/realtime-chargeback.webp"


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

const RealTimeChargeBackAlerts = () => {
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
      sub: "High-risk merchants need real-time chargeback alerts to protect revenue, maintain stable processing, and avoid account holds.",
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
  title: "Connect Your Gateway or Processor",
  desc: "NMI, Authorize.Net, or Payarc syncs with Paylinkly.",
},
{
  num: "02.",
  title: "Enable Real-Time Alerts",
  desc: "We activate your Visa Verifi & Mastercard Ethoca feeds.",
},
{
  num: "03.",
  title: "Receive Notifications Instantly",
  desc: "Alerts appear in your dashboard and inbox within seconds.",
},
{
  num: "04.",
  title: "Resolve and Close",
  desc: "Refund or respond to the alert before the chargeback is filed.",
},
{
  num: "05.",
  title: "Track Metrics",
  desc: "See chargeback prevention stats, win rates, and cost savings.",
},


  ];

  return (
    <>
      <HeroSection
        title="Stop Chargebacks Before They Happen"
        highlightText=" — in Real Time"
        subtitle="Get instant alerts the moment a dispute is filed, resolve issues before they escalate, and protect your merchant account with Paylinkly’s Real-Time Chargeback Alert System."
        buttonText="Activate Alerts Now"
        buttonLink="#"
        backgroundImage={HeroBg}
      />
      <section className="pt-5 md:pt-15 lg:pt-24">
        <PaymentForm
          title="Prevent chargebacks. Preserve revenue. Protect your"
          highlightText="merchant status."
          subtitle="Tell us a bit about your business and we’ll set you up with the best chargeback services."
          features={featuresList}
        />
      </section>

      <section>
        <PaymentBoxes
          paymentsRef={null}
          isVisible={true}
          title="Why Merchants Choose "
          highlight=" Paylinkly"
          title2=" for Real-Time Alerts"
          description="Do you need real-time alerts? Do you want instant notifications? Are you looking for preemptive dispute intervention? Step into the future! With Paylinkly Real-Time Alerts, you'll enjoy:"
          features={[
            {
              icon: EnergyIcon,
              title: "Multi-gateway sync (NMI, Authorize.Net, Payarc)",
            },
            {
              icon: BagIcon,
              title:
                "Works globally — for U.S., UK, EU, and Canadian merchants",
            },
            {
              icon: CheckIcon,
              title: "Chargeback success team for onboarding and optimization.",
            },
            {
              icon: HeadphonesIcon,
              title: "No additional integration required",
            },
            {
              icon: LockIcon,
              title: "Direct Visa and Mastercard network connectivity",
            },
          ]}
        />
      </section>

      <section>
        <CustomSlider
          slides={mySlides}
          heading="Real-time Chargeback Alerts"
          highlight=" Necessary"
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
            title: "How It Works –",
            highlight: " Simple 5-Step Process",
            title2: "",
            description: "Our real-time chargeback alerts offer a streamlined five-step process. Experience unmatched efficiency, from instant notifications to automated defenses.",
          }}
          steps={stepsData}
          image={FourStepImg}
        />
      </section>

      {/* TESTIMONIALS */}
      <section className="lg:pt-24 md:pb-16 pt-7">
        <Testimonials
          cta={{
            title: "Activate",
            highlight: " Real-Time",
            title2: " Chargeback Alerts Today",
            des: "Join merchants who stop chargebacks before they happen. Approvals and setup in as little as 24 hours.",
            primaryBtn: { label: "Apply Now", href: "/signup" },
            secondaryBtn: { label: "Schedule a Demo", href: "/demo" },
          }}
        />
      </section>
    </>
  );
};

export default RealTimeChargeBackAlerts;

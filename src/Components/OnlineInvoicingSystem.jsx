import React, { useEffect, useState, useRef } from "react";
// import PhoneImage from "../assets/phone_payment.jpg";
import PaymentForm from "./PaymentForm";
import PaymentBoxes from "./PaymentBoxes";
import CustomMarquee from "./CustomMarquee";
import Testimonials from "./Testimonials";
import FourStepProcess from "./FourStepProcess";
import FourStepImg from "../assets/Images/why-choose-us-img.svg";
import HeroSection from "./HeroSection";
import HeroBg from "../assets/Images/online-invoicing.webp"


// payment-boxes custom icons
import Automation from "../assets/Images/automation.svg";
import LinkIcon from "../assets/Images/link.svg";
import ReduceIcon from "../assets/Images/reduce.svg";
import paidIcon from "../assets/Images/paid.svg";
import BagIcon from "../assets/Images/paymentMethod.svg";

const OnlineInvoicingSystem = () => {
  const finalRef = useRef(null);

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

  // Four Step Process Data
  const stepsData = [
    {
      num: "01.",
      title: "Register Account",
      desc: "Sign up to get started in minutes.",
    },
    {
      num: "02.",
      title: "Add Products",
      desc: "Upload your products or services online.",
    },
    {
      num: "03.",
      title: "Start Selling",
      desc: "Share your link and accept secure payments.",
    },
    {
      num: "04.",
      title: "Track Profits",
      desc: "View sales breakdown and insights in real-time.",
    },
  ];

  return (
    <>
      <HeroSection
        title="Smart Online Invoicing —"
        highlightText="Get Paid Faster"
        subtitle="Create, send and manage invoices with ease — built for today’s digital payments and powered by our payment gateway partners."
        buttonText="Try Invoicing Now"
        buttonLink="#"
        backgroundImage={HeroBg}
      />

      {/* FASTER PAYMENTS */}

      <section className="pt-5 md:pt-15 lg:pt-24">
        <PaymentForm 
        subtitle="Tell us a bit about your business and we’ll set you up with the right gateway (NMI, Authorize.net, or Payarc) and invoicing workflow."
        features={featuresList} />
      </section>

      <PaymentBoxes
        paymentsRef={null}
        isVisible={true} // if you're not using scroll animation here
        title="Why"
        highlight=" Online Invoicing "
        title2="Matters"
        description="Cumbersome point of sale systems. High transaction fees. Security risks. It's time to upgrade. With Paylinkly Credit Card Processing, you get:"
        features={[
          {
            icon: Automation,
            title: "Automation of invoice creation, delivery and tracking",
          },
          {
            icon: LinkIcon,
            title: "Same-day or next-day payment link generation",
          },
          {
            icon: ReduceIcon,
            title: "Reduced risk of lost or overlooked invoices",
          },
          {
            icon: paidIcon,
            title: "Clear view of invoice statuses (sent, viewed, paid)",
          },
          {
            icon: BagIcon,
            title: "Seamless integration with online payments ",
          },
        ]}
      />

      {/* Marquee */}
      <CustomMarquee />
      

      {/* FOUR STEP PROCESS */}
      <section className="md:pt-10 pt-2">
        <FourStepProcess
          header={{
            title: "How It Works – ",
            highlight: "Simple 4-Step Process",
            description:
              "Discover how our invoicing system simplifies your payment process in four easy steps. From invoice creation to payment processing, we ensure a seamless experience.",
          }}
          steps={stepsData}
          image={FourStepImg}
        />
      </section>

      {/* TESTIMONIALS */}
      <section className="lg:pt-24 md:pb-16 pt-7">
        <Testimonials
  cta={{
    
    highlight: "Ready to streamline",
    title2: " your billing and get paid faster?",
    primaryBtn: { label: "Start Your Free Trial", href: "/signup" },
    secondaryBtn: { label: "Book a Demo", href: "/demo" },
  }}
/>
      </section>

      

      
    </>
  );
};

export default OnlineInvoicingSystem;

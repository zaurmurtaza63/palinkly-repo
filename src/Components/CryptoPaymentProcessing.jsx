import React from "react";
import HeroSection from "./HeroSection";
import PaymentForm from "./PaymentForm";
import PaymentBoxes from "./PaymentBoxes";
import CustomSlider from "./HeroSlider";
import CustomMarquee from "./CustomMarquee";
import Testimonials from "./Testimonials";
import HeroBg from "../assets/Images/crypto.webp"



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


const CryptoPaymentProcessing = () => {
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
            sub: "Easily navigate around card restrictions while ensuring your safety by utilizing cryptocurrency payments. This innovative approach not only provides a secure transaction method but also opens up new possibilities for managing your finances.",
            cta: { label: "Get Started For Free", href: "#" },
            device: UniImg,
            features: [
                "Enhanced Security for Transactions",
                "Faster Cross-Border Transactions",
                "Access to a Global Market",
                "Reduced Chargeback Risks",
                "Privacy and Anonymity for Users",
                "24/7 Payment Processing Availability",
                "Decentralized reduces regulation barriers",
                "Ability to Accept Multiple Currencies Easily",
                "Increased Sales from Crypto Users",
                "Less Exposure to Currency Fluctuation Risks",
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
            title: "Customer Selects “Pay with Crypto”",
            desc: "at checkout or on an invoice.",
        },
        {
            num: "02.",
            title: "A Dynamic Wallet Address / QR Code",
            desc: "is generated automatically.",
        },
        {
            num: "03.",
            title: "Customer Sends Payment",
            desc: "in BTC, ETH, or stablecoin.",
        },
        {
            num: "04.",
            title: "Payment Is Verified and Confirmed",
            desc: "on-chain within seconds.",
        },
        {
            num: "05.",
            title: "You Receive the Value",
            desc: "in USD (or chosen currency) — instantly or after confirmation.",
        },

    ];


    return (
        <>
            <HeroSection
                title="Accept Bitcoin and"
                highlightText="Crypto Payments"
                title2="with Ease"
                subtitle="Tap into the future of commerce. Accept Bitcoin, Ethereum, USDT, and more — securely and automatically converted to your preferred currency."
                buttonText="Start Accepting Crypto"
                buttonLink="#"
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
                    title="Benefits of Accepting"
                    highlight=" Crypto"
                    title2="with Paylinkly"
                    description="Do you want secure transactions? Are you interested in lower fees? Want to stay ahead of the curve? Embrace the future! With Paylinkly Crypto Payment Processing, you'll experience:"
                    features={[
                        {
                            icon: EnergyIcon,
                            title: "Accept Bitcoin, Ethereum, and stablecoins in minutes",
                        },
                        {
                            icon: BagIcon,
                            title: "Instant conversion to USD or local currency",
                        },
                        {
                            icon: CheckIcon,
                            title: "Global accessibility — anyone with a wallet can pay",
                        },
                        {
                            icon: HeadphonesIcon,
                            title: "No volatility or blockchain complexity",
                        },
                        {
                            icon: LockIcon,
                            title: "24/7 processing, even on weekends",
                        },



                    ]}
                />
            </section>

            <section>
                <CustomSlider
                    slides={mySlides}
                    heading="Crypto Payments "
                    highlight=" Perfect"
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
                        title: "How",
                        highlight: " Crypto Payments",
                        title2: "Work",
                        description: "No wallet management. No crypto volatility. No risk.",
                    }}
                    steps={stepsData}
                    image={FourStepImg}
                />
            </section>


            {/* TESTIMONIALS */}
            <section className="lg:pt-24 md:pb-16 pt-7">
                <Testimonials
                    cta={{
                        title: "Ready to Accept Bitcoin and",
                        highlight: " Crypto Payments?",
                        title2: "",
                        des: "Join thousands of businesses already accepting crypto through Paylinkly’s secure and compliant gateway integrations.",
                        primaryBtn: { label: "Apply Now", href: "/signup" },
                        secondaryBtn: { label: "Schedule a Demo", href: "/demo" },
                    }}
                />
            </section>
        </>
    );
};

export default CryptoPaymentProcessing;

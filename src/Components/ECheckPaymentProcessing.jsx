import React from "react";
import HeroSection from "./HeroSection";
import PaymentForm from "./PaymentForm";
import PaymentBoxes from "./PaymentBoxes";
import CustomSlider from "./HeroSlider";
import CustomMarquee from "./CustomMarquee";
import Testimonials from "./Testimonials";
import HeroBg from "../assets/Images/e-check.webp"



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


const ECheckPaymentProcessing = () => {
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
            title: "Property Management",
            sub: "Managing rent and deposit collection has become much easier with the introduction of eChecks. This digital payment method allows tenants to conveniently pay their rent online, ensuring timely transactions without the hassle of writing and mailing paper checks. ",
            cta: { label: "Get Started For Free", href: "#" },
            device: UniImg,
            features: [
                "Faster Payment Processing",
                "Enhanced Security Features",
                "Improved Cash Flow Management",
                "Reduced Risk of Fraud",
                "Convenient Online Transactions",
                "Easier Record Keeping",
                "No Need for Physical Checks",
                "Instant Access to Funds",
                "Better Customer Experience",
                "Simplified Payment Tracking",
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
    desc: "via online form, invoice link, or phone.",
},
{
    num: "02.",
    title: "Paylinkly Gateway Captures Details",
    desc: "routing & account numbers are tokenized instantly.",
},
{
    num: "03.",
    title: "Transaction Processes via ACH",
    desc: "securely transferred through the banking network.",
},
{
    num: "04.",
    title: "Funds Deposited to Your Account",
    desc: "typically within 1–2 business days.",
},

    ];


    return (
        <>
            <HeroSection
                title=""
                highlightText="eCheck Payments — "
                title2=" Simple, Secure, Cost-Effective"
                subtitle="Let your customers pay directly from their bank accounts through fast, paperless eChecks — with lower fees and faster settlements than traditional checks."
                buttonText="Start Accepting eChecks"
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
                    title="Why Businesses Choose eChecks with"
                    highlight=" Paylinkly"
                    description="Do you value ironclad security? Do you want simple, predictable pricing? Are you seeking a modern payment solution? Embrace the future today! With Paylinkly eCheck Processing, you'll enjoy:"
                    features={[
                        {
                            icon: EnergyIcon,
                            title: "No paper checks, no manual deposits",
                        },
                        {
                            icon: BagIcon,
                            title: "Ideal for recurring and high-value transactions",
                        },
                        {
                            icon: CheckIcon,
                            title: "Supported by 24/7 human support — not bots",
                        },
                        {
                            icon: HeadphonesIcon,
                            title: "Lower cost than credit or debit cards",
                        },
                        {
                            icon: LockIcon,
                            title: "Faster than waiting for mailed payments",
                        },

                    ]}
                />
            </section>

            <section>
                <CustomSlider
                    slides={mySlides}
                    heading="eCheck Payments "
                    highlight=" Perfect"
                    heading2=" for:"
                    subheading="Find out how we are ideal for professional services, real estate, and healthcare businesses."
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
                        highlight: " eCheck Payments",
                        title2: "Work",
                        description: "Learn how our eCheck system streamlines payments in four simple steps. Benefit from secure encryption to fast transfers, ensuring a smooth experience.",
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
                        title2: "eCheck Payments Today",
                        des: "Get approved in 24–48 hours and start accepting secure, low-cost eCheck payments directly from your customers’ bank accounts.",
                        primaryBtn: { label: "Apply Now", href: "/signup" },
                        secondaryBtn: { label: "Schedule a Demo", href: "/demo" },
                    }}
                />
            </section>
        </>
    );
};

export default ECheckPaymentProcessing;

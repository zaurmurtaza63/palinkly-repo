import React, { useState } from "react";
import HeroSection from "./HeroSection";
import HeroBg from "../assets/Images/about.webp";
import PillusFaqIcon from "../assets/Images/pillus-faq.svg"
import MinusFaqIcon from "../assets/Images/minus-faq.svg"

const FAQ = () => {
  // First FAQ open by default
  const [openIndex, setOpenIndex] = useState(0);
  const [closingIndex, setClosingIndex] = useState(null);

  const faqData = [
  {
    question: "I don’t use checks, what can I send instead?",
    answer: [
      "Ask your local banker for a bank letter on official bank letterhead or form",
      "Full name on account (company name if it's a business account)",
      "Full routing number",
      "Full account number",
      "Signed and stamped by banker (include banker’s business card if unstamped)",
    ],
  },
  {
    question: "My banker won’t provide a bank letter, what should I do?",
    answer:
      "Try requesting an account verification document or a digital/official bank statement that clearly includes your account and routing number.",
  },
  {
    question:
      "This is a new business, so I don’t have company bank statements, what can I submit instead?",
    answer:
      "You may submit personal bank statements from the business owner or proof that funds have been deposited to start the business.",
  },
  {
    question: "Why do you need to see bank statements?",
    answer:
      "They are required to verify account legitimacy, ownership, processing history, and meet underwriting compliance guidelines.",
  },
  {
    question:
      "If I have current processing statements for another business, will that hinder my chances of approval?",
    answer:
      "Not necessarily — submit them anyway. Underwriters use them to better understand processing volume, chargebacks, and risk tolerance.",
  },
  {
    question: "How long does it take to get approved?",
    answer:
      "Approval timelines vary depending on underwriting requirements, but most applications are reviewed within a few business days.",
  },
  {
    question: "Why am I high risk?",
    answer:
      "High-risk labels are assigned based on industry type, chargeback rates, refund volume, ticket size, legal exposure, or financial history.",
  },
  {
    question: "Why is there a monthly volume limit on my account?",
    answer:
      "Volume limits are set by underwriting to gradually build trust and ensure stable processing before increasing capacity.",
  },
  {
    question:
      "I’m just starting out, how do I know what processing limit to put?",
    answer:
      "Estimate based on projected monthly sales, product pricing, and marketing plans — avoid unrealistic or inflated amounts.",
  },
  {
    question: "What happens if I go over my processing limit?",
    answer:
      "Funds may be temporarily held for review or you may be required to request a formal limit increase from underwriting.",
  },
  {
    question: "When can I get more volume and what is required?",
    answer:
      "Once you establish a stable processing history with low chargebacks and consistent deposits, you may request a volume increase.",
  },
  {
    question: "Why do the banks need to run a credit check?",
    answer:
      "A credit check helps evaluate financial responsibility, mitigate risk, and ensure credibility for payment processing.",
  },
  {
    question: "What is an ‘average ticket’ and ‘high ticket’?",
    answer:
      "Average ticket = typical sale amount; High ticket = larger-than-normal transaction that may trigger extra risk review.",
  },
  {
    question:
      "What do I put for ‘Legal Name’ if this is a sole proprietorship?",
    answer:
      "Use your full legal name as registered with your tax documentation or government-issued ID.",
  },
  {
    question:
      "Why can’t I use a personal check when I applied as a business?",
    answer:
      "Business processing accounts require business-verified banking unless operating as a sole proprietorship.",
  },
  {
    question: "What’s an acceptable chargeback ratio?",
    answer:
      "Industry standard is typically below 1%, and anything above may be flagged as high-risk by processors.",
  },
];


  const toggle = (index) => {
    // opening a different one
    if (openIndex !== index) {
      setOpenIndex(index);
      setClosingIndex(null);
      return;
    }

    // closing current one → keep gradient until animation done
    setClosingIndex(index);
    setOpenIndex(null);

    setTimeout(() => {
      setClosingIndex(null);
    }, 500); // same as height transition duration
  };

  return (
    <>
      <HeroSection
        title="Who We Are And"
        highlightText="Why We Exist"
        subtitle="Empowering merchants with payment solutions made for the real world."
        backgroundImage={HeroBg}
        buttonText="Start Today"
      />

      <div className="w-full max-w-3xl mx-auto space-y-4 py-16 px-4">
        {faqData.map((item, i) => {
          const isOpen = openIndex === i;
          const isClosing = closingIndex === i;

          // gradient active when: open OR currently closing
          const applyGradient = isOpen || isClosing;

          return (
            <div
              key={i}
              className={
                "border border-gray-200 rounded-2xl overflow-hidden shadow-md " +
                (applyGradient
                  ? "faq-active-bg text-white"
                  : "bg-white text-black")
              }
            >
              {/* Question */}
              <button
                className="w-full flex justify-between items-center py-4 px-5 text-left font-medium text-lg"
                onClick={() => toggle(i)}
              >
                <span>{item.question}</span>

                {/* Replace icon with image here */}
                <img
                   src={isOpen ? MinusFaqIcon : PillusFaqIcon}
                  className="w-5 h-5"
                  alt="faq icons"
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen
                    ? "max-h-96 opacity-100 pb-4"
                    : "max-h-0 opacity-0 pb-0"
                }`}
              >
                <div className="px-5 text-sm leading-relaxed">
                  {Array.isArray(item.answer) ? (
                    <ul className="pt-1 space-y-1 list-disc list-inside">
                      {item.answer.map((line, idx) => (
                        <li key={idx}>{line}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="pt-1">{item.answer}</p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FAQ;

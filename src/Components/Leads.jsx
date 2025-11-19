import { img } from "framer-motion/client";
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import YesIcon from "../assets/Images/yes-card-icon.webp";
import NoIcon from "../assets/Images/no-card-icon.webp";

import InPerson from "../assets/Images/in-person-card-icon.webp";
import OnlineCard from "../assets/Images/online-card-icon.webp";
import OnThePhone from "../assets/Images/on-the-phone-card-icon.webp";

const steps = [
  "Card Info",
  "Payments Info",
  "Volume Info",
  "Business Info",
  "User Info",
  "Contact Info",
];

const questions = [
  {
    title: "Does your business currently accept card payments?",
    type: "options",
    options: ["Yes", "No"],
  },
  {
    title: "How do you want to accept card payments?",
    type: "options",
    options: ["In-Person", "Online", "on the phone"],
  },
  {
    title: "What is your monthly processing volume?",
    type: "options",
    options: [
      "Startup",
      "$25k - $50k",
      "$50k - $100k",
      "$100k - $250k",
      "$250k - $500k",
      "$500k+",
    ],
  },
  {
    title: "Please tell us your business name",
    type: "input",
    placeholder: "Enter business name...",
  },
  {
    title: "Please tell us your first and last name",
    type: "name",
    placeholders: ["First name", "Last name"],
  },
  {
    title: "How can we contact you?",
    type: "contact",
    placeholders: ["Enter your email…", "Enter your phone number…"],
  },
];

const Leads = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const selected = answers[step] || "";
  const navigate = useNavigate();


  const [anim, setAnim] = useState("fade-in");
  const [emailError, setEmailError] = useState(false);

  const currentQ = questions[step];

  // -------------------------------
  // ⭐ HERO-STYLE ANIMATION (Added)
  // -------------------------------
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

 const handleSubmit = () => {
  console.log("FORM SUBMITTED →", answers);
  localStorage.setItem("leadForm", JSON.stringify(answers));
  navigate("/thankyou");
};

  const nextStep = () => {
    const isNameStep = currentQ.type === "name";
    const isNameValid = answers.firstName && answers.lastName;

    const isContactStep = currentQ.type === "contact";
    const isContactValid = answers.email && answers.phone;

    if (!selected && !isNameStep && !isContactStep) return;
    if (isNameStep && !isNameValid) return;
    if (isContactStep && !isContactValid) return;

    if (isContactStep && !validateEmail(answers.email)) {
      setEmailError(true);
      return;
    }

    setEmailError(false);

    if (step === questions.length - 1) {
      handleSubmit();
      return;
    }

    setAnim("fade-out");
    setTimeout(() => {
      setStep((prev) => prev + 1);
      setAnim("fade-in");
    }, 300);
  };

  return (
    <div
      ref={sectionRef}
      className={`
        leads-bg-img bg-cover bg-center py-5 w-full flex flex-col items-center pt-[120px]
        transition-all duration-1000 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      <div className="lg:w-[800px] md:w-[700px] w-full px-5">
        {/* ---- STEP NAV ---- */}
        <div className="w-full mx-auto mt-2 mb-10">
          <div className="flex justify-between items-start">
            {steps.map((s, i) => {
              const isActive = i === step;
              return (
                <div
                  key={i}
                  className="flex flex-col items-center cursor-pointer select-none"
                  onClick={() => {
                    if (i <= step) {
                      setStep(i);
                      setEmailError(false);
                      setAnim("fade-in");
                    }
                  }}
                >
                  <div
                    className={`
                           h-1 lg:w-28 md:w-20 w-12 rounded-full mb-2 transition-all duration-300
                           ${i < step ? "gradiant-blue" : ""}
                           ${i === step ? "gradiant-blue" : ""}
                           ${i > step ? "bg-gray-300" : ""}
                         `}
                  ></div>
                  <h4
                    className={`md:text-lg md:block hidden transition-all duration-300 tracking-[-0.56px] ${
                      isActive ? "text-[#003077]" : "text-gray-500"
                    }`}
                  >
                    {s}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>

        {/* ---- QUESTION AREA ---- */}
        <div
          className={`transition-all duration-300 ${
            anim === "fade-in"
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-x-5"
          }`}
        >
          <h1 className="text-xl md:text-[42px] text-center gradient-text max-w-2xl mb-10 mx-auto">
            {currentQ.title}
          </h1>

          {/* ---- ANSWER BLOCK ---- */}
          <div
            className={`mb-10 grediant-text ${
              step === 2
                ? "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 justify-center mx-auto max-w-fit"
                : "flex flex-wrap gap-10 justify-center"
            }`}
          >
            {/* OPTION BUTTONS */}
            {currentQ.type === "options" &&
              currentQ.options.map((op, i) => {
                const isActive = selected === op;
                return (
                  <button
                    key={i}
                    onClick={() => {
                      setAnswers({ ...answers, [step]: op });
                      setEmailError(false);
                    }}
                    className={`custom-border rounded-2xl shadow-lg border transition-all transform flex flex-col justify-center items-center text-center ${
                      isActive
                        ? "border-blue-600 shadow-xl scale-[1.05] active-border"
                        : "border-gray-200 bg-white/70 hover:scale-[1.03]"
                    } ${step === 2 ? "w-64 h-28" : "w-48 h-40"}`}
                  >
                    {step !== 2 && (
                      <div className="w-12 h-12 flex justify-center items-center transition-all duration-300">
                        {op === "Yes" && (
                          <img src={YesIcon} className="w-10 h-10" />
                        )}
                        {op === "No" && (
                          <img src={NoIcon} className="w-10 h-10" />
                        )}
                        {op === "In-Person" && (
                          <img src={InPerson} className="w-10 h-10" />
                        )}
                        {op === "Online" && (
                          <img src={OnlineCard} className="w-10 h-10" />
                        )}
                        {op === "on the phone" && (
                          <img src={OnThePhone} className="w-10 h-10" />
                        )}
                      </div>
                    )}
                    <p className="font-semibold text-lg gradient-text px-4 leading-tight">
                      {op}
                    </p>
                  </button>
                );
              })}

            {/* BUSINESS NAME */}
            {currentQ.type === "input" && (
              <input
                type="text"
                value={selected}
                placeholder={currentQ.placeholder}
                onChange={(e) =>
                  setAnswers({ ...answers, [step]: e.target.value })
                }
                className="w-full max-w-md leads-input px-4 py-2 text-lg rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}

            {/* FIRST + LAST NAME */}
            {currentQ.type === "name" && (
              <div className="w-full max-w-md flex flex-col gap-4">
                <input
                  type="text"
                  placeholder={currentQ.placeholders[0]}
                  value={answers.firstName || ""}
                  onChange={(e) =>
                    setAnswers({ ...answers, firstName: e.target.value })
                  }
                  className="w-full leads-input px-4 py-2 text-lg rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="text"
                  placeholder={currentQ.placeholders[1]}
                  value={answers.lastName || ""}
                  onChange={(e) =>
                    setAnswers({ ...answers, lastName: e.target.value })
                  }
                  className="w-full leads-input px-4 py-2 text-lg rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}

            {/* EMAIL + PHONE */}
            {currentQ.type === "contact" && (
              <div className="w-full max-w-md flex flex-col gap-4">
                <input
                  type="email"
                  placeholder={currentQ.placeholders[0]}
                  value={answers.email || ""}
                  onChange={(e) =>
                    setAnswers({ ...answers, email: e.target.value })
                  }
                  className="w-full leads-input px-4 py-2 text-lg rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="tel"
                  placeholder="Enter your phone number..."
                  value={answers.phone || ""}
                  onChange={(e) => {
                    const onlyNums = e.target.value.replace(/[^0-9]/g, "");
                    setAnswers({ ...answers, phone: onlyNums });
                  }}
                  className="w-full leads-input px-4 py-2 text-lg rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  inputMode="numeric"
                  pattern="[0-9]*"
                />

                {emailError && (
                  <p className="text-red-500 text-sm">
                    Please enter a valid email.
                  </p>
                )}
              </div>
            )}
          </div>

          {/* CONTINUE BUTTON */}
          <div className="flex justify-center">
            <button
              onClick={nextStep}
              className="blue-btn text-white px-10 py-3 rounded-xl font-semibold hover:bg-blue-700 transition disabled:opacity-40"
              disabled={
                !answers[step] &&
                !(
                  currentQ.type === "name" &&
                  answers.firstName &&
                  answers.lastName
                ) &&
                !(currentQ.type === "contact" && answers.email && answers.phone)
              }
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leads;

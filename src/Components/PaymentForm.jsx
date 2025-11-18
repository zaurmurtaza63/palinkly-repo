import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import WhiteCheckIcon from "../assets/Images/white-check.svg";
import BtnArrow from "../assets/Images/btn_arrow.svg";

const PaymentForm = ({
  title = "Start Accepting",
  highlightText = "Payments Faster",
  subtitle = "Tell us a bit about your business and we’ll set you up with the right gateway (NMI, Authorize.net, or Payarc) and invoicing workflow.",
  features = [],
  buttonText = "Send Message",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState(0);
  
  // Form state
const [name, setName] = useState("");
const [last_name, setLastName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [message, setMessage] = useState("");

  const formRef = useRef(null);

  // Backend form
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post("http://localhost:5000/api/users", {
      name,
      last_name,
      email,
      phone,
      message
    });

    console.log("User Saved:", res.data);

    // Optional: Clear form fields
    setName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setMessage("");

    alert("Form submitted successfully!");
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Something went wrong!");
  }
};


  // ✅ Observe when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();

          // 👇 Sequential reveal for features
          if (features.length > 0) {
            features.forEach((_, i) => {
              setTimeout(() => {
                setVisibleItems((prev) => prev + 1);
              }, i * 400); // same 400ms stagger as TabsSection
            });
          }
        }
      },
      { threshold: 0.2 }
    );

    if (formRef.current) observer.observe(formRef.current);
    return () => observer.disconnect();
  }, [features]);

  return (
    <section
      ref={formRef}
      className={`lg:px-10 md:px-6 px-5 transition-all duration-1000 ease-out flex flex-col gap-5 md:gap-8 lg:gap-12 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Heading */}
      <div className="flex flex-col gap-2.5 max-w-[880px] mx-auto">
        <h1 className="text-center main-heading gradient-text leading-tight">
          {title} <span className="blue-text">{highlightText}</span>
        </h1>
        <p className="text-center gradiant-para text-base max-w-[700px] mx-auto">
          {subtitle}
        </p>
      </div>

      {/* Form + Features */}
      <div className="w-full px-0 md:px-6 lg:px-10 flex justify-center">
        <div className="max-w-[1200px] w-full flex lg:flex-row flex-col lg:gap-0 gap-5 justify-center items-center">
          {/* LEFT FORM BOX */}
          <div className="lg:w-[60%] w-full payment-form p-4 lg:p-8 flex flex-col gap-5">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="mb-2">
                    <span className="gradient-text font-medium">
                      First Name
                    </span>
                  </label>
                  <input
                    className="w-full" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="First Name" required />
                </div>

                <div>
                  <label className="mb-2">
                    <span  className="gradient-text font-medium">Last Name</span>
                  </label>
                  <input className="w-full" type="text" value={last_name} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-5">
                <div>
                  <label className="mb-2">
                    <span className="gradient-text font-medium">Email</span>
                  </label>
                   <input
                    className="w-full" type="email"  value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                </div>

                <div>
                  <label className="mb-2">
                    <span className="gradient-text font-medium">Phone</span>
                  </label>
                  <input className="w-full" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" />
                 </div>
              </div>

              <div className="pt-5">
                <label className="mb-2">
                <span className="gradient-text font-medium">Message</span>
              </label>
              <textarea className="w-full" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" />
              </div>

             <button type="submit" className="mt-3 w-fit payment-form-btn text-white rounded-[10px] px-6 py-3 font-semibold hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-1.5 cursor-pointer">
                {buttonText} <img src={BtnArrow} alt="BtnArrow" />
              </button>
            </form>
          </div>

          {/* RIGHT FEATURES BOX (Sequential Animation) */}
          <div className="lg:w-[40%] w-full rounded-2xl p-6 lg:p-8 blue-form-box text-white flex flex-col gap-2 lg:mr-2">
            {features.length > 0 ? (
              <ul className="space-y-3 relative">
                {features.map((item, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-3 text-sm leading-[1.45] transition-all duration-300 ease-out ${
                      i < visibleItems
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-0"
                    }`}
                    style={{ transitionDelay: `${i * 10}ms` }}
                  >
                    <img
                      src={WhiteCheckIcon}
                      alt="check"
                      className="w-5 h-5 mt-1.5"
                    />
                    <p className="lg:text-xl md:text-lg text-base">{item}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-gray-200 text-sm">
                No features available.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentForm;

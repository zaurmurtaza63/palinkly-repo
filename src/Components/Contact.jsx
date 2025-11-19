import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import HeroSection from "./HeroSection";
import BtnArrow from "../assets/Images/btn_arrow.svg";
import HeroBg from "../assets/Images/headphones-new.webp";

const Contact = () => {
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
        message,
      });

      console.log("User Saved:", res.data);

      // Clear form
      setName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");

      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);

      // 🔥 DUPLICATE EMAIL HANDLING
      if (
        error.response &&
        error.response.data &&
        error.response.data.code === 11000
      ) {
        alert("This email is already available!");
      } else {
        alert("Something went wrong!");
      }
    }
  };

  // Viewport animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (formRef.current) observer.observe(formRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <HeroSection
        title="Who We Are And"
        highlightText="Why We Exist"
        subtitle="Empowering merchants with payment solutions made for the real world."
        backgroundImage={HeroBg}
        buttonText="Start Today"
      />

      {/* Form Section */}
      <section className="lg:my-[100px] md:my-[60px] my-8 lg:px-10 md:px-6 px-5 transition-all duration-1000 ease-out flex flex-col gap-5 md:gap-8 lg:gap-12">
        {/* Heading */}
        <div className="flex flex-col gap-2.5 max-w-[880px] mx-auto">
          <h1 className="text-center main-heading gradient-text leading-tight">
            Let’s Talk <span className="blue-text">Payments</span> — We’re Here
            to Help
          </h1>
          <p className="text-center gradiant-para text-base max-w-[700px] mx-auto">
            Whether you’re ready to apply for a merchant account or just
            exploring your options, the Paylinkly team is available 24/7 to
            assist you. Get in touch and we’ll help you find the best solution
            for your business.
          </p>
        </div>

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
                      className="w-full"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="First Name"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-2">
                      <span className="gradient-text font-medium">
                        Last Name
                      </span>
                    </label>
                    <input
                      className="w-full"
                      type="text"
                      value={last_name}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-5">
                  <div>
                    <label className="mb-2">
                      <span className="gradient-text font-medium">Email</span>
                    </label>
                    <input
                      className="w-full"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-2">
                      <span className="gradient-text font-medium">Phone</span>
                    </label>
                    <input
                      className="w-full"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone"
                    />
                  </div>
                </div>

                <div className="pt-5">
                  <label className="mb-2">
                    <span className="gradient-text font-medium">Message</span>
                  </label>
                  <textarea
                    className="w-full"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-3 w-fit payment-form-btn text-white rounded-[10px] px-6 py-3 font-semibold hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
                >
                  Sumbit <img src={BtnArrow} alt="BtnArrow" />
                </button>
              </form>
            </div>

            {/* RIGHT MAP BOX */}
            <div className="lg:w-[40%] w-full rounded-2xl overflow-hidden shadow-md md:-mr-0.5">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.8254068908413!2d-96.84333228481182!3d32.7766649809727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9926c8e2a9cf%3A0x7aef8a4a1f98f4e3!2sDallas%2C%20TX%2075219%2C%20USA!5e0!3m2!1sen!2sus!4v1699823451234!5m2!1sen!2sus"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl w-full h-[300px] sm:h-[400px] lg:h-[520px]"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

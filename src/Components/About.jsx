import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Commitment from "../assets/Images/commitment.svg";
import Respect from "../assets/Images/respect.svg";
import Integrity from "../assets/Images/integrity.svg";
import Security from "../assets/Images/security.svg";
import ChckedIcon from "../assets/Images/checked.svg";
import BtnArrow from "../assets/Images/btn_arrow.svg";
import HeroSection from "./HeroSection";
import HeroBg from "../assets/Images/about.webp"


const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const paymentsRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const features = [
    {
      icon: Commitment,
      title: "Commitment",
      desc: "We go the extra mile for our clients and partners. ",
    },
    {
      icon: Respect,
      title: "Respect",
      desc: "Accept cards, crypto, and bank transfers.",
    },
    {
      icon: Integrity,
      title: "Integrity",
      desc: "Clear terms. No hidden surprises. We stand by our word. ",
    },
    {
      icon: Security,
      title: "Security",
      desc: "Your payments and customer data are guarded by design.",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <HeroSection
        title="Who We Are And"
        highlightText="Why We Exist"
        subtitle="Empowering merchants with payment solutions made for the real world."
        backgroundImage={HeroBg}
        buttonText="Start Today"
      />

      {/* PAYMENT PROCESSING SECTION */}
      <section>
        <div className="mt-8 md:mt-16 lg:mt-[100px] px-5">
          <div className="max-w-[745px] mx-auto flex flex-col lg:gap-12 md:gap-8 gap-5">
            <h1 className="text-center main-heading tracking-[-1.92px] gradient-text leading-tight">
              We started with one simple belief:
              <span className="blue-text"> Processing payments shouldn’t hold businesses back.</span>
            </h1>
            <div className="payment-processing-img lg:h-[450px] md:h-[300px] h-[270px] w-full"></div>
            <div className="flex flex-col gap-7">
              <p className="text-gray-600 text-center text-base md:text-lg max-w-[700px] mx-auto">
                Too often merchants face long approval times, hidden fees, rigid
                Commitments or limited channels. At Paylinkly, we set out to
                change that.
              </p>
              <p className="text-gray-600 text-center text-base md:text-lg max-w-[700px] mx-auto">
                From our early days working with small businesses to scaling for
                high-risk and global merchants, we’ve built a platform that
                adapts — whether you’re online only, retail-based, mobile, or a
                mix of all. Our mission is to provide{" "}
                <strong className="text-black">
                  fast, secure and flexible payment
                </strong>{" "}
                processing for businesses of all shapes and sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PAYMENTS SECTION */}
      <section
        ref={paymentsRef}
        className="payment-boxes-section w-full relative "
      >
        <div className="max-w-[1200px] mx-auto">
          <div
            className={`flex flex-col gap-4 justify-center items-center transition-all duration-1000 ease-out ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
              }`}
          >
            {/* Title */}
            <div className="lg:pt-[180px] md:pt-[100px] pt-10 max-w-[700px]">
              <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold gradient-text leading-tight">
                Our Mission,{" "}
                <span className="blue-text block">Vision and Values</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-center gradiant-para text-base max-w-[700px] mx-auto">
              To make payments seamless, transparent and inclusive—empowering
              merchants to thrive without being hindered by outdated processing
              systems.
            </p>

            {/* Feature Boxes */}
            <div className="px-5 gap-7 container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10">
              {features.map((box, index) => (
                <div
                  key={index}
                  className={`payment-box payment-box-hover p-5 flex flex-col gap-4 transition-all duration-700 ease-out ${isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                    }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="payment-box-icon payment-box-icon-hover">
                    <img src={box.icon} alt={box.title} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="gradient-text font-semibold md:text-[24px] text-lg">
                      {box.title}
                    </h3>
                    <p className="text-base gradiant-para opacity-80">{box.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE SECTION */}
      <section className="w-full overflow-hidden lg:pt-[100px] md:pt-[60px] pt-[30px]">
        <div className="marquee">
          <div className="marquee__inner">
            {[...Array(20)].map((_, i) => (
              <h4 key={i} className="marquee-text mx-6">
                Dedicated assistance whenever you need it.
              </h4>
            ))}
            {[...Array(20)].map((_, i) => (
              <h4 key={i + 20} className="marquee-text mx-6">
                Dedicated assistance whenever you need it.
              </h4>
            ))}
          </div>
        </div>

        <style>{`
    .marquee {
      overflow: hidden;
      display: flex;
      white-space: nowrap;
    }
    .marquee__inner {
      display: inline-flex;
      animation: scroll 350s linear infinite;
    }
    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `}</style>
      </section>

      {/* WHY CHOOSE SECTION */}
      <section
        className={`flex md:flex-col items-center justify-center text-center px-6 md:px-8 transition-all duration-1000 ease-out lg:pt-[100px] md:pt-[60px] pt-[30px] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        <div className="row flex md:flex-row flex-col justify-center lg:px-10 md:px-6 px-0 w-full max-w-[1140px] md:gap-0 gap-5">
          <div className="col md:w-1/2 w-full flex flex-col md:gap-12 gap-5 lg:px-5 justify-center">
            <h1 className="main-heading text-start lg:tracking-[-2.56px] md:tracking-[-1.56px] tracking-[-0.56px] gradient-text leading-tight">
              Why <span className="blue-text">Choose</span> Us
            </h1>
            <div>
              <ul className="flex flex-col gap-5">
                <li className="text-start">
                  <div className="flex items-start gap-2.5">
                    <img src={ChckedIcon} alt="checked-icon" />
                    <div>
                      <h5 className="gradient-text text-lg">Fast setup</h5>
                      <p className="text-sm gradiant-para">
                        We streamline approvals and onboarding so you can start
                        accepting payments quickly.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="text-start">
                  <div className="flex items-start gap-2.5">
                    <img src={ChckedIcon} alt="checked-icon" />
                    <div>
                      <h5 className="gradient-text text-lg">
                        Flexible for all risk-levels
                      </h5>
                      <p className="text-sm gradiant-para">
                        From low risk retail to high-risk industries, we build the
                        right underwriting and support model for your business.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="text-start">
                  <div className="flex items-start gap-2.5">
                    <img src={ChckedIcon} alt="checked-icon" />
                    <div>
                      <h5 className="gradient-text text-lg Normal">
                        Global & omnichannel
                      </h5>
                      <p className="text-sm gradiant-para">
                        Online, in store, mobile: pick your channels, we’ll integrate
                        accordingly.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="text-start">
                  <div className="flex items-start gap-2.5">
                    <img src={ChckedIcon} alt="checked-icon" />
                    <div>
                      <h5 className="gradient-text text-lg">
                        Transparent pricing
                      </h5>
                      <p className="text-sm gradiant-para">
                        We believe in clear terms and no hidden fees.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="why-choose-us-img lg:h-[480px] md:h-[300px] h-[270px] col md:w-1/2 w-full"></div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="lg:pt-[100px] md:pt-[60px] pt-[30px]">
        <div className="lg:py-20 md:py-12 py-8 lg:px-[50px] md:px-[30px] px-5 commitment-box text-white">
          <div className="flex flex-col lg:gap-9 md:gap-6 gap-2 w-full max-w-[786px] text-center mx-auto">
            <h5 className="opacity-50">Our Commitment to Security & Compliance</h5>
            <h3 className="lg:text-xl text-lg">
              We understand that trust is everything when it comes to payments.
              That’s why we incorporate industry-standard protections: end-to-end
              encryption, fraud detection and mitigation, adherence to PCI standards,
              and rigorous monitoring of chargebacks and exceptions.
            </h3>
            <h2 className="lg:text-5xl md:text-3xl text-2xl">
              Because when your customers pay, you should rest easy.
            </h2>
          </div>
        </div>
      </section>


      <section className="lg:py-[100px] md:py-[60px] py-[30px]">
        <div className="w-full max-w-[1050px] mx-auto flex flex-col md:gap-12 gap-6">
          <h1 className="text-center main-heading  lg:tracking-[-2.56px] md:tracking-[-1.56px] tracking-[-0.56px] gradient-text leading-tight">
            Ready to partner with a payments platform that
            <span className="blue-text"> works for you </span>— not against you?
          </h1>
          <div className="flex justify-center gap-2.5">
            <Link to="/leads">
              <button className="hover:cursor-pointer flex items-center justify-center gap-2.5 blue-btn max-w-fit hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 text-white font-bold">
                Apply Now <img src={BtnArrow} alt="btn-arrow" />
              </button>
            </Link>
            <Link to="/contact">
              <button className="hover:cursor-pointer flex items-center justify-center gap-2.5 white-btn max-w-fit hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 text-gradiant font-bold">
                Schedule a Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

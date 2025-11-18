import React, { useState, useEffect } from "react";
import SplitText from "./SplitText";
import { Link } from "react-router-dom";

const HeroSection = ({
  title,
  highlightText,
  title2,
  subtitle,
  buttonText,
  backgroundImage,
  gradientText = true, // optional control
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <section
      className={`global-hero-bg lg:h-[700px] overflow-hidden max-[1440px]:h-auto bg-center bg-cover w-full flex flex-col items-center justify-center text-center px-6 md:px-8 transition-all duration-1000 ease-out`}
    >
      <div className="flex md:flex-row flex-col items-center justify-between w-full max-w-[1200px] lg:px-10 md:px-6 py-10 md:gap-14">

        {/* Left Column */}
        <div className="md:w-[50%] w-full">
          <div className="text-start flex flex-col md:max-w-[620px] w-full">
            <h1
              className={` lg:pt-0 md:pt-16 pt-[120px] md:text-start text-center main-heading  lg:tracking-[-2.56px] md:tracking-[-1.56px] tracking-[-0.56px] font-medium leading-tight ${gradientText ? "gradient-text" : ""
                }`}
            >
              <SplitText>
                {title}
                <span className="blue-text">{highlightText}</span>
                {title2}
              </SplitText>
            </h1>

            <p className="gradiant-para md:text-start text-center text-base md:max-w-[500px] w-full mt-3">
              {subtitle}
            </p>

            <div className="flex md:justify-start justify-center">
            <Link to="/leads" className="inline-block">
              <button className="mt-5 blue-btn max-w-fit transition-all duration-300 text-white font-bold flex">
                {buttonText}
              </button>
            </Link>
            </div>
          </div>
        </div>

        {/* right Column */}
        <div className="md:w-[50%] md:h-auto h-80">
          <img className="max-w-full scale-130" src={backgroundImage} alt="hero-img" />
        </div>
      </div>

    </section>
  );
};

export default HeroSection;

import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import BtnArrow from "../assets/Images/btn_arrow.svg";
import BlueCheckIcon from "../assets/Images/checked.svg";

const HeroSlider = ({
  slides = [],
  heading = "Powered by Industry-Leading",
  highlight = "Payment Gateways",
  heading2 = "",
  subheading = "Choose from premium payment integrations tailored to your business.",
}) => {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sliderRef.current) observer.observe(sliderRef.current);
    return () => observer.disconnect();
  }, []);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  return (
    <section
      ref={sliderRef}
      className={`pt-8 md:mt-16 lg:mt-[100px] px-4 mx-auto flex flex-col gap-12 items-center transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-[750px]">
        <h1 className="main-heading  lg:tracking-[-2.56px] md:tracking-[-1.56px] tracking-[-0.56px] gradient-text text-center leading-tight">
          {heading}
          <span className="blue-text">{highlight}</span>
          {heading2}
        </h1>
        <p className="gradiant-para text-base md:text-lg mx-auto text-center mt-4 max-w-[570px]">
          {subheading}
        </p>
      </div>

      <div className="max-w-[1140px] grid grid-cols-1 md:grid-cols-3 relative items-center justify-center pb-5">
        {/* Left Content Slider */}
        <div className="slider-left-col overflow-hidden flex flex-col justify-center py-5">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <div key={i} className="w-full flex-shrink-0 p-3 md:p-5">
                <h2 className="lg:text-[40px] md:text-3xl text-xl sm:text-4xl font-bold md:tracking-[-1.56px] tracking-[-0.56px] gradient-text leading-tight">
                  {slide.title}
                </h2>
                <p className="gradiant-para my-5 text-sm md:text-base">
                  {slide.sub}
                </p>
                {slide.cta && (
                  <Link to="/contact">
                  <abutton
                    href={slide.cta.href}
                    className="blue-btn max-w-fit hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 text-white font-bold flex items-center gap-2.5"
                  >
                    {slide.cta.label} <img src={BtnArrow} alt="btn-arrow" />
                  </abutton>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Center Device Slider */}
        <div className="flex flex-col items-center rounded-[28px]">
          <div className="relative h-[100px] md:h-[580px] w-full rounded-[28px] shadow-2xl bg-gradient-to-b from-[#2E6BFF] to-[#0057E0] z-10">
            <div className="absolute top-0 left-0 right-0 h-14 rounded-t-[28px]" />
            <div className="overflow-hidden h-full rounded-[18px]">
              <div
                className="flex transition-transform duration-700 ease-in-out h-full"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {slides.map((slide, i) => (
                  <div key={i} className="w-full h-full flex-shrink-0">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <img
                        src={slide.device}
                        alt={`slide-device-${i}`}
                        className="w-[380px]"
                      />
                      {slide.phone && (
                        <img
                          src={slide.phone}
                          alt={`slide-phone-${i}`}
                          className="absolute top-8 lg:w-[60%] md:w-[50%] w-[30%]  object-contain"
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Arrows Desktop*/}
          <div className="hidden md:flex md:-mt-16 md:block z-10 items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous"
              className="slider-btns w-11 h-11 rounded-2xl bg-white shadow-lg flex items-center justify-center hover:scale-105 transition"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 6l-6 6 6 6"
                  stroke="#0B1B35"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="slider-btns w-11 h-11 rounded-2xl bg-white shadow-lg flex items-center justify-center hover:scale-105 transition"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 6l6 6-6 6"
                  stroke="#0B1B35"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Features Slider */}
        <div className="slider-right-col overflow-hidden py-5 flex flex-col justify-center">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <div key={i} className="w-full flex-shrink-0 p-8 md:p-5">
                <ul className="space-y-3">
                  {slide.features?.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-[#2E6BFF]/10 flex items-center justify-center">
                        <img src={BlueCheckIcon} alt="BlueCheckIcon" />
                      </span>
                      <span className="slider-text-gradiant text-sm md:text-base">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="md:hidden justify-center z-10 flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous"
              className="slider-btns w-11 h-11 rounded-2xl bg-white shadow-lg flex items-center justify-center hover:scale-105 transition"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 6l-6 6 6 6"
                  stroke="#0B1B35"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="slider-btns w-11 h-11 rounded-2xl bg-white shadow-lg flex items-center justify-center hover:scale-105 transition"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 6l6 6-6 6"
                  stroke="#0B1B35"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;

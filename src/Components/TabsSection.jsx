import React, { useState, useEffect, useRef } from "react";
import CheckIcon from "../assets/Images/checked.svg";

const TabsSection = ({
  header = {
    title: "Accept Payments Anywhere with",
    highlight: "Advanced POS Systems",
    title2: "",
    des: "",
  },
  tabs = [],
  content = {},
  defaultTab = "",
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]);
  const [fadeUp, setFadeUp] = useState(false);
  const [visibleItems, setVisibleItems] = useState(0);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false); // ✅ Prevent re-running animation

  // ✅ Run only once when section enters view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setFadeUp(true);
          hasAnimated.current = true;
          observer.disconnect();

          // Sequential reveal (runs only once)
          const { features } = content[activeTab] || {};
          if (features && features.length > 0) {
            features.forEach((_, i) => {
              setTimeout(() => setVisibleItems((prev) => prev + 1), i * 400);
            });
          }
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [content, activeTab]); // safe deps, but won't re-trigger animation

  // ✅ Don't reset visibleItems on tab switch anymore
  const { title, desc, features, boxTitle, boxText, TabImg, BoxArrowImg } =
    content[activeTab] || {};

  return (
    <section
      ref={sectionRef}
      className="mx-auto container lg:px-10 md:px-6 px-5 tab-section mt-8 md:mt-16 lg:mt-[100px]"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-4 justify-center items-center max-w-[682px] mx-auto">
          <h1 className="text-center main-heading gradient-text leading-tight">
            {header.title}
            <span className="blue-text">{header.highlight}</span>
            {header.title2}
          </h1>
          <p className="text-base gradiant-para text-center max-w-[590px] mx-auto">{header.des}</p>
        </div>

        {/* Tabs */}
        <div className="">
          <div className="tabs-btn-containers w-fit flex flex-wrap lg:gap-3 gap-1 justify-center lg:justify-center items-center mx-auto my-10">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`lg:px-5 px-3 py-2 md:m-0 lg:m-0 m-2 font-medium hover:cursor-pointer transition-[background,box-shadow,transform] duration-300 ${
                  activeTab === tab
                    ? "text-white active-tab-btn"
                    : "text-black border-gray-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="flex gap-10 md:flex-row flex-col-reverse ">
            {/* Left Section */}
            <div
              className={`md:w-[60%] w-full transition-all duration-700 ease-out transform ${
                fadeUp ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <h3 className="lg:text-[40px] md:text-3xl text-2xl font-semibold gradient-text mb-3">
                {title}
              </h3>
              <p className="gradiant-para mb-5">{desc}</p>

              {/* ✅ Sequential Animated List (plays once) */}
              <ul className="space-y-2 font-medium text-sm md:text-base relative">
                {features?.map((item, i) => (
                  <li
                    key={i}
                    className={`flex gap-1 items-center transition-all duration-700 ease-out ${
                      i < visibleItems
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <img src={CheckIcon} alt="CheckIcon" />
                    <span className="slider-text-gradiant">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Section */}
            <div className="relative">
              <img src={TabImg} alt="TabImg" />

              <div
                className={`max-w-[290px] lg:block hidden absolute bottom-10 -left-[241px] mt-8 w-fit bg-white shadow-lg rounded-2xl px-5 py-3 border border-gray-200 fadeUpBox ${
                  fadeUp ? "animate-fadeUp" : ""
                }`}
              >
                <span className="gradient-text font-semibold lg:text-2xl md:text-xl text-lg">
                  {boxTitle}
                </span>
                <p className="gradiant-para text-sm mt-1 md:text-base">
                  {boxText}
                </p>
              </div>

              {BoxArrowImg && (
                <img
                  className="lg:block hidden absolute bottom-26"
                  src={BoxArrowImg}
                  alt="BoxArrow"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabsSection;

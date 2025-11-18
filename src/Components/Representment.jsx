import React, { useEffect, useState, useRef } from "react";
import WhiteCheckIcon from "../assets/Images/white-check.svg";
import RedCrossIcon from "../assets/Images/red-cross.svg";
import BtnArrow from "../assets/Images/btn_arrow.svg";

const Representment = ({
  title = "Start Accepting",
  title2="",
  highlightText = "Payments Faster",
  subtitle = "Tell us a bit about your business and we’ll set you up with the right gateway (NMI, Authorize.net, or Payarc) and invoicing workflow.",
  representmentTitle="",
  representmentfeatures = [],
  withoutpaylinklyTitle="",
  withoutpaylinkly = [],
  buttonText = "Send Message",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState(0); 
  const formRef = useRef(null);

 
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();

         
          if (representmentfeatures.length > 0) {
            representmentfeatures.forEach((_, i) => {
              setTimeout(() => {
                setVisibleItems((prev) => prev + 1);
              }, i * 400);
            });
          }
        }
      },
      { threshold: 0.2 }
    );

    if (formRef.current) observer.observe(formRef.current);
    return () => observer.disconnect();
  }, [representmentfeatures]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();

         
          if (withoutpaylinkly.length > 0) {
            withoutpaylinkly.forEach((_, i) => {
              setTimeout(() => {
                setVisibleItems((prev) => prev + 1);
              }, i * 400);
            });
          }
        }
      },
      { threshold: 0.2 }
    );

    if (formRef.current) observer.observe(formRef.current);
    return () => observer.disconnect();
  }, [withoutpaylinkly]);

  return (
    <section
      ref={formRef}
      className={`lg:px-10 md:px-6 px-5 transition-all duration-1000 ease-out flex flex-col gap-5 md:gap:8 lg:gap-12 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Heading */}
      <div className="flex flex-col gap-2.5 max-w-[880px] mx-auto">
        <h1 className="text-center main-heading gradient-text leading-tight">
          {title} <span className="blue-text">{highlightText}</span>{title2}
        </h1>
        <p className="text-center gradiant-para text-base max-w-[700px] mx-auto">
          {subtitle}
        </p>
      </div>

      {/* Features */}
      <div className="w-full px-5 md:px-6 lg:px-10 flex justify-center">
        <div className="max-w-[920px] w-full flex lg:flex-row flex-col lg:gap-3 gap-5 justify-center">

          {/* LEFT FEATURES BOX (Sequential Animation) */}
          <div className="lg:w-[50%] w-full rounded-2xl p-6 lg:p-8 custom-border flex flex-col gap-2 lg:mr-2 ">
            <h3 className="lg:text-[32px] md:text-2xl text-xl red-gradiant-heading lg:pb-8 md:pb-5 pb-2 ">
                 {representmentTitle}
            </h3>
            {representmentfeatures.length > 0 ? (
              <ul className="space-y-3 relative">
                {representmentfeatures.map((item, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-3 text-sm leading-[1.45] transition-all duration-300 ease-out red-gradiant-para ${
                      i < visibleItems
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-0"
                    }`}
                    style={{ transitionDelay: `${i * 10}ms` }}
                  >
                    <img
                      src={RedCrossIcon}
                      alt="RedCrossIcon"
                      className="w-5 h-5 mt-1.5"
                    />
                    <p className="lg:text-xl md:text-lg text-base">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-gray-200 text-sm">
                No features available.
              </p>
            )}
          </div>

           {/* RIGHT FEATURES BOX (Sequential Animation) */}
          <div className="lg:w-[50%] w-full rounded-2xl p-6 lg:p-8 blue-form-box text-white flex flex-col gap-2 lg:mr-2">
             <h3 className="lg:text-[32px] md:text-2xl text-xl tracking-[-1.28px] lg:pb-8 md:pb-5 pb-2 ">
                 {withoutpaylinklyTitle}
            </h3>
            {withoutpaylinkly.length > 0 ? (
              <ul className="space-y-3 relative">
                {withoutpaylinkly.map((item, i) => (
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
                    <p className="lg:text-xl md:text-lg text-base">
                      {item}
                    </p>
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

export default Representment;

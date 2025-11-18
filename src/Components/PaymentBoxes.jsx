import React, { useEffect, useState, useRef } from "react";

const PaymentBoxes = ({
  bottomLogo,
  title,
  highlight,
  title2,
  description,
  features,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const paymentsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (paymentsRef.current) observer.observe(paymentsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section ref={paymentsRef} className="payment-boxes-section px-5 w-full relative">
        <div className="max-w-[1200px] mx-auto">
          {bottomLogo && (
            <div className="absolute -bottom-50 -translate-x-1/50">
              <img src={bottomLogo} alt="bottom-img" />
            </div>
          )}

          <div
            className={`flex flex-col gap-4 justify-center items-center transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Title */}
            <div className="lg:pt-[180px] md:pt-[100px] pt-10 max-w-[700px]">
              <h1 className="main-heading text-center gradient-text leading-tight">
                {title}
                <span className="blue-text">{highlight}</span>
                {title2}
              </h1>
            </div>

            {/* Description */}
            <p className="text-center gradiant-para md:text-base text-sm max-w-[700px] mx-auto">
              {description}
            </p>

            {/* Feature Boxes */}
            <div className="lg:gap-7 md:gap-5 gap-3 container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:mt-10 mt-5">
              {features.map((box, index) => (
                <div
                  key={index}
                  className={`payment-box payment-box-hover p-5 flex flex-col gap-4 transition-all duration-700 ease-out ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
                    <p className="gradiant-para md:text-base text-sm">{box.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentBoxes;

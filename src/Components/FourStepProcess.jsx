import React, { useEffect, useState, useRef } from "react";

const FourStepProcess = ({
  header = {
    title: "How It Works –",
    highlight: "Simple 4-Step Process",
    description:
      "Learn how our credit card processing system streamlines payments in four simple steps. From secure transactions to fast deposits, we ensure a smooth process.",
  },
  steps = [],
  image = null, // Optional: You can pass a URL or imported image for the left section
}) => {
  const paymentsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState(0);

  // 🔹 Intersection + Sequential Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();

          // Sequential reveal
          steps.forEach((_, i) => {
            setTimeout(() => setVisibleSteps((prev) => prev + 1), i * 400);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (paymentsRef.current) observer.observe(paymentsRef.current);
    return () => observer.disconnect();
  }, [steps]);

  return (
    <section
      ref={paymentsRef}
      className={`payment-boxes-section w-full relative transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col lg:gap-[50px] md:gap-7 gap-6 md:px-6 px-5">
        {/* Header */}
        <div className="md:pt-40 pt-5 flex flex-col md:gap-0 gap-2">
          <h1 className="text-center main-heading gradient-text leading-tight">
            {header.title} <br />
            <span className="blue-text">{header.highlight}</span>
          </h1>
          <p className="gradiant-para text-base max-w-[700px] mx-auto text-center">
            {header.description}
          </p>
        </div>

        {/* Steps & Image */}
        <div className="row flex md:flex-row flex-col-reverse md:gap-10 gap-5">
          {/* Optional Image Section */}
          {image && (
            <div
              className="four-step-img rounded-[22px] col md:w-1/2 w-full md:min-100px min-h-64 bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          )}

          <div className={`${image ? "md:w-1/2 w-full" : "w-full"}`}>
            <div className="relative">
              <div className="flex flex-col gap-6">
                {steps.map((s, i) => (
                  <div
                    key={i}
                    className={`relative flex items-start gap-4 transition-all duration-700 ease-out ${
                      i < visibleSteps
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${i * 150}ms` }}
                  >
                    {/* Vertical Line */}
                    {i !== steps.length - 1 && (
                      <div className="absolute top-[72px] md:left-13 left-[52px] h-[72px] w-1 vertical-line z-20"></div>
                    )}

                    <div className="rounded-[22px] px-5 py-5 w-full flex items-center gap-7 four-step-content">
                      <div className="step-badge px-5 py-3.5 text-white font-semibold md:text-xl text-lg">
                        {s.num}
                      </div>
                      <div>
                        <h3 className="font-semibold md:text-xl text-lg gradient-text">
                          {s.title}
                        </h3>
                        <p className="text-[14px] gradiant-para">{s.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourStepProcess;

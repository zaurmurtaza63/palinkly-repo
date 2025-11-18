import React, { useEffect, useState, useRef } from "react";
import AvatarTwo from "../assets/Images/testimonial-2.png";
import AvatarThree from "../assets/Images/testimonial-3.png";
import BtnArrow from "../assets/Images/btn_arrow.svg";
import { Link } from "react-router-dom";

const testimonials = [
  {
    name: "Simon Mantle",
    role: "Merchant",
    quote:
      "Paylinkly transformed our payment processing. The seamless integration with NMI and our existing shopping cart made the switch effortless. Our chargeback rate dropped by 60% in the first month.",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Aisha Khan",
    role: "COO, Finlytics",
    quote:
      "Switching to Paylinkly completely streamlined our transactions. The setup was seamless, and the analytics dashboard gave us instant clarity on cash flow. Within weeks, our approval rates rose by 45% and refunds dropped significantly.",
    avatar: AvatarTwo,
  },
  {
    name: "Daniel Lee",
    role: "Founder, SwiftPay",
    quote:
      "Paylinkly simplified our entire payment workflow. Integration took minutes, and the real-time insights helped us spot issues instantly. Our processing speed improved by 50% and customer disputes nearly disappeared.",
    avatar: AvatarThree,
  },
];

const Testimonials = ({
  cta = {
    title: "Ready to Transform Your",
    highlight: "Payment Processing?",
    title2: "",
    des: "Start your free trial today and experience the Paylinkly difference.",
    primaryBtn: { label: "Start Your Free Trial", href: "#" },
    secondaryBtn: { label: "Book a Demo", href: "#" },
  },
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const finalRef = useRef(null);

  // Animate section once on scroll
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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

useEffect(() => {
  setProgress(0);
  const duration = 8000; // total fill time
  const interval = 20;
  const steps = duration / interval;
  let current = 0;

  const timer = setInterval(() => {
    current++;

    const nextProgress = (current / steps) * 105;
    setProgress(Math.min(nextProgress, 100));

    if (current >= steps) {
      clearInterval(timer);
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }
  }, interval);

  return () => clearInterval(timer);
}, [activeIndex]);



  return (
    <>
      {/* Testimonials Section */}
      <section
        ref={sectionRef}
        className={`md:px-6 px-5 flex justify-center transition-all duration-1000 ease-out md:mt-0 mt-8 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="relative w-full max-w-[1200px] text-center">
          <div className="testimonials-bg relative rounded-3xl md:h-[400px] h-[450px] text-white overflow-hidden">
            <h2 className="absolute text-[130px] text-[#007AFF]/20 left-1/2 -translate-x-1/2 select-none pointer-events-none">
              Paylinkly
            </h2>

            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`transition-opacity duration-700 absolute inset-0 flex flex-col justify-center items-center h-full ${
                  i === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <h3 className="leading-relaxed lg:px-14 md:px-5 px-3 lg:text-[32px] md:text-2xl text-xl">
                  “{t.quote}”
                </h3>
                <div className="text-[16px] font-semibold">{t.name}</div>
                <div className="text-[#CFE4FF] text-sm">{t.role}</div>
              </div>
            ))}
          </div>

          {/* Avatar Selector */}
          <div className="flex justify-center -mt-5 gap-4">
            {testimonials.map((t, i) => {
              const isActive = i === activeIndex;
              return (
                <div
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`relative z-10 w-14 h-14 rounded-2xl border-4 border-white shadow-md overflow-hidden transition-all duration-500 cursor-pointer ${
                    isActive ? "scale-110" : "opacity-90"
                  }`}
                >
                  {/* PROGRESS BORDER ON TOP (fix: z-index + pointer-events) */}
                  {isActive && (
                    <svg
                      className="absolute inset-0 w-full h-full z-20 pointer-events-none"
                      viewBox="0 0 64 64"
                    >
                      <defs>
                        <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#239CFF" />
                          <stop offset="100%" stopColor="#005BE3" />
                        </linearGradient>
                      </defs>
                      <rect
                        x="2"
                        y="2"
                        width="60"
                        height="60"
                        rx="14"
                        ry="14"
                        stroke="url(#gradient)"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                        // keep your dash math
                        strokeDasharray={4 * (60 + 60 - 28)}
                        strokeDashoffset={
                          4 * (60 + 60 - 28) * (1 - progress / 100)
                        }
                        style={{ transition: "stroke-dashoffset 0.03s linear" }}
                      />
                    </svg>
                  )}

                  {/* Avatar image (below the SVG ring) */}
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className={`w-full h-full object-cover rounded-[14px] transition-all duration-500 ${
                      isActive ? "grayscale-0" : "grayscale"
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={finalRef}
        className={`md:px-6 px-5 w-full relative lg:mt-16 md:mt-12 mt-7 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="mx-auto flex flex-col md:gap-8 gap-4 justify-center items-center max-w-[820px]">
          <div>
            <h1 className="text-center main-heading gradient-text leading-tight">
              {cta.title}
              <span className="blue-text">{cta.highlight}</span>
              {cta.title2}
            </h1>
            <p className="gradiant-para text-sm md:text-base text-center max-w-[500px] mx-auto mt-2">
              {cta.des}
            </p>
          </div>

          <div className="flex gap-2.5">
            {cta.primaryBtn && (
              <Link to="/leads">
              <button
                href={cta.primaryBtn.href}
                className="md:text-base text-sm hover:cursor-pointer flex items-center justify-center gap-2.5 blue-btn max-w-fit hover:-translate-y-0.5 transition-all duration-300 text-white font-medium"
              >
                {cta.primaryBtn.label}
                <img src={BtnArrow} alt="btn-arrow" />
              </button>
              </Link>
            )}
            {cta.secondaryBtn && (
              <Link to="/contact">
              <button
                href={cta.secondaryBtn.href}
                className="md:text-base text-sm hover:cursor-pointer flex items-center justify-center gap-2.5 white-btn max-w-fit hover:-translate-y-0.5 transition-all duration-300 gradient-text font-medium"
              >
                {cta.secondaryBtn.label}
              </button>
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;

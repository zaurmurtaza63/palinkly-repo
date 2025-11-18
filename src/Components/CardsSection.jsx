import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import TailoredCardsImg from "../assets/Images/paycards.png";


const CardsSection = ({
    title,
    highlighted,
    title2,
    subtitle,
}) => {
    const [isTailoredVisible, setIsTailoredVisible] = useState(false);
    const tailoredRef = useRef(null);
   useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setIsTailoredVisible(true);
        },
        { threshold: 0.2 }
      );
  
      if (tailoredRef.current) observer.observe(tailoredRef.current);
      return () => observer.disconnect();
    }, []);
  return (
    <>
    
     {/* TAILORED SECTION */}
                      <section ref={tailoredRef} className="mt-8 md:mt-16 lg:mt-[100px] px-5">
                        <div>
                          <div
                            className={`max-w-[1200px] mx-auto flex flex-col gap-4 justify-center items-center transition-all duration-1000 ease-out ${isTailoredVisible
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 translate-y-10"
                              }`}
                          >
                            <h1 className="main-heading lg:tracking-[-2.56px] md:tracking-[-1.56px] tracking-[-0.56px] gradient-text text-center leading-tight">
                              {title}
                              <span className="blue-text">{highlighted}</span>
                               {title2}
                            </h1>
                            <p className="text-center gradiant-para text-base  max-w-[700px] mx-auto">{subtitle}</p>
                            <div className="tailored-cards">
                              <img src={TailoredCardsImg} alt="TailoredCardsImg" />
                            </div>
                          <Link to="/contact">
          <button className="hover:cursor-pointer blue-btn max-w-fit hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 text-white font-bold">
            Get Started Today
          </button>
          </Link >
                          </div>
                        </div>
                      </section>
    
    </>
  )
}

export default CardsSection
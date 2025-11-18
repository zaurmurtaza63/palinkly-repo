import React from "react";
import Send from "../assets/Images/send.svg";
import Cursor from "../assets/Images/cursor.svg";
import Tracking from "../assets/Images/tracking.svg";
import DollarIcon from "../assets/Images/dollarIcon.svg";
const CustomMarquee = () => {
  return (
    <>
      <section className="w-full overflow-hidden">
        <div className="marquee lg:py-[110px] md:py-20 py-8 marquee-bg-logo">
          <div className="marquee__inner marquee-bg-gradiant">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="flex py-5 px-10">
                <span className="flex gap-2 items-center text-white mx-10">
                  <img src={Send} alt="Send_Icon" />
                  <h4 className="lg:text-2xl md:text-xl text-lg">
                    Send via Multiple Channels
                  </h4>
                </span>
                <span className="flex gap-2 items-center text-white mx-10">
                  <img src={Cursor} alt="Cursor_Icon" />
                  <h4 className="lg:text-2xl md:text-xl text-lg">
                    One-Click Checkout
                  </h4>
                </span>
                <span className="flex gap-2 items-center text-white mx-10">
                  <img src={Tracking} alt="Tracking_Icon" />
                  <h4 className="lg:text-2xl md:text-xl text-lg">
                    Real-Time Status Tracking
                  </h4>
                </span>
                <span className="flex gap-2 items-center text-white mx-10">
                  <img src={DollarIcon} alt="Dollar_Icon" />
                  <h4 className="lg:text-2xl md:text-xl text-lg">
                    Flexible Payment Options
                  </h4>
                </span>
              </div>
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
      animation: scroll 236s linear infinite;
    }
    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `}</style>
      </section>
    </>
  );
};

export default CustomMarquee;

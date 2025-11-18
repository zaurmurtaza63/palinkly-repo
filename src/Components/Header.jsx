import React, { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import MenuArrow from "../assets/Images/menu-arrow.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [subMenus, setSubMenus] = useState({
    creditCard: false,
    onlinePayment: false,
    chargeback: false,
  });

  const toggleSubMenu = (key) => {
    setSubMenus((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <header className="w-full  fixed top-0 left-0 z-50 bg-white/30 backdrop-blur-md shadow-sm">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="text-[26px] text-[#0b2239]">Paylinkly</h1>

        {/* Desktop Nav */}
        <div className="flex gap-[30px]">
          <nav className="font-family-nt hidden lg:flex items-center gap-[30px] text-[#555] relative">
            <Link to="/" className="hover:text-[#0b2239]">
              Home
            </Link>
            <Link to="/about" className="hover:text-[#0b2239]">
              About
            </Link>

            {/* Solutions Dropdown */}
            <div
              className="font-family-nt relative group"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                className={`hover:text-[#0b2239] flex items-center gap-1 cursor-pointer ${solutionsOpen ? "active" : ""
                  }`}
              >
                Solutions{" "}
                <span>
                  <img src={MenuArrow} alt="MenuArrow" />
                </span>
              </button>

              {/* Dropdown */}
              <div
                className={`absolute left-0 top-full mt-2 bg-white rounded-xl shadow-lg transition-all duration-300 origin-top z-30 ${solutionsOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
                  }`}
              >
                <ul className="flex flex-col w-[260px] relative">
                  {[
                    { name: "Online Invoicing System", path: "/online-invoicing-system" },
                    { name: "Credit Card Processing", hasSubmenu: true },
                    { name: "Online Payment Processing", hasSubmenu: true },
                    { name: "Chargeback Services", hasSubmenu: true },
                    { name: "Analytical Reports", path: "/analytical-reports" },
                    { name: "Merchant Account Analysis", path: "/merchant-account-analysis" },
                  ].map((item, i) => (
                    <li key={i} className="relative group/item">
                      <Link
                        to={item.path || "#"}
                        className={`px-5 py-3 text-sm font-medium text-gray-700 flex justify-between items-center ${item.hasSubmenu
                          ? "hover:bg-blue-50 hover:text-[#03449D]"
                          : "hover:bg-gray-100"
                          }`}
                      >
                        {item.name}
                        {item.hasSubmenu && (
                          <span>
                            <img
                              className="-rotate-90 transition-transform duration-200"
                              src={MenuArrow}
                              alt="MenuArrow"
                            />
                          </span>
                        )}
                      </Link>

                      {/* Nested submenu */}
                      {item.hasSubmenu && (
                        <div className="absolute top-0 left-full ml-0.5 bg-white rounded-xl shadow-lg hidden group-hover/item:block z-50">
                          <ul className="flex flex-col w-[260px] py-2 ">
                            {(
                              item.name === "Credit Card Processing"
                                ? [
                                  { name: "Retail Credit Card Processing", path: "/retail-credit-card-processing" },
                                  { name: "Mobile Credit Card Payments", path: "/mobile-credit-card-payments" },
                                  { name: "Zero-cost Credit Card Processing", path: "/zero-cost-credit-card" },
                                ]
                                : item.name === "Online Payment Processing"
                                  ? [
                                    { name: "ACH Payment Processing", path: "/ach-payment-processing" },
                                    { name: "Crypto Payment Processing", path: "/crypto-payment-processing" },
                                    { name: "E Check Payment Processing", path: "/e-check-payment-processing" },
                                  ]
                                  : item.name === "Chargeback Services"
                                    ? [
                                      { name: "ChargeBack Represents", path: "/charge-back-represents" },
                                      { name: "Real Time Chargeback Alerts", path: "/real-time-chargeBack-alerts" },
                                      { name: "Reduce , Manage And Win Chargebacks", path: "/reduce-manage-and-win-chargebacks" },
                                      { name: "Stop And Prevent Fraud", path: "/stop-and-prevent-fraud" },
                                    ]
                                    : []
                            ).map((sub, j) => (
                              <li key={j}>
                                <Link
                                  to={sub.path}
                                  className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#03449D] transition-all duration-200"
                                  onClick={() => setMenuOpen(false)}
                                >
                                  {sub.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-2.5">
            <button className="white-btn text-blue-950 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
              Tired of Chargebacks?
            </button>
            <button className="blue-btn text-white hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-[#0b2239] text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* ✅ Mobile Menu */}
      <div
        className={`lg:hidden bg-white shadow-lg absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-[800px]" : "max-h-0"
          }`}
      >
        <nav className="flex flex-col py-4 text-[#555]">
          <Link to="/" onClick={() => setMenuOpen(false)} className="px-6 py-2 hover:bg-blue-50 hover:text-[#03449D]">
            Home
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="px-6 py-2 hover:bg-blue-50 hover:text-[#03449D]">
            About
          </Link>

          {/* Solutions */}
          <div className="border-t border-gray-200 my-2" />
          <button
            onClick={() => setSolutionsOpen(!solutionsOpen)}
            className="px-6 py-2 flex justify-between items-center hover:text-[#03449D]"
          >
            Solutions
            <img
              src={MenuArrow}
              alt="arrow"
              className={`transition-transform duration-300 ${solutionsOpen ? "rotate-180" : ""
                }`}
            />
          </button>

          {/* ✅ Mobile expandable submenus */}
          {/* ✅ Mobile expandable submenus */}


{solutionsOpen && (
  <div className="ml-5 mt-1 flex flex-col gap-1">
    {/* Credit Card Processing */}
    <button
      onClick={() => toggleSubMenu("creditCard")}
      className="px-4 py-2 flex justify-between items-center text-sm hover:text-[#03449D]"
    >
      Credit Card Processing
      <img
        src={MenuArrow}
        alt="arrow"
        className={`transition-transform duration-300 ${subMenus.creditCard ? "rotate-180" : ""}`}
      />
    </button>
    {subMenus.creditCard && (
      <div className="ml-5 flex flex-col text-sm">
        <Link to="/retail-credit-card-processing" onClick={() => setMenuOpen(false)} className="py-1 hover:text-[#03449D]">Retail Credit Card Processing</Link>
        <Link to="/mobile-credit-card-payments" onClick={() => setMenuOpen(false)} className="py-1 hover:text-[#03449D]">Mobile Credit Card Payments</Link>
        <Link to="/zero-cost-credit-card" onClick={() => setMenuOpen(false)} className="py-1 hover:text-[#03449D]">Zero-cost Credit Card Processing</Link>
      </div>
    )}

    {/* Online Payment Processing */}
    <button
      onClick={() => toggleSubMenu("onlinePayment")}
      className="px-4 py-2 flex justify-between items-center text-sm hover:text-[#03449D]"
    >
      Online Payment Processing
      <img
        src={MenuArrow}
        alt="arrow"
        className={`transition-transform duration-300 ${subMenus.onlinePayment ? "rotate-180" : ""}`}
      />
    </button>
    {subMenus.onlinePayment && (
      <div className="ml-5 flex flex-col text-sm">
        <Link to="/ach-payment-processing" onClick={() => setMenuOpen(false)} className="py-1 hover:text-[#03449D]">ACH Payment Processing</Link>
        <Link to="/crypto-payment-processing" onClick={() => setMenuOpen(false)} className="py-1 hover:text-[#03449D]">Crypto Payment Processing</Link>
        <Link to="/e-check-payment-processing" onClick={() => setMenuOpen(false)} className="py-1 hover:text-[#03449D]">E-Check Payment Processing</Link>
      </div>
    )}

    {/* Chargeback Services */}
    <button
      onClick={() => toggleSubMenu("chargeback")}
      className="px-4 py-2 flex justify-between items-center text-sm hover:text-[#03449D]"
    >
      Chargeback Services
      <img
        src={MenuArrow}
        alt="arrow"
        className={`transition-transform duration-300 ${subMenus.chargeback ? "rotate-180" : ""}`}
      />
    </button>
    {subMenus.chargeback && (
      <div className="ml-5 flex flex-col text-sm">
        <Link to="/charge-back-represents" onClick={() => setMenuOpen(false)} className="py-1 hover:text-[#03449D]">Chargeback Represents</Link>
        <Link to="/real-time-chargeBack-alerts" onClick={() => setMenuOpen(false)} className="py-1 hover:text-[#03449D]">Real-Time Chargeback Alerts</Link>
        <Link to="/reduce-manage-and-win-chargebacks" onClick={() => setMenuOpen(false)} className="py-1 hover:text-[#03449D]">Reduce, Manage & Win Chargebacks</Link>
        <Link to="/stop-and-prevent-fraud" onClick={() => setMenuOpen(false)} className="py-1 hover:text-[#03449D]">Stop & Prevent Fraud</Link>
      </div>
    )}

    {/* ✅ Plain links for the last two items */}
    <Link
      to="/analytical-reports"
      className="px-4 py-2 text-sm hover:bg-blue-50 hover:text-[#03449D] text-left"
      onClick={() => setMenuOpen(false)}
    >
      Analytical Reports
    </Link>
    <Link
      to="/merchant-account-analysis"
      className="px-4 py-2 text-sm hover:bg-blue-50 hover:text-[#03449D] text-left"
      onClick={() => setMenuOpen(false)}
    >
      Merchant Account Analysis
    </Link>
  </div>
)}



          <div className="border-t border-gray-200 my-2" />
          <button className="px-6 py-2 text-blue-900 hover:bg-blue-50 hover:text-[#03449D]">
            Tired of Chargebacks?
          </button>
          <button className="px-6 py-2 bg-[#005BE3] text-white rounded-md mx-6 mt-2 hover:bg-[#03449D] transition-all duration-300">
            Schedule Consultation
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

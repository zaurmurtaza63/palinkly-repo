import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <footer className="footer-bg-img">
      <div className="max-w-[1200px] mx-auto">
        <div className="footer-devider"></div>
        <div className="px-5 gap-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 pt-16 pb-20">
        <div className="flex flex-col gap-8">
          <div className="max-w-[392px] flex flex-col gap-3">
             <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text leading-tight">
              Paylinkly
            </h3>
             <p className="footer-text">Get merchant services and start processing payments instantly. We can design a custom package for your business and integrate with your existing website.</p>
             </div>
             <button className="w-fit blue-btn hover:-translate-y-0.5 hover:shadow-lg hover:cursor-pointer transition-all duration-300 text-white font-bold">Schedule Consultation</button>
        </div>
        <div className="flex gap-[70px] items-start justify-end">
        <div className="flex flex-col gap-3">
          <h4 className="md:text-[18px] text-base gradient-text leading-tight">Quicklinks</h4>
          <ul className="flex flex-col gap-1.5 footer-text">
            <li> <Link to="/about"> About </Link> </li>
            <li> <Link to="/faq"> FAQ </Link> </li>
            <li><a href="#">Blog</a></li>
            <li> <Link to="/privacy-policy"> Privacy Policy </Link> </li>
            <li> <Link to="/terms-of-services"> Terms of Service </Link> </li>
          </ul>
           </div>
        <div className="flex flex-col gap-3">
          <h4 className="md:text-[18px] text-base gradient-text leading-tight">Gateways</h4>
          <ul className="flex flex-col gap-1.5 footer-text">
            <li><a href="#">NMI</a></li>
            <li><a href="#">Authorize.net</a></li>
            <li><a href="#">Payarc</a></li>
          </ul>
           </div>
        <div className="flex flex-col gap-3">
          <h4 className="md:text-[18px] text-base gradient-text leading-tight">Contact Info</h4>
          <ul className="flex flex-col gap-1.5 footer-text">
            <li><a href="#">(888) 884-9931</a></li>
            <li><a href="#">info@paylinkly.com</a></li>
            <li><a href="#">11133 Shady Trail, Dallas, TX 75229</a></li>
          </ul>
           </div>
        </div>
      </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;

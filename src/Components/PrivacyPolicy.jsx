import React from "react";
import HeroSection from "./HeroSection";
import HeroBg from "../assets/Images/about.webp";

const PrivacyPolicy = () => {
  return (
    <>
      <HeroSection
        title="Privacy Policy"
        highlightText=""
        subtitle="Last Updated: July 1, 2025"
        backgroundImage={HeroBg}
        buttonText="Start Today"

      />

      <section className="faq-content max-w-5xl mx-auto px-5 lg:px-0 py-16 text-[#081029] leading-relaxed">
        {/* Our Commitment */}
        <h2 className=" font-semibold mb-3">Our Commitment to Your Privacy</h2>
        <p className="mb-8">
          Paylinkly is committed to safeguarding the privacy of our users. We want to assure you
          that we do not share your personal, mobile or messaging consent information with third
          parties for marketing or advertising purposes. This privacy policy outlines how we
          collect, use, and protect the information you provide.
        </p>

        {/* Compliance */}
        <h2 className=" font-semibold mb-3">Privacy Compliance Certification</h2>
        <p className="mb-8">Paylinkly is PCI Compliant.</p>

        {/* Collection */}
        <h2 className=" font-semibold mb-3">Collection of Personal Information</h2>
        <p className="mb-4">
          We only collect personal information that you voluntarily provide when using our services, such as:
        </p>

        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>First and Last Name</li>
          <li>Mailing Address</li>
          <li>E-mail Address</li>
          <li>Phone Number</li>
          <li>Payment Information (when making purchases)</li>
        </ul>

        <p className="mb-6">
          You may be asked to provide this information when:
        </p>

        <ol className="list-decimal list-inside mb-8 space-y-1">
          <li>Registering for an account</li>
          <li>Entering a promotion or contest</li>
          <li>Subscribing to offers</li>
          <li>Contacting us</li>
          <li>Making payments</li>
        </ol>

        <p className="">
          We do not collect personal information without your knowledge or consent.
        </p>
       <h2 className=" font-semibold mb-3">Sharing with Third Parties</h2>
        <p className="mb-4">
          Paylinkly does not sell, rent, or lease customer data to third parties.
          We may share your information with trusted partners for specific purposes such as:
        </p>

        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Email communications</li>
          <li>Customer support</li>
          <li>Order fulfillment or delivery</li>
        </ul>

        <p className="mb-8">
          These third parties are contractually obligated to use your information only for these 
          purposes and must maintain its confidentiality. We may also disclose your data to comply 
          with legal obligations or protect the safety of users or the public, as required by law.
        </p>

        {/* Your Privacy Rights */}
        <h2 className=" font-semibold mb-3">Your Privacy Rights</h2>
        <p className="mb-4">
          Under applicable laws such as the California Consumer Privacy Act (CCPA), you have the right to:
        </p>

        <ul className="list-disc list-inside mb-8 space-y-1">
          <li>Know what personal data we collect and how we use it</li>
          <li>Request access to or deletion of your data</li>
          <li>Opt-out of disclosures to third parties (where applicable)</li>
        </ul>

        <p className="mb-12">
          To make such requests, contact us at <strong>info@paylinkly.com</strong>.
        </p>

        {/* Cookies and Tracking */}
        <h2 className=" font-semibold mb-3">Cookies and Tracking</h2>
        <p className="mb-8">
          We may use cookies and similar technologies to enhance user experience and analyze usage 
          patterns. You may choose to disable cookies in your browser, but doing so may affect 
          certain features on our site.
        </p>

        {/* Behavioral Tracking */}
        <h2 className=" font-semibold mb-3">Behavioral Tracking</h2>
        <p className="mb-8">
          We may track user behavior to better understand how our services are used and to 
          personalize content. This tracking does not involve selling your information or 
          monitoring you across unrelated third-party websites.
        </p>

        {/* Data Storage */}
        <h2 className=" font-semibold mb-3">Data Storage</h2>
        <p className="mb-8">
          Your data may be stored securely on third-party servers we contract with. These 
          providers are required to adhere to high standards of data protection.
        </p>

        {/* Children’s Privacy */}
        <h2 className=" font-semibold mb-3">Children’s Privacy</h2>
        <p className="mb-8">
          We do not knowingly collect personal information from children under the age of 13. 
          If you are under 13, please do not use our site or services without parental consent.
        </p>

        {/* Communication Preferences */}
        <h2 className=" font-semibold mb-3">Communication Preferences</h2>
        <p className="mb-8">
          You may opt-out of promotional communications from us at any time by emailing 
          <strong> info@paylinkly.com</strong> or replying STOP to marketing emails.
        </p>

        {/* Changes to Policy */}
        <h2 className=" font-semibold mb-3">Changes to this Policy</h2>
        <p className="mb-8">
          We may update this Privacy Policy from time to time. Material changes will be 
          communicated through email and posted on our website. Continued use of our 
          services constitutes acceptance of any updates.
        </p>

        {/* Contact Us */}
        <h2 className=" font-semibold mb-3">Contact Us</h2>
        <p className="">
          <strong>Paylinkly Inc.</strong><br />
          11133 Shady Trail, Dallas, TX 75229 <br />
          Email: <strong>info@paylinkly.com</strong> <br />
          Phone: <strong>(888) 894-0931</strong>
        </p>
      </section>
      {/*  */}
    </>
  );
};

export default PrivacyPolicy;

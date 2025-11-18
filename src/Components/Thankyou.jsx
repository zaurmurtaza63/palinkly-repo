import React from 'react'
import HeroSection from "./HeroSection";
import HeroBg from "../assets/Images/e-check.webp"


const Thankyou = () => {
  return (
    <>
    
     <HeroSection
            highlightText="Thank you for your request!"
            subtitle="You're now one step closer to joining the 20,000+ businesses in our payments family! Working with us means you'll receive a dedicated advisor, low fees, and a personalized merchant account fit for your business."
            buttonText="Start Saving Today"
            buttonLink="#"
            backgroundImage={HeroBg}
          />
    </>
  )
}

export default Thankyou
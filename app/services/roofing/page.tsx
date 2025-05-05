'use client'



import FAQ from "@/components/demos/ui/faq";
import RoofingServices from "@/components/demos/ui/FeatureSection";
import AboutHighlight from "@/components/demos/ui/FeatureSectionTwo";
import Footer from "@/components/demos/ui/footer";
import HeroSectionWithForm from "@/components/demos/ui/heroSectionForm";
import Navbar from "@/components/demos/ui/navbar";
import RoofingContact from "@/components/demos/ui/roofingContact";
import RoofingSystems from "@/components/demos/ui/roofingSystemsLanding";
import ShingleDamageGrid from "@/components/demos/ui/shingles";

import { TestimonialCarousel } from "@/components/demos/ui/testimonial";


export default function Home() {
  return (
    <div >



        <Navbar/>
      <section id="Home">
        
        <RoofingSystems/>
        <ShingleDamageGrid/>
        <RoofingContact/>
      </section>
    
      
      
      <section>
        <Footer/>
      </section>
        
      </div>
  );
}
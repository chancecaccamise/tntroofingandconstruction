'use client'



import FAQ from "@/components/demos/ui/faq";
import RoofingServices from "@/components/demos/ui/FeatureSection";
import AboutHighlight from "@/components/demos/ui/FeatureSectionTwo";
import Footer from "@/components/demos/ui/footer";
import HeroSectionWithForm from "@/components/demos/ui/heroSectionForm";
import Navbar from "@/components/demos/ui/navbar";
import SidingContact from "@/components/demos/ui/sidingContact";
import SidingFeatureOne from "@/components/demos/ui/sidingFeatureOne";
import SidingFeatureTwo from "@/components/demos/ui/sidingFeatureTwo";
import SidingSystems from "@/components/demos/ui/sidingSystems";

import { TestimonialCarousel } from "@/components/demos/ui/testimonial";


export default function Home() {
  return (
    <div >



      
      <section id="Home">
        <Navbar/>
        <SidingSystems/>
        <SidingFeatureOne/>
        <SidingFeatureTwo/>
        <SidingContact/>
      </section>
    
      
      
      <section>
        <Footer/>
      </section>
        
      </div>
  );
}
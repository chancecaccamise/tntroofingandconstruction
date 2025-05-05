'use client'



import FAQ from "@/components/demos/ui/faq";
import RoofingServices from "@/components/demos/ui/FeatureSection";
import AboutHighlight from "@/components/demos/ui/FeatureSectionTwo";
import Footer from "@/components/demos/ui/footer";
import GutterContact from "@/components/demos/ui/gutterContact";
import GutterFeatureOne from "@/components/demos/ui/gutterFeatureOne";
import GutterFeatureTwo from "@/components/demos/ui/gutterFeatureTwo";
import GutterSystems from "@/components/demos/ui/gutterSystems";
import HeroSectionWithForm from "@/components/demos/ui/heroSectionForm";
import Navbar from "@/components/demos/ui/navbar";

import { TestimonialCarousel } from "@/components/demos/ui/testimonial";


export default function Home() {
  return (
    <div >



      
      <section id="Home">
        <Navbar/>
        <GutterSystems/>
        <GutterFeatureOne/>
        <GutterFeatureTwo/>
        <GutterContact/>
        
      </section>
    
      
      
      <section>
        <Footer/>
      </section>
        
      </div>
  );
}
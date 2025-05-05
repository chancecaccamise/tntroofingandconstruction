'use client'



import CareerFeature from "@/components/demos/ui/careerFeature";
import { CareerForm } from "@/components/demos/ui/careerForm";
import FAQ from "@/components/demos/ui/faq";
import RoofingServices from "@/components/demos/ui/FeatureSection";
import AboutHighlight from "@/components/demos/ui/FeatureSectionTwo";
import Footer from "@/components/demos/ui/footer";
import HeroSectionWithForm from "@/components/demos/ui/heroSectionForm";
import Navbar from "@/components/demos/ui/navbar";

import { TestimonialCarousel } from "@/components/demos/ui/testimonial";


export default function Home() {
  return (
    <div >



      
      <section id="Home">
        <Navbar/>
      </section>
      <CareerFeature/>
      <CareerForm/>
    
      
      
      <section>
        <Footer/>
      </section>
        
      </div>
  );
}
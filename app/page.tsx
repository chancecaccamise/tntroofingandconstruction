'use client'




import FAQ from "@/components/demos/ui/faq";
import RoofingServices from "@/components/demos/ui/FeatureSection";
import AboutHighlight from "@/components/demos/ui/FeatureSectionTwo";
import Footer from "@/components/demos/ui/footer";
import LocationSection from "@/components/demos/ui/googlemapsFeature";
import HeroSectionWithForm from "@/components/demos/ui/heroSectionForm";

import { TestimonialCarousel } from "@/components/demos/ui/testimonial";


export default function Home() {
  return (
    <div >



      
      <section id="Home">
        <HeroSectionWithForm/>
      </section>
      <section>
        <RoofingServices/>
        <AboutHighlight/>
        <LocationSection/>

        <TestimonialCarousel/>
        <FAQ/>
      </section>
      
      
      <section>
        <Footer/>
      </section>
        
      </div>
  );
}
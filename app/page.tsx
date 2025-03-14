'use client'



import Hero from "@/components/demos/hero";
import Contact from "@/components/demos/ui/contact";
import Footer from "@/components/demos/ui/footer";
import HeroSectionWithForm from "@/components/demos/ui/heroSectionForm";
import NewGallery from "@/components/demos/ui/newGallery";
import ServicesSection from "@/components/demos/ui/services";


export default function Home() {
  return (
    <div >



      
      <section id="Home">
        <HeroSectionWithForm/>
      </section>
      <section id="Services" className="mb-18">
        <ServicesSection/>
      </section>
      <section id="Gallery" className="mb-18">
        <NewGallery/>
      </section>
      <section id="Contact" className="mb-18">
        <Contact/>
      </section>
      
      <section>
        <Footer/>
      </section>
        
      </div>
  );
}
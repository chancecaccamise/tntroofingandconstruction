'use client'

import CareerFeature from "@/components/demos/ui/careerFeature";
import { CareerForm } from "@/components/demos/ui/careerForm";
import Footer from "@/components/demos/ui/footer";
import Navbar from "@/components/demos/ui/navbar";


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
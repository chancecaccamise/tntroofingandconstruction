'use client'




import Footer from "@/components/demos/ui/footer";

import Navbar from "@/components/demos/ui/navbar";
import SidingContact from "@/components/demos/ui/sidingContact";
import SidingFeatureOne from "@/components/demos/ui/sidingFeatureOne";
import SidingFeatureTwo from "@/components/demos/ui/sidingFeatureTwo";
import SidingSystems from "@/components/demos/ui/sidingSystems";



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
'use client'




import Footer from "@/components/demos/ui/footer";

import Navbar from "@/components/demos/ui/navbar";
import RoofingContact from "@/components/demos/ui/roofingContact";
import RoofingSystems from "@/components/demos/ui/roofingSystemsLanding";
import ShingleDamageGrid from "@/components/demos/ui/shingles";




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
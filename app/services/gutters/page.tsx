'use client'




import Footer from "@/components/demos/ui/footer";
import GutterContact from "@/components/demos/ui/gutterContact";
import GutterFeatureOne from "@/components/demos/ui/gutterFeatureOne";
import GutterFeatureTwo from "@/components/demos/ui/gutterFeatureTwo";
import GutterSystems from "@/components/demos/ui/gutterSystems";

import Navbar from "@/components/demos/ui/navbar";




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
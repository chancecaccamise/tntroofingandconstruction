'use client'



import ContactUs from "@/components/demos/ui/contactUs";

import Footer from "@/components/demos/ui/footer";

import Navbar from "@/components/demos/ui/navbar";




export default function Home() {
  return (
    <div >



      
      <section id="Home">
        <Navbar/>
        <ContactUs/>
      </section>
    
      
      
      <section>
        <Footer/>
      </section>
        
      </div>
  );
}
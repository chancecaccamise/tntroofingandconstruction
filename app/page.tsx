'use client'





import Hero from "@/components/demos/hero";
import Contact from "@/components/demos/ui/contact";
import Footer from "@/components/demos/ui/footer";


import NewGallery from "@/components/demos/ui/newGallery";



import Image from "next/image";
import Link from "next/link";
import {Link as ScrollLink, Element} from "react-scroll";








export default function Home() {
  return (
    <div >



      
      <section id="Home">
        <Hero/>
      </section>
      <section id="Gallery" className="mb-18">
        <NewGallery/>
      </section>
      <section id="Contact">
        <Contact/>
      </section>
      <section>
        <Footer/>
      </section>
        
      </div>
  );
}
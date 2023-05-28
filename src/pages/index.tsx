/* eslint-disable @next/next/no-img-element */
// eslint-disable-next-line @next/next/no-img-element

import AboutUs from "@/components/HomePage/AboutUs";
import CTA from "@/components/HomePage/CTA";
import Contact from "@/components/HomePage/Contact";
import Heros from "@/components/HomePage/Heros";
import Statistic from "@/components/HomePage/Statistic";
import Testimonials from "@/components/HomePage/Testimonials";

// eslint-disable-next-line @next/next/no-img-element
export default function Home() {
  return (
    <>
        <Heros />
        <AboutUs />
        <CTA />
        <Statistic />
        <Testimonials />
        <Contact />
    </>
  )
}
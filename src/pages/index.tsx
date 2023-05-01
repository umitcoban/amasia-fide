/* eslint-disable @next/next/no-img-element */
// eslint-disable-next-line @next/next/no-img-element

import AboutUs from "@/components/HomePage/AboutUs";
import CTA from "@/components/HomePage/CTA";
import Heros from "@/components/HomePage/Heros";
import Statistic from "@/components/HomePage/Statistic";
import Testimonials from "@/components/HomePage/Testimonials";
import ProductList from "@/components/Products/ProductList";
import ScrollButton from "@/components/UI/ScrollButton";

// eslint-disable-next-line @next/next/no-img-element
export default function Home() {
  return (
    <>
        <Heros />
        <AboutUs />
        <CTA />
        <Statistic />
        <Testimonials />
        <ProductList />
    </>
  )
}
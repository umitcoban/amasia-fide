/* eslint-disable @next/next/no-img-element */
// eslint-disable-next-line @next/next/no-img-element

import AboutUs from "@/components/HomePage/AboutUs";
import CTA from "@/components/HomePage/CTA";
import Contact from "@/components/HomePage/Contact";
import Heros from "@/components/HomePage/Heros";
import Statistic from "@/components/HomePage/Statistic";
import Testimonials from "@/components/HomePage/Testimonials";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";

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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = parseCookies(context);
  const token = cookies["token"];
  if (token)
    console.log("test");
  return {
    props: {

    }
  }
}
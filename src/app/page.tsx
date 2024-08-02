"use client"

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
export default function Home() {
  const name= "John"
  return <div>
    <Header name={name}/>
    Main landing page
    <Footer />
  </div>;
}

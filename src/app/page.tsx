"use client";
import Banner from "@/components/banner/banner";
import { ContactForm } from "@/components/contact-us/contact-us";
import Projects from "@/components/projects/projects";

export default function Home() {
  return (
    <div className="p-2">
      <Banner />
      <Projects />
      <ContactForm />
    </div>
  );
}

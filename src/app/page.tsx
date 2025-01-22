"use client";
import Banner from "@/components/banner/banner";
import BusinessCard from "@/components/business-card/business-card";
import { ContactForm } from "@/components/contact-us/contact-us";
import Projects from "@/components/projects/projects";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900/90 to-black text-white"
      id="home"
    >
      <div className="container mx-auto px-4 py-8 space-y-16 relative">
        {/* Subtle Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        {/* Components with relative positioning */}
        <div className="flex flex-col items-center gap-56">
          <div className="relative z-10">
            <Banner />
          </div>

          <div className="relative z-10">
            <Projects />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-28">
            <BusinessCard />
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

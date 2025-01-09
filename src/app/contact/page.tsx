'use client'
import { useState, useEffect } from "react";
import ContactForm from "../components/ContactForm";
import HeroPages from "../components/HeroPages";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <div className="min-h-screen bg-white"></div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <HeroPages title="Contact" />
      </div>
      <main className="flex-grow p-10">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <ContactForm />
      </main>
    </div>
  );
}

// Update this page (the content is just a fallback if you fail to update the page)

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ClientsSection from "@/components/ClientsSection";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <>
      <Header />
      <div id="home">
        <HeroSection />
      </div>
      <ServicesSection />
      <TestimonialsSection />
      <ClientsSection />
      <ContactForm />
    </>
  );
};

export default Index;

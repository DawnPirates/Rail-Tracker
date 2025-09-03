import Header from "@/components/Header";
import Hero from "@/components/Hero";
import UIShowcase from "@/components/UIShowcase";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <UIShowcase />
      <Services />
      <About />
      <Contact />
    </div>
  );
};

export default Index;

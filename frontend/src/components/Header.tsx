import { Button } from "@/components/ui/button";
import { Train } from "lucide-react";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-primary-dark to-primary text-primary-foreground py-4 px-6 shadow-[var(--shadow-glow)]">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-accent rounded-full p-2">
            <Train className="w-6 h-6 text-accent-foreground" />
          </div>
          <h1 className="text-2xl font-bold">RailYatra</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('hero')} className="hover:text-accent transition-colors duration-200">Home</button>
          <button onClick={() => scrollToSection('services')} className="hover:text-accent transition-colors duration-200">Services</button>
          <button onClick={() => scrollToSection('about')} className="hover:text-accent transition-colors duration-200">About</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-accent transition-colors duration-200">Contact</button>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-primary-foreground hover:text-accent">
            Login
          </Button>
          <Button className="btn-railway-accent">
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
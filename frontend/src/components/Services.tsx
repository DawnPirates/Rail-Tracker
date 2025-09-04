import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Ticket, Search, Clock, MapPin, Shield, Smartphone } from "lucide-react";
import stationScene from "@/assets/station-scene.jpg";

const Services = () => {
  const services = [
    {
      icon: Ticket,
      title: "Easy Booking",
      description: "Book train tickets instantly with our streamlined booking process. Multiple payment options available."
    },
    {
      icon: Search,
      title: "Live Tracking",
      description: "Real-time train location tracking with accurate arrival and departure timings."
    },
    {
      icon: Clock,
      title: "Schedule Updates",
      description: "Get instant notifications about delays, cancellations, and platform changes."
    },
    {
      icon: MapPin,
      title: "Route Planning",
      description: "Smart route suggestions with multiple travel options and fare comparisons."
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Bank-level security for all transactions with multiple payment gateway options."
    },
    {
      icon: Smartphone,
      title: "Mobile Interface",
      description: "Book and track on the go with Android support and online assistance."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience seamless railway travel with our comprehensive suite of services designed to make your journey comfortable and hassle-free.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:-translate-y-2 border-accent/20"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-accent-dark to-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Featured Image Section */}
        <div className="relative rounded-2xl overflow-hidden">
          <img 
            src={stationScene} 
            alt="Modern railway station" 
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 to-primary/60 flex items-center justify-center">
            <div className="text-center text-primary-foreground">
              <h3 className="text-3xl font-bold mb-4">Ready to Travel?</h3>
              <p className="text-xl mb-6">Join millions of satisfied travelers who trust RailTracker</p>
              <button className="btn-railway-accent">
                Start Your Journey
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
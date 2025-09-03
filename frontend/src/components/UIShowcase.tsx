import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Monitor, Smartphone, Clock, MapPin } from "lucide-react";
import bookingUI from "@/assets/booking-ui.jpg";
import trackingDashboard from "@/assets/tracking-dashboard.jpg";
import digitalTicket from "@/assets/digital-ticket.jpg";
import stationDisplay from "@/assets/station-display.jpg";

const UIShowcase = () => {
  const features = [
    {
      title: "Mobile Booking Interface",
      description: "Intuitive mobile app design for quick and easy ticket booking on the go.",
      image: bookingUI,
      icon: Smartphone,
      bgColor: "from-blue-500/20 to-blue-600/20"
    },
    {
      title: "Live Tracking Dashboard",
      description: "Real-time train tracking with GPS location and route visualization.",
      image: trackingDashboard,
      icon: Monitor,
      bgColor: "from-green-500/20 to-green-600/20"
    },
    {
      title: "Digital Ticket System",
      description: "Modern digital tickets with QR codes for contactless travel experience.",
      image: digitalTicket,
      icon: Clock,
      bgColor: "from-yellow-500/20 to-yellow-600/20"
    },
    {
      title: "Station Information Display",
      description: "Professional station displays showing real-time schedules and platform info.",
      image: stationDisplay,
      icon: MapPin,
      bgColor: "from-purple-500/20 to-purple-600/20"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Experience the <span className="text-accent">Future</span> of Railway Travel
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge user interfaces designed to make your railway journey seamless, efficient, and enjoyable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group overflow-hidden hover:shadow-[var(--shadow-glow)] transition-all duration-500 hover:-translate-y-2 border-accent/20"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${feature.bgColor} group-hover:opacity-80 transition-opacity duration-300`}></div>
                <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm rounded-full p-3">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-foreground group-hover:text-accent transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <Button variant="outline" className="group-hover:border-accent group-hover:text-accent transition-colors duration-300">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary-dark to-primary rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to Transform Your Travel Experience?
          </h3>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of travelers who have already upgraded to our modern railway platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-railway-accent text-lg px-8 py-4">
              Download Mobile App
            </Button>
            <Button variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4">
              View Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UIShowcase;
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, Ticket, Clock, MapPin } from "lucide-react";
import heroTrain from "@/assets/hero-train.jpg";
import bookingUI from "@/assets/booking-ui.jpg";
import trackingDashboard from "@/assets/tracking-dashboard.jpg";

const Hero = () => {
  return (
    <section id="hero" className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="text-center lg:text-left fade-in-up">
          <div className="inline-flex items-center bg-primary-light/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <MapPin className="w-4 h-4 text-accent mr-2" />
            <span className="text-primary-foreground text-sm">Trusted by Indian Rail Travellers</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Book & Track Your{" "}
            <span className="text-accent">Train Journey</span>{" "}
            with Ease
          </h1>
          
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            RailTracker is your all-in-one platform to{" "}
            <span className="text-accent font-semibold">book tickets</span>,{" "}
            <span className="text-accent font-semibold">track trains live</span>, and{" "}
            get real-time updates—making your travel safe and stress-free.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button className="btn-railway-accent text-lg px-8 py-4">
              <Ticket className="w-5 h-5 mr-2" />
              Book Ticket
            </Button>
            <Button variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4">
              <Search className="w-5 h-5 mr-2" />
              Track Train
            </Button>
          </div>
          
          {/* Statistics */}
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-accent">2M+</div>
              <div className="text-primary-foreground/80">Tickets Booked</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">1.5M+</div>
              <div className="text-primary-foreground/80">Live Trains Tracked</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">99.9%</div>
              <div className="text-primary-foreground/80">On-Time Updates</div>
            </div>
          </div>
        </div>
        
        {/* Right Content - Animated Train Images */}
        <div className="relative">
          <div className="relative z-10">
            <img 
              src={heroTrain} 
              alt="Modern train journey" 
              className="rounded-2xl shadow-2xl w-full object-cover"
            />
            
            {/* Floating Action Cards */}
            <Card className="absolute -bottom-8 -left-8 p-4 bg-card/95 backdrop-blur-sm border-accent/20">
              <div className="flex items-center space-x-3">
                <div className="bg-accent rounded-full p-2">
                  <Ticket className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-card-foreground">Book</div>
                  <div className="text-sm text-muted-foreground">Quick Booking</div>
                </div>
              </div>
            </Card>
            
            <Card className="absolute -top-8 -right-8 p-4 bg-card/95 backdrop-blur-sm border-accent/20">
              <div className="flex items-center space-x-3">
                <div className="bg-accent rounded-full p-2">
                  <Search className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-card-foreground">Track</div>
                  <div className="text-sm text-muted-foreground">Real-time Status</div>
                </div>
              </div>
            </Card>
            
            <Card className="absolute top-1/2 -right-16 p-4 bg-card/95 backdrop-blur-sm border-accent/20">
              <div className="flex items-center space-x-3">
                <div className="bg-accent rounded-full p-2">
                  <Clock className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-card-foreground">Updates</div>
                  <div className="text-sm text-muted-foreground">Live Notifications</div>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Decorative gradient orbs */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-primary-light/30 rounded-full blur-2xl animate-pulse [animation-delay:1.5s]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
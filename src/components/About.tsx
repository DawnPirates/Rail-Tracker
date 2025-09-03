import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Globe, Clock } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Users,
      number: "50M+",
      label: "Happy Travelers",
      description: "Millions trust us for their railway journey"
    },
    {
      icon: Award,
      number: "15+",
      label: "Years Experience",
      description: "Decade and a half of railway expertise"
    },
    {
      icon: Globe,
      number: "500+",
      label: "Cities Connected",
      description: "Extensive network across the country"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Customer Support",
      description: "Round-the-clock assistance available"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About <span className="text-accent">RailTracker</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leading the revolution in railway travel technology with innovative solutions that make train journeys seamless, safe, and enjoyable for millions of travelers.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">Our Journey</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded with a vision to transform railway travel in India, RailTracker has grown from a simple booking platform to a comprehensive travel ecosystem. We understand the challenges faced by millions of railway passengers daily.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our mission is to leverage cutting-edge technology to provide real-time information, seamless booking experiences, and reliable travel solutions that make railway journeys stress-free and enjoyable.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-16 bg-gradient-to-b from-accent to-accent-dark rounded-full"></div>
              <div>
                <p className="font-semibold text-foreground text-lg">Trusted by Railway Travelers</p>
                <p className="text-muted-foreground">Making every journey count since 2008</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={index}
                className="text-center p-6 hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:-translate-y-1 border-accent/20"
              >
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-accent-dark to-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-accent mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gradient-to-r from-primary-dark to-primary rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-primary-foreground mb-6">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-accent mb-3">Innovation</h4>
              <p className="text-primary-foreground/90">Continuously improving our platform with the latest technology to serve you better.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-accent mb-3">Reliability</h4>
              <p className="text-primary-foreground/90">Providing accurate, real-time information you can depend on for your travel decisions.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-accent mb-3">Customer First</h4>
              <p className="text-primary-foreground/90">Every feature we build is designed with your convenience and satisfaction in mind.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
// import { Button } from "../components/ui/button";
// import { Search, Ticket, MapPin } from "lucide-react";

// // Hero media (your uploads)
// import heroTrain from "../assets/hero-train.jpg";
// import stationImage from "../assets/Adobe Express - file.png";
// import railwayFlowchart from "../assets/Adobe Express - file (1).png";
// // import travelVideo from "../assets/7048778_Animation_Motion_Graphic_3840x2160.mov";

// const Hero = () => {
//   return (
//     <section
//       id="hero"
//       className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden"
//     >
//       <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
//         {/* Left Content */}
//         <div className="text-center lg:text-left fade-in-up">
//           <div className="inline-flex items-center bg-primary-light/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
//             <MapPin className="w-4 h-4 text-accent mr-2" />
//             <span className="text-primary-foreground text-sm">
//               Trusted by Indian Rail Travellers
//             </span>
//           </div>

//           <h1 className="text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
//             Book & Track Your{" "}
//             <span className="text-accent">Train Journey</span> with Ease
//           </h1>

//           <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
//             RailTracker is your all-in-one platform to{" "}
//             <span className="text-accent font-semibold">book tickets</span>,{" "}
//             <span className="text-accent font-semibold">track trains live</span>, and get real-time updates—making your travel safe and stress-free.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 mb-12">
//             <Button className="btn-railway-accent text-lg px-8 py-4">
//               <Ticket className="w-5 h-5 mr-2" />
//               Book Ticket
//             </Button>
//             <Button
//               variant="outline"
//               className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4"
//             >
//               <Search className="w-5 h-5 mr-2" />
//               Track Train
//             </Button>
//           </div>

//           {/* Stats */}
//           <div className="grid grid-cols-3 gap-6 text-center">
//             <div>
//               <div className="text-3xl font-bold text-accent">2M+</div>
//               <div className="text-primary-foreground/80">Tickets Booked</div>
//             </div>
//             <div>
//               <div className="text-3xl font-bold text-accent">1.5M+</div>
//               <div className="text-primary-foreground/80">Live Trains Tracked</div>
//             </div>
//             <div>
//               <div className="text-3xl font-bold text-accent">99.9%</div>
//               <div className="text-primary-foreground/80">On-Time Updates</div>
//             </div>
//           </div>
//         </div>

//         {/* Right Content - Train Image + Your Extra Media */}
//         <div className="relative flex items-center justify-center">
//           {/* Main Hero Train */}
//           <img
//             src={heroTrain}
//             alt="Modern train journey"
//             className="rounded-2xl shadow-2xl w-full object-cover"
//           />

//           {/* Floating Image 1 (Station)
//           <img
//             src={stationImage}
//             alt="Railway Station"
//             className="absolute -top-16 -right-4 w-40 sm:w-52 rounded-xl  animate-float"
//           /> */}
         
          
//           {/* Floating Image 2 (Flowchart)
//           <img
//             src={railwayFlowchart}
//             alt="Railway Flowchart"
//             className="absolute -bottom-16 -left-8 w-44 sm:w-56 rounded-xl  animate-float [animation-delay:1.5s]"
//           /> */}

//           {/* Floating Video
//           <div className="absolute -bottom-20 -right-10 w-48 sm:w-64 rounded-2xl overflow-hidden  animate-float [animation-delay:2s]">
//             <video
//               src={travelVideo}
//               autoPlay
//               loop
//               muted
//               playsInline
//               className="w-full h-full object-cover"
//             />
//           </div> */}

//           {/* Decorative gradient orbs */}
//           <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-primary-light/30 rounded-full blur-2xl animate-pulse [animation-delay:1.5s]"></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
  

import { Button } from "../components/ui/button";
import { Search, Ticket, MapPin } from "lucide-react";

// Hero media (your uploads)
import heroTrain from "../assets/hero-train.jpg";
import stationImage from "../assets/WhatsApp Image 2025-09-04 at 01.14.57_c43a3acf.jpg";
import railwayFlowchart from "../assets/WhatsApp Image 2025-09-04 at 01.15.56_9eecf060.jpg";
import railway from "../assets/WhatsApp Image 2025-09-04 at 01.16.34_8fefea1d.jpg";


const Hero = () => {
  const images = [heroTrain, stationImage, railwayFlowchart,railway]; // carousel images

  return (
    <section
      id="hero"
      className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <div className="text-center lg:text-left fade-in-up">
          <div className="inline-flex items-center bg-primary-light/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <MapPin className="w-4 h-4 text-accent mr-2" />
            <span className="text-primary-foreground text-sm">
              Trusted by Indian Rail Travellers
            </span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Book & Track Your{" "}
            <span className="text-accent">Train Journey</span> with Ease
          </h1>

          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            RailYatra is your all-in-one platform to{" "}
            <span className="text-accent font-semibold">book tickets</span>,{" "}
            <span className="text-accent font-semibold">track trains live</span>, and get real-time updates—making your travel safe and stress-free.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button className="btn-railway-accent text-lg px-8 py-4">
              <Ticket className="w-5 h-5 mr-2" />
              Book Ticket
            </Button>
            <Button
              variant="outline"
              className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4"
            >
              <Search className="w-5 h-5 mr-2" />
              Track Train
            </Button>
          </div>

          {/* Stats */}
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

        {/* Right Content - Auto Carousel */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-full h-[350px] sm:h-[400px] overflow-hidden rounded-2xl shadow-2xl">
            <div className="flex w-full h-full animate-slide">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover flex-shrink-0"
                />
              ))}
            </div>
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

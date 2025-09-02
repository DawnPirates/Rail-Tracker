import React from "react";
import { TrainFront, Search, Ticket, PlayCircle } from "lucide-react";

function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white px-8 md:px-20 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* LEFT CONTENT */}
        <div className="flex-1">
          {/* Badge */}
          <div className="inline-block px-4 py-1 mt-10 mb-6 rounded-full bg-white/20 text-yellow-300 text-sm font-medium">
            🚆 Trusted by Indian Rail Travellers
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Book & Track Your{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Train Journey
            </span>{" "}
            with Ease
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-lg text-blue-100 max-w-xl">
            RailTracker is your all-in-one platform to{" "}
            <span className="text-yellow-300 font-semibold">book tickets</span>,{" "}
            <span className="text-yellow-300 font-semibold">
              track trains live
            </span>
            , and get real-time updates—making your travel safe and stress-free.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-yellow-400 text-blue-900 font-medium hover:bg-yellow-500 transition">
              <Ticket size={20} /> Book Ticket
            </button>
            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition">
              <Search size={20} /> Track Train
            </button>
          </div>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap gap-10 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-bold">2M+</h3>
              <p className="text-blue-200">Tickets Booked</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">1.5M+</h3>
              <p className="text-blue-200">Live Trains Tracked</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">99.9%</h3>
              <p className="text-blue-200">On-Time Updates</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE / CARD */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-[90%] md:w-[400px] bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20">
            {/* Illustration placeholder */}
            <div className="w-full h-56 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center text-2xl font-bold text-white">
              <TrainFront size={40} className="mr-2" /> Live Train Status
            </div>

            {/* Mini Card */}
            <div className="mt-6 bg-blue-900/60 rounded-xl p-4 flex justify-between items-center text-sm text-gray-200">
              <div className="flex flex-col items-center bg-yellow-400/90 text-blue-900 px-4 py-2 rounded-lg">
                <Ticket size={22} />
                <span className="mt-1 text-sm font-semibold">Book</span>
              </div>
              <div className="flex flex-col items-center bg-cyan-400/90 text-blue-900 px-4 py-2 rounded-lg">
                <Search size={22} />
                <span className="mt-1 text-sm font-semibold">Track</span>
              </div>
              <div className="flex flex-col items-center bg-white text-blue-900 px-4 py-2 rounded-lg">
                <PlayCircle size={22} />
                <span className="mt-1 text-sm font-semibold">Updates</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-blue-800 to-transparent"></div>
    </section>
  );
}

export default Hero;

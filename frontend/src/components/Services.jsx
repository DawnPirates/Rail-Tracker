import React from "react";
import { Ticket, Search, Bell } from "lucide-react";

function Services() {
  return (
    <section className="py-20 px-10 bg-gradient-to-b from-blue-800 via-blue-900 to-blue-800 text-center text-white">
      <h2 className="text-4xl font-bold mb-12">
        Our <span className="text-yellow-400">Services</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Book Ticket */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <Ticket size={40} className="mx-auto text-yellow-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Book Tickets</h3>
          <p className="text-blue-200">
            Easily book train tickets with real-time availability and secure payments.
          </p>
        </div>

        {/* Track Train */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <Search size={40} className="mx-auto text-yellow-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Track Trains</h3>
          <p className="text-blue-200">
            Get live train updates, platform info, and ETA directly on your screen.
          </p>
        </div>

        {/* Notifications */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <Bell size={40} className="mx-auto text-yellow-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Journey Alerts</h3>
          <p className="text-blue-200">
            Receive instant notifications on delays, cancellations, and reschedules.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;

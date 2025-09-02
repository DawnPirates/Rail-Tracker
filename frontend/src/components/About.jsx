import React from "react";

function About() {
  return (
    <section className="py-20 px-10 bg-gradient-to-b from-blue-900 to-blue-800 text-center text-white">
      <h2 className="text-4xl font-bold mb-6">
        About <span className="text-yellow-400">Us</span>
      </h2>
      <p className="max-w-3xl mx-auto text-blue-200 leading-relaxed">
        RailTracker is your trusted companion for seamless railway travel across India. 
        With our platform, you can <span className="text-yellow-400">book tickets</span>,{" "}
        <span className="text-yellow-400">track trains live</span>, and receive{" "}
        <span className="text-yellow-400">real-time journey updates</span>.  
        Our mission is to make every passenger’s journey safe, smooth, and hassle-free.
      </p>
    </section>
  );
}

export default About;

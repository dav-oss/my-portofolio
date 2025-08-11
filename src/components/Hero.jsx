import React from 'react';
import profilePic from '../assets/profile.jpg';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary via-accent to-background py-20 flex items-center justify-center">
      <div className="bg-card shadow-classy rounded-3xl p-10 flex items-center gap-8 animate-fade-in-up">
        <img
          src={profilePic}
          alt="David Muendo"
          className="w-36 h-36 object-cover rounded-full border-4 border-accent shadow-lg"
        />
        <div>
          <h1 className="font-display text-5xl font-extrabold text-primary mb-2">David Muendo Musau</h1>
          <p className="mt-2 text-xl text-text font-medium">Aspiring Network Engineer | CCNA Student | Cybersecurity Enthusiast</p>
          <a
            href="#contact"
            className="mt-6 inline-block bg-highlight text-white px-8 py-3 rounded-full shadow hover:bg-accent transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

import React from 'react';

export default function Upskilling() {
  return (
    <section className="py-16 px-8 bg-white text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-6">Career Realignment & Technical Upskilling</h2>
      <p className="max-w-4xl mx-auto text-lg text-center mb-8">
        <strong>January 2025 – Present</strong>
        <br />
        After gaining early exposure in IT support and technical assistance, I made a strategic decision to pause and refocus my career trajectory toward long-term goals in
        <strong> network engineering</strong>, <strong>cybersecurity</strong>, and <strong>cloud infrastructure</strong>. This phase has been dedicated to intentional growth, certification, and real-world practice.
      </p>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        <div>
          <h3 className="text-xl font-semibold mb-2">Certification Milestones</h3>
          <ul className="list-disc list-inside text-base">
            <li>CCNA – currently preparing for the final exam</li>
            <li>KCNA – completed Linux Foundation training and sat for the exam</li>
            <li>Practicing ethical hacking and bug bounty methodology</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Practical Experience & Labs</h3>
          <ul className="list-disc list-inside text-base">
            <li>Configured home/SMB networks (port forwarding, wireless security, ISP settings)</li>
            <li>Tools: Cisco Packet Tracer, Burp Suite, Wireshark, VirtualBox</li>
            <li>Explored PoC vulnerabilities via responsible security research</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Independent Projects</h3>
          <ul className="list-disc list-inside text-base">
            <li>Researched and documented web app security vulnerabilities</li>
            <li>Built a secure configuration manager using C# and SQLite</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

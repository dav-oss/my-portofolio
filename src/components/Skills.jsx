import React from 'react';

export default function Skills() {
  const skills = [
    "Network Administration", "Routing Protocols (OSPF, EIGRP, RIP)", "VLANs & Subnetting",
    "Cybersecurity Fundamentals", "Kubernetes", "Linux Administration", 
    "Python, C, C#", "Cisco Packet Tracer", "Wireshark", "Soft Skills: Communication & Teamwork"
  ];

  return (
    <section className="py-16 px-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
      <ul className="max-w-4xl mx-auto grid grid-cols-2 gap-4 text-center text-lg">
        {skills.map((skill, index) => (
          <li key={index} className="bg-white p-4 rounded shadow">{skill}</li>
        ))}
      </ul>
    </section>
  );
}

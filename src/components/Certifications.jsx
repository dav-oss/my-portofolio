import React from 'react';

export default function Certifications() {
  const certs = [
    "Linux Foundation: KCNA (Kubernetes and Cloud Native Associate)",
    "Officially CCNA (Cisco Certified Network Associate)",
    "Fortinet Certified Associate (FCA) in Cyber Security",
    "Linux Foundation – Kubernetes and Cloud Native Essentials",
    "Introduction to Cybersecurity – Cisco",
    "LinkedIn Learning – Ethical Hacking Series",
    "Python for Network Engineers – LinkedIn Learning"
  ];

  return (
    <section className="py-16 px-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Certifications</h2>
      <ul className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 text-center text-lg">
        {certs.map((cert, index) => (
          <li key={index} className="bg-white p-4 rounded shadow">{cert}</li>
        ))}
      </ul>
    </section>
  );
}

import React from 'react';

export default function Experience() {
  return (
    <section className="py-16 px-8 bg-white text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-6">Experience</h2>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h3 className="text-xl font-semibold">NTT DATA – Intern, Network Operations Support</h3>
          <p className="text-sm text-gray-500">March 2023 – June 2023</p>
          <ul className="list-disc list-inside mt-2">
            <li>Supported network troubleshooting and IP configurations.</li>
            <li>Documented technical issues and assisted with client resolutions.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Westgate Cinema – Customer Service</h3>
          <p className="text-sm text-gray-500">Sep 2024 – Present</p>
          <ul className="list-disc list-inside mt-2">
            <li>Demonstrated professionalism, communication, and accuracy in a fast-paced public environment</li>
            <li>Developed interpersonal and communication skills.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

import React from "react";

const posts = [
  {
    title: "DEFCON 33: The World's Largest Hacker Conference",
    date: "August 2023",
    summary:
      "DEFCON 33 brought together hackers, researchers, and security professionals from around the globe. Highlights included talks on AI security, hardware hacking villages, and the latest in vulnerability research. The event fostered collaboration and showcased cutting-edge cybersecurity trends.",
    link: "https://defcon.org/html/defcon-33/dc-33-index.html",
  },
  {
    title: "CVE-2024-3094: XZ Utils Backdoor",
    date: "March 2024",
    summary:
      "A critical backdoor was discovered in XZ Utils (liblzma), affecting Linux distributions. The vulnerability allowed remote code execution via SSH. Major distros quickly patched the issue, highlighting the importance of supply chain security.",
    link: "https://www.cve.org/CVERecord?id=CVE-2024-3094",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-16 px-8 bg-background">
      <h2 className="text-3xl font-display font-bold text-center text-primary mb-8">My Reads On Cyber Security Intelligence Community</h2>
      <div className="max-w-4xl mx-auto grid gap-8">
        {posts.map((post, idx) => (
          <div key={idx} className="bg-card rounded-2xl shadow-classy p-6 hover:shadow-2xl transition">
            <h3 className="text-2xl font-bold text-highlight mb-2">{post.title}</h3>
            <p className="text-sm text-accent mb-2">{post.date}</p>
            <p className="text-lg text-text mb-4">{post.summary}</p>
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline font-semibold hover:text-highlight"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
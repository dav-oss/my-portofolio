import React from "react";

const posts = [
  {
    title: "Cisco CVSS 10.0 FMC RADIUS Flaw Allowing Remote Code Execution",
    date: "August 2025",
    summary:
      "A critical vulnerability in Cisco's Firepower Management Center (FMC) allows unauthenticated remote code execution via RADIUS. The flaw, rated CVSS 10.0, affects multiple versions of FMC and requires immediate patching to prevent exploitation.",
    link: "https://thehackernews.com/2025/08/cisco-warns-of-cvss-100-fmc-radius-flaw.html",
  }
  ,
  {
    title: "DEFCON 33: The World's Largest Hacker Conference",
    date: "August 2025",
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
  {
    "title": "CVE-2025-42957: SAP S/4HANA Command Injection",
    "date": "August 2025",
    "summary": "A critical command injection vulnerability (CVSS 9.9) in SAP S/4HANA ERP allowed system takeover. Actively exploited, now patched by SAP.",
    "link": "https://nvd.nist.gov/vuln/detail/CVE-2025-42957"
  },
  {
    "title": "CVE-2025-38352 & CVE-2025-48543: Android Zero-Days",
    "date": "September 2025",
    "summary": "Two Android elevation-of-privilege zero-day vulnerabilities were exploited in the wild. Google patched them in the September security update.",
    "link": "https://source.android.com/security/bulletin/2025-09-01"
  },
  {
    "title": "CVE-2025-24204: macOS Keychain Decryption Flaw",
    "date": "September 2025",
    "summary": "A vulnerability in macOS allowed decryption of Keychain items and iOS apps without authentication. Disclosed at Nullcon Berlin, patch pending.",
    "link": "https://nvd.nist.gov/vuln/detail/CVE-2025-24204"
  },
  {
    "title": "CVE-2025-53690: Sitecore XM/XP Zero-Day",
    "date": "September 2025",
    "summary": "A deserialization vulnerability in Sitecore Experience Manager & Platform is actively exploited, enabling remote code execution via ViewState.",
    "link": "https://nvd.nist.gov/vuln/detail/CVE-2025-53690"
  },
  {
    "title": "CVE-2023-50224 & CVE-2025-9377: TP-Link Router Flaws",
    "date": "September 2025",
    "summary": "CISA warned of two TP-Link router vulnerabilities actively exploited in the wild. Users must patch before the September 24, 2025 deadline.",
    "link": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
  },
  {
    "title": "CVE-2025-8067: Linux UDisks Daemon OOB Read",
    "date": "September 2025",
    "summary": "A local out-of-bounds read vulnerability in UDisks could allow privilege escalation. Linux users are advised to update immediately.",
    "link": "https://nvd.nist.gov/vuln/detail/CVE-2025-8067"
  },
  {
    "title": "CVE-2025-55177 & CVE-2025-43300: WhatsApp Zero-Click Exploits",
    "date": "September 2025",
    "summary": "Zero-click vulnerabilities in WhatsApp for iOS/macOS were exploited in spyware campaigns. Update to the latest version and enable Lockdown Mode.",
    "link": "https://nvd.nist.gov/vuln/detail/CVE-2025-55177"
  },
  {
    "title": "CVE-2025-7775, 7776, 8424: Citrix NetScaler Critical Bugs",
    "date": "September 2025",
    "summary": "Multiple Citrix NetScaler ADC & Gateway flaws, including CVE-2025-7775 (CVSS 9.2), are exploited in the wild. Patching is urgent.",
    "link": "https://support.citrix.com/article/CTX74944"
  },
  {
    "title": "CVE-2025-41408: New NVD Entry",
    "date": "September 2025",
    "summary": "A recently published CVE with limited details is under review. Security teams should monitor NVD updates closely for mitigation guidance.",
    "link": "https://nvd.nist.gov/vuln/detail/CVE-2025-41408"
  }
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
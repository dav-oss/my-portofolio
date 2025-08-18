import React, { useState } from "react";
import BlogManager from "./BlogManager";
import CertificateManager from "./CertificateManager";
import SkillManager from "./SkillManager";

export default function AdminDashboard() {
  const [tab, setTab] = useState("blog" as "blog" | "cert" | "skill");

  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="flex gap-4 mb-8">
        <button
          className={`px-4 py-2 rounded ${tab === "blog" ? "bg-primary text-white" : "bg-gray-200"}`}
          onClick={() => setTab("blog")}
        >
          Blog
        </button>
        <button
          className={`px-4 py-2 rounded ${tab === "cert" ? "bg-primary text-white" : "bg-gray-200"}`}
          onClick={() => setTab("cert")}
        >
          Certificates
        </button>
        <button
          className={`px-4 py-2 rounded ${tab === "skill" ? "bg-primary text-white" : "bg-gray-200"}`}
          onClick={() => setTab("skill")}
        >
          Skills
        </button>
      </div>
      <div>
        {tab === "blog" && <BlogManager />}
        {tab === "cert" && <CertificateManager />}
        {tab === "skill" && <SkillManager />}
      </div>
    </section>
  );
}
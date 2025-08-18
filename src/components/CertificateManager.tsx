import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";

type Certificate = {
  id: number;
  name: string;
  issuer: string;
  date: string;
  link: string;
};

export default function CertificateManager() {
  const [certs, setCerts] = useState([] as Certificate[]);
  const [form, setForm] = useState({ name: "", issuer: "", date: "", link: "" } as Omit<Certificate, "id">);

  useEffect(() => {
    fetch("/api/certificates")
      .then(res => res.json())
      .then(setCerts);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = async (e: FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/certificates", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      const newCert = await res.json();
      setCerts([...certs, newCert]);
      setForm({ name: "", issuer: "", date: "", link: "" });
    }
  };

  const handleDelete = async (id: number) => {
    await fetch(`/api/certificates/${id}`, { method: "DELETE" });
    setCerts(certs.filter(c => c.id !== id));
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Manage Certificates</h2>
      <form onSubmit={handleAdd} className="mb-6 grid gap-2">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Certificate Name" required className="border p-2" />
        <input name="issuer" value={form.issuer} onChange={handleChange} placeholder="Issuer" required className="border p-2" />
        <input name="date" value={form.date} onChange={handleChange} placeholder="Date" required className="border p-2" />
        <input name="link" value={form.link} onChange={handleChange} placeholder="Link" required className="border p-2" />
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded">Add Certificate</button>
      </form>
      <ul>
        {certs.map(cert => (
          <li key={cert.id} className="mb-4 border-b pb-2">
            <div className="font-semibold">{cert.name} <span className="text-xs text-gray-500">{cert.issuer} - {cert.date}</span></div>
            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View</a>
            <button onClick={() => handleDelete(cert.id)} className="ml-4 text-red-600">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
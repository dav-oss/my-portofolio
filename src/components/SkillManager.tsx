import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";

type Skill = {
  id: number;
  name: string;
  level: string;
};

export default function SkillManager() {
  const [skills, setSkills] = useState([] as Skill[]);
  const [form, setForm] = useState({ name: "", level: "" } as Omit<Skill, "id">);

  useEffect(() => {
    fetch("/api/skills")
      .then(res => res.json())
      .then(setSkills);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = async (e: FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/skills", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      const newSkill = await res.json();
      setSkills([...skills, newSkill]);
      setForm({ name: "", level: "" });
    }
  };

  const handleDelete = async (id: number) => {
    await fetch(`/api/skills/${id}`, { method: "DELETE" });
    setSkills(skills.filter(s => s.id !== id));
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Manage Skills</h2>
      <form onSubmit={handleAdd} className="mb-6 grid gap-2">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Skill Name" required className="border p-2" />
        <input name="level" value={form.level} onChange={handleChange} placeholder="Level" required className="border p-2" />
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded">Add Skill</button>
      </form>
      <ul>
        {skills.map(skill => (
          <li key={skill.id} className="mb-4 border-b pb-2">
            <span className="font-semibold">{skill.name}</span> <span className="text-xs text-gray-500">{skill.level}</span>
            <button onClick={() => handleDelete(skill.id)} className="ml-4 text-red-600">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";

type BlogPost = {
  id: number;
  title: string;
  date: string;
  summary: string;
  link: string;
};

export default function BlogManager() {
  const [posts, setPosts] = useState([] as BlogPost[]);
  const [form, setForm] = useState({ title: "", date: "", summary: "", link: "" } as Omit<BlogPost, "id">);

  useEffect(() => {
    fetch("/api/blog")
      .then(res => res.json())
      .then(setPosts);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = async (e: FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      const newPost = await res.json();
      setPosts([...posts, newPost]);
      setForm({ title: "", date: "", summary: "", link: "" });
    }
  };

  const handleDelete = async (id: number) => {
    await fetch(`/api/blog/${id}`, { method: "DELETE" });
    setPosts(posts.filter(p => p.id !== id));
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Manage Blog Posts</h2>
      <form onSubmit={handleAdd} className="mb-6 grid gap-2">
        <input name="title" value={form.title} onChange={handleChange} placeholder="Title" required className="border p-2" />
        <input name="date" value={form.date} onChange={handleChange} placeholder="Date" required className="border p-2" />
        <textarea name="summary" value={form.summary} onChange={handleChange} placeholder="Summary" required className="border p-2" />
        <input name="link" value={form.link} onChange={handleChange} placeholder="Link" required className="border p-2" />
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded">Add Post</button>
      </form>
      <ul>
        {posts.map(post => (
          <li key={post.id} className="mb-4 border-b pb-2">
            <div className="font-semibold">{post.title} <span className="text-xs text-gray-500">{post.date}</span></div>
            <div>{post.summary}</div>
            <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Read</a>
            <button onClick={() => handleDelete(post.id)} className="ml-4 text-red-600">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
// components/AdminForm.js
import { useState } from "react";

export default function AdminForm({ initial = {}, onSubmit }) {
  const [title, setTitle] = useState(initial.title || "");
  const [category, setCategory] = useState(initial.category || "Daily Life");
  const [content, setContent] = useState(initial.content || "");

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit({ title, category, content }); }}>
      <label className="block mb-2">
        <div className="text-sm font-medium">Title</div>
        <input value={title} onChange={(e) => setTitle(e.target.value)} className="mt-1 w-full p-2 border rounded" required />
      </label>

      <label className="block mb-2">
        <div className="text-sm font-medium">Category</div>
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="mt-1 w-full p-2 border rounded">
          <option>Daily Life</option>
          <option>Tips & Advice</option>
          <option>Motivation</option>
          <option>Personal Growth</option>
        </select>
      </label>

      <label className="block mb-4">
        <div className="text-sm font-medium">Content (HTML or text)</div>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} className="mt-1 w-full p-2 border rounded h-44" required />
      </label>

      <div className="flex gap-2">
        <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">Save</button>
      </div>
    </form>
  );
}


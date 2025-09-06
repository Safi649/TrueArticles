// pages/contact.js
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e) => {
    e.preventDefault();
    // For MVP just show success. Later connect to Firestore or email provider.
    setSent(true);
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Contact</h1>
      {!sent ? (
      <form onSubmit={submit} className="max-w-xl">
        <label className="block mb-2">
          <div className="text-sm">Name</div>
          <input value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="mt-1 w-full p-2 border rounded" required />
        </label>
        <label className="block mb-2">
          <div className="text-sm">Email</div>
          <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="mt-1 w-full p-2 border rounded" required />
        </label>
        <label className="block mb-4">
          <div className="text-sm">Message</div>
          <textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="mt-1 w-full p-2 border rounded h-36" required />
        </label>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded">Send</button>
      </form>
      ) : <div className="p-4 bg-green-50 border border-green-200 rounded">Thanks! Your message was received.</div>}
    </div>
  );
}


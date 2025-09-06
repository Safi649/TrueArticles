// pages/admin/add.js
import { useState } from "react";
import { useRouter } from "next/router";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../../firebase";
import { useAuth } from "../../utils/AuthContext";

export default function AdminAddArticle() {
  const { user, loading } = useAuth();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  if (loading) return <p>Loading...</p>;
  if (!user) return <p>You must be logged in to add an article.</p>;
  if (!user.isAdmin) return <p>Access denied. Admin only.</p>;

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "articles"), {
      title,
      content,
      date: new Date().toLocaleDateString(),
      createdAt: serverTimestamp(),
    });
    router.push("/articles");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Add New Article</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Article Title"
          className="w-full border p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Write your article content..."
          className="w-full border p-2 h-40 rounded"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Save Article
        </button>
      </form>
    </div>
  );
}

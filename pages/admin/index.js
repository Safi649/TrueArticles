// pages/admin/index.js
import { useEffect, useState } from "react";
import { auth, db } from "../../lib/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { collection, getDocs, query, orderBy, deleteDoc, doc } from "firebase/firestore";
import Link from "next/link";

export default function Admin() {
  const [user, setUser] = useState(auth.currentUser);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [articles, setArticles] = useState([]);
  const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(u => setUser(u));
    return unsub;
  }, []);

  useEffect(() => {
    if (!user) return;
    loadArticles();
  }, [user]);

  const loadArticles = async () => {
    const q = query(collection(db, "articles"), orderBy("createdAt","desc"));
    const snap = await getDocs(q);
    setArticles(snap.docs.map(d => ({ id: d.id, ...d.data() })));
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      alert("Login failed: " + err.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
    setArticles([]);
  };

  const remove = async (id) => {
    if (!confirm("Delete this article?")) return;
    await deleteDoc(doc(db, "articles", id));
    setArticles(prev => prev.filter(a => a.id !== id));
  };

  if (!user) {
    return (
      <div className="max-w-md">
        <h1 className="text-xl font-semibold mb-4">Admin Login</h1>
        <form onSubmit={login} className="space-y-3">
          <input className="w-full p-2 border rounded" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
          <input type="password" className="w-full p-2 border rounded" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required />
          <button className="px-4 py-2 bg-indigo-600 text-white rounded">Login</button>
        </form>
      </div>
    );
  }

  if (user.email !== adminEmail) {
    return (
      <div>
        <p>You are logged in as {user.email} but not an admin. Please log out.</p>
        <button onClick={logout} className="mt-3 px-3 py-1 bg-slate-200 rounded">Logout</button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
        <div>
          <Link href="/admin/add"><a className="px-3 py-1 bg-green-500 text-white rounded mr-2">Add Article</a></Link>
          <button onClick={logout} className="px-3 py-1 bg-slate-200 rounded">Logout</button>
        </div>
      </div>

      <div className="space-y-3">
        {articles.map(a => (
          <div key={a.id} className="bg-white p-3 rounded shadow flex items-start justify-between">
            <div>
              <div className="font-semibold">{a.title}</div>
              <div className="text-xs text-slate-500">{a.category} • {new Date(a.createdAt?.toDate ? a.createdAt.toDate() : a.createdAt || Date.now()).toLocaleDateString()}</div>
            </div>
            <div className="flex gap-2">
              <Link href={`/admin/edit/${a.id}`}><a className="px-3 py-1 bg-blue-600 text-white rounded">Edit</a></Link>
              <button onClick={()=>remove(a.id)} className="px-3 py-1 bg-red-600 text-white rounded">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

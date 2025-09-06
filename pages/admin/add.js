// pages/admin/add.js
import { useEffect, useState } from "react";
import { auth, db, ts } from "../../lib/firebase";
import AdminForm from "../../components/AdminForm";
import { addDoc, collection } from "firebase/firestore";
import { useRouter } from "next/router";

export default function AddPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(()=> {
    const unsub = auth.onAuthStateChanged(u => setUser(u));
    return unsub;
  }, []);

  const handleSubmit = async (data) => {
    if (!user) return alert("Not logged in");
    const docRef = await addDoc(collection(db, "articles"), {
      ...data,
      author: user.email,
      createdAt: ts()
    });
    router.push("/admin");
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Add Article</h1>
      <AdminForm onSubmit={handleSubmit} />
    </div>
  );
}

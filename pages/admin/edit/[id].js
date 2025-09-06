// pages/admin/edit/[id].js
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AdminForm from "../../../components/AdminForm";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db, auth } from "../../../lib/firebase";

export default function EditPage() {
  const router = useRouter();
  const { id } = router.query;
  const [initial, setInitial] = useState(null);

  useEffect(() => {
    if (!id) return;
    const load = async () => {
      const dref = doc(db, "articles", id);
      const snap = await getDoc(dref);
      if (!snap.exists()) return;
      setInitial(snap.data());
    };
    load();
  }, [id]);

  const handleSubmit = async (data) => {
    const dref = doc(db, "articles", id);
    await updateDoc(dref, { ...data });
    router.push("/admin");
  };

  if (!initial) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Edit Article</h1>
      <AdminForm initial={initial} onSubmit={handleSubmit} />
    </div>
  );
}

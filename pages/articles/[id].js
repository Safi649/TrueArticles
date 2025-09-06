// pages/articles/[id].js
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ArticlePage() {
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (!id) return;
    const load = async () => {
      const ref = doc(db, "articles", id);
      const snap = await getDoc(ref);
      if (!snap.exists()) {
        setArticle(null);
        return;
      }
      setArticle({ id: snap.id, ...snap.data() });
    };
    load();
  }, [id]);

  if (!article) return <div>Loading or not found...</div>;

  return (
    <article className="prose lg:prose-xl">
      <h1>{article.title}</h1>
      <div className="text-sm text-slate-500">{article.category} • {new Date(article.createdAt?.toDate ? article.createdAt.toDate() : article.createdAt || Date.now()).toLocaleDateString()}</div>
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </article>
  );
}

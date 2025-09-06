// pages/index.js
import Link from "next/link";
import ArticleCard from "../components/ArticleCard";
import { useEffect, useState } from "react";
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const load = async () => {
      const q = query(collection(db, "articles"), orderBy("createdAt","desc"), limit(6));
      const snap = await getDocs(q);
      setArticles(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    };
    load();
  }, []);

  return (
    <div>
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-3">Welcome to TrueArticles</h1>
        <p className="text-slate-600">Real daily life stories and helpful lessons — shared from the heart.</p>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Latest Articles</h2>
          <Link href="/articles"><a className="text-indigo-600">See all</a></Link>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {articles.map(a => <ArticleCard key={a.id} article={a} />)}
        </div>
      </section>
    </div>
  );
}


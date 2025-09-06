// components/ArticleCard.js
import Link from "next/link";

export default function ArticleCard({ article }) {
  return (
    <Link href={`/articles/${article.id}`}>
      <a className="block bg-white rounded-lg shadow p-5 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
        <p className="text-sm text-slate-600 line-clamp-3" dangerouslySetInnerHTML={{__html: article.excerpt || (article.content || '').slice(0,200) + '...'}} />
        <div className="mt-3 text-xs text-slate-500">{article.category} • {new Date(article.createdAt?.toDate ? article.createdAt.toDate() : article.createdAt || Date.now()).toLocaleDateString()}</div>
      </a>
    </Link>
  );
}


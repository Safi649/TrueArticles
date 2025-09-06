// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-white border-t mt-8">
      <div className="container mx-auto px-4 py-6 text-sm text-center text-slate-600">
        © {new Date().getFullYear()} TrueArticles — Real stories, real lessons.
      </div>
    </footer>
  );
}


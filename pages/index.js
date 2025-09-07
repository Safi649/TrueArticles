// pages/index.js
import Head from "next/head";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Head>
        <title>TrueArticles - Explore Knowledge</title>
        <meta
          name="description"
          content="TrueArticles brings you curated articles, news, and stories with style and clarity."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold leading-tight"
          >
            Welcome to <span className="text-yellow-300">TrueArticles</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto"
          >
            Discover curated articles, insights, and trending stories that
            inspire, inform, and empower your journey.
          </motion.p>
          <motion.a
            href="#features"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-10 px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition-all"
          >
            Explore Now
          </motion.a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-gray-800"
          >
            Why Choose <span className="text-indigo-600">TrueArticles</span>?
          </motion.h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            We combine creativity, design, and authenticity to bring you an
            unforgettable reading experience.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Curated Content",
                desc: "Our team picks the best articles and insights tailored for curious minds.",
                icon: "📚",
              },
              {
                title: "Modern Design",
                desc: "Enjoy clean layouts, responsive design, and smooth animations.",
                icon: "✨",
              },
              {
                title: "Community Driven",
                desc: "Engage, share, and learn with like-minded readers across the globe.",
                icon: "🌍",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <div className="text-5xl">{feature.icon}</div>
                <h3 className="mt-4 text-xl font-semibold text-gray-800">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-indigo-600 text-white text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold"
        >
          Ready to start exploring?
        </motion.h2>
        <motion.a
          href="/articles"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-8 px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition-all"
        >
          Browse Articles
        </motion.a>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-gray-400 text-center">
        <p>© {new Date().getFullYear()} TrueArticles. All rights reserved.</p>
      </footer>
    </>
  );
}

import Head from "next/head";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Head>
        <title>Global Scholarships</title>
        <meta
          name="description"
          content="Find the latest international scholarships with deadlines, eligibility, and application links."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight"
          >
            Unlock Global Opportunities
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-6 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Discover fully funded scholarships around the world. 
            Apply with confidence and shape your future.
          </motion.p>
          <motion.a
            href="/scholarships"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-8 px-8 py-3 bg-white text-indigo-600 font-bold rounded-full shadow-lg hover:shadow-2xl transition"
          >
            Browse Scholarships
          </motion.a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-gray-800"
        >
          Why Choose Global Scholarships?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {[
            {
              title: "Verified Scholarships",
              desc: "We only share authentic, up-to-date, and trusted opportunities worldwide.",
              icon: "🌍",
            },
            {
              title: "Easy Navigation",
              desc: "Browse scholarships with clear deadlines, locations, and eligibility info.",
              icon: "⚡",
            },
            {
              title: "Global Access",
              desc: "Opportunities from USA, UK, Europe, Asia, and beyond—all in one place.",
              icon: "🎓",
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white shadow-xl rounded-2xl p-8 hover:shadow-2xl transition"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-indigo-600">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white text-center">
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Start Your Scholarship Journey Today
        </motion.h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Explore scholarships that match your goals and apply before deadlines.
        </p>
        <motion.a
          href="/scholarships"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-3 bg-white text-indigo-600 font-bold rounded-full shadow-lg hover:shadow-2xl transition"
        >
          Find Scholarships
        </motion.a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-6 text-center">
        <p>
          © {new Date().getFullYear()} Global Scholarships | Built by{" "}
          <span className="text-indigo-400 font-semibold">M Abbas Safi</span>
        </p>
      </footer>
    </>
  );
}

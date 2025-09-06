import { useState } from "react";
import { db } from "../../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

function AddScholarshipPage() {
  const { user } = useAuth() || {}; // safe destructuring
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    deadline: "",
    location: "",
    eligibleCountries: "",
    applicationLink: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("You must be logged in as admin to add scholarships.");
      return;
    }

    try {
      await addDoc(collection(db, "scholarships"), {
        ...formData,
        createdAt: serverTimestamp(),
        createdBy: user.uid,
      });

      alert("Scholarship added successfully!");
      router.push("/scholarships");
    } catch (error) {
      console.error("Error adding scholarship:", error);
      alert("Failed to add scholarship. Check console for details.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-2xl p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Add New Scholarship
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Scholarship Title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          ></textarea>

          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            name="location"
            placeholder="Location (e.g., USA, UK)"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            name="eligibleCountries"
            placeholder="Eligible Countries (comma-separated)"
            value={formData.eligibleCountries}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="url"
            name="applicationLink"
            placeholder="Application Link"
            value={formData.applicationLink}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

// ✅ Disable SSR for this page to avoid Netlify build errors
export default dynamic(() => Promise.resolve(AddScholarshipPage), {
  ssr: false,
});

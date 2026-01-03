import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../Common/Loading";
import Header from "../Common/Header";

export default function Subjects() {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // ENV
  const API_KEY = import.meta.env.VITE_GGDRV_URI;
  const TOP_FOLDER_ID = import.meta.env.VITE_GGDRV_TOP_FOLDER;

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const query = encodeURIComponent(`'${TOP_FOLDER_ID}' in parents`);
        const url = `https://www.googleapis.com/drive/v3/files?q=${query}&key=${API_KEY}&fields=files(id,name,mimeType)`;

        const res = await axios.get(url);
        setSubjects(res.data.files || []);
      } catch (err) {
        console.error(err);
        setError("Failed to load subjects. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchSubjects();
  }, [API_KEY, TOP_FOLDER_ID]);

  /* -------------------- States -------------------- */
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 font-semibold">
        {error}
      </div>
    );
  }

  if (subjects.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 text-lg">
        No subjects found.
      </div>
    );
  }

  /* -------------------- UI -------------------- */
  return (
    <>
      <Header />

      <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 px-4 sm:px-6 md:px-10 py-8">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition"
        >
          ← Back
        </button>

        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-12">
          Subjects
        </h1>

        {/* Subjects Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {subjects.map((subject, index) => (
            <div
              key={subject.id}
              onClick={() => navigate(`/subject/${subject.id}`)}
              className="group cursor-pointer bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fadeIn"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="p-6 flex flex-col h-full">

                {/* Icon */}
                <div className="h-14 w-14 rounded-xl bg-indigo-100 flex items-center justify-center text-2xl mb-4">
                  📚
                </div>

                {/* Subject Name */}
                <h3 className="font-semibold text-gray-900 text-lg mb-2 truncate">
                  {subject.name}
                </h3>

                {/* Sub text */}
                <p className="text-sm text-gray-500">
                  View notes, assignments & question papers
                </p>

                {/* Hover Action */}
                <div className="mt-auto pt-6">
                  <span className="inline-block text-sm font-semibold text-indigo-600 group-hover:underline">
                    Open Subject →
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

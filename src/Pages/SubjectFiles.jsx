import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "../Common/Loading";

export default function SubjectFiles() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_GGDRV_URI;

  // Friendly route → Drive Folder ID
  const folderId =
    id === "systemsoftware" ? import.meta.env.VITE_GGDRV_SYSTEM_SOFTWARE : id;

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const query = encodeURIComponent(`'${folderId}' in parents`);
        const url = `https://www.googleapis.com/drive/v3/files?q=${query}&key=${API_KEY}&fields=files(id,name,mimeType,webViewLink)`;

        const res = await axios.get(url);
        setFiles(res.data.files || []);
      } catch (err) {
        console.error(err);
        setError("Failed to load files. Make sure the folder is public.");
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, [folderId, API_KEY]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loading />
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 font-semibold">
        {error}
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 px-4 sm:px-6 md:px-10 py-8">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition"
      >
        ← Back to Subjects
      </button>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-10">
        {id === "systemsoftware"
          ? "System Software Resources"
          : "Subject Resources"}
      </h1>

      {/* Empty State */}
      {files.length === 0 && (
        <p className="text-center text-gray-500 text-lg mt-20">
          📂 No study materials available for this subject.
        </p>
      )}

      {/* Files Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {files.map((file, index) => (
          <div
            key={file.id}
            className="group bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fadeIn"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <div className="p-6 flex flex-col h-full">
              {/* Icon */}
              <div className="h-14 w-14 rounded-xl bg-blue-100 flex items-center justify-center text-2xl mb-4">
                📄
              </div>

              {/* File Name */}
              <h3 className="font-semibold text-gray-900 text-lg mb-6 line-clamp-2">
                {file.name}
              </h3>

              {/* Buttons */}
              <div className="mt-auto flex gap-3">
                <a
                  href={file.webViewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-semibold transition"
                >
                  View
                </a>

                <a
                  href={`https://drive.google.com/uc?export=download&id=${file.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-lg text-sm font-semibold transition"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

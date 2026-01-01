import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "../Common/Loading";


export default function SubjectFiles() {
  const { id } = useParams(); // folder ID from URL
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const API_KEY = import.meta.env.VITE_GGDRV_URI;

  // Map friendly names to env folder IDs
  const folderId =
    id === "systemsoftware"
      ? import.meta.env.VITE_GGDRV_SYSTEM_SOFTWARE
      : id;

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const query = encodeURIComponent(`'${folderId}' in parents`);
        const url = `https://www.googleapis.com/drive/v3/files?q=${query}&key=${API_KEY}&fields=files(id,name,mimeType,webViewLink)`;

        const response = await axios.get(url);
        setFiles(response.data.files || []);
      } catch (err) {
        console.error("Error fetching files:", err);
        setError("Failed to fetch files. Make sure the folder is public.");
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, [folderId, API_KEY]);

  if (loading) return <div className="min-h-screen flex items-center justify-center"><Loading /></div>;
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8">
      
      <div className="mb-6">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition cursor-pointer"
        >
          ← Back to Subjects
        </button>
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-900">
        {id === "systemsoftware" ? "System Software Files" : "Subject Files"}
      </h1>

      {files.length === 0 && (
        <p className="text-center text-gray-500 text-lg mt-10">
          No files found in this subject.
        </p>
      )}

      {/* Files Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {files.map((file) => (
          <div
            key={file.id}
            className="bg-white rounded-xl shadow-md hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 flex flex-col justify-between"
          >
            <div className="p-6 flex-1 flex flex-col">
              {/* File Info */}
              <p className="font-semibold text-lg truncate text-gray-900">{file.name}</p>
              {/* <p className="text-sm text-gray-500 mt-1">{file.mimeType}</p> */}
            </div>

            {/* Action Buttons */}
            <div className="p-6 pt-0 flex gap-3 mt-auto">
              <a
                href={file.webViewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition"
              >
                View
              </a>
              <a
                href={`https://drive.google.com/uc?export=download&id=${file.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded transition"
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

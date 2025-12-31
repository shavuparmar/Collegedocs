import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../Common/Loading";

export default function Subjects() {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch API key and folder ID from .env
  const API_KEY = import.meta.env.VITE_GGDRV_URI;
  const TOP_FOLDER_ID = import.meta.env.VITE_GGDRV_TOP_FOLDER;

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const query = encodeURIComponent(`'${TOP_FOLDER_ID}' in parents`);
        const url = `https://www.googleapis.com/drive/v3/files?q=${query}&key=${API_KEY}&fields=files(id,name,mimeType,webViewLink)`;

        const response = await axios.get(url);

        if (response.data && response.data.files) {
          setSubjects(response.data.files);
        } else {
          setSubjects([]);
        }
      } catch (err) {
        console.error("Error fetching subjects:", err);
        setError("Failed to load subjects. Make sure the folder is public.");
      } finally {
        setLoading(false);
      }
    };

    fetchSubjects();
  }, [API_KEY, TOP_FOLDER_ID]);

  if (loading)
    return <div>  <Loading/>  </div>;

  if (error)
    return <div className="text-center mt-10 text-red-500">{error}</div>;

  if (subjects.length === 0)
    return <div className="text-center mt-10 text-gray-500">No subjects found.</div>;

  return (
    
    <div className="min-h-screen bg-gray-100 p-6 sm:p-8 md:p-10">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition"
        >
          ← Back to Subjects
        </button>
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
        Subjects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {subjects.map((subject) => (
          <div
            key={subject.id}
            onClick={() => navigate(`/subject/${subject.id}`)} // Redirect to SubjectFiles page
            className="cursor-pointer bg-white p-6 rounded-lg shadow hover:shadow-xl transition transform hover:-translate-y-1 duration-300 flex flex-col justify-between"
          >
            <div>
              <p className="font-semibold text-lg truncate">{subject.name}</p>
              <p className="text-sm text-gray-400 mt-1">{subject.mimeType}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

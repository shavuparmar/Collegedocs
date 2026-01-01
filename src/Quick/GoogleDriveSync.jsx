import React from "react";
import Footer from "../Common/Footer";
import Header from "../Common/Header";

export default function GoogleDriveSync() {
  return (
    <>
    <Header/>
    <div className="min-h-screen bg-gray-50 px-6 py-12">

      {/* Page Header */}
      <div className="max-w-4xl mx-auto text-center animate-fadeIn">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          How StudyStacks Syncs with Google Drive
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          Understand how assignments, notes, and question papers are shared
          securely without using any backend.
        </p>
      </div>

      {/* Content Sections */}
      <div className="max-w-5xl mx-auto mt-12 grid gap-8">

        {/* Card */}
        {sections.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 md:p-8
                       transform transition duration-300
                       hover:shadow-xl hover:-translate-y-1"
          >
            <h2 className="text-xl font-semibold text-indigo-600">
              {item.title}
            </h2>
            <p className="mt-3 text-gray-600 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}

      </div>

      {/* Footer Note */}
      <div className="max-w-4xl mx-auto mt-12 text-center">
        <p className="text-sm text-gray-500">
          StudyStacks is a private college project built using React and Google
          Drive API for educational purposes.
        </p>
      </div>

      {/* Animation Styles */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeIn {
            animation: fadeIn 0.8s ease-out;
          }
        `}
      </style>

    </div>
    <Footer/>
    </>
  );
}

const sections = [
  {
    title: "1. Google Drive as Storage",
    desc:
      "All study materials such as assignments, notes, and question papers are stored inside Google Drive folders. Each subject has its own folder to keep documents organized and easy to access."
  },
  {
    title: "2. Google Drive API Integration",
    desc:
      "StudyStacks uses Google Drive API in read-only mode. This allows the website to fetch file names and view links without modifying or deleting any files."
  },
  {
    title: "3. No Backend Required",
    desc:
      "The project does not use any backend server or database. React directly communicates with Google Drive using an API key, making the system lightweight, fast, and cost-free."
  },
  {
    title: "4. Automatic Sync",
    desc:
      "Whenever a file is uploaded to Google Drive, it automatically appears on the StudyStacks website after refresh. This ensures all students always see the latest documents."
  },
  {
    title: "5. Secure & Private Access",
    desc:
      "The folders are shared only with specific students. Files are view-only, ensuring data safety and preventing unauthorized changes."
  }
];

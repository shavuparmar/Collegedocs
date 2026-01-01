import React from "react";
import Header from "../Common/Header";

export default function AboutPage() {
  return (
    <div className=" text-gray-800">
      
    <Header/>
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            About StudyStacks
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg">
            StudyStacks is a centralized academic document-sharing platform
            designed for students to access notes, assignments, question papers,
            and study materials anytime, anywhere.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Text */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            What is StudyStacks?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            StudyStacks is a college-focused project that allows students
            to easily share and access academic documents such as PDFs,
            Word files, assignments, e-notes, and previous year question papers.
          </p>
          <p className="text-gray-700 leading-relaxed">
            All documents are securely fetched from Google Drive,
            ensuring fast access, real-time updates, and reliable storage
            without manual uploads on the website.
          </p>
        </div>

        {/* Image / Card */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3">
            Platform Highlights
          </h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>📁 Subject-wise document organization</li>
            <li>📄 PDF, DOC, and notes support</li>
            <li>🔍 Search by subject code & name</li>
            <li>☁️ Google Drive integration</li>
            <li>📱 Fully responsive design</li>
          </ul>
        </div>
      </section>

      {/* Mission Section */}
      <section className=" border-t">
        <div className="max-w-6xl mx-auto px-6 py-14 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Our mission is to simplify academic resource sharing by creating
            a single, well-organized platform where students can find all
            essential study materials without relying on scattered WhatsApp
            groups or repeated document requests.
          </p>
        </div>
      </section>

      {/* Use Case Section */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Who Can Use StudyStacks?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          
          <div className=" p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Students</h3>
            <p className="text-sm text-gray-600">
              Access notes, assignments, and question papers
              from anywhere at any time.
            </p>
          </div>

        

          <div className=" p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Colleges</h3>
            <p className="text-sm text-gray-600">
              Maintain a digital repository of academic documents
              for better accessibility.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

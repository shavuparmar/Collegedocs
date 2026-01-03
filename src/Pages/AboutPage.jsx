import React from "react";
import Header from "../Common/Header";

export default function AboutPage() {
  return (
    <div className="text-gray-800 bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      <Header />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-10" />
        <div className="max-w-6xl mx-auto px-6 py-20 text-center relative animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
            About <span className="text-indigo-600">StudyStacks</span>
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            StudyStacks is a modern academic resource platform built to simplify
            how college students access notes, assignments, question papers,
            and essential study materials — anytime, anywhere.
          </p>
        </div>
      </section>

      {/* WHAT IS STUDYSTACKS */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="animate-slideLeft">
          <h2 className="text-3xl font-bold mb-5 text-gray-900">
            What is StudyStacks?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            StudyStacks is a college-focused digital platform that allows students
            to seamlessly access academic documents such as PDFs, Word files,
            assignments, e-notes, and previous year question papers.
          </p>
          <p className="text-gray-700 leading-relaxed">
            All content is dynamically fetched from Google Drive, ensuring
            real-time updates, fast performance, and secure storage without
            manual uploads or cluttered file sharing.
          </p>
        </div>

        {/* HIGHLIGHTS CARD */}
        <div className="bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-xl p-8 animate-slideRight">
          <h3 className="text-xl font-semibold mb-5 text-gray-900">
            Platform Highlights
          </h3>
          <ul className="space-y-3 text-gray-700 text-sm">
            <li className="flex items-center gap-2">📁 Subject-wise organization</li>
            <li className="flex items-center gap-2">📄 PDF, DOC & notes support</li>
            <li className="flex items-center gap-2">🔍 Search by subject code & name</li>
            <li className="flex items-center gap-2">☁️ Google Drive integration</li>
            <li className="flex items-center gap-2">📱 Fully responsive UI</li>
            <li className="flex items-center gap-2">⚡ Fast & lightweight</li>
          </ul>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-white border-t border-b">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center animate-fadeIn">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Our Mission
          </h2>
          <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed text-base md:text-lg">
            Our mission is to simplify academic resource sharing by creating
            a single, organized, and reliable platform where students can find
            everything they need — without relying on scattered WhatsApp groups,
            repeated document requests, or lost files.
          </p>
        </div>
      </section>

      {/* WHO CAN USE */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-14 text-gray-900 animate-fadeIn">
          Who Can Use StudyStacks?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          
          {/* STUDENTS */}
          <div className="bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 transition-all duration-300 animate-scaleIn">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="font-semibold text-lg mb-3">Students</h3>
            <p className="text-sm text-gray-600">
              Access notes, assignments, and question papers
              from any device, anytime.
            </p>
          </div>

          {/* COLLEGES */}
          <div className="bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 transition-all duration-300 animate-scaleIn delay-100">
            <div className="text-4xl mb-4">🏫</div>
            <h3 className="font-semibold text-lg mb-3">Colleges</h3>
            <p className="text-sm text-gray-600">
              Maintain a centralized digital repository
              for academic documents.
            </p>
          </div>

          

        </div>
      </section>
    </div>
  );
}

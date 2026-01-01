import React from "react";
import Header from "../Common/Header";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      
      <Header/>
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
          Contact StudyStacks
        </h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Access college study materials, documents, and notes shared securely
          through Google Drive.
        </p>
      </section>

      {/* Contact Cards */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300 hover:-translate-y-2">
          <div className="text-3xl mb-4">📧</div>
          <h3 className="text-xl font-semibold mb-2">Email Support</h3>
          <p className="text-sm text-gray-600">
            Reach out for document issues or access help.
          </p>
          <p className="mt-3 font-medium text-indigo-600">
            23se09ce009@ppsu.ac.in
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300 hover:-translate-y-2">
          <div className="text-3xl mb-4">📂</div>
          <h3 className="text-xl font-semibold mb-2">Google Drive</h3>
          <p className="text-sm text-gray-600">
            All files are fetched directly from Google Drive.
          </p>
          <p className="mt-3 font-medium text-indigo-600">
            View Shared Folders
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300 hover:-translate-y-2">
          <div className="text-3xl mb-4">🎓</div>
          <h3 className="text-xl font-semibold mb-2">College Use</h3>
          <p className="text-sm text-gray-600">
            Designed for students to access notes, assignments, and papers.
          </p>
          <p className="mt-3 font-medium text-indigo-600">
            Study Anytime
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300 hover:-translate-y-2">
          <div className="text-3xl mb-4">🛡️</div>
          <h3 className="text-xl font-semibold mb-2">Safe & Secure</h3>
          <p className="text-sm text-gray-600">
            No file uploads. Read-only access from trusted sources.
          </p>
          <p className="mt-3 font-medium text-indigo-600">
            Student Friendly
          </p>
        </div>

      </section>

      {/* Help Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Help?
          </h2>
          <p className="text-gray-600 mb-6">
            If any document is missing, outdated, or not opening properly,
            please contact us via email. We continuously improve StudyStacks
            for better student support.
          </p>

          <div className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-indigo-700 transition">
            📩 23SE09CE009@PPSU.AC.IN
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <div className="text-center text-sm text-gray-500 py-6">
        Built for students • Powered by FRIENDS • StudyStacks
      </div>
    </div>
  );
}

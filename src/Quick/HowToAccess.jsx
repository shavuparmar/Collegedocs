import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

export default function HowToAccess() {
  return (
    <>
    <Header/>
      <div className="min-h-screen bg-gray-50 px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            How to Access StudyStacks
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Follow these simple steps to view assignments, notes, and question
            papers.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto mt-14 grid gap-8">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-start gap-6 bg-white rounded-xl shadow p-6 md:p-8">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xl font-bold">
              1
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Open StudyStacks Website
              </h2>
              <p className="mt-2 text-gray-600 leading-relaxed">
                Visit the StudyStacks website using any device such as mobile,
                tablet, or laptop with an internet connection.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row items-start gap-6 bg-white rounded-xl shadow p-6 md:p-8">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xl font-bold">
              2
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Search Subject by Name or Code
              </h2>
              <p className="mt-2 text-gray-600 leading-relaxed">
                Use the search bar to find your subject using subject name or
                subject code. Results will appear instantly.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-start gap-6 bg-white rounded-xl shadow p-6 md:p-8">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xl font-bold">
              3
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Select Document Category
              </h2>
              <p className="mt-2 text-gray-600 leading-relaxed">
                Choose the type of material you want to access such as
                assignments, notes, or question papers.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col md:flex-row items-start gap-6 bg-white rounded-xl shadow p-6 md:p-8">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xl font-bold">
              4
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                View or Download Files
              </h2>
              <p className="mt-2 text-gray-600 leading-relaxed">
                Click on any file to open it directly from Google Drive in
                view-only mode or download if permitted.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex flex-col md:flex-row items-start gap-6 bg-white rounded-xl shadow p-6 md:p-8">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xl font-bold">
              5
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Stay Updated Automatically
              </h2>
              <p className="mt-2 text-gray-600 leading-relaxed">
                Whenever new documents are uploaded to Google Drive, they
                automatically appear on StudyStacks without any manual sync.
              </p>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="max-w-4xl mx-auto mt-14 text-center">
          <p className="text-sm text-gray-500">
            Note: StudyStacks is a private academic project intended only for
            college students and educational use.
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
}

import React from "react";

export default function GoogleDriveSync() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      
      {/* Page Header */}
      <div className="max-w-4xl mx-auto text-center">
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

        {/* Section 1 */}
        <div className="bg-white rounded-xl shadow p-6 md:p-8">
          <h2 className="text-xl font-semibold text-indigo-600">
            1. Google Drive as Storage
          </h2>
          <p className="mt-3 text-gray-600 leading-relaxed">
            All study materials such as assignments, notes, and question papers
            are stored inside Google Drive folders. Each subject has its own
            folder to keep documents organized and easy to access.
          </p>
        </div>

        {/* Section 2 */}
        <div className="bg-white rounded-xl shadow p-6 md:p-8">
          <h2 className="text-xl font-semibold text-indigo-600">
            2. Google Drive API Integration
          </h2>
          <p className="mt-3 text-gray-600 leading-relaxed">
            StudyStacks uses Google Drive API in read-only mode. This allows the
            website to fetch file names and view links without modifying or
            deleting any files.
          </p>
        </div>

        {/* Section 3 */}
        <div className="bg-white rounded-xl shadow p-6 md:p-8">
          <h2 className="text-xl font-semibold text-indigo-600">
            3. No Backend Required
          </h2>
          <p className="mt-3 text-gray-600 leading-relaxed">
            The project does not use any backend server or database. React
            directly communicates with Google Drive using an API key, making the
            system lightweight, fast, and cost-free.
          </p>
        </div>

        {/* Section 4 */}
        <div className="bg-white rounded-xl shadow p-6 md:p-8">
          <h2 className="text-xl font-semibold text-indigo-600">
            4. Automatic Sync
          </h2>
          <p className="mt-3 text-gray-600 leading-relaxed">
            Whenever a file is uploaded to Google Drive, it automatically
            appears on the StudyStacks website after refresh. This ensures all
            students always see the latest documents.
          </p>
        </div>

        {/* Section 5 */}
        <div className="bg-white rounded-xl shadow p-6 md:p-8">
          <h2 className="text-xl font-semibold text-indigo-600">
            5. Secure & Private Access
          </h2>
          <p className="mt-3 text-gray-600 leading-relaxed">
            The folders are shared only with specific students. Files are view-
            only, ensuring data safety and preventing unauthorized changes.
          </p>
        </div>

      </div>

      {/* Footer Note */}
      <div className="max-w-4xl mx-auto mt-12 text-center">
        <p className="text-sm text-gray-500">
          StudyStacks is a private college project built using React and Google
          Drive API for educational purposes.
        </p>
      </div>

    </div>
  );
}

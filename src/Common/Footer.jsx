import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
    
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* About StudyStacks */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            StudyStacks
          </h2>
          <p className="text-sm leading-relaxed">
            StudyStacks is a student-friendly platform to access
            assignments, notes, question papers, and e-resources
            securely fetched from Google Drive.
          </p>
          <p className="text-xs mt-3 text-slate-400">
            Built for college students 📚
          </p>
        </div>

        {/* Academic Resources */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Academic Resources
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Assignments</li>
            <li className="hover:text-white cursor-pointer">E-Notes</li>
            <li className="hover:text-white cursor-pointer">Mid Sem Papers</li>
            <li className="hover:text-white cursor-pointer">Final Exam Papers</li>
            <li className="hover:text-white cursor-pointer">Subject Wise Docs</li>
          </ul>
        </div>

        {/* Student Help */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Student Help
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">How to Access Files</li>
            <li className="hover:text-white cursor-pointer"> <Link to={"/drivehelp"}> Google Drive Sync</Link>  </li>
            
            <li className="hover:text-white cursor-pointer"> <Link to={"/howtoaccess"}>How to access</Link>  </li>
          </ul>
        </div>

        {/* Contact & Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact & Info
          </h3>
          <ul className="space-y-2 text-sm">
            <li>📧 23SE09CE009@PPSU.AC.IN</li>
            <li>🏫 College Study Portal</li>
            <li>☁️ Powered by College Students</li>
          </ul>

          <div className="flex gap-3 mt-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800 hover:bg-blue-600 cursor-pointer">
              🌐
            </span>
            <span className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800 hover:bg-green-600 cursor-pointer">
              📚
            </span>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700 text-center py-4 text-sm text-slate-400">
        © {new Date().getFullYear()} StudyStacks • College Academic Resource Platform
      </div>

    </footer>
  );
}

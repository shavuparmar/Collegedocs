import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";


// Lazy-loaded pages
const HomePage = lazy(() => import("./Pages/HomePage"));
const Loading = lazy(()=>import("./Common/Loading"))
const Subject =lazy(()=>import("./Pages/Subjects"))
const SubjectFiles = lazy(()=>import("./Pages/SubjectFiles"))
const AboutPage = lazy(()=>import("./Pages/AboutPage"))
const Contact = lazy(()=>import("./Pages/Contact"))


// QUICK Links all imported here 
const GoogleDriveSync =lazy(()=>import("./Quick/GoogleDriveSync"))
const Howtoaccess =lazy(()=>import("./Quick/HowToAccess"))





export default function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/subjects" element={<Subject />} />
          <Route path="/subject/:id" element={<SubjectFiles />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/drivehelp" element={<GoogleDriveSync />} />
          <Route path="/howtoaccess" element={<Howtoaccess />} />
        </Routes>
      </Suspense>
    </Router>
  );
}


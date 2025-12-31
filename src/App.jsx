import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";


// Lazy-loaded pages
const HomePage = lazy(() => import("./Pages/HomePage"));
const Loading = lazy(()=>import("./Common/Loading"))
const Subject =lazy(()=>import("./Pages/Subjects"))
const SubjectFiles = lazy(()=>import("./Pages/SubjectFiles"))































export default function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/subjects" element={<Subject />} />
          <Route path="/subject/:id" element={<SubjectFiles />} />
        </Routes>
      </Suspense>
    </Router>
  );
}


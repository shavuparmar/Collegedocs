import Header from "../Common/Header";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      <main className="min-h-screen">

        {/* HERO SECTION */}
        <section className="bg-white py-20 px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Welcome to <span className="text-indigo-600">StudyStacks</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg">
            A private college project to share assignments, notes, and question papers
            with friends — organized, simple, and accessible on any device.
          </p>
        </section>

        {/* CONTENT CARDS */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            <Card
              title="📘 Assignments"
              desc="Find and share subject-wise assignments with clear formatting and easy access."
              button="View Assignments"
              onClick={() => navigate("/assignments")}
            />

            <Card
              title="📗 Notes"
              desc="Well-structured notes to help you revise faster and understand concepts better."
              button="View Notes"
              onClick={() => navigate("/notes")}
            />

            <Card
              title="📄 Question Papers"
              desc="Mid and final exam question papers to practice and prepare effectively."
              button="View Papers"
              onClick={() => navigate("/papers")}
            />

            <Card
              title="📚 Subjects"
              desc="All subjects with assignments, notes, and papers organized for easy access."
              button="View Subjects"
              onClick={() => navigate("/subjects")}
            />

          </div>
        </section>

      </main>
    </>
  );
}

// Card component
function Card({ title, desc, button, onClick }) {
  return (
    <div
      className="group bg-white rounded-xl shadow-md p-8 transform transition duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
      onClick={onClick} // Click anywhere on card redirects
    >
      <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
      <p className="mt-4 text-gray-600">{desc}</p>
      <button
        className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium transition group-hover:bg-indigo-700"
        onClick={(e) => {
          e.stopPropagation(); // Prevent card click from firing twice
          onClick();
        }}
      >
        {button}
      </button>
    </div>
  );
}

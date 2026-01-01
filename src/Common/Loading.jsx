export default function Loading() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-indigo-50">
      
      {/* Notebook Container */}
      <div className="relative mb-8 animate-float">
        
        {/* Notebook */}
        <div className="relative w-64 sm:w-72 h-40 bg-white rounded-xl shadow-xl border border-indigo-200 overflow-hidden">
          
          {/* Binding */}
          <div className="absolute left-0 top-0 w-3 h-full bg-indigo-500"></div>

          {/* Pages */}
          <div className="p-6 space-y-3">
            <div className="h-2 bg-indigo-200 rounded animate-writing w-full"></div>
            <div className="h-2 bg-indigo-200 rounded animate-writing delay-200 w-5/6"></div>
            <div className="h-2 bg-indigo-200 rounded animate-writing delay-400 w-4/6"></div>
            <div className="h-2 bg-indigo-200 rounded animate-writing delay-600 w-3/6"></div>
          </div>
        </div>

        {/* Pencil */}
        {/* <div className="absolute -right-10 bottom-6 w-20 h-2 bg-yellow-400 rounded-full animate-pencil">
          <div className="absolute right-0 w-3 h-2 bg-gray-700"></div>
        </div> */}
      </div>

      {/* Loading Text */}
      <p className="text-xl sm:text-2xl font-semibold text-indigo-700 tracking-wide">
        Preparing your StudyStacks
        <span className="inline-flex ml-1">
          <span className="animate-dot">.</span>
          <span className="animate-dot delay-200">.</span>
          <span className="animate-dot delay-400">.</span>
        </span>
      </p>

      <p className="mt-2 text-sm sm:text-base text-gray-500">
        Organizing notes & documents 📚
      </p>

      {/* Animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }

          @keyframes writing {
            0% { width: 0; opacity: 0.3; }
            50% { opacity: 1; }
            100% { width: 100%; opacity: 0.3; }
          }
          .animate-writing {
            animation: writing 2s ease-in-out infinite;
          }

          @keyframes pencil {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(-8px); }
          }
          .animate-pencil {
            animation: pencil 1.5s ease-in-out infinite;
          }

          @keyframes dot {
            0% { opacity: 0; }
            50% { opacity: 1; }
            100% { opacity: 0; }
          }
          .animate-dot {
            animation: dot 1.4s infinite;
          }

          .delay-200 { animation-delay: 0.2s; }
          .delay-400 { animation-delay: 0.4s; }
          .delay-600 { animation-delay: 0.6s; }
        `}
      </style>
    </div>
  );
}

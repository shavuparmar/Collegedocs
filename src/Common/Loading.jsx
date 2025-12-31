export default function Loading() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white">
      
      {/* Book */}
      <div className="relative w-20 h-24 mb-6 animate-spin-slow">
        <div className="absolute inset-0 bg-indigo-600 rounded-md"></div>
        <div className="absolute left-0 top-0 w-3 h-full bg-indigo-800 rounded-l-md"></div>
      </div>

      <p className="text-lg font-medium text-gray-600 animate-pulse">
        Loading StudyStacks...
      </p>

      {/* Custom slow spin */}
      <style>
        {`
          @keyframes spinSlow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spinSlow 3s linear infinite;
          }
        `}
      </style>

    </div>
  );
}

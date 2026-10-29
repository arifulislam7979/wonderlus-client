

import { Loader2 } from "lucide-react";

const LoadingPage = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#EBECE4]/80 backdrop-blur-sm transition-all duration-300">
      <div className="flex flex-col items-center space-y-4 p-8 bg-white/60 border border-[#E2E1D8] shadow-sm rounded-lg">
        {/* Spinner Icon */}
        <Loader2 className="w-8 h-8 text-[#00a8cc] animate-spin" />
        
        {/* Loading Text */}
        <div className="text-center space-y-1">
          <h2 className="text-sm font-medium text-gray-800 tracking-wider uppercase">
            Loading
          </h2>
          <p className="text-xs text-gray-500 font-light">
            Please wait while we fetch your content...
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
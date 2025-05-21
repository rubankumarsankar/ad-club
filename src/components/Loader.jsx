// components/Loader.jsx
import React from "react";

export default function Loader() {
    
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
      <div className="w-16 h-16 border-4 border-yellow-400 border-dashed rounded-full animate-spin"></div>
    </div>
  );
}

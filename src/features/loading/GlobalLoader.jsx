// components/GlobalLoader.js
import React from "react";

const GlobalLoader = () => (
  <div className="fixed inset-0 bg-white/80 z-50 flex items-center justify-center">
    <span className="loading loading-bars loading-lg"></span>
    <span className="loading loading-bars loading-xl"></span>
  </div>
);

export default GlobalLoader;

// components/GlobalLoader.js
import React from 'react';

const GlobalLoader = () => (
  <div className="fixed inset-0 bg-white/80 z-50 flex items-center justify-center">
    <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
  </div>
);

export default GlobalLoader;

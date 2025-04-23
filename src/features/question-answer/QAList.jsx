import React from "react";

const QAList = ({ entries }) => {
  return (
    <div className="max-w-3xl mx-auto px-6 pb-10 space-y-10 font-sans">
      <h1 className="text-4xl font-extrabold text-center mb-6 text-[#0F0F0F]">React Q&A Blog</h1>
      <p className="text-center text-[#0F0F0FCC] max-w-2xl mx-auto mb-10">
        A beginner-friendly guide to understand some of the most important concepts in React, with examples and simple explanations.
      </p>

      {entries.map((entry, index) => (
       <article
       key={index}
       className="bg-white py-4 border rounded-xl shadow-sm overflow-hidden"
     >
       {entry.image && (
         <img
           src={entry.image}
           alt={entry.question}
           className="h-36 mx-auto" 
         />
       )}
       <div className="p-5 space-y-3">
         <h2 className="text-2xl font-semibold text-gray-900">
           Q: {entry.question}
         </h2>
         <p className="text-gray-800 leading-relaxed text-normal">
           A: {entry.answer}
         </p>
         <div className="flex justify-between text-xs text-gray-500 pt-3 border-t">
           <span>{entry.date}</span>
           <span>{entry.user}</span>
         </div>
       </div>
     </article>
     
      ))}
    </div>
  );
};

export default QAList;

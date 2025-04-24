import React from "react";

const QAList = ({ entries }) => {
  return (
    <div className="max-w-6xl mx-auto px-6 pb-10 space-y-10 font-sans">
      <h1 className="text-3xl font-bold text-[#0F0F0F] md:text-center mb-4">React Q&A Blog</h1>
      <p className="text-[#0F0F0FCC] text-xl md:text-center md:px-16">
        A beginner-friendly guide to understand some of the most important concepts in React, with examples and simple explanations.
      </p>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4 my-10"> 
      {entries.map((entry, index) => (
       <article
       key={index}
       className="bg-white border pt-5 rounded-xl shadow-sm overflow-hidden"
     >
       {entry.image && (
         <img
           src={entry.image}
           alt={entry.question}
           className="h-36 mx-auto" 
         />
       )}
       <div className="p-5 space-y-3">
         <h2 className="text-xl font-bold mb-3">
           Q: {entry.question}
         </h2>
         <p className="text-[#0F0F0FCC] leading-relaxed text-normal">
           A: {entry.answer}
         </p>
         <div className="flex justify-between text-xs font-medium text-black pt-3 border-t">
           <span>{entry.date}</span>
           <span>{entry.user}</span>
         </div>
       </div>
     </article>
      ))}
      </div>
    </div>
  );
};

export default QAList;

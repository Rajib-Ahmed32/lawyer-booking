import React from "react";
import QAList from "../features/question-answer/QAList";
import { qaEntries } from "../Data/qaSection"

const Blogs = () => {
  return (
    <div className="pt-8">
      <QAList entries={qaEntries} />
    </div>
  );
};

export default Blogs;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProgressTracker from "./ProgressTracker";
import ResourceSidebar from "./ResourceSidebar";
import pagesContent from "../data/pagesContent";
import { getCorrectAnswers } from "../utils/localStorageUtils"; 

const FinalPage = () => {
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const navigate = useNavigate();
  const scrollableRef = React.useRef(null);

  // Get total questions across all pages
  const getTotalQuestions = () => {
    return Object.values(pagesContent).reduce((total, page) => {
      const pageQuestions = page.content.filter(
        (item) => item.type === "question" || item.type === "chronological"
      ).length;
      return total + pageQuestions;
    }, 0);
  };

  // Get total correct answers from localStorage 
  const getTotalCorrectAnswers = () => {
    const correctAnswers = getCorrectAnswers(); 

    return Object.keys(localStorage).length; // Count the number of correct answers
  };

  useEffect(() => {
    setTotalQuestions(getTotalQuestions());
    setTotalCorrect(getTotalCorrectAnswers());
  }, []);

  return (
    <div className="min-h-screen flex bg-slate-950">
      <ProgressTracker scrollableRef={scrollableRef} />
      <ResourceSidebar />

      <div
        className="flex-1 flex flex-col p-4 pl-10 text-white relative overflow-y-auto h-screen"
        ref={scrollableRef}
      >
        <button
          onClick={() => navigate("/")}
          className="ui-btn mb-4 px-4 py-2 text-white font-fira text-lg fixed right-0 z-10"
        >
          <span>Home</span>
        </button>

        <h2 className="text-5xl font-fira font-bold pt-4 top-0 pr-48 z-0 flex">
          <span>Final Results</span>
        </h2>

        <div className="space-y-6 w-full max-w-4xl mt-24">
          <div className="flex justify-center">
            <div className="flex  flex-col   w-full max-w-2xl">
              <div className="text-center space-y-4">
                <p className="text-2xl text-gray-300">
                  Total Questions Completed:{" "}
                  <span className="text-red-500 font-bold">{totalCorrect}</span>
                </p>
                <p className="text-2xl text-gray-300">
                  Out of:{" "}
                  <span className="text-red-500 font-bold">
                    {totalQuestions}
                  </span>
                </p>
                <p className="text-2xl text-gray-300">
                  Completion Rate:{" "}
                  <span className="text-red-500 font-bold">
                    {((totalCorrect / totalQuestions) * 100).toFixed(1)}%
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdr-qLJheT6j8aLJ-xdfvyzSDliPx66zkq-4Rogt7d--oEfnw/viewform?embedded=true"
              className="w-full max-w-3xl h-[80vh] mx-auto"
              width="640"
              height="3349"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            >
              Loading…
            </iframe>
          </div>

          <div className="mt-6 items-center font-fira w-full flex flex-row space-x-4 rounded">
            <button
              onClick={() => navigate("/")}
              className="px-4 py-2 bg-gray-700 flex-grow text-white rounded-sm hover:bg-red-950"
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalPage;

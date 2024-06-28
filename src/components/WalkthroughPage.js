import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  updateUserProgress,
  getUserProgress,
} from "../utils/localStorageUtils";
import pagesContent from "../data/pagesContent";
import ResourceSidebar from "../components/ResourceSidebar"; // Import the ResourceSidebar component

const WalkthroughPage = () => {
  const { pageId } = useParams();
  const [answers, setAnswers] = useState({});
  const [correctAnswers, setCorrectAnswers] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const currentPageId = parseInt(pageId, 10);
  const pageContent = pagesContent[`page${currentPageId}`];

  useEffect(() => {
    const userProgress = getUserProgress();
    if (userProgress.includes(currentPageId)) {
      const savedCorrectAnswers = pageContent.content
        .filter((item) => item.type === "question")
        .reduce((acc, item) => {
          acc[item.field] = item.correctAnswer;
          return acc;
        }, {});
      setCorrectAnswers(savedCorrectAnswers);
    }
  }, [currentPageId, pageContent.content]);

  const handleInputChange = (field, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [field]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: "",
    }));
  };

  const checkAnswer = (field, correctAnswer) => {
    if (answers[field] && answers[field].trim() === correctAnswer) {
      setCorrectAnswers((prevCorrectAnswers) => ({
        ...prevCorrectAnswers,
        [field]: correctAnswer,
      }));
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: "",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: "Incorrect answer, please try again.",
      }));
    }
  };

  const allQuestionsCorrect = pageContent.content
    .filter((item) => item.type === "question")
    .every((item) => correctAnswers[item.field]);

  const nextPageId = currentPageId + 1;
  const nextPageContent = pagesContent[`page${nextPageId}`];

  if (allQuestionsCorrect) {
    updateUserProgress(currentPageId);
  }

  const gotoPreviousPage = () => {
    if (currentPageId <= 1) navigate("/");
    else navigate(`/walkthrough/${currentPageId - 1}`);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex">
      <ResourceSidebar />
      <div className="flex-1 flex flex-col items-center p-4 text-white font-fira  relative ">
        <button
          onClick={() => navigate("/")}
          className="mb-4 px-4 py-2 text-white rounded absolute right-10 hover:text-red-950 z-10"
        >
          Home
        </button>

        <h2 className=" text-6xl bg-gradient-to-r from-red-800  to-black text-transparent  bg-clip-text p-4 absolute top-0 pr-48 pl-48 z-0 flex justify-center items-center">
          {pageContent.title}
        </h2>

        <div className="space-y-6 w-full max-w-4xl mt-24">
          {pageContent.content.map((item, index) => {
            if (item.type === "text") {
              return (
                <p
                  key={index}
                  className="text-base max-w-3xl mx-auto text-center text-gray-300"
                >
                  {item.value}
                </p>
              );
            } else if (item.type === "subheading") {
              return (
                <div>
                  <h2
                    key={index}
                    className="text-5xl font-bold max-w-3xl mx-auto text-center p-10"
                  >
                    {item.value}
                  </h2>
                  <hr className="p-10 max-w-screen-2xl"></hr>
                </div>
              );
            } else if (item.type === "image" || item.type === "gif") {
              return (
                <div key={index} className="flex justify-center">
                  <img
                    src={item.value}
                    alt={item.alt}
                    className="p-1 max-w-full bg-gray-700 h-auto rounded"
                  />
                </div>
              );
            } else if (item.type === "question") {
              return (
                <div key={index} className="flex justify-center">
                  <div className="flex flex-col bg-slate-800 rounded-lg p-4 w-full max-w-2xl hover:scale-125 hover:transition-transform">
                    <p className="font-bold text-center">{item.question}</p>
                    <input
                      type="text"
                      value={
                        correctAnswers[item.field] || answers[item.field] || ""
                      }
                      onChange={(e) =>
                        handleInputChange(item.field, e.target.value)
                      }
                      disabled={!!correctAnswers[item.field]}
                      placeholder="Answer"
                      className="p-2 rounded w-full text-black text-center hover:border hover:border-red-800"
                    />
                    {errors[item.field] && (
                      <p className="text-red-500">{errors[item.field]}</p>
                    )}
                    {!correctAnswers[item.field] && (
                      <button
                        onClick={() =>
                          checkAnswer(item.field, item.correctAnswer)
                        }
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-gray-500 mt-2"
                      >
                        Submit Answer
                      </button>
                    )}
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className="mt-6 flex space-x-4">
          <button
            onClick={gotoPreviousPage}
            className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-red-950"
          >
            Back
          </button>
          {allQuestionsCorrect && nextPageContent && (
            <button
              onClick={() => navigate(`/walkthrough/${nextPageId}`)}
              className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-red-950"
            >
              Continue to {nextPageContent.title}
            </button>
          )}
          {allQuestionsCorrect && !nextPageContent && (
            <p className="text-green-500">You have completed all the pages!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WalkthroughPage;

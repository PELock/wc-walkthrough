import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  updateUserProgress,
  getUserProgress,
} from "../utils/localStorageUtils";
import pagesContent from "../data/pagesContent";

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
    <div className="min-h-screen bg-black flex flex-col items-center p-6 text-white font-fira">
      <button
        onClick={() => navigate("/")}
        className="mb-4 px-4 py-2 bg-gray-700 text-white rounded absolute right-10"
      >
        Home
      </button>
      <h2 className="text-2xl font-bold mb-6">{pageContent.title}</h2>
      <div className="space-y-6 w-full max-w-2xl">
        {pageContent.content.map((item, index) => {
          if (item.type === "text") {
            return (
              <p key={index} className="text-base">
                {item.value}
              </p>
            );
          } else if (item.type === "image" || item.type === "gif") {
            return (
              <img
                key={index}
                src={item.value}
                alt={item.alt}
                className="max-w-full h-auto"
              />
            );
          } else if (item.type === "question") {
            return (
              <div className="border border-gray-400 rounded-lg p-4">
                <div key={index} className="space-y-2">
                  <p className="font-medium text-red-600">{item.question}</p>
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
                    className="border border-gray-300 p-2 rounded w-full text-black"
                  />
                  {errors[item.field] && (
                    <p className="text-red-500">{errors[item.field]}</p>
                  )}
                  {!correctAnswers[item.field] && (
                    <button
                      onClick={() =>
                        checkAnswer(item.field, item.correctAnswer)
                      }
                      className="px-4 py-2 bg-blue-500 text-white rounded"
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
          className="px-4 py-2 bg-gray-700 text-white rounded"
        >
          Back
        </button>
        {allQuestionsCorrect && nextPageContent && (
          <button
            onClick={() => navigate(`/walkthrough/${nextPageId}`)}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Continue to {nextPageContent.title}
          </button>
        )}
        {allQuestionsCorrect && !nextPageContent && (
          <p className="text-green-500">You have completed all the pages!</p>
        )}
      </div>
    </div>
  );
};

export default WalkthroughPage;

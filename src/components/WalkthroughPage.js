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
    <div>
      <button onClick={() => navigate("/")}>Home</button>
      <h2>{pageContent.title}</h2>
      {pageContent.content.map((item, index) => {
        if (item.type === "text") {
          return <p key={index}>{item.value}</p>;
        } else if (item.type === "image" || item.type === "gif") {
          return (
            <img
              key={index}
              src={item.value}
              alt={item.alt}
              style={{ maxWidth: "100%" }}
            />
          );
        } else if (item.type === "question") {
          return (
            <div key={index}>
              <p>{item.question}</p>
              <input
                type="text"
                value={correctAnswers[item.field] || answers[item.field] || ""}
                onChange={(e) => handleInputChange(item.field, e.target.value)}
                disabled={!!correctAnswers[item.field]}
                placeholder="Answer"
              />
              {errors[item.field] && (
                <p style={{ color: "red" }}>{errors[item.field]}</p>
              )}
              {!correctAnswers[item.field] && (
                <button
                  onClick={() => checkAnswer(item.field, item.correctAnswer)}
                >
                  Submit Answer
                </button>
              )}
            </div>
          );
        }
        return null;
      })}
      <button onClick={gotoPreviousPage}>Back</button>
      <br></br>
      {allQuestionsCorrect && nextPageContent && (
        <button onClick={() => navigate(`/walkthrough/${nextPageId}`)}>
          Continue to {nextPageContent.title}
        </button>
      )}
      {allQuestionsCorrect && !nextPageContent && (
        <p>You have completed all the pages!</p>
      )}
    </div>
  );
};

export default WalkthroughPage;

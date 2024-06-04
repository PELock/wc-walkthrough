import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { updateUserProgress } from "../utils/localStorageUtils";
import pagesContent from "./pages";

const WalkthroughPage = () => {
  const { pageId } = useParams();
  const [answers, setAnswers] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Convert pageId to an integer for easier manipulation
  const currentPageId = parseInt(pageId, 10);

  // Get content for the current page
  const pageContent = pagesContent[`page${currentPageId}`];

  // Handle input changes and update the state
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

  // Validate the answers and provide feedback
  const checkAnswers = () => {
    if (!pageContent.content.some((item) => item.type === "question")) {
      return;
    }

    let allCorrect = true;
    const newErrors = {};
    pageContent.content.forEach((item) => {
      if (item.type === "question") {
        const { field, correctAnswer } = item;
        if (!answers[field] || answers[field].trim() !== correctAnswer) {
          newErrors[field] = "Incorrect answer, please try again.";
          allCorrect = false;
        }
      }
    });

    if (allCorrect) {
      updateUserProgress(currentPageId);
      const nextPageId = currentPageId + 1;
      if (pagesContent[`page${nextPageId}`]) {
        navigate(`/walkthrough/${nextPageId}`);
      } else {
        navigate("/"); // Redirect to home if no more pages
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div>
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
                placeholder="Answer"
                onChange={(e) => handleInputChange(item.field, e.target.value)}
              />
              {errors[item.field] && (
                <p style={{ color: "red" }}>{errors[item.field]}</p>
              )}
            </div>
          );
        }
        return null;
      })}
      {pageContent.content.some((item) => item.type === "question") && (
        <button onClick={checkAnswers}>Submit</button>
      )}
    </div>
  );
};

export default WalkthroughPage;

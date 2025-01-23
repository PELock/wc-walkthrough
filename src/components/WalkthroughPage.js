import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import pagesContent from "../data/pagesContent";
import ResourceSidebar from "../components/ResourceSidebar";
import ChronologicalOrderQuestion from "../components/ChronologicalOrderQuestion";
import ProgressTracker from "./ProgressTracker";

const WalkthroughPage = () => {
  const { pageId } = useParams();
  const [answers, setAnswers] = useState({});
  const [correctAnswers, setCorrectAnswers] = useState({});
  const [errors, setErrors] = useState({});
  const [modifiableText, setModifiableText] = useState({});
  const [completedQuestions, setCompletedQuestions] = useState([]);
  const navigate = useNavigate();
  const scrollableRef = useRef(null);

  const currentPageId = parseInt(pageId, 10);
  const pageContent = pagesContent[`page${currentPageId}`];

  useEffect(() => {
    // Load correct answers for this page if available from localStorage
    const savedCorrectAnswers = Object.keys(localStorage)
    .filter((key) => key.startsWith(`${currentPageId}-`)) // Check if the key matches the pageId
    .reduce((acc, key) => {
      // Extract the field name (after the pageId) from the localStorage keys
      const field = key.split('-')[1];
      acc[field] = localStorage.getItem(key); // Get the value from localStorage
      return acc;
    }, {});
    setCorrectAnswers(savedCorrectAnswers);

    // Load modifiable text from local storage
    const savedModifiableText = pageContent.content
      .filter((item) => item.type === "box")
      .reduce((acc, item) => {
        acc[item.field] =
          localStorage.getItem(`${currentPageId}-${item.field}`) || item.value;
        return acc;
      }, {});
    setModifiableText(savedModifiableText);
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

  const handleModifiableTextChange = (field, value) => {
    setModifiableText((prevText) => ({
      ...prevText,
      [field]: value,
    }));
  };

  // Saves "box" type questions
  const saveModifiableTextHandler = (field) => {
    localStorage.setItem(`${currentPageId}-${field}`, modifiableText[field]);
    console.log(`Saved text for ${field}:`, modifiableText[field]);
  };

  // Check regular answer
  const checkAnswer = (field, correctAnswer) => {
    if (
      answers[field] &&
      answers[field].trim().toLowerCase() === correctAnswer.toLowerCase()
    ) {
      // Update the correct answers state
      setCorrectAnswers((prevCorrectAnswers) => ({
        ...prevCorrectAnswers,
        [field]: correctAnswer,
      }));
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: "",
      }));

      // Save correct answer to localStorage
      localStorage.setItem(`${currentPageId}-${field}`, correctAnswer);

      // Mark the question as completed
      if (!completedQuestions.includes(field)) {
        const updatedCompletedQuestions = [...completedQuestions, field];
        setCompletedQuestions(updatedCompletedQuestions);
      }
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: "Incorrect answer, please try again.",
      }));
    }
  };

  // Drag-n-drop answer checking
  const handleChronologicalAnswer = (field, isCorrect) => {
    if (isCorrect) {
      setCorrectAnswers((prevCorrectAnswers) => ({
        ...prevCorrectAnswers,
        [field]: true,
      }));
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: "",
      }));

      // Mark the question as completed
      if (!completedQuestions.includes(field)) {
        const updatedCompletedQuestions = [...completedQuestions, field];
        setCompletedQuestions(updatedCompletedQuestions);
      }
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: "Incorrect order, please try again.",
      }));
    }
  };



  const nextPageId = currentPageId + 1;
  const nextPageContent = pagesContent[`page${nextPageId}`];

  const gotoPreviousPage = () => {
    if (currentPageId <= 1) navigate("/");
    else navigate(`/walkthrough/${currentPageId - 1}`);
  };

  const gotoNextPage = () => {
    if (currentPageId >= 9) navigate("/walkthrough/9");
    else navigate(`/walkthrough/${nextPageId}`);
  };

  return (
    <div className="min-h-screen flex bg-slate-950">
      <ProgressTracker scrollableRef={scrollableRef} />
      <ResourceSidebar />

      <div
        className="flex-1 flex flex-col p-4 pl-10  text-white  relative overflow-y-auto h-screen "
        ref={scrollableRef}
      >
        <button
          onClick={() => navigate("/")}
          className="ui-btn mb-4 px-4 py-2 text-white font-fira text-lg fixed right-0  z-10 "
        >
          <span>Home</span>
        </button>

        <h2 className="text-5xl font-fira  font-bold  pt-4 top-0 pr-48  z-0 flex  ">
          <span>{pageContent.title}</span>
        </h2>
        <div className="space-y-6 w-full max-w-4xl mt-24">
          {pageContent.content.map((item, index) => {
            if (item.type === "text") {
              return (
                <p key={index} className="text-lg font-medium text-gray-300">
                  {item.value}
                </p>
              );
            } else if (item.type === "subheading") {
              return (
                <div key={index} id={item.id} className=" ">
                  <h2 className="text-4xl font-fira font-bold  pt-10 pb-3">
                    {item.value}
                  </h2>
                </div>
              );
            } else if (item.type === "list") {
              return (
                <div
                  key={index}
                  className=" font-fira flex flex-col ml-8 pl-4  bg-black rounded-lg p-4 w-full max-w-2xl"
                >
                  {item.listElements.map((listElement, index) => {
                    return (
                      <div key={index}>
                        <p className="font-bold pb-2">{listElement.list}</p>
                        <p className=" pb-5 text-red-700">{listElement.text}</p>
                      </div>
                    );
                  })}
                </div>
              );
            } else if (item.type === "image" || item.type === "gif") {
              if (item.size === "small")
                return (
                  <div key={index} className="flex justify-center">
                    <img
                      src={item.value}
                      alt={item.alt}
                      className="p-1 max-w-md bg-stone-900 h-auto rounded-lg"
                    />
                  </div>
                );
              return (
                <div key={index} className="flex justify-center">
                  <img
                    src={item.value}
                    alt={item.alt}
                    className="p-1 max-w-full bg-stone-900 h-auto rounded-lg"
                  />
                </div>
              );
            } else if (item.type === "question") {
              return (
                <div key={index} className="flex justify-center">
                  <div className="flex font-fira flex-col border border-stone-900 bg-stone-950 rounded-lg p-4 w-full max-w-2xl ">
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
                      className="p-2 rounded-lg border border-stone-900 w-full text-gray-300 text-center bg-gray-950 hover:border hover:border-red-800"
                    />
                    {errors[item.field] && (
                      <p className="text-red-500">{errors[item.field]}</p>
                    )}
                    {!correctAnswers[item.field] && (
                      <button
                        onClick={() =>
                          checkAnswer(item.field, item.correctAnswer)
                        }
                        className="px-4 py-2 bg-red-900 text-white rounded hover:bg-gray-500 mt-2"
                      >
                        Submit Answer
                      </button>
                    )}
                  </div>
                </div>
              );
            } else if (item.type === "box") {
              item.field = index;
              return (
                <div key={index} className="flex justify-center">
                  <div className="flex font-fira flex-col border border-stone-900 bg-stone-950 rounded-xl p-4 w-full max-w-2xl ">
                    <p className="font-bold text-center pb-4">
                      {item.question}
                    </p>
                    <textarea
                      value={modifiableText[item.field] || ""}
                      onChange={(e) =>
                        handleModifiableTextChange(item.field, e.target.value)
                      }
                      className="p-2 rounded-xl border border-stone-900 w-full text-gray-300 text-center bg-gray-950 hover:border hover:border-red-800"
                      rows="4"
                    />
                    <button
                      onClick={() => saveModifiableTextHandler(item.field)}
                      className="px-4 py-2 bg-red-900 text-white rounded hover:bg-gray-500 mt-2"
                    >
                      Save
                    </button>
                  </div>
                </div>
              );
            } else if (item.type === "chronological") {
              return (
                <div key={index}>
                  <ChronologicalOrderQuestion
                    className="font-fira"
                    question={item.question}
                    events={item.events}
                    correctOrder={item.correctOrder}
                    onAnswer={(isCorrect) =>
                      handleChronologicalAnswer(item.field, isCorrect)
                    }
                  />
                </div>
              );
            }
            return null;
          })}
        </div>

        <div className="mt-6 items-center font-fira w-full flex flex-row  space-x-4 rounded ">
          <button
            onClick={gotoPreviousPage}
            className="px-4 py-2 bg-gray-700 flex-grow text-white rounded-sm hover:bg-red-950 "
          >
            Back
          </button>
          {nextPageContent && (
            <button
              onClick={gotoNextPage}
              className="px-4 py-2 flex-grow  bg-gray-700 text-white rounded-sm hover:bg-red-950"
            >
              Continue to {nextPageContent.title}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WalkthroughPage;

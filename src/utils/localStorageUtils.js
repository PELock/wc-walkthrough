// Get user progress  from localStorage
export const getCorrectAnswers = () => {
  const correctAnswers =
    JSON.parse(localStorage.getItem("correctAnswers")) || {};
        console.log("wec "+ correctAnswers);
  return correctAnswers;
};

// Update user progress with correct answers in localStorage
export const updateCorrectAnswers = (
  questionField,
  userAnswer,
  correctAnswer
) => {
  let correctAnswers = getCorrectAnswers();

  // Check if the answer is correct
  if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    correctAnswers[questionField] = true; // Mark this question as correct
  }

  // Save updated correct answers to localStorage
  localStorage.setItem("correctAnswers", JSON.stringify(correctAnswers));
};

// Get modifiable text from localStorage
export const getModifiableText = (pageId, field) => {
  const modifiableText =
    JSON.parse(localStorage.getItem(`page${pageId}_${field}`)) || "";
  return modifiableText;
};

// Save modifiable text to localStorage
export const saveModifiableText = (pageId, field, text) => {
  if (text !== undefined)
    localStorage.setItem(`page${pageId}_${field}`, JSON.stringify(text));
};

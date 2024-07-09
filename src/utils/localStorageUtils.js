// Get user progress from localStorage
export const getUserProgress = () => {
  const userProgress = JSON.parse(localStorage.getItem("userProgress")) || [];
  return userProgress;
};

// Update user progress in localStorage
export const updateUserProgress = (currentPageId, completedQuestions) => {
  let userProgress = getUserProgress();

  // Check if currentPageId is already in userProgress
  if (!userProgress.includes(currentPageId)) {
    userProgress.push(currentPageId);
  }

  // Update completed questions for the current page
  const pageKey = `page${currentPageId}`;
  const currentPageProgress = {
    ...userProgress,
    [pageKey]: completedQuestions,
  };

  localStorage.setItem("userProgress", JSON.stringify(userProgress));
};

// Get modifiable text from localStorage
export const getModifiableText = (pageId, field) => {
  const modifiableText =
    JSON.parse(localStorage.getItem(`page${pageId}_${field}`)) || "";
  return modifiableText;
};

// Save modifiable text to localStorage
export const saveModifiableText = (pageId, field, text) => {
  localStorage.setItem(`page${pageId}_${field}`, JSON.stringify(text));
};

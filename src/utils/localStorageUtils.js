export const getUserProgress = () => {
  const userProgress = localStorage.getItem("userProgress");
  return userProgress ? JSON.parse(userProgress) : [];
};

export const updateUserProgress = (pageId) => {
  const userProgress = getUserProgress();
  if (!userProgress.includes(pageId)) {
    userProgress.push(pageId);
    localStorage.setItem("userProgress", JSON.stringify(userProgress));
  }
};

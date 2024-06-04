const USER_PROGRESS_KEY = "userProgress";

export const getUserProgress = () => {
  const progress = localStorage.getItem(USER_PROGRESS_KEY);
  return progress ? JSON.parse(progress) : [];
};

export const updateUserProgress = (pageId) => {
  const progress = getUserProgress();
  if (!progress.includes(pageId)) {
    progress.push(pageId);
    localStorage.setItem(USER_PROGRESS_KEY, JSON.stringify(progress));
  }
};

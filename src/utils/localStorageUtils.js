const USER_PROGRESS_KEY = "userProgress";
const MODIFIABLE_TEXT_KEY_PREFIX = "modifiableText_";

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

export const getModifiableText = (pageId, field) => {
  const storedText = localStorage.getItem(
    `${MODIFIABLE_TEXT_KEY_PREFIX}${pageId}_${field}`
  );
  return storedText ? storedText : "";
};

export const saveModifiableText = (pageId, field, text) => {
  localStorage.setItem(`${MODIFIABLE_TEXT_KEY_PREFIX}${pageId}_${field}`, text);
};

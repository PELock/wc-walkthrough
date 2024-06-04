import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserProgress } from "../utils/localStorageUtils";

const Home = () => {
  const [progress, setProgress] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProgress();
  }, []);

  const fetchProgress = () => {
    const userProgress = getUserProgress();
    setProgress(userProgress);
  };

  const pages = [
    { name: "Page 1", id: 1 },
    { name: "Page 2", id: 2 },
    { name: "Page 3", id: 3 },
    // Add more pages as needed
  ];

  return (
    <div>
      <h1>Welcome to the WannaCry Walkthrough!</h1>
      {pages.map((page, index) => (
        <button
          key={page.id}
          onClick={() => navigate(`/walkthrough/${page.id}`)}
          disabled={index > 0 && !progress.includes(pages[index - 1].id)}
        >
          {page.name}
        </button>
      ))}
    </div>
  );
};

export default Home;

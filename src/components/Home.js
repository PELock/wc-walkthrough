import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserProgress } from "../utils/localStorageUtils";
import Sidebar from "../components/Sidebar";
import Hamburger from "../components/Hamburger";
import TypeWriterEffect from "../components/TypeWriterEffect";
import "../fx.css";

// Define pages with custom images
const pages = [
  { name: "Introduction", id: 1, img: "/Logos/laser.webp" },
  { name: "Live Analysis", id: 2, img: "/Logos/cubes.webp" },
  { name: "Ghidra", id: 3, img: "/Logos/Ghidra_logo.svg.png" },
  { name: "Cuckoo Sandbox", id: 8, img: "/Logos/cuckoo.png" },

];

const Home = () => {
  const [progress, setProgress] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProgress();
  }, []);

  // determine which pages and questions a user has completed
  const fetchProgress = () => {
    const userProgress = getUserProgress();
    setProgress(userProgress);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="relative min-h-screen  bg-slate-950 items-start p-1 pl-4 font-fira ">
      <Hamburger toggleSidebar={toggleSidebar} isOpen={sidebarOpen} />
      <Sidebar isOpen={sidebarOpen} />
      <div className="w-full max-w-screen-xl ">
        <div className="text-white p-4">
          <h1 class="text-9xl font-bold pb-5 bg-gradient-to-r from-red-900 via-gray-800 to-red-600 inline-block text-transparent bg-clip-text ">
            Welcome to WannaCry
          </h1> 
          <p className="text-lg text-left">
            <TypeWriterEffect 
                 text = "Dive deep into the analysis of WannaCry, one of the most notorious ransomware attacks. This walkthrough will guide you through each stage of the analysis, providing insights and tools used by cybersecurity professionals."
                 time = "10"
            />
          </p>
        </div>
        <div className="w-full flex flex-col ">
          {pages.map((page, index) => (
            <button
              key={page.id}
              onClick={() => navigate(`/walkthrough/${page.id}`)}
              disabled={index > 0 && !progress.includes(pages[index - 1].id)}
              className={`relative mb-0 w-full h-28 flex items-center justify-start transition-all duration-300 group
                ${
                  index > 0 && !progress.includes(pages[index - 1].id)
                    ? "cursor-not-allowed"
                    : "hover:w-screen hover:shadow-2xl hover:p-6 hover:shadow-black hover:scale-105 hover:bg-gray-700 cursor-pointer"
                }`}
            >
              <img 
                src={page.img}
                alt={page.name}
                className=" w-24  object-cover"
              />
              <span className="text-white text-2xl font-bold ml-4 group-hover:translate-x-full group-hover:scale-125 duration-300 group-hover:bg-gradient-to-r from-red-900 via-gray-900 to-red-600 group-hover:inline-block group-hover:text-transparent group-hover:bg-clip-text">
                {page.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

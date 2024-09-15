import React, { useState } from "react";

const SideMenu = ({ pages, userProgress, className }) => {
  const [activePage, setActivePage] = useState(null);

  const togglePage = (pageId) => {
    setActivePage(activePage === pageId ? null : pageId);
  };

  return (
    <div
      className={`fixed top-0 right-1/5 h-screen bg-gray-900 text-white shadow-lg overflow-y-auto `}
    >
      {pages
        .filter((page) =>
          userProgress.includes(parseInt(page.id.replace("page", ""), 10))
        )
        .map((page) => (
          <div key={page.id} className="mb-4">
            <button
              onClick={() => togglePage(page.id)}
              className="flex justify-between w-full py-2 px-3 text-lg bg-gray-800 hover:bg-gray-700 focus:outline-none"
            >
              {page.title}
              <span
                className={`transition-transform ${
                  activePage === page.id ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>
            {activePage === page.id && (
              <ul className="pl-4 mt-2">
                {page.subheadings.map((subheading) => (
                  <li key={subheading.id} className="mt-1">
                    <a
                      href={`#${subheading.id}`}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {subheading.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
    </div>
  );
};

export default SideMenu;

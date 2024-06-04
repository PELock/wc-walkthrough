import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import WalkthroughPage from "./components/WalkthroughPage";

const App = () => {
  return (
    <Router>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/walkthrough/:pageId" element={<WalkthroughPage />} />
        </Routes>
      
    </Router>
  );
};

export default App;

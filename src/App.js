import { React } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import Home from "./components/Home";
import WalkthroughPage from "./components/WalkthroughPage";
import About from "./components/About";
import FinalPage from "./components/FinalPage";

const WalkthroughRoute = () => {
  const { pageId } = useParams();
  const pageNumber = parseInt(pageId);

  if (pageNumber > 9 || pageNumber < 1) {
    return <Home />;
  }

  if (pageNumber === 9) {
    return <FinalPage />;
  }

  return <WalkthroughPage />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/walkthrough/:pageId" element={<WalkthroughRoute />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Home/>} />
      </Routes>
    </Router>
  );
};

export default App;

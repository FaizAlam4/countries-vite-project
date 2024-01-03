import "./App.css";
import Navigation from "./Component/Navigation";
import MainSection from "./Component/MainSection";
import DarkContext, { themes } from "./Context/DarkContext.js";
import DetailView from "./Component/DetailView.jsx";
import NotFound from "./Component/NotFound.jsx";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState(themes.light);

  let toggleMode = () => {
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);

  };

  return (
    <DarkContext.Provider value={{ theme, toggleMode }}>
      <Router>
        <div className="app-wrap">
          <Navigation />
          <Routes>
            <Route path="/" element={<MainSection />} />
            <Route path="/:id" element={<DetailView />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
          <Route path="/not-found" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </DarkContext.Provider>
  );
}

export default App;

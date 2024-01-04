import { useContext } from "react";
import "./Navigation.css";
import DarkContext from "../Context/DarkContext";

function Navigation() {
  const { theme, toggleMode } = useContext(DarkContext);

  return (
    <nav className={`${theme}`}>
      <div className="nav-item">Where in the world? </div>
      <div className="nav-item" onClick={toggleMode}>
        <i className="fa-regular fa-moon"></i> Dark Mode
      </div>
    </nav>
  );
}

export default Navigation;

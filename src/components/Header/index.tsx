import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

interface Props {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<Props> = (props) => {
  const { darkMode, toggleDarkMode } = props;

  return (
    <header>
      <h1>Rick & Morty</h1>
      <div className="nav">
        <NavLink to="/characters">Characters</NavLink>
        <NavLink to="/episodes">Episodes</NavLink>
        <NavLink to="/locations">Locations</NavLink>
        <button onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </header>
  );
};

export default Header;

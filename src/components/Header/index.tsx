import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
import { PreferenceContext } from "../../Contexts/preferenceContext";



const Header: React.FC = (props) => {
  const { state, dispatch } = useContext(PreferenceContext);

  return (
    <header>
      <h1 className={state.theme}>Rick & Morty</h1>
      <div className={"nav " + state.theme}>
        <NavLink to="/characters">Characters</NavLink>
        <NavLink to="/episodes">Episodes</NavLink>
        <NavLink to="/locations">Locations</NavLink>
        <button
          onClick={() => {
            dispatch({ type: state.theme === "dark" ? "LIGHT" : "DARK" });
          }}
        >
          {state.theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </header>
  );
};

export default Header;

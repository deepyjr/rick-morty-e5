import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

interface Props {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<Props> = (props) => {
  const { darkMode, toggleDarkMode } = props;
  const location = useLocation();

  return (
    <header>
      <h1>Rick & Morty</h1>
      <nav>
        <NavLink to="/characters" className={location.pathname === '/characters' ? 'active' : ''}>Characters</NavLink>
        <NavLink to="/episodes" className={location.pathname === '/episodes' ? 'active' : ''}>Episodes</NavLink>
        <NavLink to="/locations" className={location.pathname === '/locations' ? 'active' : ''}>Locations</NavLink>
      </nav>
      <button onClick={toggleDarkMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
    </header>
  );
};

export default Header;
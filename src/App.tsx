import React, { useCallback, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Character from "./pages/Character";
import CharacterDetail from "./components/CharacterDetail";
import Episode from "./pages/Episode";
import Location from "./pages/Location";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleDarkMode = useCallback(() => {
    setDarkMode((prev) => !prev);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Header darkMode={darkMode} toggleDarkMode={handleDarkMode} />
          }
        >
          <Route path="/characters" element={<Character />} />
          <Route path="/characters/:id" element={<CharacterDetail />} />
          <Route path="/episodes" element={<Episode />} />
          <Route path="/locations" element={<Location />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React, { useCallback, useState } from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Header from "./components/Header";
import Characters from "./components/Characters";
import CharacterDetail from "./components/CharacterDetail";
import Episodes from "./components/Episodes";
import Locations from "./components/Locations";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  
  const handleDarkMode = useCallback(() => {
    setDarkMode((prev) =>  !prev)
  }, [])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Header darkMode={darkMode} toggleDarkMode={handleDarkMode} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<CharacterDetail />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/locations" element={<Locations />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

import React, { useCallback, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Root = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleDarkMode = useCallback(() => {
    setDarkMode((prev) => !prev);
  }, []);

  return (
    <React.StrictMode>
      <Header darkMode={darkMode} toggleDarkMode={handleDarkMode} />
      <Outlet />
    </React.StrictMode>
  );
};

export default Root;

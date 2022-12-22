import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Root = () => {

  return (
    <React.StrictMode>
      <div className="App">
        <Header />
        <Outlet />
      </div>
    </React.StrictMode>
  );
};

export default Root;

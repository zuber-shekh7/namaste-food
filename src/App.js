import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen mx-auto container mt-6">
        <Outlet />
      </main>
    </>
  );
};

export default App;

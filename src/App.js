import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="bg-slate-50 h-screen">
        <Outlet />
      </main>
    </>
  );
};

export default App;

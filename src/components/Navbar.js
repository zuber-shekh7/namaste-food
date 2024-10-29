import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { setDarkTheme } from "../slices/app.slice";

const Navbar = () => {
  const { isDarkTheme } = useSelector((state) => state.app);

  const dispatch = useDispatch();

  const handleChangeTheme = () => {
    dispatch(setDarkTheme(!isDarkTheme));
  };

  return (
    <nav className="flex justify-between items-center">
      <section>
        <h1 className="text-2xl">Namaste Food</h1>
      </section>
      <section>
        <ul className="flex justify-center items-center">
          <li className="mr-2">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-2">
            <Link to="/about">About</Link>
          </li>
          <li>
            <button
              onClick={handleChangeTheme}
              className="bg-red-300 px-2 py-3"
            >
              Dark Theme {isDarkTheme ? "Turn Off" : "Turn On"}
            </button>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;

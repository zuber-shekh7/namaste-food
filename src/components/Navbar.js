import React from "react";
import {
  FaRegQuestionCircle,
  FaRupeeSign,
  FaSearch,
  FaShoppingCart,
  FaUserCircle,
} from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";

import LinkItem from "./LinkItem";

const Navbar = () => {
  return (
    <nav className="container-full mx-auto px-6 py-3 shadow-lg">
      <section className="flex justify-between items-center">
        <section>
          <LinkItem to="/">
            <IoFastFood className="h-12 w-12 bg-orange-600 text-white rounded-xl p-2" />
          </LinkItem>
        </section>
        <section>
          <ul className="flex justify-center items-center">
            <li className="mr-12">
              <LinkItem to="/search">
                <FaSearch className="mr-2" /> Search
              </LinkItem>
            </li>
            <li className="mr-12">
              <LinkItem to="/offers">
                <FaRupeeSign className="mr-2" /> Offers
              </LinkItem>
            </li>
            <li className="mr-12">
              <LinkItem to="/help">
                <FaRegQuestionCircle className="mr-2" /> Help
              </LinkItem>
            </li>
            <li className="mr-12">
              <LinkItem to="/sign-in">
                <FaUserCircle className="mr-2" /> Sign In
              </LinkItem>
            </li>
            <li className="">
              <LinkItem to="/cart">
                <FaShoppingCart className="mr-2" /> Cart
              </LinkItem>
            </li>
          </ul>
        </section>
      </section>
    </nav>
  );
};

export default Navbar;

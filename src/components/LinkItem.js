import React from "react";
import { Link } from "react-router-dom";

const LinkItem = ({ to, children }) => {
  return (
    <Link className="flex items-center hover:text-orange-600" to={to}>
      {children}
    </Link>
  );
};

export default LinkItem;

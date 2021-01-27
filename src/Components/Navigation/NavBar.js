import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div>
        <Link to="#">
          <h2>Features</h2>
        </Link>
      </div>
      <div>
        <Link to="#">
          <h2>Variant Comparison</h2>
        </Link>
      </div>
      <div>
        <Link to="#">
          <h2>Price & Specification</h2>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;

import React from "react";
import { Link } from "react-router-dom";

const Nav = props => {
  return (
    <div>
      <nav className="main-nav">
        <ul>
          <li>
            <Link to="/dogs">Cats</Link>
          </li>
          <li>
            <Link to="/dogs">Dogs</Link>
          </li>
          <li>
            <Link to="/computers">Computers</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;

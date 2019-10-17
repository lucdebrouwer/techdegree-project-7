import React from "react";
import { Link } from "react-router-dom";

const Nav = props => {
  return (
    <div>
      <nav className="main-nav">
        <ul>
          <li>
            <Link to="/" onClick={props.handleHomeClick}>
              Custom
            </Link>
          </li>
          <li>
            <Link to="/cats" onClick={props.onCatClick}>
              Cats
            </Link>
          </li>
          <li>
            <Link to="/dogs" onClick={props.onDogClick}>
              Dogs
            </Link>
          </li>
          <li>
            <Link to="/business" onClick={props.onComputerClick}>
              Business
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;

import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header>
        <nav className="navbar sticky-top navbar-dark bg-dark">
          <div>
            <Link className="navbar-brand" to="/">
              List Employee
            </Link>
            <Link to="/create" className="navbar-brand">
              Add Employee
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;

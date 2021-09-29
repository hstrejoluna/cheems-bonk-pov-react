import * as React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-cheems">
      <Link to="/about">
        <button> About</button>
      </Link>

      <h1>Cheems Call</h1>
      <Link to="/">
        <button> BONK! </button>
      </Link>
    </header>
  );
};

export default Header;

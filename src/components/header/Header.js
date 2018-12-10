import React, { Component } from "react";
import {Link} from "react-router-dom";
import HeaderNav from "./HeaderNav/HeaderNav";

class Header extends Component {
  render() {
    return (
      <header>
        <Link to={"/"}>
          <h2>Movie-library</h2>
        </Link>
        <HeaderNav />
      </header>
    );
  }
}

export default Header;

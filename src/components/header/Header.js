import React, { Component } from "react";
import {Link} from "react-router-dom";
import Nav from "./Nav";

class Header extends Component {
  render() {
    return (
      <header>
        <Link to={"/"}>
          <h2>Movie-library</h2>
        </Link>
        <Nav />
      </header>
    );
  }
}

export default Header;

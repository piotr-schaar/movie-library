import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <ul>
        <li>
          <Link to={"/rated-movies"}>Top Rated</Link>
          <Link to={"/popular-movies"}>Popular</Link>
          <Link to={"/genres"}>Genres</Link>
        </li>
      </ul>
    );
  }
}

export default Nav;

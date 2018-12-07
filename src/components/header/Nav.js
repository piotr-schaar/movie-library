import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <ul>
                <li>
                    <Link
                        to={'/moviesRated'}
                    >Top Rated</Link>

                </li>
            </ul>
        );
    }
}

export default Nav
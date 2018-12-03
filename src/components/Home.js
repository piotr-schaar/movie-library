import React, { Component } from 'react';
import Header from './header/Header';
import MoviesNew from './movies/MoviesNew';
class Home extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <MoviesNew />
            </div>
        );
    }
}

export default Home;
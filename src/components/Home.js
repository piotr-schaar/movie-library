import React, { Component } from 'react';
import Header from './header/Header';
import NewMovies from './movies/NewMovies';
class Home extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <NewMovies />
            </div>
        );
    }
}

export default Home;
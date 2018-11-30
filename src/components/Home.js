import React, { Component } from 'react';
import Header from './header/Header';
import Movies from './movies/Movies';
class Home extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <Movies />
            </div>
        );
    }
}

export default Home;
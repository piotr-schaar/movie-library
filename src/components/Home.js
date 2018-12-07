import React, { Component } from 'react';
import Header from './header/Header';
import MoviesNew from './movies/MoviesNew';
import SearchForm from './search/SearchForm';
class Home extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <SearchForm />
                <MoviesNew />
            </div>
        );
    }
}

export default Home;
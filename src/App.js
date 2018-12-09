import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Movie from "./components/movie/Movie";
import MoviesRated from './components/movies/MoviesRated' ;
import MoviesPopular from './components/movies/MoviesPopular'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route path={"/movie/:id"} component={Movie} />
          <Route path={"/rated-movies"} component={MoviesRated} />
          <Route path={"/popular-movies"} component={MoviesPopular} />

        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
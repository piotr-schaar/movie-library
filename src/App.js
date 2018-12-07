import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Movie from "./components/movie/Movie";
import MoviesRated from './components/movies/MoviesRated' ;
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route path={"/movie/:id"} component={Movie} />
          <Route path={"/rated-movies"} component={MoviesRated} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
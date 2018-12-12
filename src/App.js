import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import MoviesRated from "./pages/MoviesRated";
import MoviesPopular from "./pages/MoviesPopular";
import MoviesNew from './pages/MoviesNew';
import Genres from "./pages/Genres";
import Genre from "./components/genres/Genre";
import Search from './pages/Search';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route path={"/movie/:id"} component={Movie} />
          <Route path={"/rated-movies"} component={MoviesRated} />
          <Route path={"/hot-movies"} component={MoviesNew} />
          <Route path={"/popular-movies"} component={MoviesPopular} />
          <Route path={"/genres"} component={Genres} />
          <Route path={"/genre/:name"} component={Genre} />
          <Route path={"/search"} component={Search} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

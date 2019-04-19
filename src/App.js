import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/MoviePage";
import MoviesRated from "./pages/MoviesRatedPage";
import MoviesPopular from "./pages/MoviesPopularPage";
import MoviesNews from "./pages/MoviesNews";
import Genres from "./pages/GenresPage";
import Genre from "./components/Genres/Genre";
import Search from "./pages/SearchPage";
import { ContainWrapper } from "./layout/wrappers";
import Layout from "./layout/Layout";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Layout>
            <ContainWrapper>
              <Switch>
                <Route exact path={"/"} component={Home} />
                <Route path={"/movie/:id"} component={Movie} />
                <Route path={"/rated-movies"} component={MoviesRated} />
                <Route path={"/hot-movies"} component={MoviesNews} />
                <Route path={"/popular-movies"} component={MoviesPopular} />
                <Route path={"/genres"} component={Genres} />
                <Route path={"/genre/:name"} component={Genre} />
                <Route path={"/search"} component={Search} />
              </Switch>
            </ContainWrapper>
          </Layout>
        </>
      </BrowserRouter>
    );
  }
}

export default App;

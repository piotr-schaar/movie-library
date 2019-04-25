import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import MoviePage from "./pages/MoviePage";
import MoviesRatedPage from "./pages/MoviesRatedPage";
import MoviesPopularPage from "./pages/MoviesPopularPage";
import MoviesNewsPage from "./pages/MoviesNewsPage";
import GenresPage from "./pages/GenresPage";
import Genre from "./components/Genres/Genre";
import SearchPage from "./pages/SearchPage";
import { ContainWrapper } from "./layout/wrappers";
import Layout from "./layout/Layout";

const App = () => (
  <BrowserRouter>
    <>
      <Layout>
        <ContainWrapper>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route path={"/movie/:id"} component={MoviePage} />
            <Route path={"/rated-movies"} component={MoviesRatedPage} />
            <Route path={"/hot-movies"} component={MoviesNewsPage} />
            <Route path={"/popular-movies"} component={MoviesPopularPage} />
            <Route path={"/genres"} component={GenresPage} />
            <Route path={"/genre/:name"} component={Genre} />
            <Route path={"/search"} component={SearchPage} />
          </Switch>
        </ContainWrapper>
      </Layout>
    </>
  </BrowserRouter>
);

export default App;

import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Movie from "./components/movie/Movie";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route path={"/movie/:id"} component={Movie} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

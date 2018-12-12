import React, { Component } from "react";
import Header from "../components/header/Header";
import MoviesNew from "./MoviesNew";
import Layout from '../layout/Layout';
class Home extends Component {
  constructor() {
    super();
    this.state = {
      isHome: true
    };
  }
  render() {
    return (
      <>
        <Layout>
          <Header />
          {/* <SearchForm /> */}
          <MoviesNew isHome={this.state.isHome} />
        </Layout>
      </>
    );
  }
}

export default Home;

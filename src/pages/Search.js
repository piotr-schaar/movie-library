import React, { Component } from 'react';
import Header from "../components/header/Header";
import Layout from '../layout/Layout';
import SearchForm from '../components/search/SearchForm';


class Search extends Component {
    render() {
        return (
            <>
            <Layout>
              <Header />
                <SearchForm ></SearchForm>  
            </Layout>
          </>
        );
    }
}

export default Search;
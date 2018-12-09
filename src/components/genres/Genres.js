import React, { Component } from 'react';
import axios from 'axios';
class Genres extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: true,
          genres: []
        };
      }
      getData() {
        const key = "bd5f28af222edabf18f21f9cf5683cca";
        let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`
        
        axios 
        .get(url)
        .then(res => res.data.results)
        .then(
          result => {
            this.setState({
              isLoaded:true,
              genres: result
            })
          },
          error => {
            this.setState({
              isLoaded: true,
              error
            })
          }
        )
        console.log(this.state.genres)
      }
      componentDidMount(){
          this.getData()
      }
    render() {
        return (
            <div>
                sdsds
            </div>
        );
    }
}

export default Genres;
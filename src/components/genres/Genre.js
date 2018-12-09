import React, { Component } from 'react';

class Genre extends Component {
    render() {
        return (
            <div>
               {this.props.location.param}
            </div>
        );
    }
}

export default Genre;
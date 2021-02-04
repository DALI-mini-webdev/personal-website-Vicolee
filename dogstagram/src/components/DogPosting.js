import React, { Component } from 'react';

class DogPosting extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <p>{this.props.name} {this.props.breed}</p>
                <img src= { this.props.dogURL } alt='Image'/>
            </div>
        );
    }
}

export default DogPosting;
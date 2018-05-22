import React, { Component } from 'react';

class City extends Component {
  render () {
    return (
      <p> {this.props.cities.name} </p>
    );
  }
}

export default City;

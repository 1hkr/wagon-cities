import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions';
import City from './city';


class CityList extends Component {
  componentWillMount() {
    this.props.setCities();
    console.log(this.props.cities);
  }

  render() {
    return (
      <div className="cities">
        <div>
          { this.props.cities.map(city => <City city={city} key={city.name} />)}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);

import React from 'react';
import { connect } from 'react-redux';

const ActiveCity = (props) => {
  if (!props.activeCity.name) {
    let name = 'Paris';
    let address = '16 Villa Gaudelet, 75011 Paris';
    let slug = 'Paris';
  }
  console.log(props.activeCity);

  let name = props.activeCity.name;
  let address = props.activeCity.address;
  let slug = props.activeCity.slug;

  const url = `https://kitt.lewagon.com/placeholder/cities/${slug}`;

  return (
    <div className="active-city">
      <h1>{ name }</h1>
      <h3>{ address }</h3>
      <img src={url} width="100%" alt="city" />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

export default connect(mapStateToProps)(ActiveCity);

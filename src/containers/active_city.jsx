import React from 'react';
import { connect } from 'react-redux';

const ActiveCity = (props) => {
  if (!props.activeCity.name) {
    return (
      <div className="active-city">
        <p>Select a city...</p>
      </div>
    );
  }
  console.log(props.activeCity);

  const name = props.activeCity.name;
  const address = props.activeCity.address;
  const slug = props.activeCity.slug;

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

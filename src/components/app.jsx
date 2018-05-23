import React from 'react';
import CityList from '../containers/city_list';
import ActiveCity from '../containers/active_city';

const App = () => {
  return (
    <div>
      <h1 style={{ marginLeft: 5 }}> Le Wagon offices</h1>
      <div className="app">
        <CityList />
        <ActiveCity />
      </div>
    </div>
  );
};

export default App;

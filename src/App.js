import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/foodbox/FoodBox';

function App() {
  return (
    <div className="App">
      <FoodBox food={foods[1]} />
    </div>
  );
}

export default App;

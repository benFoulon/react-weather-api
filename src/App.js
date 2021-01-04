import React, { Component } from 'react'
import './App.css';
import CurrentWeather from './currentWeather';
import FuturWeather from './FuturWeather';
import SearchForm from './SearchForm';

class App extends Component {

  render(){

    return (
      <div className="App">
        <SearchForm/>
        <CurrentWeather/>
        <FuturWeather/>
      </div>
  );
  }
  
}

export default App;

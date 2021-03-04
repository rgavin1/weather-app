import './App.css';
import NavBar from './Components/NavBar';
import Body from './Components/Body';
import Footer from './Components/Footer';
import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
      input: '',
      location: {},
      current: {},
      forecast: {},
      autoComplete: [],
      searching: false,
      error: null
   };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelected = this.handleSelected.bind(this);
}

fetchLocation(input){
  if(input){
    fetch(`https://api.weatherapi.com/v1/search.json?key=ae1a371112b745cf81e134729212802&q=${input}`)
    .then(res => res.json())
    .then((results) => {
      this.setState({
        autoComplete: results,
        searching: false
      },
      (error) => {
        this.setState({
          searching: true,
          error
        });
      } 
      )
    })
  }
}

fetchForecast(city){
  if(city){
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=ae1a371112b745cf81e134729212802&q=${city}&days=7&aqi=no&alerts=no`)
    .then(res => res.json())
    .then((results) => {
      this.setState({
        location: results.location,
        current: results.current,
        forecast: results.forecast,
        searching: false
      },
      (error) => {
        this.setState({
          searching: true,
          error
        });
      } 
      )
    })
  }

}


handleSelected(event){
  this.setState({
    input: event.target.innerText,
    autoComplete: [],
    searching: false
  })
  const city = event.target.innerText.split(', ');
  this.fetchForecast(city[0]);
}
handleChange(event){
  this.setState({
    input: event.target.value,
    searching: true
  })
  this.fetchLocation(event.target.value);
}
render(){
    return (
        <>
          <NavBar />
          <Body handleChange={this.handleChange} handleSelected={this.handleSelected} input={this.state.input} autoComplete={this.state.autoComplete} location={this.state.location} current={this.state.current} forecast={this.state.forecast} />
          <Footer />
        </>
    );
}
}

export default App;

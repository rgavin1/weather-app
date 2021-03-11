import './App.css';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
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
      error: null,
      images: {}
   };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelected = this.handleSelected.bind(this);
}

fetchImages(){
    fetch(`https://api.unsplash.com/search/photos?query=weather&page=1&per_page=6&client_id=fsS-HSJe94LtOmYuhwgPDCRinjlCVL_PIinhkW-YuJA`)
    .then(res => res.json())
    .then((items) => {
      this.setState({
        images: items.results,
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
  }, this.fetchImages());
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
          <Header handleChange={this.handleChange} handleSelected={this.handleSelected} input={this.state.input} autoComplete={this.state.autoComplete}  />
          <Body location={this.state.location} current={this.state.current} forecast={this.state.forecast} images={this.state.images} />
          <Footer />
        </>
    );
}
}

export default App;

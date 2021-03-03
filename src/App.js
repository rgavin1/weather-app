// import './App.css';
import SearchBox from './Components/SearchBox';
import WeeklyForecast from './Components/WeeklyForecast';
import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
      input: '',
      autoComplete: [],
      searching: false,
      error: null
   };
    this.handleChange = this.handleChange.bind(this);
}

fetchData(input){
  if(input){
    fetch(`https://api.weatherapi.com/v1/search.json?key=&q=${input}`)
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

handleChange(event){
  this.setState({
    input: event.target.value,
    searching: true
  })
  this.fetchData(event.target.value);
}
render(){
    return (
        <>
          <SearchBox handleSubmit={this.handleSubmit} handleChange={this.handleChange} input={this.state.input} autoComplete={this.state.autoComplete} />
          <WeeklyForecast />
        </>
    );
}
}

export default App;

// import './App.css';
import SearchBox from './Containers/SearchBox';
import WeeklyForecast from './Components/WeeklyForecast';
import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { input: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event){

}
handleSubmit(event){
    event.preventDefault();
    alert("App.js");
    // Make a call to the API
}
render(){
    return (
        <>
          <SearchBox handleSubmit={this.handleSubmit} handleChange={this.handleChange} input={this.state.input} />
          <WeeklyForecast />
        </>
    );
}
}

export default App;

import React, { Component } from 'react';

class SearchBox extends Component {
    constructor(props){
        super(props);
        this.state = { input: '' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({ input: event.target.value })
    }
    render(){
        return (
            <>
            <input type="text" value={this.state.input} onChange={this.handleChange} ></input>
            </>
        );
    }
}

export default SearchBox;
import React, { Component } from 'react';

class SearchBox extends Component {
    constructor(props){
        super(props);
        this.state = { input: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({ input: event.target.value })
    }
    handleSubmit(event){
        event.preventDefault();
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.input} onChange={this.handleChange} />
                <input type="submit" value="find" />
            </form>
        );
    }
}

export default SearchBox;
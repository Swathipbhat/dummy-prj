import React, { Component } from 'react';
import NewName from "components/NewName.js";
class newcp extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        names: [],
        loading: true
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({ name: event.target.value });
    }
  
    async handleSubmit(event) {
      event.preventDefault();
      this.setState({
        loading: true,
      })
      await fetch('/addname/' + this.state.name, {
        method: 'GET'
      });
      this.getNames()
    }
  
  
    getNames() {
      fetch('/getnames/')
        .then(response => response.json())
        .then(json => {
          this.setState({
            name: '',
            names: json,
            loading: false
          })
        })
    }
  
    componentDidMount() {
      this.getNames();
    }
  
    render() {
      return (
        <div className="app">
          <header className="app-header">
            <NewName handleChange={this.handleChange} handleSubmit={this.handleSubmit} value={this.state.name} />
            
          </header>
        </div>
      );
    }
  }
  
  export default newcp;
  
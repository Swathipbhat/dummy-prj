import React, { Component } from 'react';
import NewName from "./Newname.js";


class newcp extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email:"",
      password:"",
      loading: true
    };
    

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlepass = this.handlepass.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }
  handlepass(event) {
    this.setState({ pass: event.target.value });
  }


  async handleSubmit(event) {
    event.preventDefault();
    this.setState({
      loading: true,
    })
    await fetch('/addname/' + this.state.name, {
      method: 'GET'
    });
    await fetch('/password/' + this.state.name, {
      method: 'GET'
    });
    this.getNames()
    this.getpass()
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
  getpass() {
    fetch('/getpass/')
      .then(response => response.json())
      .then(json => {
        this.setState({
          password: '',
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
      <div >
          <NewName handleChange={this.handleChange} handleSubmit={this.handleSubmit} value={this.state.name} />
          
      </div>
    );
  }
}

export default newcp;
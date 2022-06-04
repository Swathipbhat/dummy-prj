import React, { Component } from 'react';
import NewName from "./Newname.js";


class newcp extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      customer: {
        name: props.name,
        password: props.password,
        email: props.email
      }
    }
    

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlepasswordChange = this.handlepasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  
  }

  handleNameChange(event) {
    var customer        = this.state.customer;
    customer.name  = event.target.value;

    this.setState({ customer: customer });
  }

  handlepasswordChange(event) {
    var customer      = this.state.customer;
    customer.password = event.target.value;

    this.setState({ customer: customer });
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
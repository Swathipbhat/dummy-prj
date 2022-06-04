import React, { Component } from 'react';
import { white } from 'tailwindcss/colors';

class NewName extends Component {
    render() {
        return (
              <form onSubmit={this.props.handleSubmit}>
                    <input
                        type="text"
                        name="NewName"
                        value={this.props.value}
                        onChange={this.props.handleChange}
                        placeholder="New Name"
                        autoFocus
                        autoComplete='off'
                    />

                    
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                      name="email"
                    />
                  

                 
                    <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Add
                    </button>
                  </div>
                </form>
           
        )
    }
}

export default NewName;
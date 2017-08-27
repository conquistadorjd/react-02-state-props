import React, { Component } from 'react'

import Left from './components/Left';
import Right from './components/Right';

class Layout extends Component {
	constructor(){
		super()

		this.state = { name: "Pravin", location : "Pune"};
		this.handleLocationChange = this.handleLocationChange.bind(this);
	};

	handleNameChange(event, value) {
		console.log( "handle change invoked"+ event.target.value);
		  this.setState({name: event.target.value});
	}

	handleLocationChange(event, value) {
		console.log( "handle change invoked"+ event.target.value);
		  this.setState({location: event.target.value});
	}

	render(){
	return(
	      <div className='row'>	      	
	      	<div className="col">
	      	  Enter Profile Details : <br />
	          <div>Enter Name         : <input onChange={this.handleNameChange.bind(this)} /></div>
	          <div>Enter Location     : <input onChange={this.handleLocationChange} /></div>
	          Name is {this.state.name} and location is {this.state.location}.
	        </div>
	          <Right cust={this.state } />
	      </div>       
	  )
	}
}

export default Layout
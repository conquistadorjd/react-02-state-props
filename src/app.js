import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Footer from './components/Footer';
import Layout from './Layout';
import Header from './components/Header';

class App extends Component {
	render(){
		return(
			<div>
				<Header />
				<div className="row">
					This is main page
				</div>
				<Layout />
				<Footer />
			</div>
			)
	}
}


ReactDOM.render(<App/>,document.getElementById('root'))
import React, { Component } from 'react'

class Right extends Component {
  render(){
    return(
          <div className='col'>
              This is Getting changed in Component named Right <br/>
              Name  : {this.props.cust.name } <br/ >
              Location : {this.props.cust.location } <br/ >
          </div>       
      )
  }
}

export default Right
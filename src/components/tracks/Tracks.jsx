import React, { Component } from 'react'
import { createLogger } from 'vite'
import {Consumer} from '../../Context'
 class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {value=>{
      console.log(value)
      return <h1>Tracks</h1>
        }}
      </Consumer>
    )
  }
}

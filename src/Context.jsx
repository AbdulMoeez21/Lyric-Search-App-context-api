import React, { Component } from 'react'
const Context =React.createContext();

export default class Provider extends Component {
state={
    track_list:[
        {track:{ track_name : 'aabc'}},
        {track:{ track_name : 'adasdas'}}
    ],
    heading: 'Top 10 Tracks'

}

  render() {
    return (
     <Context.Provider value={this.state}>
{this.props.children}
     </Context.Provider>
    )
  }
}


export const Consumer=Context.Consumer;
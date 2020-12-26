import React, { Component } from 'react'
import './App.css'

import From from './From'
import Tab from './Tab'

import { Mobj, State } from './Type'

// interface Mobj {
//   age: number
//   id: number
//   name: string
// }

// interface State {
//   list: Mobj[]
// }

class App extends Component {

  state: State = {
    list: [
      { age: 22, id: 1, name: '周星驰' },
      { age: 23, id: 2, name: '王祖贤' },
      { age: 21, id: 3, name: '关之琳' },
      { age: 24, id: 4, name: '刘德华' },
      { age: 26, id: 5, name: '刘嘉玲' }
    ]
  }

  removeList ( id: number ) {
    const list = this.state.list.filter( v => v.id !== id )
    console.log( 'list', list )
    this.setState( {
      list
    } )
  }

  addList ( lsit: Mobj ) {
    lsit.id = Date.now()
    this.setState( {
      list: [ lsit, ...this.state.list ]
    } )
  }

  render () {
    return (
      <div className="App" >
        <Tab list={ this.state.list } click={ this.removeList.bind( this ) } />
        <From click={ this.addList.bind( this ) } />
      </div>
    )
  }
}

export default App

import React, { Component } from 'react'

import { Mobj, OneProps } from "../Type"

// interface Mobj {
//   age: number
//   id: number
//   name: string
// }

// interface OneProps {
//   click: (lsit: Mobj) => void
// }

class From extends Component<OneProps> {
  state: Mobj = {
    name: '',
    age: 0,
    id: 0
  }

  addList = ( event: any ) => {
    let { name, value } = event.target
    if ( name === 'age' ) {
      value = +value
    }
    console.log( 'event.target', event.target.name, event.target.value )
    this.setState( {
      [ name ]: value
    } )
  }

  submitForm = () => {
    const { name, age } = this.state
    console.log( 'name', name )
    console.log( 'age', age )
    if ( !name || !age ) {
      console.log( '提示没有输入内容' )
      return
    }
    this.props.click( this.state )
    this.setState( {
      name: '',
      age: '',
      id: 0
    } )
  }

  render () {
    return (
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" value={ this.state.name } onChange={ this.addList } />
        <label htmlFor="age">Age</label>
        <input type="number" name="age" id="age" value={ this.state.age } onChange={ this.addList } />
        <input type="button" value='Submit' onClick={ this.submitForm } />
      </form>
    )
  }
}

export default From
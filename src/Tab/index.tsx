import React, { Component } from 'react'
import Theader from './Theader'
import Tbody from './Tbody'

import { Props } from '../Type'

// interface Props {
//   list: { age: number; id: number; name: string }[]
//   click: (id: number) => void
// }

class Tab extends Component<Props> {

  render () {
    return (
      <div>
        <table>
          <Theader />
          <Tbody list={this.props.list} click={this.props.click} />
        </table>
      </div>
    )
  }
}

export default Tab
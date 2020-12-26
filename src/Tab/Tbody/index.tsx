import React from 'react'

import { Props } from '../../Type'

// interface Props {
//   list: { age: number; id: number; name: string }[]
//   click: (id: number) => void
// }

export default function Tbody ( props: Props ) {
  const row = props.list.map( v => {
    return (
      <tr key={ v.id }>
        <td>{ v.name }</td>
        <td>{ v.age }</td>
        <td>
          <button onClick={ () => { props.click( v.id ) } }>
            Delete
					</button>
        </td>
      </tr>
    )
  } )
  return <tbody>{ row }</tbody>
}

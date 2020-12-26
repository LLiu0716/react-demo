export interface Mobj {
  age: number
  id: number
  name: string
}

export interface State {
  list: Mobj[]
}

export interface Props {
  list: Mobj[]
  click: ( id: number ) => void
}

export interface OneProps {
  click: ( lsit: Mobj ) => void
}
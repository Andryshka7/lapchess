import { Room } from 'pages/universe/modules/lobby/types/Room'

interface InitialState {
    loading: boolean
    error: boolean
    thisRoom: null | string
    rooms: Room[]
}

const initialState: InitialState = {
    loading: true,
    error: false,
    thisRoom: null,
    rooms: []
}

export default initialState

import { Room } from 'pages/universe/modules/lobby/types/Room'

interface InitialState {
    loading: boolean
    error: boolean
    rooms: Room[]
}

const initialState: InitialState = {
    loading: true,
    error: false,
    rooms: []
}

export default initialState

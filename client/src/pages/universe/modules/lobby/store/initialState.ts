import { Room } from 'pages/universe/modules/lobby/types/Room'

interface InitialState {
    loading: boolean
    error: boolean
    myRoomId: null | string
    rooms: Room[]
}

const initialState: InitialState = {
    loading: true,
    error: false,
    myRoomId: null,
    rooms: []
}

export default initialState

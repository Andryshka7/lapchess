interface Chess {
    id: null | string
    chessBoard: null
    chat: []
    color: null | string
    time: null | string
}

const initialState: Chess = {
    id: null,
    chessBoard: null,
    chat: [],
    color: null,
    time: ''
}

export default initialState

import { Castling, ChessBoard } from '../types/ChessBoard'

const checkForCasling = (state: ChessBoard, [x1, y1]: number[], name: string) => {
    const [color, piece] = name

    if (piece === 'K') {
        state.castling = state.castling.replace(color === 'w' ? 'K' : 'k', '') as Castling
        state.castling = state.castling.replace(color === 'w' ? 'Q' : 'q', '') as Castling
    }

    if (x1 === 0 && piece === 'R')
        state.castling = state.castling.replace(color === 'w' ? 'Q' : 'q', '') as Castling
    else if (x1 === 7 && piece === 'R')
        state.castling = state.castling.replace(color === 'w' ? 'K' : 'k', '') as Castling
}

export default checkForCasling

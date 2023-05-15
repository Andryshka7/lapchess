import { Castling, ChessBoard } from '../../types/ChessBoard'

const checkForCasling = (
    state: ChessBoard,
    [x1, y1]: number[],
    [x2, y2]: number[],
    name: string
) => {
    const [color, piece] = name

    const leftRookMoved = x1 === 0 && piece === 'R'
    const leftRookDied = x2 === 0 && state.gameField[y2][x2][1] === 'R'

    const rightRookMoved = x1 === 7 && piece === 'R'
    const rightRookDied = x2 === 7 && state.gameField[y2][x2][1] === 'R'

    if (piece === 'K') {
        state.castling = state.castling.replace(color === 'w' ? 'K' : 'k', '') as Castling
        state.castling = state.castling.replace(color === 'w' ? 'Q' : 'q', '') as Castling
    }

    if (leftRookMoved)
        state.castling = state.castling.replace(color === 'w' ? 'Q' : 'q', '') as Castling
    else if (rightRookMoved)
        state.castling = state.castling.replace(color === 'w' ? 'K' : 'k', '') as Castling

    if (leftRookDied)
        state.castling = state.castling.replace(color === 'b' ? 'Q' : 'q', '') as Castling
    else if (rightRookDied)
        state.castling = state.castling.replace(color === 'b' ? 'K' : 'k', '') as Castling
}

export default checkForCasling

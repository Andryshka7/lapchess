import { ChessBoard } from 'types'

const checkForCasling = (chessBoard: ChessBoard, [x1, y1]: number[], [x2, y2]: number[]) => {
    const [color, piece] = chessBoard.gameField[y1][x1]

    const leftRookMoved = x1 === 0 && piece === 'R'
    const leftRookDied = x2 === 0 && chessBoard.gameField[y2][x2][1] === 'R'

    const rightRookMoved = x1 === 7 && piece === 'R'
    const rightRookDied = x2 === 7 && chessBoard.gameField[y2][x2][1] === 'R'

    if (piece === 'K') {
        chessBoard.castling = chessBoard.castling.replace(color === 'w' ? 'K' : 'k', '')
        chessBoard.castling = chessBoard.castling.replace(color === 'w' ? 'Q' : 'q', '')
    }

    if (leftRookMoved)
        chessBoard.castling = chessBoard.castling.replace(color === 'w' ? 'Q' : 'q', '')
    else if (rightRookMoved)
        chessBoard.castling = chessBoard.castling.replace(color === 'w' ? 'K' : 'k', '')

    if (leftRookDied)
        chessBoard.castling = chessBoard.castling.replace(color === 'b' ? 'Q' : 'q', '')
    else if (rightRookDied)
        chessBoard.castling = chessBoard.castling.replace(color === 'b' ? 'K' : 'k', '')
}

export default checkForCasling

import { ChessBoard } from '../../../types/ChessBoard'

const checkForEnPassant = (chessBoard: ChessBoard, [x1, y1]: number[], [x2, y2]: number[]) => {
    const { turn, gameField } = chessBoard

    const [color, piece] = chessBoard.gameField[y1][x1]

    const isPawn = piece === 'P'
    const madeTwoSteps = Math.abs(y2 - y1) === 2
    const hasPawnsOnSide =
        (x2 < 7 && gameField[y2][x2 + 1].slice(0, 2) === (turn === 'w' ? 'b' : 'w') + 'P') ||
        (x2 > 0 && gameField[y2][x2 - 1].slice(0, 2) === (turn === 'w' ? 'b' : 'w') + 'P')

    chessBoard.enpassing = isPawn && madeTwoSteps && hasPawnsOnSide ? { x: x2, y: y2 } : null
}

export default checkForEnPassant

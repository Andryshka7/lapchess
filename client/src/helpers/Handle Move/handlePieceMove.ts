import { notateMove } from '..'
import { checkForCasling, checkForEnPassant } from '../Checkers'
import { ChessBoard } from 'types'

const handlePieceMove = (chessBoard: ChessBoard, [x2, y2]: number[]) => {
    const { selected, gameField } = chessBoard
    const { x: x1, y: y1 } = selected as { x: number; y: number }

    const name = gameField[y1][x1]
    const eaten = gameField[y2][x2]

    checkForEnPassant(chessBoard, [x1, y1], [x2, y2])
    checkForCasling(chessBoard, [x1, y1], [x2, y2])

    gameField[y2][x2] = name
    gameField[y1][x1] = '0'

    const notation = notateMove({ name, eaten, gameField }, [x1, y1], [x2, y2])
    chessBoard.chessMoves.push(notation)
}

export default handlePieceMove

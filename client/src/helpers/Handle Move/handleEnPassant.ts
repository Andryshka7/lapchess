import { notateMove } from '..'
import { ChessBoard, Coordinates } from 'types'

const handleEnPassant = (chessBoard: ChessBoard, [x2, y2]: number[]) => {
    const { selected, gameField } = chessBoard
    const { x: x1, y: y1 } = selected as Coordinates
    const name = gameField[y1][x1]
    const eaten = gameField[y1][x2]

    gameField[y2][x2] = name
    gameField[y1][x1] = '0'
    gameField[y1][x2] = '0'

    const notation = notateMove({ name, eaten, gameField }, [x1, y1], [x2, y2])
    chessBoard.chessMoves.push(notation)

    chessBoard.sounds.capture = true
}

export default handleEnPassant

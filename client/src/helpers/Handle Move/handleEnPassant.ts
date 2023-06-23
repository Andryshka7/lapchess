import { notateMove } from '..'
import { ChessBoard } from 'types'
import { playCaptureSound } from 'helpers/tools/Play sounds'

const handleEnPassant = (chessBoard: ChessBoard, [x1, y1]: number[], [x2, y2]: number[]) => {
    const { gameField } = chessBoard

    const name = gameField[y1][x1]
    const eaten = gameField[y1][x2]

    gameField[y2][x2] = name
    gameField[y1][x1] = '0'
    gameField[y1][x2] = '0'

    chessBoard.enpassing = null

    const notation = notateMove({ name, eaten, gameField }, [x1, y1], [x2, y2])
    chessBoard.chessMoves.push(notation)

    playCaptureSound()
}

export default handleEnPassant

import { Chess } from './../../../types/InitialState'
import { checkForCasling, checkForEnPassant, checkForKingDanger, notateMove } from '..'
import passToOpponent from '../passToOpponent'

const handlePieceMove = (state: Chess, [x2, y2]: number[]) => {
    const { chessBoard } = state

    const { turn, selected, gameField } = chessBoard
    const { x: x1, y: y1 } = selected as { x: number; y: number }

    const name = gameField[y1][x1]
    const eaten = gameField[y2][x2]

    checkForEnPassant(chessBoard, [x1, y1], [x2, y2])
    checkForCasling(chessBoard, [x1, y1], [x2, y2])

    gameField[y2][x2] = name
    gameField[y1][x1] = '0'

    const notation = notateMove({ name, eaten, gameField }, [x1, y1], [x2, y2])

    state.position += 1
    chessBoard.turn = turn === 'w' ? 'b' : 'w'

    chessBoard.chessMoves.push(notation)
    checkForKingDanger(chessBoard)
    state.positionHistory.push(chessBoard)

    passToOpponent(state)
}

export default handlePieceMove

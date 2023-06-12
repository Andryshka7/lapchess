import { checkForKingDanger, notateMove } from '..'
import { Chess } from '../../../types/InitialState'
import addToPositionHistory from '../Move cleanup/addToPositionHistory'
import passToOpponent from '../Move cleanup/passToOpponent'

const handleEnPassant = (state: Chess, [x2, y2]: number[]) => {
    const { chessBoard, positionHistory } = state

    const { turn, selected, gameField, chessMoves } = chessBoard
    const { x: x1, y: y1 } = selected as { x: number; y: number }

    const name = gameField[y1][x1]
    const eaten = gameField[y1][x2]

    gameField[y2][x2] = name
    gameField[y1][x1] = '0'
    gameField[y1][x2] = '0'

    const notation = notateMove({ name, eaten, gameField }, [x1, y1], [x2, y2])

    state.position += 1
    chessBoard.turn = turn === 'w' ? 'b' : 'w'

    chessBoard.chessMoves.push(notation)
    checkForKingDanger(chessBoard)

    addToPositionHistory(state)
    passToOpponent(state)
}

export default handleEnPassant

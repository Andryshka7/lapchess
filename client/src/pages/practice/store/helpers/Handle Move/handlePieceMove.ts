import { checkForKingDanger } from '..'
import { ChessBoard } from '../../types/ChessBoard'
import notateMove from '../notateMove'

const handlePieceMove = (state: ChessBoard, x2: number, y2: number) => {
    const { selected, gameField } = state
    const { x: x1, y: y1 } = selected as { x: number; y: number }

    const name = gameField[y1][x1]
    const eaten = gameField[y2][x2]

    gameField[y2][x2] = name
    gameField[y1][x1] = '0'

    checkForKingDanger(state)

    state.chessMoves.push(notateMove({ name, eaten, gameField }, [x1, y1], [x2, y2]))
    state.turn = state.turn === 'w' ? 'b' : 'w'
}

export default handlePieceMove

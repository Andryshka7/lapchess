import { checkForKingDanger, notateMove } from '..'
import { PracticeState } from '../../initialState/initialState'

const handleEnPassant = (state: PracticeState, [x2, y2]: number[]) => {
    const { chessBoard, chessBoardStates } = state

    const { turn, selected, gameField, chessMoves } = chessBoard
    const { x: x1, y: y1 } = selected as { x: number; y: number }

    const name = gameField[y1][x1]
    const eaten = gameField[y1][x2]

    gameField[y2][x2] = name
    gameField[y1][x1] = '0'
    gameField[y1][x2] = '0'

    const notation = notateMove({ name, eaten, gameField }, [x1, y1], [x2, y2])

    state.current += 1
    chessBoard.turn = turn === 'w' ? 'b' : 'w'

    chessBoard.chessMoves = [...chessMoves.slice(0, state.current - 1), notation]
    checkForKingDanger(chessBoard)
    state.chessBoardStates = [...chessBoardStates.slice(0, state.current), chessBoard]
}

export default handleEnPassant

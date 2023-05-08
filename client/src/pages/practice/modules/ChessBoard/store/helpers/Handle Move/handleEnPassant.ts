import { checkForKingDanger } from '..'
import { ChessBoard } from '../../types/ChessBoard'

const handleEnPassant = (state: ChessBoard, x2: number, y2: number) => {
    const { selected, gameField } = state

    const { x: x1, y: y1 } = selected as { x: number; y: number }

    const name = gameField[y1][x1]
    const eaten = gameField[y1][x2]

    gameField[y2][x2] = name
    gameField[y1][x1] = '0'
    gameField[y1][x2] = '0'

    state.rerenderQueue = [
        { from: { x: x1, y: y1, name }, to: { x: x2, y: y2, name } },
        { from: { x: x2, y: y1, name: eaten }, to: { x: x2, y: y1, name: '0' } }
    ]

    checkForKingDanger(state)
    state.turn = state.turn === 'w' ? 'b' : 'w'
}

export default handleEnPassant

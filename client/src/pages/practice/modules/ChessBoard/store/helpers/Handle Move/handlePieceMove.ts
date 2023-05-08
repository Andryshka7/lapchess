import { checkForKingDanger } from '..'
import { ChessBoard } from '../../types/ChessBoard'

const handlePieceMove = (state: ChessBoard, x2: number, y2: number) => {
    const { selected, gameField } = state
    const { x: x1, y: y1 } = selected as { x: number; y: number }

    const name = gameField[y1][x1]
    const eatenPiece = gameField[y2][x2]

    gameField[y2][x2] = name
    gameField[y1][x1] = '0'

    state.rerenderQueue = [{ from: { x: x1, y: y1, name }, to: { x: x2, y: y2, name } }]

    if (eatenPiece !== '0') {
        state.rerenderQueue.push({
            from: { x: x2, y: y2, name: eatenPiece },
            to: { x: x2, y: y2, name: '0' }
        })
    }

    checkForKingDanger(state)
    state.turn = state.turn === 'w' ? 'b' : 'w'
}

export default handlePieceMove

import { ChessBoard } from '../../types/ChessBoard'

const handlePawnPromotion = (state: ChessBoard, [x1, y1]: number[], [x2, y2]: number[]) => {
    const name = state.gameField[y1][x1]
    const eaten = state.gameField[y2][x2]

    state.promoted = { x1, y1, x2, y2, name, eaten }
    state.gameField[y1][x1] = '0'
    state.gameField[y2][x2] = name
    state.rerenderQueue = [
        { from: { x: x1, y: y1, name }, to: { x: x2, y: y2, name } },
        {
            from: { x: x2, y: y2, name: eaten },
            to: { x: x2, y: y2, name: '0' }
        }
    ]
}

export default handlePawnPromotion

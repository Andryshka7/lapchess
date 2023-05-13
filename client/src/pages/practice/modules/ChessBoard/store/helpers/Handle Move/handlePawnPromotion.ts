import { ChessBoard } from '../../types/ChessBoard'

const handlePawnPromotion = (state: ChessBoard, [x1, y1]: number[], [x2, y2]: number[]) => {
    const name = state.gameField[y1][x1]
    const eaten = state.gameField[y2][x2]

    state.promoted = { x1, y1, x2, y2, name, eaten }
    state.gameField[y1][x1] = '0'
    state.gameField[y2][x2] = name
}

export default handlePawnPromotion

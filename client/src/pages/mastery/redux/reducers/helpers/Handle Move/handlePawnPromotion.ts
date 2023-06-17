import { Mastery } from 'pages/mastery/redux/types/Mastery'

const handlePawnPromotion = (state: Mastery, [x1, y1]: number[], [x2, y2]: number[]) => {
    const { chessBoard } = state

    const name = chessBoard.gameField[y1][x1]
    const eaten = chessBoard.gameField[y2][x2]

    chessBoard.promoted = { x1, y1, x2, y2, name, eaten }
    chessBoard.gameField[y1][x1] = '0'
    chessBoard.gameField[y2][x2] = name
}

export default handlePawnPromotion

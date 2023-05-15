import { ChessBoard } from '../../types/ChessBoard'

const checkForEnPassant = (state: ChessBoard, x2: number, y2: number) => {
    const { turn, selected, gameField } = state

    if (selected) {
        const { x: x1, y: y1 } = selected
        const piece = state.gameField[y1][x1]

        const isPawn = piece[1] === 'P'
        const madeTwoSteps = Math.abs(y2 - y1) === 2
        const hasPawnsOnSide =
            (x2 < 7 && gameField[y2][x2 + 1].slice(0, 2) === (turn === 'w' ? 'b' : 'w') + 'P') ||
            (x2 > 0 && gameField[y2][x2 - 1].slice(0, 2) === (turn === 'w' ? 'b' : 'w') + 'P')

        state.enpassing = isPawn && madeTwoSteps && hasPawnsOnSide ? { x: x2, y: y2 } : null
    }
}

export default checkForEnPassant

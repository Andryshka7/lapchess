import { ChessBoard } from '../../types/ChessBoard'

const handlePieceMove = (chessBoard: ChessBoard, x2: number, y2: number) => {
    const { selected, gameField } = chessBoard
    if (selected) {
        const { x: x1, y: y1 } = selected
        const piece = gameField[y1][x1]
        const eatenPiece = gameField[y2][x2]
        
        gameField[y2][x2] = gameField[y1][x1]
        gameField[y1][x1] = '0'

        chessBoard.lastMoves = [
            { from: { name: piece, x: x1, y: y1 }, to: { name: piece, x: x2, y: y2 } }
        ]
        if (eatenPiece !== '0') {
            chessBoard.lastMoves.push({ from: { name: eatenPiece, x: x2, y: y2 }, to: null })
        }
    }
}

export default handlePieceMove

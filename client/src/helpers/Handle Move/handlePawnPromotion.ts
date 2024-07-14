import { playCaptureSound, playMoveSound } from 'helpers/tools/Play sounds'
import { ChessBoard } from 'types'

const handlePawnPromotion = (chessBoard: ChessBoard, [x1, y1]: number[], [x2, y2]: number[]) => {
	const name = chessBoard.gameField[y1][x1]
	const eaten = chessBoard.gameField[y2][x2]

	chessBoard.promoted = { x1, y1, x2, y2, name, eaten }
	chessBoard.gameField[y1][x1] = '0'
	chessBoard.gameField[y2][x2] = name

	eaten !== '0' ? playCaptureSound() : playMoveSound()
}

export default handlePawnPromotion

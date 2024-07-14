import { playCaptureSound, playMoveSound } from 'helpers/tools/Play sounds'
import { ChessBoard } from 'types'

import { notateMove } from '..'
import { checkForCasling, checkForEnPassant } from '../Checkers'

const handlePieceMove = (chessBoard: ChessBoard, [x1, y1]: number[], [x2, y2]: number[]) => {
	const { gameField } = chessBoard

	const name = gameField[y1][x1]
	const eaten = gameField[y2][x2]

	checkForEnPassant(chessBoard, [x1, y1], [x2, y2])
	checkForCasling(chessBoard, [x1, y1], [x2, y2])

	gameField[y2][x2] = name
	gameField[y1][x1] = '0'

	const notation = notateMove({ name, eaten, gameField }, [x1, y1], [x2, y2])
	chessBoard.chessMoves.push(notation)

	eaten !== '0' ? playCaptureSound() : playMoveSound()
}

export default handlePieceMove

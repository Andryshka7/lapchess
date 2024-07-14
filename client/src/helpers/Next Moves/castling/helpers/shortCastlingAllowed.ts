import { opposite } from 'helpers'
import getCellAttackers from 'helpers/Get Cell Attackers'
import { ChessBoard } from 'types'

const shortCaslingAllowed = ([_, y]: number[], chessBoard: ChessBoard) => {
	const {
		turn,
		gameField,
		castling,
		gameStatus: { check }
	} = chessBoard

	const castlingIsAllowed = !check && castling.includes(turn === 'w' ? 'K' : 'k')

	const roadIsEmpty = gameField[y][5] === '0' && gameField[y][6] === '0'

	const roadIsFreeFromChecks =
		!getCellAttackers([5, y], gameField, opposite(turn)).length &&
		!getCellAttackers([6, y], gameField, opposite(turn)).length

	return castlingIsAllowed && roadIsEmpty && roadIsFreeFromChecks
}

export default shortCaslingAllowed

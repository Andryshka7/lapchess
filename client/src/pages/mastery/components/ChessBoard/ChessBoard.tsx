import { Cells, CheckStatus, NextMoves, Pieces, Promotion } from './components'

const ChessBoard = () => (
	<div className="relative m-auto aspect-square w-full overflow-hidden rounded-lg sm:w-[620px]">
		<Cells />
		<Pieces />
		<NextMoves />
		<CheckStatus />
		<Promotion />
	</div>
)

export default ChessBoard

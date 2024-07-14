import cancelPromotion from './mutators/cancelPromotion'
import clearField from './mutators/clearField'
import handleMove from './mutators/handleMove'
import selectPiece from './mutators/selectPiece'
import switchPosition from './mutators/switchPosition'
import transformPawn from './mutators/transformPawn'
import updateChessBoard from './mutators/updateChessBoard'

export default {
	selectPiece,
	clearField,
	handleMove,
	cancelPromotion,
	transformPawn,
	updateChessBoard,
	switchPosition
}

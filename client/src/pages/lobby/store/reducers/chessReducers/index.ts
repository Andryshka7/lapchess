import selectPiece from './adjusters/selectPiece'
import clearField from './adjusters/clearField'
import handleMove from './adjusters/handleMove'
import transformPawn from './adjusters/transformPawn'
import switchPosition from './adjusters/switchPosition'
import cancelPromotion from './adjusters/cancelPromotion'
import updateChessBoard from './adjusters/updateChessBoard'

export default {
    selectPiece,
    clearField,
    handleMove,
    cancelPromotion,
    transformPawn,
    updateChessBoard,
    switchPosition
}

import selectPiece from './mutators/selectPiece'
import clearField from './mutators/clearField'
import handleMove from './mutators/handleMove'
import transformPawn from './mutators/transformPawn'
import switchPosition from './mutators/switchPosition'
import cancelPromotion from './mutators/cancelPromotion'
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

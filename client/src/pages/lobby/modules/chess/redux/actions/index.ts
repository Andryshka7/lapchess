import chessSlice from '../chessSlice'

export { default as fetchGame } from './fecthGame'

export const {
    updateGame,
    quitGame,

    selectPiece,
    clearField,
    handleMove,
    cancelPromotion,
    transformPawn,
    switchPosition,

    updateGameConfig,
    setOpponentAgreed,
    setOwnerAgreed,
    setOpponentLeft,
    restartGame,
    playerResigned,
    resetChess,

    setOpponentSent,
    setOwnerSent,
    acceptDraw
} = chessSlice.actions

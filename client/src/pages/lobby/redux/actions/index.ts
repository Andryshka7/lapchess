import lobbySlice from '../lobbySlice.ts'

export { default as fetchLobbyData } from './fetchLobbyData'

export const {
    initializeGame,
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
    acceptDraw,

    addRoom,
    removeRoom
} = lobbySlice.actions

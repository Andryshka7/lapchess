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

    updateGameId,
    setOpponentAgreed,
    setOwnerAgreed,
    setOpponentLeft,
    restartGame,
    playerResigned,

    addRoom,
    removeRoom
} = lobbySlice.actions

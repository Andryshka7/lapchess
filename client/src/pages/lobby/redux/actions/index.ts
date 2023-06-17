import lobbySlice from '../lobbySlice'

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

    updateChessBoard,
    updateGameId,
    setOpponentAgreed,
    setOwnerAgreed,
    setOpponentLeft,
    restartGame,
    playerResigned,

    addRoom,
    removeRoom
} = lobbySlice.actions

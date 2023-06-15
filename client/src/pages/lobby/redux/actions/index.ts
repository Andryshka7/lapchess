import lobbySlice from '../lobbySlice'

export { default as fetchLobbyData } from './fetchLobbyData'

export const {
    initializeGame,

    selectPiece,
    clearField,
    handleMove,
    cancelPromotion,
    transformPawn,
    updateChessBoard,
    switchPosition,

    addRoom,
    removeRoom,
    updateGameId
} = lobbySlice.actions

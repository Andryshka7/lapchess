import { createSelector } from '@reduxjs/toolkit'
import { RootState, useAppSelector } from 'redux/store'

import { Error, Loader } from './components'
import { Chess, Rooms } from './modules'

const loadingSelector = createSelector(
	[(store: RootState) => store.rooms.loading, (store: RootState) => store.chess.status.loading],
	(chessLoading, roomsLoading) => chessLoading || roomsLoading
)
const errorSelector = createSelector(
	[(store: RootState) => store.rooms.error, (store: RootState) => store.chess.status.error],
	(chessError, roomsError) => chessError || roomsError
)

const Lobby = () => {
	const loading = useAppSelector(loadingSelector)
	const error = useAppSelector(errorSelector)
	const isActive = useAppSelector((store) => store.chess.status.isActive)

	if (loading) return <Loader />
	if (error) return <Error />

	return isActive ? <Chess /> : <Rooms />
}

export default Lobby

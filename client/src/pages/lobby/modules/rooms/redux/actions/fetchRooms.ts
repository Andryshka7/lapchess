import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchRoomsQuery } from 'api/rooms'
import { RootState } from 'redux/store'
import { Room } from 'types'

const fetchRooms = createAsyncThunk<Room[], void, { state: RootState }>(
	'rooms/fetchRooms',
	async () => {
		const rooms = await fetchRoomsQuery()

		return rooms
	}
)

export default fetchRooms

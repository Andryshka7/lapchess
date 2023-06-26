import roomsSlice from '../roomsSlice.ts'

export { default as fetchRooms } from './fetchRooms'

export const { addRoom, removeRoom } = roomsSlice.actions

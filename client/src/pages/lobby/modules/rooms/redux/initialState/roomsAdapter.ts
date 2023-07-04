import { createEntityAdapter } from '@reduxjs/toolkit'
import { Room } from 'types'

const roomsAdapter = createEntityAdapter<Room>({
    selectId: (entity) => entity._id
})

export default roomsAdapter

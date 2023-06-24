import { Player } from 'types'

interface Room {
    user: Player
    selectedColor: string
    actualColor: string
    time: string
    _id: string
}

export default Room

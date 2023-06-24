import { Room } from 'types'
import { Chess } from './Chess'

export interface Lobby {
    loading: boolean
    error: boolean

    gameId: null | string

    rooms: Room[]
    chess: Chess
}

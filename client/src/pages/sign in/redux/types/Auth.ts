import { Player } from 'types'

export interface Auth {
	loading: boolean
	user: Player
	token: null | string
}

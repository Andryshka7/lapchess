import axios from 'axios'
import { useAppSelector } from 'redux/store'
import chessBoard from '../../../../../../chess/store/initialState/chessBoard/chessBoard'
import { Room } from 'pages/universe/modules/lobby/types/Room'
import getPlayers from './helpers/getPlayers'
import { useDispatch } from 'react-redux'
import { initializeGame } from 'pages/universe/modules/chess/store/chessSlice'
import getColor from './helpers/getColor'

const SERVER_URL = import.meta.env.VITE_SERVER_URL

const useStartGame = () => {
    const dispatch = useDispatch()
    const guest = useAppSelector((store) => store.auth.user)

    return async (room: Room) => {
        const color = getColor(room.color)
        const time = room.time
        const [white, black] = getPlayers(room.color, room.user, guest)

        const payload = {
            white,
            black,
            color,
            fromRoom: room._id,
            chessBoard: JSON.stringify(chessBoard)
        }
        // const gameID = await axios.post(`${SERVER_URL}/chessGames`, payload)
        dispatch(initializeGame({ color, white, black, time }))
    }
}

export default useStartGame

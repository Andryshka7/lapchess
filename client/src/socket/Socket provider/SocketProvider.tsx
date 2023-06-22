import { ReactNode } from 'react'
import useGameHandlers from './handlers/game handlers'
import useRoomHandlers from './handlers/roomHandlers'

interface SocketProviderProps {
    children: ReactNode
}

const SocketProvider = ({ children }: SocketProviderProps) => {
    useGameHandlers()
    useRoomHandlers()

    return <>{children}</>
}

export default SocketProvider

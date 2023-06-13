import { switchPosition } from 'pages/mastery/store/actions'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/store'

const useBindArrows = () => {
    const dispatch = useAppDispatch()
    const { position } = useAppSelector((store) => store.mastery)

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'ArrowRight') dispatch(switchPosition(position + 1))
        else if (e.key === 'ArrowLeft') dispatch(switchPosition(position - 1))
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [position])
}

export default useBindArrows

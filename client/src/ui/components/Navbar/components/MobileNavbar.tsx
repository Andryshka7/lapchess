import { Dispatch, SetStateAction, useEffect } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import { Transition } from '@headlessui/react'
import Portal from 'ui/Portal'
import { useAppDispatch, useAppSelector } from 'redux/store'
import { logout } from 'pages/sign in/redux/actions'
import { resetChess } from 'pages/lobby/modules/chess/redux/actions'
import socket from 'socket'
import { useShowAlert } from 'ui/components/Alert/hooks'

interface Props {
    showMobileNavbar: boolean
    setShowMobileNavbar: Dispatch<SetStateAction<boolean>>
}

const MobileNavbar = ({ showMobileNavbar, setShowMobileNavbar }: Props) => {
    const dispatch = useAppDispatch()
    const user = useAppSelector((store) => store.auth.user)
    const gameId = useAppSelector((store) => store.chess.gameId)
    const alert = useShowAlert()

    useEffect(() => {
        if (showMobileNavbar) {
            document.body.classList.add('overflow-hidden')
            return () => document.body.classList.remove('overflow-hidden')
        }
    }, [showMobileNavbar])

    return (
        <Portal>
            <Transition
                show={showMobileNavbar}
                className='absolute left-0 top-0 z-[9999] flex h-full w-full flex-col items-center justify-center gap-5 bg-neutral-700 transition duration-200'
                enterFrom='opacity-0 -translate-y-1/2'
                leaveTo='opacity-0 -translate-y-1/2'
            >
                <NavLink
                    to='/'
                    onClick={() => setShowMobileNavbar(false)}
                    className='text-3xl font-semibold'
                >
                    Lobby
                </NavLink>
                <NavLink
                    to='/mastery'
                    onClick={() => setShowMobileNavbar(false)}
                    className='text-3xl font-semibold'
                >
                    Mastery
                </NavLink>
                {user ? (
                    <button
                        className='text-3xl font-semibold'
                        onClick={() => {
                            setShowMobileNavbar(false)
                            dispatch(logout())
                            dispatch(resetChess())
                            alert('Successfully logged out', 'success')
                            socket.emit('LEAVE_ROOM', gameId)
                        }}
                    >
                        Logout
                    </button>
                ) : (
                    <NavLink
                        to='sign-in'
                        onClick={() => setShowMobileNavbar(false)}
                        className='text-3xl font-semibold'
                    >
                        Sign In
                    </NavLink>
                )}
                <AiOutlineCloseCircle
                    size={70}
                    className='mt-5'
                    onClick={() => setShowMobileNavbar(false)}
                />
            </Transition>
        </Portal>
    )
}

export default MobileNavbar

import { useState } from 'react'
import { BiMessageSquareAdd } from 'react-icons/bi'
import { useAppSelector } from 'redux/store'
import Portal from 'ui/Portal'

import Modal from './modal/Modal'

const CreateRoom = () => {
	const gameId = useAppSelector((store) => store.chess.gameId)

	const [isOpen, setIsOpen] = useState(false)

	const openModal = () => setIsOpen(true)
	const hideModal = () => setIsOpen(false)

	return (
		<>
			{isOpen && (
				<Portal>
					<Modal hideModal={hideModal} />
				</Portal>
			)}
			<div
				className={`mx-auto mb-0.5 mt-3 flex h-[65px] w-[260px] cursor-pointer items-center justify-between rounded-lg bg-black bg-opacity-10 px-[30px] transition duration-200 hover:scale-105 ${
					gameId ? 'pointer-events-none opacity-70' : ''
				}`}
				onClick={openModal}
			>
				<BiMessageSquareAdd className="text-green-600" size={45} />
				<h2 className="text-2xl font-medium">Create game</h2>
			</div>
		</>
	)
}

export default CreateRoom

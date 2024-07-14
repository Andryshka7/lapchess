import masteryIcon from 'assets/images/mastery.png'
import { useEffect, useRef } from 'react'
import { useAppSelector } from 'redux/store'

import { Indexes, Moves } from './components'
import useBindArrows from './hooks/useBindArrows'

const ChessMoves = () => {
	const chessMoves = useAppSelector((store) => store.mastery.chessBoard.chessMoves)
	const ref = useRef<HTMLDivElement | null>(null)

	useBindArrows()

	useEffect(() => {
		if (ref.current) ref.current.scrollTop = ref.current.scrollHeight
	}, [chessMoves])

	return (
		<div className="mx-auto h-[620px] overflow-hidden rounded-lg bg-black bg-opacity-5 sm:w-[620px] lg:w-[300px]">
			<div className="hidden h-[40px] items-center lg:flex">
				<img src={masteryIcon} className="ml-3 mr-2 h-6" />
				<h2 className="text text-lg font-semibold">Practice</h2>
			</div>

			<div
				className="scrollbar-thin mt-2 flex h-[580px] overflow-hidden overflow-y-scroll lg:m-0"
				ref={ref}
			>
				<Indexes />
				<Moves />
			</div>
		</div>
	)
}

export default ChessMoves

import { useEffect, useRef } from 'react'
import { useAppSelector } from 'redux/store'

import Indexes from './components/Indexes'
import Moves from './components/Moves'
import useBindArrows from './hooks/useBindArrows'

const ChessMoves = () => {
	const chessMoves = useAppSelector((store) => store.chess.chessBoard.chessMoves)
	const ref = useRef<HTMLDivElement | null>(null)

	useBindArrows()

	useEffect(() => {
		if (ref.current) ref.current.scrollTop = ref.current.scrollHeight
	}, [chessMoves])

	return (
		<div
			ref={ref}
			className="scrollbar-thin flex h-[492px] w-[300px] overflow-hidden overflow-y-scroll"
		>
			<Indexes />
			<Moves />
		</div>
	)
}

export default ChessMoves

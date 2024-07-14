import { ChessBoard, ChessMoves, Controls, Guest, MobileChessMoves, Owner } from './components'

const Chess = () => (
	<div className="mx-auto my-1 w-full sm:w-fit lg:my-4">
		<div className="lg:flex">
			<MobileChessMoves />
			<div className="lg:hidden">
				<Guest />
			</div>
			<ChessBoard />
			<div className="lg:hidden">
				<Owner />
			</div>
			<div className="relative ml-2 hidden h-[620px] w-[300px] rounded-lg bg-black bg-opacity-5 lg:block">
				<Guest />
				<ChessMoves />
				<Owner />
			</div>
		</div>
		<Controls />
	</div>
)

export default Chess

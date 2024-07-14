import error from 'assets/images/error.png'
import { fetchGame } from 'pages/lobby/modules/chess/redux/actions'
import { fetchRooms } from 'pages/lobby/modules/rooms/redux/actions'
import { useAppDispatch } from 'redux/store'

const Error = () => {
	const dispatch = useAppDispatch()
	return (
		<div className="mx-auto mt-4 flex h-fit max-h-[636px] w-full items-center justify-center rounded-lg bg-black bg-opacity-10 p-2.5 lg:w-[1000px]">
			<div>
				<img src={error} className="mx-auto h-40 w-40" />
				<h1 className="mx-auto mb-16 mt-10 w-fit text-center text-4xl font-semibold leading-normal">
					Error while fetching games <br /> Please try again later.
				</h1>
				<button
					className="mx-auto block rounded-md bg-green-600 px-10 py-2 text-xl font-semibold transition duration-200 hover:bg-opacity-90"
					onClick={() => {
						dispatch(fetchRooms())
						dispatch(fetchGame())
					}}
				>
					Retry
				</button>
			</div>
		</div>
	)
}
export default Error

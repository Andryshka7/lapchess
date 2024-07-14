import GuestAvatar from 'assets/images/Guest.png'
import { useAppSelector } from 'redux/store'

import Timer from '../Timer'

const Owner = () => {
	const white = useAppSelector((store) => store.chess.white)
	const black = useAppSelector((store) => store.chess.black)
	const color = useAppSelector((store) => store.chess.color)

	const user = color === 'w' ? white : black

	const username = user?.username || 'Guest'
	const avatar = user?.avatar || GuestAvatar

	return (
		<div className="flex w-full items-center justify-between p-2 lg:p-4">
			<div className="flex items-center gap-1 lg:gap-3">
				<img src={avatar} className="h-6 w-6 rounded-full object-cover lg:h-8 lg:w-8" />
				<h3 className="font-medium lg:text-lg">{username}</h3>
			</div>
			<Timer color={color as 'w' | 'b'} />
		</div>
	)
}

export default Owner

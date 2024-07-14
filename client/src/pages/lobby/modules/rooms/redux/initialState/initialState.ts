import roomsAdapter from './roomsAdapter'

const initialState = roomsAdapter.getInitialState({
	loading: false,
	error: false
})

export default initialState

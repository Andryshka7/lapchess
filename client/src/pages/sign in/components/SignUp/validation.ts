export const usernameValidation = {
	minLength: {
		value: 3,
		message: 'Username has to be longer than 3 symbols'
	},
	maxLength: {
		value: 15,
		message: 'Username has to be no longer than 15 symbols'
	},
	required: 'This field is required'
}

export const passwordValidation = {
	required: 'This field is required',
	minLength: {
		value: 3,
		message: 'Password has to be longer than 3 symbols'
	}
}

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { SignUpFormValues } from '../../types/FormValues'
import { passwordValidation, usernameValidation } from './validation'
import { useAppDispatch, useAppSelector } from 'redux/store'
import { signUp } from 'pages/sign in/redux/actions'
import InputError from '../shared/InputError'

const initialStyles =
    'mb-3 block h-12 w-full border-b-2 font-medium border-b-gray-500 bg-transparent p-2 focus:outline-none transition duration-200'

const errorStyles =
    'mb-3 block h-12 w-full border-b-2 font-medium border-b-red-500 bg-transparent p-2 focus:outline-none transition duration-200'

interface SignUpProps {
    showSignUp: boolean
    setShowSighUp: React.Dispatch<React.SetStateAction<boolean>>
}

const SignUp = ({ showSignUp, setShowSighUp }: SignUpProps) => {
    const dispatch = useAppDispatch()
    const { loading } = useAppSelector((store) => store.auth)
    const [file, setFile] = useState<File | null>(null)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<SignUpFormValues>({ mode: 'onSubmit' })

    const onSubmit = async (data: SignUpFormValues) => {
        const formData = new FormData()

        formData.append('file', file as File)
        formData.append('username', data.username)
        formData.append('password', data.password)

        dispatch(signUp(formData))
    }

    const inputsTabIndex = !showSignUp ? -1 : 0

    const password = watch('password')
    const confirmPassword = watch('confirmPassword')

    return (
        <form
            className='relative flex h-full w-1/2 flex-col items-center justify-between px-10 py-10 sm:py-24'
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className='relative w-full'>
                <h1 className='mb-8 text-center text-4xl font-semibold'>Create account</h1>

                <input
                    type='text'
                    placeholder='Username'
                    className={errors['username'] ? errorStyles : initialStyles}
                    tabIndex={inputsTabIndex}
                    {...register('username', usernameValidation)}
                />
                <InputError error={errors['username']} />

                <input
                    type='password'
                    placeholder='Password'
                    className={errors['password'] ? errorStyles : initialStyles}
                    tabIndex={inputsTabIndex}
                    {...register('password', {
                        ...passwordValidation,
                        validate: () => password === confirmPassword || 'Passwords must match'
                    })}
                />
                <InputError error={errors['password']} />

                <input
                    type='password'
                    placeholder='Confirm password'
                    className={errors['confirmPassword'] ? errorStyles : initialStyles}
                    tabIndex={inputsTabIndex}
                    {...register('confirmPassword', {
                        ...passwordValidation,
                        validate: () => password === confirmPassword || 'Passwords must match'
                    })}
                />
                <InputError error={errors['confirmPassword']} />

                <label
                    htmlFor='file-input'
                    className={`mt-10 block rounded-lg border-2 border-dashed text-center font-medium text-gray-400 transition duration-200 ${
                        errors['avatar'] && !file
                            ? 'border-red-500'
                            : file
                            ? 'border-green-500'
                            : 'border-gray-400'
                    }`}
                >
                    {file ? (
                        <div className='mx-auto flex w-fit items-center p-3.5'>
                            <img
                                src={URL.createObjectURL(file)}
                                className='ml-5 mr-4 h-10 w-10 rounded-full object-cover'
                            />
                            <h1 className='line-clamp-1 text-lg'>{file.name}</h1>
                        </div>
                    ) : (
                        <p className='p-3 text-lg sm:p-5'>
                            Drop your avatar here or click to select
                        </p>
                    )}

                    <input
                        type='file'
                        id='file-input'
                        accept='image/*'
                        tabIndex={inputsTabIndex}
                        className='hidden'
                        {...register('avatar', { required: true })}
                        onChange={(e) => setFile(e.target.files?.[0] || null)}
                    />
                </label>

                <button
                    type='submit'
                    tabIndex={inputsTabIndex}
                    className={`mx-auto mt-10 block h-10 w-1/2 rounded-md bg-blue-500 text-xl font-semibold transition duration-200 ${
                        loading
                            ? 'pointer-eventts-none opacity-60'
                            : 'pointer-events-all hover:bg-opacity-80'
                    }`}
                >
                    Sign up
                </button>
            </div>

            <p
                className='w-full cursor-pointer text-center text-lg font-medium text-gray-300'
                onClick={() => setShowSighUp(false)}
            >
                Have you signed up before? Login here.
            </p>
        </form>
    )
}

export default SignUp

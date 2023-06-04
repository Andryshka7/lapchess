import { useForm } from 'react-hook-form'
import { showAlert } from 'layout/alert/store/alertSlice'
import { FormValues } from './types/FormValues'
import useLogin from './hooks/useLogin'
import { useAppDispatch } from 'redux/store'

const initial =
    'mb-7 block h-12 w-full border-b-2  border-b-gray-500 bg-transparent p-2 focus:outline-none transition duration-200'

const underlined =
    'mb-7 block h-12 w-full border-b-2  border-b-red-500 bg-transparent p-2 focus:outline-none transition duration-200'

interface LoginProps {
    setShowSighUp: () => void
}

const Login = ({ setShowSighUp }: LoginProps) => {
    const login = useLogin()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<FormValues>({ mode: 'onChange' })

    const onSubmit = async (data: FormValues) => {
        await login(data)
        reset()
    }

    return (
        <form
            className='relative flex h-[700px] w-[500px] items-center'
            onSubmit={handleSubmit(onSubmit)}
            autoComplete='off'
        >
            <div className='w-full px-10'>
                <h1 className='mb-10 text-center text-5xl font-semibold'>Log in</h1>

                <input
                    type='text'
                    placeholder='Username'
                    className={errors['username'] ? underlined : initial}
                    {...register('username', { required: 'Please enter a username' })}
                />

                <input
                    type='password'
                    placeholder='Password'
                    className={errors['password'] ? underlined : initial}
                    {...register('password', { required: 'Please enter password' })}
                />

                <button
                    type='submit'
                    className='mx-auto mt-16 block rounded-md bg-blue-500 px-8 py-1.5 text-xl font-semibold transition duration-200 hover:bg-opacity-80'
                >
                    Log in
                </button>
            </div>
            <p
                className='absolute bottom-0 mb-10 w-full cursor-pointer text-center text-lg font-medium text-gray-300'
                onClick={setShowSighUp}
            >
                Not a member? Sign in to become one.
            </p>
        </form>
    )
}

export default Login

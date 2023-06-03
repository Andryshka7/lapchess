import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Label from './components/Label'
import axios from 'axios'
import { useAppDispatch } from 'redux/store'
import { authenticate, setToken } from 'layout/navbar/auth/store/authSlice'
import { useNavigate } from 'react-router-dom'

const SERVER_URL = import.meta.env.VITE_SERVER_URL

const initial =
    'mb-7 block h-12 w-full border-b-2 border-b-gray-500 bg-transparent p-2 focus:outline-none transition duration-200'

const underlined =
    'mb-7 block h-12 w-full border-b-2 border-b-red-500 bg-transparent p-2 focus:outline-none transition duration-200'

type FieldValues = {
    username: string
    password: string
    confirmPassword: string
}

interface SignUpProps {
    setShowSighUp: () => void
}

const SignUp = ({ setShowSighUp }: SignUpProps) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        getValues,
        reset,
        formState: { errors }
    } = useForm<FieldValues>({
        mode: 'onChange'
    })
    const [selectedFile, setSelectedFile] = useState<File | null>(null)

    const inputStyle = (name: keyof FieldValues) => (errors[name] ? underlined : initial)

    const onSubmit = async (data: FieldValues) => {
        if (!selectedFile) return

        const formData = new FormData()
        formData.append('file', selectedFile)
        formData.append('username', data.username)
        formData.append('password', data.password)

        const response = await axios.post(`${SERVER_URL}/users/register`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })

        dispatch(authenticate(response.data.user))
        dispatch(setToken(response.data.token))
        navigate('/')

        reset()
        setSelectedFile(null)
    }

    return (
        <form
            className='relative flex h-[700px] w-[500px] items-center'
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className='w-full px-10'>
                <h1 className='mb-10 text-center text-5xl font-semibold'>Create account</h1>

                <input
                    type='text'
                    placeholder='Username'
                    className={inputStyle('username')}
                    {...register('username', { required: true })}
                />

                <input
                    type='password'
                    placeholder='Password'
                    className={inputStyle('password')}
                    {...register('password', {
                        required: true,
                        validate: (original) => {
                            const confirmed = getValues('confirmPassword')
                            return !confirmed || original === confirmed
                        }
                    })}
                />

                <input
                    type='password'
                    placeholder='Confirm password'
                    className={inputStyle('confirmPassword')}
                    {...register('confirmPassword', {
                        required: true,
                        validate: (confirmed) => {
                            const original = getValues('password')
                            return !original || original === confirmed
                        }
                    })}
                />

                <Label htmlFor='avatar-input' file={selectedFile} setFile={setSelectedFile} />

                <button
                    type='submit'
                    className='mx-auto mt-10 block rounded-md bg-blue-500 px-8 py-1.5 text-xl font-semibold transition duration-200 hover:bg-opacity-80'
                >
                    Sign up
                </button>
            </div>

            <p
                className='absolute bottom-0 mb-10 w-full cursor-pointer text-center text-lg font-medium text-gray-300'
                onClick={setShowSighUp}
            >
                Have you signed up before? Login here.
            </p>
        </form>
    )
}

export default SignUp

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAppDispatch } from 'redux/store'
import { FormValues } from './types/FormValues'
import { showAlert } from 'layout/alert/store/alertSlice'
import useSignUp from './hooks/useSignUp'

const initial =
    'mb-7 block h-12 w-full border-b-2 border-b-gray-500 bg-transparent p-2 focus:outline-none transition duration-200'

const underlined =
    'mb-7 block h-12 w-full border-b-2 border-b-red-500 bg-transparent p-2 focus:outline-none transition duration-200'

interface SignUpProps {
    setShowSighUp: () => void
}

const SignUp = ({ setShowSighUp }: SignUpProps) => {
    const signUp = useSignUp()

    const {
        register,
        handleSubmit,
        getValues,
        reset,
        formState: { errors }
    } = useForm<FormValues>({
        mode: 'onChange'
    })

    const [file, setFile] = useState<File | null>(null)

    const onSubmit = async (data: FormValues) => {
        if (!file) return
        await signUp(data, file)
        reset()
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
                    className={errors['username'] ? underlined : initial}
                    {...register('username', { required: true })}
                />

                <input
                    type='password'
                    placeholder='Password'
                    className={errors['password'] ? underlined : initial}
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
                    className={errors['confirmPassword'] ? underlined : initial}
                    {...register('confirmPassword', {
                        required: true,
                        validate: (confirmed) => {
                            const original = getValues('password')
                            return !original || original === confirmed
                        }
                    })}
                />

                <label
                    htmlFor={'file-input'}
                    className='mt-8 block rounded-lg border-2 border-dashed 
                             border-gray-400 text-center font-medium text-gray-400'
                >
                    {file ? (
                        <div className='mx-auto flex w-fit items-center p-3.5'>
                            <img
                                src={URL.createObjectURL(file)}
                                className='ml-5 mr-4 h-10 w-10 rounded-full object-cover'
                                alt=''
                            />
                            <h1 className='line-clamp-1 text-lg'>{file.name}</h1>
                        </div>
                    ) : (
                        <p className='p-5 text-lg'>Drop your avatar here or click to select</p>
                    )}

                    <input
                        type='file'
                        id='file-input'
                        accept='image/*'
                        className='hidden'
                        onChange={(e) => setFile(e.target.files?.[0] || null)}
                    />
                </label>

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

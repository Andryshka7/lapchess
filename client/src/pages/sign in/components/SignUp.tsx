import { useState } from 'react'
import { FieldError, useForm } from 'react-hook-form'
import { SignUpFormValues } from '../types/form fields/SignUpFormValues'
import useSignUp from '../hooks/useSignUp'
import { passwordValidation, usernameValidation } from './helpers/signUpValidation'

const initialStyles =
    'mb-7 block h-12 w-full border-b-2 border-b-gray-500 bg-transparent p-2 focus:outline-none transition duration-200'

const errorStyles =
    'mb-7 block h-12 w-full border-b-2 border-b-red-500 bg-transparent p-2 focus:outline-none transition duration-200'

interface SignUpProps {
    showSignUp: boolean
    setShowSighUp: React.Dispatch<React.SetStateAction<boolean>>
}

const InputError = ({ error }: { error?: FieldError }) => (
    <p
        className={`absolute w-[420px] -translate-y-6 text-center text-sm font-medium text-red-500 transition-all duration-200 ${
            error ? 'opacity-1' : 'opacity-0'
        }`}
    >
        {error?.message}
    </p>
)

const SignUp = ({ showSignUp, setShowSighUp }: SignUpProps) => {
    const signUp = useSignUp()
    const [file, setFile] = useState<File | null>(null)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<SignUpFormValues>({ mode: 'onSubmit' })

    const onSubmit = async (data: SignUpFormValues) => {
        await signUp(data, file as File)
    }

    const inputsTabIndex = !showSignUp ? -1 : 0

    const password = watch('password')
    const confirmPassword = watch('confirmPassword')

    return (
        <form
            className='relative flex h-[700px] w-[500px] items-center'
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className='relative w-full px-10'>
                <h1 className='mb-10 text-center text-5xl font-semibold'>Create account</h1>

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
                        errors['avatar'] && !file ? 'border-red-500' : 'border-gray-400'
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
                        <p className='p-5 text-lg'>Drop your avatar here or click to select</p>
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
                    className='mx-auto mt-10 block rounded-md bg-blue-500 px-8 py-1.5 text-xl font-semibold transition duration-200 hover:bg-opacity-80'
                >
                    Sign up
                </button>
            </div>

            <p
                className='absolute bottom-0 mb-10 w-full cursor-pointer text-center text-lg font-medium text-gray-300'
                onClick={() => setShowSighUp(false)}
            >
                Have you signed up before? Login here.
            </p>
        </form>
    )
}

export default SignUp

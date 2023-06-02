import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Label from './components/Label'
import axios from 'axios'

const inputStyle =
    'mb-7 block h-12 w-full border-b-2 border-b-gray-500 bg-transparent p-2 focus:outline-none'

const SERVER_URL = import.meta.env.VITE_SERVER_URL

type FieldValues = {
    username: string
    password: string
    confirmPassword: string
}

const Registration = () => {
    const { register, handleSubmit, reset } = useForm<FieldValues>()
    const [selectedFile, setSelectedFile] = useState<File | null>(null)

    const onSubmit = (data: FieldValues) => {
        if (selectedFile) {
            const formData = new FormData()
            formData.append('file', selectedFile)
            formData.append('username', data.username)
            formData.append('password', data.password)

            axios.post(`${SERVER_URL}/images/upload`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            })

            reset()
            setSelectedFile(null)
        }
    }

    return (
        <form
            className='mx-auto my-16 flex justify-between overflow-hidden rounded-lg bg-gray-500 bg-opacity-20'
            onSubmit={handleSubmit(onSubmit)}
            autoComplete='off'
        >
            <div className='m-auto w-[500px] px-10'>
                <h1 className='mb-10 text-center text-5xl font-semibold'>Create account</h1>
                <input
                    type='text'
                    placeholder='Username'
                    className={inputStyle}
                    {...register('username')}
                    autoComplete='off'
                />
                <input
                    type='password'
                    placeholder='Password'
                    className={inputStyle}
                    {...register('password')}
                    autoComplete='off'
                />
                <input
                    type='password'
                    placeholder='Confirm password'
                    className={inputStyle}
                    {...register('confirmPassword')}
                    autoComplete='off'
                />
                <Label htmlFor='avatar-input' file={selectedFile}></Label>
                <input
                    type='file'
                    id='avatar-input'
                    accept='image/*'
                    className='hidden'
                    onChange={async (e) => setSelectedFile(e.target.files?.[0] || null)}
                />
                <button
                    type='submit'
                    className='mx-auto mt-16 block rounded-md bg-green-600 px-8 py-1.5 text-xl font-semibold transition duration-200 hover:bg-green-700'
                >
                    Register
                </button>
            </div>
            <div className='with-fade h-[700px] w-[600px] bg-cover' />
        </form>
    )
}

export default Registration

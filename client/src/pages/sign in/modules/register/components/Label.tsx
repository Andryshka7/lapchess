interface LabelProps {
    htmlFor: string
    file: File | null
}

const Label = ({ htmlFor, file }: LabelProps) => {
    return (
        <label
            htmlFor={htmlFor}
            className='block rounded-lg border-2 border-dashed border-gray-400 text-center font-medium text-gray-400'
        >
            {file ? (
                <div className='mx-auto flex w-fit items-center p-3.5'>
                    <img
                        src={URL.createObjectURL(file)}
                        className='ml-5 mr-4 h-10 w-10 rounded-full object-cover'
                        alt=''
                    />
                    <h1 className='text-lg line-clamp-1'>{file.name}</h1>
                </div>
            ) : (
                <p className='p-5 text-lg'>Drop your avatar here or click to select</p>
            )}
        </label>
    )
}

export default Label

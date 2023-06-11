import { FieldError } from 'react-hook-form'

const InputError = ({ error }: { error?: FieldError }) => (
    <p
        className={`absolute w-[420px] -translate-y-6 text-center text-sm font-medium text-red-500 transition-all duration-200 ${
            error ? 'opacity-1' : 'opacity-0'
        }`}
    >
        {error?.message}
    </p>
)

export default InputError

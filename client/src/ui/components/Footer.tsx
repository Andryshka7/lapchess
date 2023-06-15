const Footer = () => {
    return (
        <footer className='mt-auto flex h-8 w-full items-center justify-center bg-blue-500 text-sm font-medium'>
            © 2023 Lapchess All Rights Reserved
            <button
                onClick={() => {
                    localStorage.clear()
                    location.reload()
                }}
                className='absolute right-16 bg-red-500 px-8 text-xl rounded-md'
            >
                Reset
            </button>
        </footer>
    )
}

export default Footer

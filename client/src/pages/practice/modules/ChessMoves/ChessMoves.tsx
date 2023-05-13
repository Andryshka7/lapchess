import { useAppSelector } from 'redux/store'

const ChessMoves = () => {
    const { chessMoves } = useAppSelector((store) => store.practice)
    const pairCount = Math.ceil(chessMoves.length / 2)
    return (
        <div className='flex justify-between w-[300px] h-[620px] overflow-hidden ml-2 rounded-lg bg-black bg-opacity-10'>
            <div className='mx-auto'>
                {Array.from({ length: pairCount }, (_, index) => (
                    <p className='block text-bold' key={`number ${index}`}>
                        {index + 1}
                    </p>
                ))}
            </div>
            <div className='w-[270px]'>
                {chessMoves.map((move, index) => (
                    <p
                        className={`w-1/2 float-left text-center font-semibold bg-stone-500 ${
                            index % 2 ? 'bg-opacity-5' : 'bg-opacity-10'
                        }`}
                    >
                        {move}
                    </p>
                ))}
            </div>
        </div>
    )
}

export default ChessMoves

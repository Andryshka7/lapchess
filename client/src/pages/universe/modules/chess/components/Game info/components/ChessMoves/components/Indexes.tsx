import { useAppSelector } from 'redux/store'

const Indexes = () => {
    const { chessMoves } = useAppSelector((store) => store.chess.chessBoard)

    const indexes = Array.from({ length: Math.ceil(chessMoves.length / 2) }, (_, i) => i)

    return (
        <div className='mx-auto w-[40px] text-center'>
            {indexes.map((index) => (
                <p className='text-bold block' key={`number ${index}`}>
                    {index + 1}
                </p>
            ))}
        </div>
    )
}

export default Indexes

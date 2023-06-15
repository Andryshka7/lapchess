const circleStyle = 'inline-block w-[20px] h-[20px] my-5 mx-1 rounded-full'

const Loader = () => (
    <div className='loader flex justify-center items-center w-fit h-[20px] my-[40px] mx-auto'>
        <div className={circleStyle}></div>
        <div className={circleStyle}></div>
        <div className={circleStyle}></div>
    </div>
)

export default Loader

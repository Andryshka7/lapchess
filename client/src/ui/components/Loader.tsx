const circleStyle = 'inline-block w-5 h-5 my-5 mx-1 rounded-full'

const Loader = () => (
    <div className='loader flex justify-center items-center w-fit h-5 mx-auto'>
        <div className={circleStyle}></div>
        <div className={circleStyle}></div>
        <div className={circleStyle}></div>
    </div>
)

export default Loader

import { Loader } from 'ui'

const ModalLoader = () => (
	<div className="fixed left-0 top-0 h-full w-full bg-black bg-opacity-50">
		<div className="xs:h-[470px] absolute left-1/2 top-1/2 flex h-[450px] w-11/12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg bg-[#282828] md:w-[700px]">
			<Loader />
		</div>
	</div>
)

export default ModalLoader

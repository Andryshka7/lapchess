import multer from 'multer'
import { extname } from 'path'
import { v4 as uuid } from 'uuid'

const storage = multer.diskStorage({
	destination: function (req, file, callBack) {
		callBack(null, 'images/')
	},
	filename: function (req, file, callBack) {
		callBack(null, uuid() + extname(file.originalname))
	}
})

const upload = multer({ storage })

export default upload

import multer from 'multer'

const storage = multer.diskStorage({
    destination: function (req, file, callBack) {
        callBack(null, 'images/')
    },
    filename: function (req, file, callBack) {
        callBack(null, file.originalname)
    }
})

const upload = multer({ storage })

export default upload

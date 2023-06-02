import path from 'path'
import express from 'express'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { Router } from 'express'
import upload from '../helpers/multer.js'
import { rename } from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const imagesRouter = Router()

imagesRouter.post('/upload', upload.single('file'), async (req, res) => {
    const { username, password } = req.body
    const fileName = req.file.filename

    const filePath = path.join(__dirname, '..', 'images', fileName)
    const extension = fileName.split('.')[1]
    const newPath = path.join(__dirname, '..', 'images', `${username}.${extension}`)

    await rename(filePath, newPath, () => {
        console.log(err)
    })

    res.status(200).json('Successfully downloaded file.')
})

imagesRouter.use('/', express.static(path.join(__dirname, 'images')))

export default imagesRouter

import path from 'path'
import express from 'express'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { Router } from 'express'
import upload from '../helpers/multer.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const imagesRouter = Router()

imagesRouter.post('/upload', upload.single('file'), (req, res) => {
    const { username, password } = req.body
    console.log(req.file.filename)
})

imagesRouter.use('/', express.static(path.join(__dirname, 'images')))

export default imagesRouter

import path, { dirname } from 'path'
import express, { Router } from 'express'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const imagesRouter = Router()

imagesRouter.use('/', express.static(path.join(__dirname, '..', 'images')))

export default imagesRouter

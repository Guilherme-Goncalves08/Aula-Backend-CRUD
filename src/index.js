import express, { Router } from 'express'
import router from './router/users.js';

const app= express();
app.use(express.json())

app.use('/api/v1', router)

const port = 3000
app.listen(port, () => {
    console.info("servido rodando na porta"+port)
})
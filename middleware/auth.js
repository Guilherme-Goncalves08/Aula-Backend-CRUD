import jwt from 'jsonwebtoken'

const JWT_SEGREDO = "M3uS3gr3do"

export default function authMiddleware(req, res, next) {
    try {
        const token = req.headers['authorization']


        if (!token) {
            throw new Error('voce não tem permissão para realizar essa ação')
        }

        const decoded = jwt.verify(token.split(' ')[1], JWT_SEGREDO)
        token.split(' ')[1]

        console.log(decoded)
        next()
        
    } catch (error) {
        res.status(403).send({
            data: null,
            msg: "Você não tem permissão pra realizar essa requisição",
            error: true
        })
        

    }
}


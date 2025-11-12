import jwt from 'jsonwebtoken'
import ServiceUser from '../service/users.js'
const JWT_SEGREDO = "M3uS3gr3do"

export default function authMiddleware(roles = []) {
    return async (req, res, next) => {
        try {
            const token = req.headers['authorization']


            if (!token) {
                throw new Error('voce não tem permissão para realizar essa ação')
            }

            const decoded = jwt.verify(token.split(' ')[1], JWT_SEGREDO)
            const user = await ServiceUser.FindOne(decoded.id)

            if (roles.length && !roles.includes(user.permissao)) {
                throw new Error("Você não tem permissão para realizar essa ação")
            }

            req.headers.user = user

            console.log(decoded)
            next()

        } catch (error) {
            res.status(403).send({
                data: null,
                msg: "Você não tem permissão pra realizar essa requisição",
                error: true
            })


        }

        // if (roles. length &&
        //     roles.includes(user.permissao)
        // ) {
        //     throw new Error("voce não tem permissão para essa ação")
        // }

    }
}



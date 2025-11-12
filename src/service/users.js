import User from '../model/users.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const JWT_SEGREDO = "M3uS3gr3do"
const SALT = 10

class ServiceUser {

    FindAll() {
        return User.findAll()
    }

    async FindOne(id) {
        if (!id) {
            throw new Error("Favor informar o ID correto")
        }

        const user = await User.findByPk(id)
        if (!user) {
            throw new Error(`Usuario ${id} não encontrado`)
        }
        return
    }

    async Create(nome, email, senha, ativo, permissao) {
        if (!nome || !email || !senha || !ativo) {
            throw new Error("favor preencher todos os campos")

        }

        const senhaCrip = await bcrypt.hash(String(senha), SALT)

        await User.create({
            nome,
            email,
            senha: senhaCrip,
            ativo,
            permissao
        })

    }

    async Update(id, nome, senha) {
        // if (!id) {
        //     throw new Error("Favor informar o ID correto")
        // }

        const olduser = await User.findByPk(id)
        olduser.senha = senha
            ? await bcrypt.hash(String(senha), SALT)
            : olduser.senha

        // if (!olduser) {
        //     throw new Error(`Usuario ${id} não encontrado`)
        // }

        // await olduser.save()
    }

    async Delete(id) {
        if (!id) {
            throw new Error("id incorreto")

        }
        const user = await User.findByPk(id)
        if (!user) {
            throw new Error(`Usuario ${id} não encontrado`)
        }
        User.destroy(id)
    }
    async Login(email, senha) {
        if (!email || !senha) {
            throw new Error("Email ou senha invalidos")
        }

        const user = await User.findOne({ where: { email } })

        if (!user
            || !(await bcrypt.compare(String(senha), user.senha))
        ) {
            throw new Error('Email ou senha invalidados.')

        }

        return jwt.sign({ id: user.id, nome: user.nome, permissao: user.permissao },
            JWT_SEGREDO,
            { expiresIn: 60 * 60 }
        )
    }

}
export default new ServiceUser()
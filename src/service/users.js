import User from '../model/users.js'

class ServiceUser {

    FindAll() {
        return User.FindAll()
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

    async Create(nome, email, senha, ativo) {
        if (!nome || !email || !senha || !ativo) {
            throw new Error("favor preencher todos os campos")

        }

        console.log(nome)
        await User.create({
            nome, email, senha, ativo
        })

    }

    async Update(id, nome) {
        if (!id) {
            throw new Error("Favor informar o ID correto")
        }

        const user = await User.findByPk(id)
        if (!user) {
            throw new Error(`Usuario ${id} não encontrado`)
        }
        
        await user.save()
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

}
export default new ServiceUser()
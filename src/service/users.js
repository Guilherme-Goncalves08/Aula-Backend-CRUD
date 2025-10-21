import ModelUser from '../model/users.js'
class ServiceUser{
    FindAll(){
        return ModelUser.FindAll()
    }
    FindOne(index){
        return ModelUser.FindOne(index)
    }
    Create(nome){
        return ModelUser.Create(nome)
    }
    Update(index, nome){
        return ModelUser.Update(index, nome)
    }
    Delete(index){
        return ModelUser.Delete(index)
    }

}
export default new ServiceUser()
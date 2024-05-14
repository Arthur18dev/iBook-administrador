import api from "./api";


const usuarios = {

    getAllUsuarios: async () => {

       return api.get('/usuarios')
    },


    getUsuariosId: async (id) => {
        return api.get(`/usuarios/${id}`) 
    },

    editUsuariosId: async (id , body) => {
        return api.put(`/usuarios/${id}` , body) 
    },
    createUsuarios: async (body) =>{

        return api.post('/usuarios', body)
    },
    deleteUsuariosId: async (id) => {
        return api.delete(`/usuarios/${id}`) 
    },

}


export default usuarios
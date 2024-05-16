import api from "./api";



const CategoriaServices = {
    
    getAllCategoria: () => {
        return api.get('categoria')
    },

}



export default CategoriaServices;
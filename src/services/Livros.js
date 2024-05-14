import api from "./api";



const livrosServices = {
    
    getAllLivros: () => {
        return api.get('livros')
    },
    getLivrosCategoria: (id) => {
        return api.get('livrosPorCategoria', {
            params: {
                categoriaId: id
            }
        })
    }
}



export default livrosServices;
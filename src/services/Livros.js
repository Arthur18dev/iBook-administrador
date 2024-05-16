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
    },
    createLivro: (form) => {
        return api.post('livros', form)
    }
}



export default livrosServices;
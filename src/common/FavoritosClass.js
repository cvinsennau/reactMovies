// Creo un Clase en js 
//--------------------
class FavoritosClass {

    // Constructor, le paso el nombre del storage. Puede ser Peliculas o series
    //Asigno propiedades a la clase
    //--------------------------------------------------------------------------
    constructor(storageItemName) {
        this.message = "";
        this.storageItem = storageItemName
    }


    // Toggle, es un metodo agrega o quita la serie o la peli de favoritos
    // -------------------------------------------------------------------
    Toggle = (videoId) => {

        let favoritos = this.getFavoritosFromStorage(); //recibo los favoritos del localStorage y los asigno a una variable tipo array

        if (favoritos.includes(videoId)) { //metodo includes 
            // Si esta en favoritos, lo quito

            // quito el elemento favorito del array
            let favoritosFiltrados = favoritos.filter(unId => unId !== videoId)

            // seteo el favsMessage del elemento 
            this.message = "Agregar a Fav"
            this.setFavoritosToStorage(favoritosFiltrados);

        } else {
            // Si no esta lo agrego
            favoritos.push(videoId);

            this.message = "Quitar de Fav";
            this.setFavoritosToStorage(favoritos);

        }

    }

    // Toma el mensaje luego de un toggle
    // ----------------------------------------
    getMessage = () => { return this.message; }


    // Toma los favoritos desde el storage
    // -----------------------------------
    getFavoritosFromStorage = () => {

        let favoritos = [];
        let recuperoStorage = localStorage.getItem(this.storageItem)   // ver que storageItem es el nombre del storage que puede ser Pelis o Series

        if (recuperoStorage !== null) {
            let favoritosToArray = JSON.parse(recuperoStorage)
            favoritos = favoritosToArray
        }

        return favoritos;
    }

    setFavoritosToStorage = (favoritos) => {
        let favoritosToString = JSON.stringify(favoritos)
        localStorage.setItem(this.storageItem, favoritosToString)   // ver que storageItem es el nombre del storage que puede ser Pelis o Series
    }
}

export default FavoritosClass;
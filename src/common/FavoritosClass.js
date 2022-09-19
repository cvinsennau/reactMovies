// Creo un objeto en js 
class FavoritosClass {


    constructor(storageItemName) {
        this.message = "";
        this.storageItem = storageItemName
    }


    // Este metodo agrega o quita la serie o la peli de favoritos
    // ----------------------------------------------------------
    Toggle = (videoId) => {

        let favoritos = this.getFavoritosFromStorage();         //recibo los favoritos del local y los asigno a una variable


        if (favoritos.includes(videoId)) { //metodo includes 
             // Si esta en favoritos, lo quito

            // quito el elemento favorito del array
            favoritos = favoritos.filter(unId => unId !== videoId)

            // seteo el favsMessage del elemento 
            this.message = "Fav"

        } else {
            // Si no esta lo agrego
            favoritos.push(videoId);

            this.message = "Remove";

        }

        this.setFavoritosToStorage(favoritos);

    }

    // Toma el mensaje luego de un toggle
    // ----------------------------------------
    getMessage = () => { return this.message; }

    // Toma los favoritos desde el storage
    // -----------------------------------
    getFavoritosFromStorage = () => {

        let favoritos = [];
        let recuperoStorage = localStorage.getItem(this.storageItem)

        if (recuperoStorage !== null) {
            let favoritosToArray = JSON.parse(recuperoStorage)
            favoritos = favoritosToArray
        }

        return favoritos;
    }

    setFavoritosToStorage = (favoritos) => {
        let favoritosToString = JSON.stringify(favoritos)
        localStorage.setItem(this.storageItem, favoritosToString)
    }
}

export default FavoritosClass;
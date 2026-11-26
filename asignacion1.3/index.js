class Libro{
    constructor(titulo, autor, añoDePublicacion, informacion){
        this.titulo = titulo;
        this.autor = autor;
        this.añoDePublicacion = añoDePublicacion
        this.informacion = informacion;
    }
    mostrarInformacion(){
        return this.informacion;
    }
}
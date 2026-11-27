
class Libro{
    constructor(titulo, autor, añoDePublicacion){
        this.titulo = titulo;
        this.autor = autor;
        this.añoDePublicacion = añoDePublicacion;
    }
    mostrarInformacion(){
        return libro1;
    }
}

const libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez", "1967");
const libro2 = new Libro("El principito", "Antoine de Saint-Exupéry", "1943");
const libro3 = new Libro("Don Quijote de la Mancha", "Miguel de Cervantes", "Parte I: 1605 y Parte II: 1615");

console.log(libro1.mostrarInformacion());
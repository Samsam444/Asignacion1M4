const matriz = [];
    
    for(let i = 0; i < 3; i++){
        const fila = [];
        for(let inum = 0; inum < 3; inum ++){
            const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            const numFila = Math.floor(Math.random() * numeros.length) + 1;
            fila.push(numFila);
        }
        matriz.push(fila);
    }

console.log(matriz)
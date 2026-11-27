let recursivaCalcularFactorial = num =>{
    if(num === 0 || num === 1 ){
        return 1;
    };
        let nuevoNum = num - 1
        return num * recursivaCalcularFactorial(nuevoNum)
}

console.log(recursivaCalcularFactorial(5))
const suma = (num1, num2) => {
    return num1 + num2
};

const division = (num1, num2) => {
    return num1 / num2
};

const mayor = (lista) => {
    
    let mayor =  0;
    let i =  0;
    
    for(i; i < lista.length; i++){
        if(i == 0){
            mayor = lista[i];
        }
        if(mayor < lista[i]){
            mayor = lista[i];
        }
    }

    return mayor
};

let lista = [2,8,9,7,5,6];

resultadoSuma1 = suma(5, 10);
resultadoSuma2 = suma(20, 2);
resultadoDivision = division(20 , 2);
// Si realizo division(20 , 0) el resultado me va a dar como valor Infinity
resultadoMayor = mayor(lista);

console.log("La suma de 5 y 10 es: " + resultadoSuma1);
console.log("La suma de 20 y 2 es: " + resultadoSuma2);
console.log("La división  de 20 y 2 es: " + resultadoDivision);
console.log("El mayor valor entre 2, 8, 9, 7, 5 y 6 es: " + resultadoMayor);
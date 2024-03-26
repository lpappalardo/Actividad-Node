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
resultadoMayor = mayor(lista);

console.log(resultadoSuma1);
console.log(resultadoSuma2);
console.log(resultadoDivision);
console.log(resultadoMayor);
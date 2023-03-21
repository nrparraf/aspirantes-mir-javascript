// Sumar los numeros de un arreglo
function sum (arrayNum){
    var array = 0;
    for(let i = 0; i < arrayNum.length; i++){
        const num = arrayNum[i];
        array = array + num;
    }
    return 'El resultado es: ' + array;
}

console.log(sum([1, 2, 3]));
console.log(sum([10, 8, 12, 5]));
console.log(sum([]));

// Obtener el numero Maximo en un arreglo
function max(numMax = []) {
    var maxNum = 0;
    for (let i = 0; i < numMax.length; i++) {
        if (numMax[i] > maxNum) {
            maxNum = numMax[i];
        }
    }
    return "El número MAX es: " + maxNum
}

console.log(max([1, 3, 2])) ;
console.log(max([10, 9, 8, 7, 6, 5, 4]));
console.log(max([]));


function maxIndex(estado = []) {
    var posicion = 0;
    for (let i = 0; i < estado.length; i++) {
        if(estado[i] = posicion){
            posicion= str[i] 
        }
    }
    return maxIndex
}
console.log(maxIndex([1, 3, 2]));
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4]));
console.log(maxIndex([]));
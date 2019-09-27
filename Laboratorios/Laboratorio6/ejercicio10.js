

/*Ejercicio 10 Valor absoluto: Escribir una funcion en JavaScript que, dado un número 
real cualquiera, encuentre su valor absoluto y lo retorne. El valor absoluto de un 
número x es igual a x si x > 0, y a -x si x es menor o igual a 0.*/
function absolute(number){
    let valor= number;
    if(number<0){
        valor= 0-number;
    }
    return valor;
}



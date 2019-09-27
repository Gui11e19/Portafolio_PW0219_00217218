function repeat(n,action){
    for(let i=0; i < n; i++){
      action(i);
    }
  }


/*Ejercicio 7 Fibonacci: La serie Fibonacci es una serie matemática muy reconocida,
 la cual tiene como primeros 10 términos: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34. Realice 
 una función en JavaScript que reciba un número n como argumento y muestre la serie
  hasta el enésimo término.*/

  function fibo(numero){
    let termino1 = 0;
    let termino2 = 1;
    let respuesta = 0;
    if(numero == 1)
    return termino1;
    else if (numero == 2)
    return termino2;
    else{
        for(let i = 3; i <= numero; i++){
            respuesta = termino1 + termino2;
            termino1 = termino2;
            termino2 = respuesta;
        }
    }
    return respuesta;
}

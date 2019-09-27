function repeat(n,action){
    for(let i=0; i < n; i++){
      action(i);
    }
  }

  /*Ejercicio 8 Conversor decimal-binario: Crear una función en JavaScript, que reciba 
como parámetro un entero positivo. La función debe devolver el valor en binario.*/

function decBin(decimal){
    let decimalEnBinario = decimal.toString(2); 
console.log("El número decimal %s en binario es %s", decimal, decimalEnBinario);
}



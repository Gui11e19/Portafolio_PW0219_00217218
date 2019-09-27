function repeat(n,action){
    for(let i=0; i < n; i++){
      action(i);
    }
  }

  /*Ejercicio 3 Realice una función en JS, que dados un número y un arreglo como parámetros,
 retorne cuantas ocurrencias existen de ese número dentro del arreglo.*/
 function searchInArray(n, array){
    let total = 0;
    repeat(array.length, i=> {
    if(n == array[i]){
      total++;
     };
    
   });
        return total;
   }
  

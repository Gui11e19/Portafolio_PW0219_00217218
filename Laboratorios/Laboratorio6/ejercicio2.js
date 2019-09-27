function repeat(n,action){
    for(let i=0; i < n; i++){
      action(i);
    }
  }
 
 /*Ejercicio 2 Realice una función que reciba un arreglo de datos 
numéricos, y muestre la suma de todos los elementos del arreglo y su promedio.*/
function sumaArray(array){
    let total = 0;
    repeat(array.length, i=> {
    total+=array[i];
  });
    console.log("La suma: " + total);
    console.log("El promedio: " + total/array.length);
  }
  
  
 
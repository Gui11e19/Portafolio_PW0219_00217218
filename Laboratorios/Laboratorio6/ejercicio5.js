function repeat(n,action){
    for(let i=0; i < n; i++){
      action(i);
    }
  }
  /*Ejercicio 5 Palíndromo: Se dice que una palabra es palíndroma cuando se puede leer de 
la misma manera tanto de derecha a izquierda y viceversa. Crear una función en JavaScript
 que reciba como parámetro una palabra. La función debe retornar si la palabra es palíndroma
  o no.*/

 //ejercicio5
function palindromo(arreglo)
{
    let arre=arreglo.length;
    let reverse="";
    for (let i = arre-1; i > -1; i--) {
        reverse += arreglo[i];
        }

    if(arreglo===reverse)
    {
        return "la palabra es palíndroma";
    }
    else
    {
        return "la palabra NO es palíndroma";
        function palindromo(arreglo)
{
    let arre=arreglo.length;
    let reverse="";
    for (let i = arre-1; i > -1; i--) {
        reverse += arreglo[i];
        }

    if(arreglo===reverse)
    {
        return "la palabra es palíndroma";
    }
    else
    {
        return "la palabra NO es palíndroma";
        
    }
}
    }
}
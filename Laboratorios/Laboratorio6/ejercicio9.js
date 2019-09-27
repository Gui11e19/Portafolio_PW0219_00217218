

  /*Ejercicio 9 Análisis de una circunferencia: Crear una función en JavaScript que pida
 por el teclado el radio de un circunferencia, y calcule el área de esta y lo retorne,
  si el radio ingresado es negativo o cero, retornará -1.*/

  function area(radio){
    let area = -1;
    if(radio > 0){
        area = (3.1416)*(radio)*(radio)
    }
    return area;
}


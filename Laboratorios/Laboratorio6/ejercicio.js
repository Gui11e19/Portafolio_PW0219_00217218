
function repeat(n,action){
  for(let i=0; i < n; i++){
    action(i);
  }
}
/*Ejercicio 1 Realice una función que reciba un arreglo como parámetro y
 liste los tipos de datos de sus elementos y cuantos de cada tipo.*/
 function filtro(array){
  repeat(array.length, i=> {
    console.log(typeof array[i]);
  });
}


let arreglo =[1,'hola',3,4,5];

filtro(arreglo);

 /*Ejercicio 2 Realice una función que reciba un arreglo de datos 
numéricos, y muestre la suma de todos los elementos del arreglo y su promedio.*/
function sumaArray(array){
  let total = 0;
  repeat(array.length, i=> {
  total+=array[i];
});
  console.log(total);
}


let arreglo1 =[1,2,3,4,5];

sumaArray(arreglo1);



/*Ejercicio 3 Realice una función en JS, que dados un número y un arreglo como parámetros,
 retorne cuantas ocurrencias existen de ese número dentro del arreglo.*/
 function searchInArray(n, array){
  let total = 0;
  repeat(array.length, i=> {
  if(n == array[i]){
    total++;
   };
  console.log(total);
 });
 }

let arreglo2 =[1,2,1,1,5];
let n = 1;

searchInArray(n, arreglo2);


/*Ejercicio 4 Elabore una función que llene un arreglo con 20 números de forma aleatoria 
(random), y que pida al usuario adivinar un número, si lo adivina mostrará un mensaje 
indicando que ganó, si no mostrará que perdió.*/
//arreglar haha
function adivinaNumero(n){
  let array = [];
  console.log(array);
  repeat(20, i=> {
    array.push(Math.floor((Math.random() * 10) + 1));
      if(n == array[i]){
        console.log("Ganaste");
      } else {
        console.log("Perdiste");
      }
  });
    
}

let n1 = 1;
adivinaNumero(n1);


/*Ejercicio 5 Palíndromo: Se dice que una palabra es palíndroma cuando se puede leer de 
la misma manera tanto de derecha a izquierda y viceversa. Crear una función en JavaScript
 que reciba como parámetro una palabra. La función debe retornar si la palabra es palíndroma
  o no.*/

  function ejercicio5(array)
  {
      let arre=arreglo.length;
      let reverse="";

      repeat((array.length)-i-1, i=> {
          if(array[i] != array[array.length-i-1]){
            console.log("No es palindromo");
          }
      });

            console.log("Es palindromo");

  }

  let palabra = "anitalavalagordalagartonanotragaladrogalatina";
  ejercicio5(palabra);


/*Ejercicio 6 Ordenamiento de array: Crear una función en JavaScript que ordene los 
elementos de un Array en orden ascendente.*/

function ordenArray(array){
    repeat(array.lengh -1 , i=> {
        if(array[i]>array[i+1]){
            
        }
    });
}

let arreglo3 = [4,5,9,8,1]
ordenArray(arreglo3);

/*Ejercicio 7 Fibonacci: La serie Fibonacci es una serie matemática muy reconocida,
 la cual tiene como primeros 10 términos: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34. Realice 
 una función en JavaScript que reciba un número n como argumento y muestre la serie
  hasta el enésimo término.*/

  /*Function fibonacci(num){
    var a = 1, b = 0, temp;
  
    while (num >= 0){
      temp = a;
      a = a + b;
      b = temp;
      num--;
    }
  
    return b;
  }*/

/*Ejercicio 8 Conversor decimal-binario: Crear una función en JavaScript, que reciba 
como parámetro un entero positivo. La función debe devolver el valor en binario.*/

let decimal = 255;
let decimalEnBinario = decimal.toString(2); 
console.log("El número decimal %s en binario es %s", decimal, decimalEnBinario);

/*Ejercicio 9 Análisis de una circunferencia: Crear una función en JavaScript que pida
 por el teclado el radio de un circunferencia, y calcule el área de esta y lo retorne,
  si el radio ingresado es negativo o cero, retornará -1.*/

  
/*Ejercicio 10 Valor absoluto: Escribir una funcion en JavaScript que, dado un número 
real cualquiera, encuentre su valor absoluto y lo retorne. El valor absoluto de un 
número x es igual a x si x > 0, y a -x si x es menor o igual a 0.*/

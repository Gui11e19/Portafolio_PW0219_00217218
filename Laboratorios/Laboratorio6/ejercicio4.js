
/*Ejercicio 4 Elabore una función que llene un arreglo con 20 números de forma aleatoria 
(random), y que pida al usuario adivinar un número, si lo adivina mostrará un mensaje 
indicando que ganó, si no mostrará que perdió.*/
//arreglar haha


function adivinador(numero){
    valores= [];
    victoria= false;
    var numeroAleatorio;

    typeof(variable);

    for(var i=0; i < 20; i++){
        numeroAleatorio = (Math.floor(Math.random()*100)+1);
        valores.push(numeroAleatorio);
    }

    for (var j=0; j<20; j++){
        if(numero === valores[j]){
            console.log('Has Ganado');
            victoria= true;
            break;
        }
    }

    if (victoria === false)
        console.log('Has perdido')

    return valores;

}
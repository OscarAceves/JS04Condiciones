console.log("hola");

/**
Operador

Un elemento que nos permite ralizar una operación entre dos o mas elementos.

-Operadores aritméticos (+, -, *, /)
-Operadores de asignación (=, ==, === / asignación, igualdad, igualdad estricta)
-Operadores de cadenas (toLowerCase, toUpperCase, trim, toString, concat)
-Operadores lógicos (&&, ||, !)
-Operadores de comparación (<, >, <=, >=, ==, ===)


*/

/*Operadores aritméticos

Son operadores que nos permiten tomar valores numericos como sus operandos y retornar un valor único. Corresponden a operaciones matemáticas.
 
    //Suma (+)
    //Resta (-)
    //Multiplicación (*)
    //División (/)
    //Residuo (%)
    //Exponenciación (**)
    //Incremento (++)
    //Decremento (--)
*/

// //Suma (+): Se utiliza para sumar dos números
// let resultado = 5 + 3;// resultado contendrá el valor 8

// //Resta (-): Se utiliza para restar un número de otro
// let resultado1 = 10 - 4; // resultado1 contendrá el valor 6

// //Multiplicación (*): Se utiliza para multiplicar 2 números
// let resultado2 = 6 * 3; //resultado2 contendrá el valor 6

// //División (/): Se utiliza para dividirun numero entre otro. La división por cero produce un valor especial llamado "infinity" (infinito)
// let resultado3 = 15 / 3; //resultado3 contendrá el valor 5

// //Módulo (%): Se utiliza para obtener el resto de una división entre dos números.
// let resultado4 = 10 % 3; // resultado4 contendrá el valor de 1 (el resto de 10 dividido entre 3)

// //Incremento (++): Se utiliza para aumentar en 1 el valor de una variable.
// let numero = 5;
// numero++; //Ahora numero contendrá el valor 6

// //Decremento (--): Se utiliza para disminuir en 1 el valor de una variable.
// let numero1 = 8;
// numero--; //Ahora numero contendrá el valor 7


// // Doble igual / Igualdad Abstracta
// 5 == "5"; // true, ya que JS convierte la cadena "5" a un número antes de la comparación.

// // Triple igual / Igualdad Estricta
// 5 === "5"; // false, no son del mismo tipo y los tipos también difieren.

//Variables
let numero1 = 10;
let numero2 = 2;
let numero3 = "5";

//Operaciones
suma = numero1 + numero2;
resta = numero1 - numero2;
multiplicacion = numero1 * numero2;
division = numero1 / numero2;
residuo = numero1 % numero2;
exponenciación = 10 ** 2; //Obsoleto porque ya existe un método para esto

//Los valores sis e pueden reasignar
incremento = numero1++;
decremento = numero2--;
    //Forma extensa de un incremento
numero1 = numero1 + 1;


numero1 += 10;//20 Suma y reasigna al mismo tiempo


//Impresiones en pantalla
console.log("Suma de 10 + 2 ", suma);
console.log("Suma de 10 + 2 ", numero1 + numero2);
console.log("Suma de 10 + 2 ", 10 + 2);
console.log("Resta de 10 - 2 ", resta);



//Conversión grados Celsius a Fahrenheit

let temperaturaCelsius = prompt("Introduce la temperatura en °Celsius");

function conversionCtoF(temperatura){
    let temperaturaFahrenheit = (temperatura * 1.8) + 32;
    return temperaturaFahrenheit;
}

console.log(conversionCtoF(temperaturaCelsius));



/*Operadores de comparación


Operadores que nos permiten comprar 2 datos y al hacerlo obtendremos un valor booleano (true o false)

    - mayor que (>)
    - menor que (<)
    - mayor o igual que (>=)
    - menor o igual que (<=)
    - igual (==)
    - estrictamente igual (===)
    - no es igual (diferente) (!=)
    - no es estrictamente igual (!==)



Igual (==)

Sirve para comparar que dos valores sean iguales



*/


let numeroComparacion1 = 23;
let numeroComparacion2 = 13;
let numeroComparacion3 = 13;
let numeroComparacion4 = "13";

// 13 == "13" //true
// 13 === "13" //false
// 23 > 12 true
// 23 < 12 false

let edadFelipe = 31;

if (edadFelipe > 18){
    console.log("Puedes ir a la fiesta");
}else{
    console.log("Te quedas en casa");
}

// Dos negaciones es una afirmación
// !vamos a comer (no vamos a comer)
// !no me gusta java (me gusta java)



/*
Operadores de asignación

Se utilizan para asignar un valor a una variable. Se usa el operador = 

let edad = 31;
let saldo = 0;
*/


/*
Operadores lógicos

Nos devuelven un resultado a partir de que se cumpla o no una condición, el resultado es booleano (true o false).

    - AND (&&) : Sirve para determinar si dos expresiones son verdaderas. Si ambas son verdaderas, el resultado es verdadero. Si alguna de ellas es falsa, todo el resultado es falso. Si ambas son falsas, todo es falso.
*/

let tengoCrush = true;
let crushMeQuiere = true;

if (tengoCrush && crushMeQuiere){
    console.log("Feliz");
}else{
    console.log("Triste")
}


/*
    
    - OR || : Sirve para determinar si dos expresiones son falsas. Si cualquiera de las dos afirmaciones es verdadera, todo es verdadero. Si las dos son falsas, todo es falso.

*/

let chilaquilesVerdes = true;
let carneEnSuJugo = false;

if (chilaquilesVerdes || carneEnSuJugo){
    console.log("Se desayuna chido");
}else {
    console.log("No se desayuna");
}



/*

    - NOT (!) : Regresa lo contrario de lo que evaluamos

*/

//Codigo con errores
if (edadFelipe >= 18 && saldoFelipe = !0) || (edadFelipe >=18 && amigosInvitan = true){
    console.log("Se va a la fiesta");
}
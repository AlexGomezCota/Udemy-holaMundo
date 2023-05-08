
const sumar = 1 + 2
const restar = 1 - 2
const multiplicar = 2 * 3
const dividir = 9 / 3

console.log(sumar, restar, multiplicar, dividir)

const modulo = 10 % 3 //se divide y nos dá el residuo

console.log(modulo)

let num = 5
num++
num++
num--
num--
num+=3
num-=3
num *= 2
num /= 2


console.log(num);

// operadores de comparacion

const resultado1 = 5 === 6
const resultado2 = 5 == "5"
const resultado3 = 5 < 6
const resultado4 = 5 < 5
const resultado5 = 5 > 6
const resultado6 = 5 > 5
const resultado7 = 5 <= 5
const resultado8 = 5 <= 6
const resultado9 = 5 >= 5
const resultado10 = 5 >= 6
const resultado11 = 5 !== "5"
const resultado12 = 5 != "5"
console.log(resultado1, resultado2, resultado3, resultado4, resultado5,resultado6,
            resultado7, resultado8, resultado9, resultado10, resultado11, resultado12)

//operadores logicos (or ||) (and &&) (not !)

const resultadoOr = false || true || "Hola" || "Mundo"

console.log(resultadoOr);

const resultadoAnd = true && true && true && true && false

console.log(resultadoAnd);

const resultadoNot = !false

console.log(resultadoNot);

// or toma el primer valor true, y ese utiliza
// or toma el primer valor false, y ese utiliza
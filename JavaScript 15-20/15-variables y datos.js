
console.log("Hola Mundo")

// Tipos de datos en JS
// String: cadena de caracteres. "a" "12"
// Boolean: true false.
// Nul: nulo.
// Number: 1 23 43 31 909.
// Undefined: no ha sido definido.
// Object: objeto. Agrupan y hacen estructuras de varios tipos de datos

//Definicion de variables
//-var-
//let
//const

let miPrimeraVariable = "Mi primera variable!"
console.log(miPrimeraVariable);

// mutabilidad

miPrimeraVariable = "esto ya cambió"
console.log(miPrimeraVariable);

// Boolean

let miBoolean = true
let miOtroBoolean = false
let miNumero = 0
let miNumero2 = 12
let miNumero3 = -258

console.log (miNumero, miNumero2, miBoolean, miPrimeraVariable);

let Undef
console.log (Undef)

let nulo = null

console.log(nulo);

//Objeto: es una agupacion de datos; estos datos hacen sentido entre sí.
//los objetos no tienen variables, tienen propiedades

//Objeto vacio
const miPrimerObjeto = {}

//objeto
const miObjeto ={
    unNumero: 12,
    unString: "esta cadena de caracteres",
    unaCondicion: true,
}
console.log(miObjeto);
console.log(miObjeto.unString);

//Array
const arrVacio = []
const arr = [1, 2, "hola","mundo", miObjeto]

console.log (arrVacio, arr);

arr.push(5)
console.log (arrVacio, arr);

arrVacio.push(5)
arrVacio.push(3)
arrVacio.push(1)
arrVacio.push("hi")
arrVacio.push(miPrimeraVariable)
console.log (arrVacio)
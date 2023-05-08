
function iterar(arreglo){
    for (let i = 0; i < arreglo.length; i++){
    console.log(arreglo[i]);
    };
};

const numeros = [1, 2, 3, 4, 5];
const nombres = ["Pedro", "Juan", "Felipe", "Chanchito feliz", "Chanchito triste"];

iterar(numeros);
iterar(nombres);

function suma(a, b){
    return a+b ;
};

const resultadoSuma1 = suma(1, 2)
const resultadoSuma2 = suma(5, 6)
const resultadoSuma3 = suma(resultadoSuma1, resultadoSuma2)

console.log(resultadoSuma1)
console.log(resultadoSuma2)
console.log(resultadoSuma3)

//_______funciones callback______


function sumaCB(a, b, cb){
    const resultado = a+b
    cb(resultado)
}

function callBack(result){
    console.log("Resultado", result);
} 

sumaCB(2, 3, callBack)

//____(fat) arrow functions____

const funcionFlecha = (a, b ) => a + b
console.log(funcionFlecha (1, 2))

const otraFlecha = (a, b) => {
    return a+b
}
console.log(otraFlecha(1,2))

//________-funciones anonimas_________

sumaCB(2, 3, function(resultado){
    console.log("soy una funcion anonima y el resultado es", resultado)
})
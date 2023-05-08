//______-control de flujo_______

if ( true ) {
    console.log("estoy dentro del if")
}

const edad = 10

if ( edad > 5 && edad < 18 ) {
    console.log("Adelante, puedes jugar");}
    else{
        console.log("Lo siento, no puedes jugar")
    }

//_________while__________

let incremento = 0

while (incremento > 5) {
    console.log(variable);
    incremento++
}
//se hace cuando vale 0, 1, 2 ,3 4, y se detiene.

//_______switch________

let numeroCase = 1 

switch ( numeroCase )  {
    case 1:{
        console.log("Soy el caso 1");
        break;
    }
    case 2:{
        console.log("Chanchito feliz");
        break;
    }    
    case 3:{
        console.log("Chanchito triste");
        break;
    }
    default:{
        console.log("Ya no hay cahnchitos");
    }
}

// puntoPartida; condicion; icremento ; (y se repite hasta que deba detenerse) 
for (let i = 0; i < 10; i++) { // en la llave se indica qué hace el ciclo
    console.log(i);
}

const numeros = [1, 2, 3, 4, 5]

console.log(numeros[0])

for (let i = 0; i < numeros.length; i++){
    console.log(numeros[i])
}
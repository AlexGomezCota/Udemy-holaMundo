const toDos = [];


//esto lo unico que hace es que le indica ajs que debe esperar a que todo el html cargue
//y luego ya puede ejecutarse
window.onload = () =>{

    const render = () => {
        const toDoList = document.getElementById("toDo-list")
        const toDosTemplate = toDos.map (i => "<li>" + i + "</li>");
        toDoList.innerHTML = toDosTemplate.join("");//join toma los elementos del array y los hace texto
        const elementos = document.querySelectorAll("#toDo-list li");//esto le menciona a queryselector que buscamos que queremos los elementos de un listado que se encuentran dentro del id toDo-list
        elementos.forEach((elemento, indice) => {
            elemento.addEventListener("click", () => { 
                elemento.parentNode.removeChild(elemento)//esto es para que se elimine el elemento al hacer clic
                toDos.splice(indice, 1) //splice elimina elementos de un array. 
               //dentro del parentesis (numero de elementos,)
               render()
    })
        
        
         
            })
        }
    }

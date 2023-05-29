const toDos = [];


//esto lo unico que hace es que le indica ajs que debe esperar a que todo el html cargue
//y luego ya puede ejecutarse
window.onload = () =>{

    const form = document.getElementById("toDo-form");
    form.onsubmit = (event) => {
        event.preventDefault();//esto lo que hace es prevenit que se refresque cada que le damos submit
        const toDo = document.getElementById("toDo");
        const toDoText = toDo.value;
        toDo.value = "";
        toDos.push(toDoText); 
        const toDoList = document.getElementById("toDo-list")
        toDoList.innerHTML = "";//esto evita que cada vez que el ciclo for se repita, se dupliquen los elementos (como el juego de memoria donde alguien dice 1 cosa, y el siguiente debe decir la del anterior + una nueva)

        for(let i = 0; i < toDos.length; i++){
            toDoList.innerHTML += "<li>" + toDos[i] + "</li>";
        }
    }
}






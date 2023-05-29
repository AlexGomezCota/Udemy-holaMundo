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
        const toDosTemplate = toDos.map (i => "<li>" + i + "</li>");
        toDoList.innerHTML = toDosTemplate.join("")//join toma los elementos del array y los hace texto
        
    }
}
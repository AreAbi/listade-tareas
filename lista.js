function añadir(){
    let nuevaTarea=document.getElementById("nuevaTarea").value;
    
    localStorage.setItem("tarea", nuevaTarea);
    document.getElementById("nuevaTarea").value='';

   let getTarea=localStorage.getItem("tarea");

    let insertarTarea=document.createElement("li");
    let contenido=document.createTextNode(getTarea);
    insertarTarea.appendChild(contenido);
    document.getElementById("listaT").appendChild(insertarTarea);
    
}

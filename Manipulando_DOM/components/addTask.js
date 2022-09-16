import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";
import { displayTask } from "./displayTask.js";

/**Adcion de la tarea a la lista */
const addTask = (evento) => {
    evento.preventDefault();

    const lista = document.querySelector("[data-lista]");
    const input = document.querySelector("[data-form-input]");
    const calendar = document.querySelector("[data-form-date]");

    const contenidoTarea = input.value;
    const date = calendar.value;
    const fechaFormateada = (moment(date).format("DD MM YYYY"));

    if (contenidoTarea === "" || date === ""){
        return;
    };
    
    input.value = "";
    calendar.value= "";

    /**Creación de Obj para almacenar y almacenado*/
    const listaTareas = JSON.parse(localStorage.getItem('task')) || [];
    const tareaObj = {
        contenidoTarea,
        fechaFormateada
    };

    listaTareas.push(tareaObj);
    localStorage.setItem('task', JSON.stringify(listaTareas));

    lista.innerHTML = "";
    displayTask();
};



/**Creacion de la tarea a agregar */
export const createTask = ({contenidoTarea, fechaFormateada}) =>{

    /**Creacion del li y claseado */
    const nuevaTarea = document.createElement("li");
    nuevaTarea.classList.add("card");

    /**Creacion del contenedor de iconos y tarea*/    
    const contenedorTarea = document.createElement("div");

    /**Creación de la fecha */
    const elementoFecha = document.createElement("span");
    elementoFecha.innerHTML = fechaFormateada;

    /**Creación de la tarea y claseado */

    const spanTarea = document.createElement("span");
    spanTarea.classList.add("task");
    spanTarea.innerText = contenidoTarea;

    /**Ensamblado de la tarea y el check icon */
    contenedorTarea.appendChild(checkComplete());
    contenedorTarea.appendChild(spanTarea);

    /**Adicion de la tarea y la papelera a la lista */
    nuevaTarea.appendChild(contenedorTarea);
    nuevaTarea.appendChild(elementoFecha);
    nuevaTarea.appendChild(deleteIcon());

    return nuevaTarea;
};

export default addTask;
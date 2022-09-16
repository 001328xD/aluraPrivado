import addTask from "./components/addTask.js";
import {displayTask} from "./components/displayTask.js";

/** Abre IIFE*/
( () => {
const btnAdd = document.querySelector("[data-task-create]");

/**Funciones */
btnAdd.addEventListener("click", addTask);

displayTask();

/**Cierra IIFE y la ejecuta */
})();

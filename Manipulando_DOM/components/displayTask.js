import { createTask } from "./addTask.js";
import fechaTitulo from "./fechaTitulo.js";
import { fechasUnicas, ordenarFechas } from "../services/fechasUnicas.js";

export const displayTask = () =>{
    const lista = document.querySelector("[data-lista]");
    const listaTareas = JSON.parse(localStorage.getItem("task")) || [];
    const listaFechas = (fechasUnicas(listaTareas));
    ordenarFechas(listaFechas);

    listaFechas.forEach(date =>{
        lista.appendChild(fechaTitulo(date));
        const dateTemp = moment(date, 'DD/MM/YYYY');
        listaTareas.forEach(task => {
            const dateTask = moment(task.fechaFormateada, 'DD/MM/YYYY')
            const diff = dateTask.diff(dateTemp);
            if (diff === 0){
            lista.appendChild(createTask(task));
            };
        });
    });
};
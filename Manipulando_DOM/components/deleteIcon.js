/**Creación del icono de borrado */
const deleteIcon = () => {
    const trashCan = document.createElement("i");
    trashCan.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
    trashCan.addEventListener("click", eliminarTarea);

    return trashCan;
};

/**Eliminar tarea  */
const eliminarTarea = (evento) => {
    const referencia = evento.target.parentElement;
    referencia.remove();
};

export default deleteIcon;
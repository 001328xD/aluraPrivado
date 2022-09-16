/**Creación del Icono check y claseado*/
const checkComplete = () => {
    const checkSign = document.createElement("i");
    checkSign.classList.add("far", "fa-check-square", "icon");
    checkSign.addEventListener("click", toggleCheck);

    return checkSign;
};

/**Toggle del color del check */
const toggleCheck = (evento) => {    
    const seleccion = evento.target;
    seleccion.classList.toggle("far");
    seleccion.classList.toggle("fas");
    seleccion.classList.toggle("completeIcon");
};

export default checkComplete;
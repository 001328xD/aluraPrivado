export const fechasUnicas = (listaTareas) => {
    const uniqueDates = [];

    listaTareas.forEach((task) =>{
        if (!uniqueDates.includes(task.fechaFormateada)){
            uniqueDates.push(task.fechaFormateada);
        };
    });

    return uniqueDates;
};

export const ordenarFechas = (listaFechas) => {
    const orderDatesList = listaFechas.sort((a,b) => {
        const firstDate = moment(a, "DD/MM/YYYY");
        const secondDate = moment(b, "DD/MM/YYYY")

        return firstDate - secondDate;
    });
    return orderDatesList;
};

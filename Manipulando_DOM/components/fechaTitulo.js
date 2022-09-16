export default (date) => {
    const fechaTitulo = document.createElement('li');
    fechaTitulo.innerHTML = date;
    fechaTitulo.classList.add('fecha');

    return fechaTitulo;
};
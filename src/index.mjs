// Obtener referencia a la div resultbox
const resultBox = document.querySelector('.resultbox');

// Funcion para manejar el clic en los botones
const buttonClick = (event) => {
    const clickedButtonValue = event.target.textContent;
    console.log("Button clicked:", clickedButtonValue);

    // Obtener el contenido actual de la resultbox
    let currentResult = resultBox.textContent;

    // Concatenar el valor del boton clicado al contenido actual de la resultbox
    currentResult += clickedButtonValue;
    // console.log("Current result:", currentResult);

    // Actualizar el contenido de la resultbox con el nuevo valor
    resultBox.textContent = currentResult;
};

// Seleccionar todos los botones y agregarles un event listener
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', buttonClick);
});
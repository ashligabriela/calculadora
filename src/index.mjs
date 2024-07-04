const btnOne = document.getElementById("1");
const btnTwo = document.getElementById("2");
const btnThree = document.getElementById("3");
const btnFour = document.getElementById("4");
const btnFive = document.getElementById("5");
const btnSix = document.getElementById("6");
const btnSeven = document.getElementById("7");
const btnOcho = document.getElementById("8");
const btnNine = document.getElementById("9");
const btnZero = document.getElementById("0");
const btnPoint = document.getElementById(".");
const inputBox = document.getElementsByClassName("resultbox")[0];
const btnClean = document.getElementById("clean");
const btnAdd = document.getElementById("add");
const btnSubtract = document.getElementById("subtract");
const btnEqual = document.getElementById("equal");

let currentOperator = null; //para realizar un seguimiento del operador actual seleccionado (+ o -)
let firstOperand = null; //para almacenar el primer operando cuando se selecciona un operador (+ o -)

function onClick(evento) {
  const btnValue = evento.target.textContent;

  if (evento.target === btnClean) {
    inputBox.textContent = "0";
    currentOperator = null;
    firstOperand = null;
  } else if (evento.target === btnAdd || evento.target === btnSubtract) {
    if (firstOperand === null) {
      firstOperand = parseFloat(inputBox.textContent);
      currentOperator = btnValue;
      inputBox.textContent = "0";
    } else {
      // Calculate the result based on the current operator
      const secondOperand = parseFloat(inputBox.textContent);
      if (currentOperator === "+") {
        firstOperand += secondOperand;
      } else if (currentOperator === "-") {
        firstOperand -= secondOperand;
      }
      currentOperator = btnValue;
      inputBox.textContent = "0";
    }
  } else if (evento.target === btnEqual) {
    const secondOperand = parseFloat(inputBox.textContent);
    if (currentOperator === "+") {
      const result = firstOperand + secondOperand;
      inputBox.textContent = result.toString(); // Mostrar el resultado
    } else if (currentOperator === "-") {
      const result = firstOperand - secondOperand;
      inputBox.textContent = result.toString(); // Mostrar el resultado
    }
    // Reiniciar las variables para futuras operaciones
    currentOperator = null;
    firstOperand = null;
  } else {
    if (inputBox.textContent === "0") {
      inputBox.textContent = btnValue;
    } else {
      inputBox.textContent += btnValue;
    }
  }
}

btnOne.addEventListener("click", onClick);
btnTwo.addEventListener("click", onClick);
btnThree.addEventListener("click", onClick);
btnFour.addEventListener("click", onClick);
btnFive.addEventListener("click", onClick);
btnSix.addEventListener("click", onClick);
btnSeven.addEventListener("click", onClick);
btnOcho.addEventListener("click", onClick);
btnNine.addEventListener("click", onClick);
btnZero.addEventListener("click", onClick);
btnPoint.addEventListener("click", onClick);
btnClean.addEventListener("click", onClick);
btnAdd.addEventListener("click", onClick);
btnSubtract.addEventListener("click", onClick);
btnEqual.addEventListener("click", onClick);

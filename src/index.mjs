const btnOne = document.getElementById("1");
const inputBox = document.getElementsByClassName("resultbox")[0];

function onClikc(evento) {
  const btnValue = evento.target.textContent;
  if (inputBox.textContent === "0") {
    inputBox.textContent = btnValue;
  } else {
    inputBox.textContent = inputBox.textContent + btnValue;
  }
}
btnOne.addEventListener("click", onClikc);
const btnOne = document.getElementById("1");
const inputBox = document.getElementsByClassName("resultbox")[0];
const btnClean = document.getElementById("clean");

function onClikc(evento) {
  const btnValue = evento.target.textContent;

  if (evento.target === btnClean) {
    inputBox.textContent = "0";
  }else{
  if (inputBox.textContent === "0") {
    inputBox.textContent = btnValue;
  } else {
    inputBox.textContent = inputBox.textContent + btnValue;
  }
}
}
btnOne.addEventListener("click", onClikc);
btnClean.addEventListener("click",onClikc);
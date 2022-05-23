const controles = document.getElementById("controles");
const cssText = document.querySelector(".css");
const botao = document.querySelector(".btn");

controles.addEventListener("change", handleChange);
const handleStyle = {
  element: botao,
  backgroundColor: " azul",
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  height(value) {
    this.element.style.height = value + "px";
  },
  width(value) {
    this.element.style.width = value + "px";
  },
  texto(value) {
    this.element.innerText = value;
  },
  color(value) {
    this.element.style.color = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + "px";
  },
  border(value) {
    this.element.style.border = value;
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + "rem";
  },
};

function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;

  saveValues(name, value);
  handleStyle[name](value);
  showCss();
}

function saveValues(nome, value) {
  localStorage[nome] = value;
}

function setValues() {
  const properties = Object.keys(localStorage);
  properties.forEach((properties) => {
    handleStyle[properties](localStorage[properties]);
    controles.elements[properties].value = localStorage[properties];
  });
  showCss();
}

setValues();

function showCss() {
  cssText.innerHTML =
    "<span>" + botao.style.cssText.split("; ").join(";</span><span>");
}

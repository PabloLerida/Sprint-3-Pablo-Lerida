const eCardName = document.querySelector('#errorCardName');
let secondForm = document.getElementById("#secondForm");
let firstForm = document.getElementById("#firstForm");
/*let btn = document.querySelector("#boton");

btn.onclick = function () {
  alert("hola mundo");
};*/
const jholderName = document.querySelector("#holderName");
const jfrontName = document.querySelector("#frontName");

jholderName.oninput = function (event) {
  jfrontName.innerHTML = event.target.value;
};
/*-----------------------------------------------------------*/
const cardNumber = document.querySelector("#cardNumber");
const frontNumber = document.querySelector("#frontNumber");

cardNumber.oninput = function (event) {
  frontNumber.innerHTML = event.target.value;
};
/*-----------------------------------------------------------*/
const month = document.querySelector("#month");
const frontMonth = document.querySelector("#frontMonth");

month.oninput = function (event) {
  frontMonth.innerHTML = event.target.value;
};
/*-----------------------------------------------------------*/
const year = document.querySelector("#year");
const frontYear = document.querySelector("#frontYear");

year.oninput = function (event) {
  frontYear.innerHTML = event.target.value;
};
/*-----------------------------------------------------------*/
const cvcode = document.querySelector("#cvcode");
const cvcNumber = document.querySelector("#cvcNumber");

cvcode.oninput = function (event) {
  cvcNumber.innerHTML = event.target.value;
};
/*-----------------------------------------------------------*/
/*function alternarDivs(divAparecer) {
  let firstForm = document.getElementById("firstForm");
  let secondForm = document.getElementById("secondForm");

  if (divAparecer == true) {
    secondForm.classList.remove("hide");
    firstForm.classList.add("hide");
  } else {
    firstForm.classList.remove("hide");
    secondForm.classList.add("hide");
  }
} no logro que me alternen usando este*/

function toggleDivs() {
  let firstForm = document.getElementById("firstForm");
  let secondForm = document.getElementById("secondForm");

  firstForm.style.display = "none";
  secondForm.style.display = "block";
}

function mostrarPrimerFormulario() {
  let firstForm = document.getElementById("firstForm");
  let secondForm = document.getElementById("secondForm");

  firstForm.style.display = "block";
  secondForm.style.display = "none";
}
/*const btn = document.getElementById("#btn");*/
/*btn.onclick = function (event) {
  // Se declaran arrays para almacenar los errores
  const erroresCardNumber = [];
  const erroresHolderName = [];
  const erroresCvcode = [];
  const erroresMonth = [];
  const erroresYear = [];

  // Se limpian los errores
  cardNumber.innerHTML = "";

  if (cardNumber.value.length == 0) {
    erroresCardNumber.push("Este campo no debe estar vacío");
  }

  if (cardNumber.value.length != 16) {
    erroresCardNumber.push("El número de tarjeta debe tener 16 dígitos");
  }

  if (isNaN(cardNumber.value)) {
    erroresCardNumber.push("Este campo solo acepta números");
  }

  // Se iteran los errores para mostrarlos en el HTML
  for (let i = 0; i < erroresCardNumber.length; i++) {
    eCardNumber.innerHTML += `<p>${erroresCardNumber[i]}</p>`;
  }

  // Se valida si los arrays de errores están vacíos
  if (
    erroresCardNumber.length == 0 &&
    erroresCardHolder.length == 0 &&
    erroresCVC.length == 0 &&
    erroresMM.length == 0 &&
    erroresYY.length == 0
  ) {
    sCompletado.classList.remove("oculto");
    sFormulario.classList.add("oculto");
  }
};*/



//NAME
const iCard_name = document.querySelector('#holderName');
let frontName_value = document.querySelector('#frontName');

const jbtn = document.querySelector('#btn');
jbtn.onclick = function (event) {
const errorCardName = [];
 eCardName.innerHTML = "";
 //NAME
    if (jholderName.value.length == 0) {
        errorCardName.push("Can't be blank.");
    }

    for (let i = 0; i < errorCardName.length; i++) {
        eCardName.innerHTML += <p style="color: red;">${errorCardName[i]}</p>;
    }
if (errorCardName.length == 0){
 firstForm.classList.add('hidden');
        secondForm.classList.remove('hidden');
    }
}
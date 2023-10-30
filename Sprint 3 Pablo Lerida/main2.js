/*constantes de inputs*/
const inpHolderName = document.querySelector("#holderName");
const inpCardNumber = document.querySelector("#cardNumber");
const inpMonth = document.querySelector("#month");
const inpYear = document.querySelector("#year");
const inpCvcode = document.querySelector("#cvcode");

/*------------------------------------------------------------*/

/*constantes de tarjetas*/
const cardFrontName = document.querySelector("#frontName");
const cardFrontNumber = document.querySelector("#frontNumber");
const cardFrontMonth = document.querySelector("#frontMonth");
const cardFrontYear = document.querySelector("#frontYear");
const cardCvcNumber = document.querySelector("#cvcNumber");

/*------------------------------------------------------------*/

/*constantes de error
const errorHolderName = document.querySelector("#holderName");
const errorCardNumber = document.querySelector("#cardNumber");
const errorMonth = document.querySelector("#month");
const errorYear = document.querySelector("#year");
const errorCvcode = document.querySelector("#cvcode");

/*------------------------------------------------------------*/

/* constantes botones */
const bConfirm = document.querySelector("#buttonConfirm");
const bContinue = document.querySelector("#buttonContinue");

/*------------------------------------------------------------*/
const resetForm = document.querySelector("#formReset");
/* errores span */

const errorNumberSpan = document.querySelector("#errorNumber");
const errorNameSpan = document.querySelector("#errorName");
const errorMonthSpan = document.querySelector("#errorMonth");
const errorYearSpan = document.querySelector("#errorYear");
const errorCvcSpan = document.querySelector("#errorCvc");

/* Divs ocultos*/
const divFormulario = document.querySelector("#div1");
const divthanks = document.querySelector("#div2");

/* Input Cardholder name*/
inpHolderName.oninput = function (event) {
  cardFrontName.innerHTML = event.target.value;
};
/* input Card Number*/
inpCardNumber.oninput = function (event) {
  cardFrontNumber.innerHTML = event.target.value;
};
/* Input month*/
inpMonth.oninput = function (event) {
  cardFrontMonth.innerHTML = event.target.value;
};
/* Input year */
inpYear.oninput = function (event) {
  cardFrontYear.innerHTML = event.target.value;
};
/* Input CVC */
inpCvcode.oninput = function (event) {
  cardCvcNumber.innerHTML = event.target.value;
};

/*------------------------------------------------------------*/

/* Validaciones */
bConfirm.onclick = function (event) {
  // Se declaran arrays para almacenar los errores
  const erroresCardNumber = [];
  const erroresCardHolder = [];
  const erroresCVC = [];
  const erroresMM = [];
  const erroresYY = [];

  // Se limpian los errores
  errorNumberSpan.innerHTML = "";

  if (inpCardNumber.value.length == 0) {
    erroresCardNumber.push("Este campo no debe estar vacío");
  }

  if (inpCardNumber.value.length != 16) {
    erroresCardNumber.push("El número de tarjeta debe tener 16 dígitos");
  }

  if (isNaN(inpCardNumber.value)) {
    erroresCardNumber.push("Este campo solo acepta números");
  }

  // Se iteran los errores para mostrarlos en el HTML
  for (let i = 0; i < erroresCardNumber.length; i++) {
    errorNumberSpan.innerHTML += `<p>${erroresCardNumber[i]}</p>`;
  }
  /*------------------------------------------------------------*/

  errorNameSpan.innerHTML = "";

  if (inpHolderName.value.length == 0) {
    erroresCardHolder.push("Este campo no debe estar vacío");
  }

  // Se iteran los errores para mostrarlos en el HTML
  for (let i = 0; i < erroresCardHolder.length; i++) {
    errorNameSpan.innerHTML += `<p>${erroresCardHolder[i]}</p>`;
  }

  /*--------------------------------------------------------- */
  errorMonthSpan.innerHTML = "";

  if (inpMonth.value.length == 0) {
    erroresMM.push("Este campo no debe estar vacío");
  }

  if (inpMonth.value.length != 2) {
    erroresMM.push("El mes debe tener 2 dígitos");
  }

  if (isNaN(inpMonth.value)) {
    erroresMM.push("Este campo solo acepta números");
  }

  // Se iteran los errores para mostrarlos en el HTML
  for (let i = 0; i < erroresMM.length; i++) {
    errorMonthSpan.innerHTML += `<p>${erroresMM[i]}</p>`;
  }
  /*---------------------------------------------------------

*/
  errorYearSpan.innerHTML = "";

  if (inpYear.value.length == 0) {
    erroresYY.push("Este campo no debe estar vacío");
  }

  if (inpYear.value.length != 2) {
    erroresYY.push("El año debe tener 2 dígitos");
  }

  if (isNaN(inpYear.value)) {
    erroresYY.push("Este campo solo acepta números");
  }

  // Se iteran los errores para mostrarlos en el HTML
  for (let i = 0; i < erroresYY.length; i++) {
    errorYearSpan.innerHTML += `<p>${erroresYY[i]}</p>`;
  }
  /*---------------------------------------------------------

*/
  errorCvcSpan.innerHTML = "";

  if (inpCvcode.value.length == 0) {
    erroresCVC.push("Este campo no debe estar vacío");
  }

  if (inpCvcode.value.length != 3) {
    erroresCVC.push("El CVC debe tener 3 dígitos");
  }

  if (isNaN(inpCvcode.value)) {
    erroresCVC.push("Este campo solo acepta números");
  }

  // Se iteran los errores para mostrarlos en el HTML
  for (let i = 0; i < erroresCVC.length; i++) {
    errorCvcSpan.innerHTML += `<p>${erroresCVC[i]}</p>`;
  }
  /*----------------------------------------------------------*/

  // Se valida si los arrays de errores están vacíos
  if (
    erroresCardNumber.length == 0 &&
    erroresCardHolder.length == 0 &&
    erroresCVC.length == 0 &&
    erroresMM.length == 0 &&
    erroresYY.length == 0
  ) {
    divthanks.classList.remove("hide");
    divFormulario.classList.add("hide");
  }
};
bContinue.onclick = function (event) {
  divFormulario.classList.remove("hide");
  divthanks.classList.add("hide");
  resetForm.reset();
  location.reload();
};



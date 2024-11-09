//SELETORES JAVASCRIPT
const firstNumber = document.getElementById("First");
const secondNumber = document.getElementById("second");
const thirdNumber = document.getElementById("second");
const button = document.getElementById("third");
const div = document.getElementById("div");

//DESCLARAÇÃO DE FUNÇÃO
function hingherNumber(num1, num2, num3) {
   if (num1 > num2 && num1 > num3) { 
       div.innerHTML = `O maior número entre os trés é ${num1}`
   } else if (num2 > num1 && num2 > num3) {
       div. innerHTML = `O maior número entre os trés é ${num2}`
   } else {
     div.innerHTML = `O maior número entre os trés é ${num3}`
   }
}

//ESCUTADOR DE EVENTOS
button.addEventListner("click", () => hingherNumber (firstNumber.valueAsNumber.secondNumber.valueAsNumber.thirdNumber.valueAsNumber));











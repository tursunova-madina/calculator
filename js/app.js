"use strict";

const numberOne = document.querySelector("#numberOne");
const numberTwo = document.querySelector("#numberTwo");
const result = document.querySelector("#result");
const selectOperatons = document.querySelector("#selectOperation");

let select;

console.log(selectOperatons.value);

selectOperatons.addEventListener("change", () => {
  let resultN = 0;
  const number1 = Number(numberOne.value);
  const number2 = Number(numberTwo.value);

  if (selectOperatons.value === "-") {
    resultN = number1 - number2;
    // console.log(resultN);
  } else if (selectOperatons.value === "+") {
    resultN = number1 + number2;
  } else if (selectOperatons.value === "*") {
    resultN = number1 * number2;
  } else if (selectOperatons.value === "/") {
    resultN = number1 / number2;
  } else if (selectOperatons.value === "C") {
    resultN = "";
    numberTwo.value = "";
    numberOne.value = "";
  }
  // else{
  //   alert("Calculator can not do this operation");
  // }
  result.textContent = resultN;
});

// const weekDays = +prompt("Enter a number till 7 ");

// switch (weekDays) {
//   case 1:
//     alert("Monday");
//     break;
//   case 2:
//     alert("Tuesday");
//     break;
//   case 3:
//     alert("Wednesday");
//     break;
//   case 4:
//     alert("Thursday");
//     break;
//   case 5:
//     alert("Friday");
//     break;
//   case 6:
//     alert("Saturday");
//     break;
//   case 7:
//     alert("Sunday");
//     break;
//   default:
//     alert("There is no this kind of day !");
//     break;
// }

// variables
const button = document.getElementById("button");
const body = document.querySelector("body");
const card = document.querySelector(".card");
let dec = document.getElementById("decimal");
let bin = document.getElementById("binary");
let errorMsg = document.getElementById("error-msg");

// functions
button.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  card.classList.toggle("light-mode");
  errorMsg.classList.toggle("light-mode-p");
});

dec.onkeyup = () => {
  bin.value = parseInt(dec.value, 10).toString(2);
};
bin.onkeyup = () => {
  let binValue = bin.value;
  if (binValidator(bin.value)) {
    dec.value = parseInt(bin.value, 2).toString(10);
    errorMsg.textContent = "";
  } else {
    errorMsg.textContent = "Please Enter An Valid Binary Input";
  }
};
function binValidator(num) {
  for (let i = 0; i < num.length; i++) {
    if (num[i] != "0" && num[i] != "1") {
      return false;
    }
  }
  return true;
}
// inputs.forEach((input, index) => {
//   if (index === 0) {
//     input.onkeyup = () => {};
//   } else if (index === 1) {
//     input.onkeyup = () => {};
//   }
// });

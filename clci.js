let btn = document.querySelectorAll(".keys>div");
let bag = "";
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", onClicking);
}
function onClicking() {
  let targetNumber = event.target.innerHTML;

  if (targetNumber == "AC") {
    bag = "";
    document.querySelector(".display").innerHTML = bag;
  } else if (targetNumber == "=") {
    document.querySelector(".display").innerHTML = eval(bag);
  } else if (targetNumber == "DEL") {
    if (bag.length > 0) {
      bag = bag.slice(0, -1);
      document.querySelector(".display").innerHTML = bag;
    }
  } else {
    bag = bag + targetNumber;
    document.querySelector(".display").innerHTML = bag;
  }
}

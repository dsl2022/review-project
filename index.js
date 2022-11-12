const body = document.querySelector("body");
console.log(body);
const newDiv = document.createElement("div");
newDiv.textContent = "new div experiment";
console.log(newDiv);
newDiv.style.color = "white";
body.appendChild(newDiv);

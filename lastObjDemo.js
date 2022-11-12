const body = {
  element: [],
  style: {
    color: "",
  },
  appendChild: function appendChild() {
    console.log("I am David");
  },
};

body.element.push("div");
body.style.color = "red";
console.log(body.element);
console.log(body);

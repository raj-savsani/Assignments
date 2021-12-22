/*
Create a simple note taking web application with HTML/CSS/JS
user should be able take a simple note, and it should be seen on ui.
application should have a logo at top. import this logo in JS. bundle it through webpack
Bundle the other things like CSS, (fonts or icons if you have) with Webpack.
final output should work with bundled code from build folder
*/

import logo from "./logo.png";
import("./index.css");

let root = document.getElementById("root");

let logodiv = document.createElement("div");
logodiv.classList.add("logodiv");

let logoimg = document.createElement("img");
logoimg.src = logo;

logodiv.appendChild(logoimg);

let inputdiv = document.createElement("div");
inputdiv.classList.add("inputdiv");

let input = document.createElement("input");
input.placeholder = "Add Task Name";
input.autofocus = "true";

let addbutton = document.createElement("button");

addbutton.innerText = "Add Task";
let div = document.createElement("div");
addbutton.addEventListener("click", () => {
  let h3 = document.createElement("h2");
  h3.className = "task";
  //   h3.classList.add("task")
  h3.innerText = input.value;

  div.append(h3);
  input.value = null;
});

let resetbutton = document.createElement("button");
resetbutton.innerText = "Reset";
resetbutton.addEventListener("click", () => {
  div.innerHTML = null;
});

inputdiv.append(input, addbutton, resetbutton);

function add() {}

root.append(logodiv, inputdiv, div);

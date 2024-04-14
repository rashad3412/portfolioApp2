const body = document.querySelector("body");
const light = document.querySelector(".btn");
const dark = document.querySelector(".close");
const span = document.querySelector("span");
const header = document.querySelector("header");
const logo = document.querySelector(".logo");
const h1 = document.querySelector("h1");
const nav = document.querySelectorAll("ul a");
const floatContainer = document.querySelector(".float");
const float1 = document.querySelector(".float-1");
const dev = document.querySelector(".dev");
const home = document.querySelector(".home");
const about = document.querySelector(".about-p");
const ex = document.querySelector(".ex-content");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");
const contactMe = document.querySelector("#contact-me");
const phoneText = document.createElement("div");
const emailText = document.createElement("div");
const aboutBox = document.querySelector(".about");

light.addEventListener("click", () => {
  body.style.backgroundColor = "wheat";
  header.style.backgroundColor = "teal";
  span.style.backgroundColor = "wheat";
  span.style.color = "teal";
  logo.style.backgroundColor = "wheat";
  logo.style.color = "teal";
  dark.style.textalign = "center";
  h1.style.color = "white";
  floatContainer.style.color = "black";
  float1.style.color = "black";
  dev.style.backgroundColor = "teal";
  dev.style.color = "wheat";
  home.style.color = "black";
  about.style.color = "black";
  ex.style.color = "#505050";
  phone.style.backgroundColor = "teal";
  phone.style.color = "wheat";
  email.style.backgroundColor = "teal";
  email.style.color = "wheat";
  contactMe.style.color = "Black";
  for (i = 0; i < nav.length; i++) {
    nav[i].style.color = "white";
  }
});

dark.addEventListener("click", () => {
  body.style.backgroundColor = "teal";
  header.style.backgroundColor = "wheat";
  logo.style.backgroundColor = "teal";
  logo.style.color = "wheat";
  h1.style.color = "black";
  floatContainer.style.color = "white";
  float1.style.color = "white";
  dev.style.backgroundColor = "wheat";
  dev.style.color = "teal";
  home.style.color = "white";
  about.style.color = "white";
  ex.style.color = "white";
  phone.style.backgroundColor = "wheat";
  phone.style.color = "teal";
  email.style.backgroundColor = "wheat";
  email.style.color = "teal";
  contactMe.style.color = "white";
  for (i = 0; i < nav.length; i++) {
    nav[i].style.color = "black";
  }
});

function phoneTextDisplay() {
  phone.addEventListener("dblclick", () => {
    phone.appendChild(phoneText);
    phoneText.textContent = "123-456-7890";
    phone.removeAttribute("id");
    phone.classList.remove("fa-phone");
    phone.style.width = "135px";
    phone.style.height = "135px";
    phone.style.display = "flex";
    phone.style.textAlign = "center";
    phone.style.cursor = "pointer";
  });
}

function phoneOutDisplay() {
  phone.addEventListener("click", () => {
    phone.classList.add("fa-phone");
    phone.style.width = "75px";
    phone.style.height = "75px";
    phone.style.padding = "0px";
    phoneText.remove();
  });
}

function emailTextDisplay() {
  email.addEventListener("dblclick", () => {
    email.appendChild(emailText);
    emailText.textContent = "johnDoe@gmail.com";
    email.removeAttribute("id");
    email.classList.remove("fa-envelope");
    email.style.width = "135px";
    email.style.height = "135px";
    email.style.display = "flex";
    email.style.textAlign = "center";
    email.style.cursor = "pointer";
    email.style.padding = "10px";
    email.style.fontSize = "15px";
  });
}

function emailOutDisplay() {
  email.addEventListener("click", () => {
    email.classList.add("fa-envelope");
    email.style.width = "75px";
    email.style.height = "75px";
    email.style.padding = "0px";
    emailText.remove();
  });
}

function addBoxDisplay() {
  aboutBox.addEventListener("mousemove", () => {
    aboutBox.style.backgroundColor = "orange";
    aboutBox.style.color = "white";
  });
}

function addOutBoxDisplay() {
  aboutBox.addEventListener("mouseout", () => {
    aboutBox.style.backgroundColor = "";
    aboutBox.style.color = "wheat";
  });
}

phoneTextDisplay();
phoneOutDisplay();
emailTextDisplay();
emailOutDisplay();

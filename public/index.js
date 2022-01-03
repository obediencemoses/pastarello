const hamburger = document.getElementById("hamburger");
const hide = document.getElementById("hide");
const dropdown = document.getElementById("dropdown");



hamburger.onclick = function click() {
  if (dropdown.classList.contains("hide")) {

      dropdown.classList.replace("hide", "show");
  }
};
hide.onclick = function click() {
  if (dropdown.classList.contains("show")) {

      dropdown.classList.replace("show", "hide");

  }
  
};

//Order meal button redirects to order meal page
const orderBtn = document.getElementById("orderBtn");
const orderURL = "order-meal.html"

orderBtn.onclick =  function () {
  window.location.href = orderURL;
}

//
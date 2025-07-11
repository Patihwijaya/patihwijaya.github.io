const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// untuk menghilangkan text yang panjang
const text = document.getElementById("text");
const showMore = document.getElementById("showMore");

const textAll = text.textContent;
const shortText = textAll.slice(0, 500) + " ...";

text.textContent = shortText;
showMore.style.color = "#6c8c63";
showMore.style.cursor = "pointer";

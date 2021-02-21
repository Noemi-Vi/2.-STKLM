const fabars = document.querySelector(".fa-bars");
const navphone = document.querySelector(".navphone");

fabars.addEventListener("click", () => {
  if (navphone.style.display == "flex") {
    navphone.style.display = "none";
  } else {
    navphone.style.display = "flex";
  }
});

const itempages = document.querySelector(".item-pages");
const itemshop = document.querySelector(".item-shop");
const itemblog = document.querySelector(".item-blog");
const itemportfolio = document.querySelector(".item-portfolio");

const pages = document.querySelector(".pages");
const shop = document.querySelector(".shop");
const blog = document.querySelector(".blog");
const portfolio = document.querySelector(".portfolio");
const cabecera = document.querySelector(".centrado");

itempages.addEventListener("mouseover", () => {
  pages.style.display = "flex";
});
itemportfolio.addEventListener("mouseover", () => {
  portfolio.style.display = "flex";
});
itemblog.addEventListener("mouseover", () => {
  blog.style.display = "flex";
});
itemshop.addEventListener("mouseover", () => {
  shop.style.display = "flex";
});

document.addEventListener("mouseover", (event) => {
  if (!cabecera.contains(event.target)) {
    pages.style.display = "none";
  }
});

document.addEventListener("mouseover", (event) => {
  if (!cabecera.contains(event.target)) {
    portfolio.style.display = "none";
  }
});

document.addEventListener("mouseover", (event) => {
  if (!cabecera.contains(event.target)) {
    blog.style.display = "none";
  }
});

document.addEventListener("mouseover", (event) => {
  if (!cabecera.contains(event.target)) {
    shop.style.display = "none";
  }
});


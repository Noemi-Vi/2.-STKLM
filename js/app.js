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

itempages.addEventListener("click", () => {
  if (pages.style.display == "flex") {
    pages.style.display = "none";
  } else {
    pages.style.display = "flex";
  }
});
itemshop.addEventListener("click", () => {
  if (shop.style.display == "flex") {
    shop.style.display = "none";
  } else {
    shop.style.display = "flex";
  }
});
itemblog.addEventListener("click", () => {
  if (blog.style.display == "flex") {
    blog.style.display = "none";
  } else {
    blog.style.display = "flex";
  }
});
itemportfolio.addEventListener("click", () => {
  if (portfolio.style.display == "flex") {
    portfolio.style.display = "none";
  } else {
    portfolio.style.display = "flex";
  }
});

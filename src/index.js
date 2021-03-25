const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");
nav.addEventListener("click", () => {
  document.body.classList.toggle("menu-open");
  setTimeout(() => {
    menu.style.display = "grid";
  }, 1000);
});

const listItem = document.querySelectorAll(".menu ul li a");
const listImage = document.querySelectorAll(".menu .image .item");

let currentZindex = 100;
let lastSeen = listItem[0];

listItem.forEach((li) => {
  li.addEventListener("mouseenter", () => {
    console.log("enter", li);
    const img = [...listImage].find((img) => {
      return img.dataset.projectNo === li.dataset.projectNo;
    });
    if (lastSeen === li)return;

    img.style.transition = null;

    img.style.opacity = 0;
    img.style.zIndex = currentZindex++;

    setTimeout(() => {
      img.style.opacity = 1;
      img.style.transition = "opacity .7s ease";
    }, 100);
    lastSeen = li;
  });
});

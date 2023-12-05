document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("menu");
  const menuArrow = document.querySelector("#menu-arrow");

  menuArrow.addEventListener("click", function () {
    if (menu.style.display === "none" || menu.style.display === "") {
      menu.style.display = "flex"; // 點擊時顯示，並使用 flexbox
      menuArrow.className = "fa-solid fa-circle-chevron-up fa-lg";
    } else {
      menu.style.display = "none"; // 再次點擊時隱藏
      menuArrow.className = "fa-solid fa-circle-chevron-down fa-lg";
    }
  });

  document.addEventListener("click", function (event) {
    if (!menu.contains(event.target) && event.target !== menuArrow) {
      menu.style.display = "none";
    }
  });
});

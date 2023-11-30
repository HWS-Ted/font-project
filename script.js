document.addEventListener("DOMContentLoaded", function () {
    var menuButton = document.getElementById("menu-button");
    var menu = document.getElementById("menu");
  
    menuButton.addEventListener("click", function () {
      if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "flex"; // 点击按钮时显示菜单，并应用 Flexbox 布局
      } else {
        menu.style.display = "none"; // 再次点击按钮时隐藏菜单
      }
    })
  
    document.addEventListener("click", function (event) {
      if (!menu.contains(event.target) && event.target !== menuButton) {
        menu.style.display = "none";
      }
    });
  });
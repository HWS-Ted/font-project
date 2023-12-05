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

// 搜尋用

let fontJSON = [
  {
    "id": "1",
    "name": "芫荽",
    "Type": "混合",
    "weight": "中等",
    "feeling": ["正式的", "人文的", "書寫感的"],
    "purpose": ["內文", "標題", "副標題", "台羅拼音"],
    "Designer/Creator": "柯志杰But",
    "license": "開源可商用",
    "characters": '"8,170"',
    "missRate": "1",
    "URL": "https://github.com/ButTaiwan/iansui",
    "img": "./images/font-img/字體樣本_芫荽-R.png",
  },
  {
    "id": "2",
    "name": "饅頭黑體",
    "Type": "黑體",
    "weight": "粗的",
    "feeling": ["可愛的", "誇張的"],
    "purpose": ["標題"],
    "Designer/Creator": "饅頭",
    "license": "開源可商用",
    "characters": "5300",
    "missRate": "4",
    "URL": "https://github.com/mant0u0/MantouSans",
    "img": "./images/font-img/字體樣本_饅頭黑體.png",
  },
];

const input = document.querySelector("input");
const card = document.querySelector(".card-panel");

input.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    const text = input.value.toLowerCase();
    let idAry = getId(text);
    idAry.forEach(function (id) {
      renderFont(id);
    });
  }
});

function getId(text) {
  let ary = [];
  fontJSON.forEach(function (item) {
    let itemValues = Object.values(item);
    itemValues.filter(function (word) {
      if (word === text) {
        ary.push(item.id);
      }
    });
  });
  return ary;
}

// getId("開源可商用");
// Object.values(item) = ['1', '芫荽', '混合', '中等', Array(3), Array(4), '柯志杰But', '開源可商用', '"8,170"', '1', 'https://github.com/ButTaiwan/iansui', './images/font-img/字體樣本_芫荽-R.png']

function renderFont(id) {
  const fontObj = fontJSON.find(function (font) {
    return font["id"] === id;
  });
  card.innerHTML += `<div class="box-size">
            <div class="imgPlace">
              <img src="${fontObj["img"]}" alt="" />
            </div>
            <div class="pl-15 pr-14">
              <h3>${fontObj["name"]}</h3>
              <div class="divider"></div>
              <div class="d-flex jc-sb">
                <a href="#" class="text-btn d-flex jc-c ai-c btn-hover">
                  安安
                </a>
                <a href="#" class="text-btn d-flex jc-c ai-c btn-hover">
                  TEXT
                </a>
                <a href="#" class="text-btn d-flex jc-c ai-c btn-hover">
                  TEXT
                </a>
                <a href="#" class="text-btn d-flex jc-c ai-c btn-hover">
                  TEXT
                </a>
              </div>
            </div>`;
}

/* <div class="box-size">
            <div class="imgplace">
              <img src="./images/font-img/字體樣本_芫荽-R.png" alt="" />
            </div>
            <div class="pl-15 pr-14">
              <h3>芫荽</h3>
              <div class="divider"></div>
              <div class="d-flex jc-sb">
                <a href="#" class="text-btn d-flex jc-c ai-c btn-hover">
                  TEXT
                </a>
                <a href="#" class="text-btn d-flex jc-c ai-c btn-hover">
                  TEXT
                </a>
                <a href="#" class="text-btn d-flex jc-c ai-c btn-hover">
                  TEXT
                </a>
                <a href="#" class="text-btn d-flex jc-c ai-c btn-hover">
                  TEXT
                </a>
              </div>
            </div> */

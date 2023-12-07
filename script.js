let fontData;

function fetchData() {
  fetch("fonts.json")
    .then((response) => response.json())
    .then((data) => {
      // 在這裡使用讀取到的 JSON 資料
      fontData = data;
    })
    .catch((error) => {
      console.error("讀取 JSON 檔案時發生錯誤:", error);
    });
}
fetchData();
// 進階搜尋功能選單
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

// let fontData = [
//   {
//     "id": "1",
//     "name": "芫荽",
//     "Type": "混合",
//     "weight": "中等",
//     "feeling": ["正式的", "人文的", "書寫感的"],
//     "purpose": ["內文", "標題", "副標題", "台羅拼音"],
//     "Designer/Creator": "柯志杰But",
//     "license": "開源可商用",
//     "characters": '"8,170"',
//     "missRate": "1",
//     "URL": "https://github.com/ButTaiwan/iansui",
//     "img": "./images/font-img/字體樣本_芫荽-R.png",
//   },
//   {
//     "id": "2",
//     "name": "饅頭黑體",
//     "Type": "黑體",
//     "weight": "粗的",
//     "feeling": ["可愛的", "誇張的"],
//     "purpose": ["標題"],
//     "Designer/Creator": "饅頭",
//     "license": "開源可商用",
//     "characters": "5300",
//     "missRate": "4",
//     "URL": "https://github.com/mant0u0/MantouSans",
//     "img": "./images/font-img/字體樣本_饅頭黑體.png",
//   },
//   {
//     "id": "3",
//     "name": "辰宇落雁體",
//     "Type": "手寫字",
//     "weight": "細的",
//     "feeling": ["人文的", "書寫感的"],
//     "purpose": ["短篇內文", "標題", "副標題"],
//     "Designer/Creator": "王立宇、韋辰",
//     "license": "開源可商用",
//     "characters": "5177",
//     "missRate": "3",
//     "URL": "https://github.com/Chenyu-otf/chenyuluoyan_thin",
//     "img": "./images/font-img/字體樣本_饅頭黑體.png",
//   },
//   {
//     "id": "4",
//     "name": "京華老宋體",
//     "Type": "明體",
//     "weight": "中等",
//     "feeling": ["人文的", "傳統的", "破損的"],
//     "purpose": ["短篇內文", "副標題"],
//     "Designer/Creator": "特里王",
//     "license": "可商用",
//     "characters": "38458",
//     "missRate": "3",
//     "URL":
//       "https://drive.google.com/file/d/1WQu8_LaS5JRn9Fd03cxWpT4LA9H9HC7T/view?fbclid=IwAR04S4cfaYE4HHrV8ODHP2t1d31TObKOghOkYGfGYTuBP37lb3ZTLcaNsGk",
//     "img": "./images/font-img/字體樣本_饅頭黑體.png",
//   },
//   {
//     "id": "5",
//     "name": "俐方體11號",
//     "Type": "點陣體",
//     "weight": "中等",
//     "feeling": ["機械的", "點陣的"],
//     "purpose": ["標題", "台客語漢字"],
//     "Designer/Creator": "ACh-K",
//     "license": "開源可商用",
//     "characters": "4808",
//     "missRate": "2",
//     "URL": "https://github.com/ACh-K/Cubic-11",
//     "img": "./images/font-img/字體樣本_饅頭黑體.png",
//   },
//   {
//     "id": "6",
//     "name": "隨峰體",
//     "Type": "手寫字",
//     "weight": "細的",
//     "feeling": ["人文的", "正式的", "剛硬的"],
//     "purpose": ["短篇內文", "副標題"],
//     "Designer/Creator": "CjkFonts",
//     "license": "開源可商用",
//     "characters": "6100",
//     "missRate": "4",
//     "URL": "https://cjkfonts.io/blog/ThePeakFont",
//     "img": "./images/font-img/字體樣本_饅頭黑體.png",
//   },
//   {
//     "id": "7",
//     "name": "WD-XL滑油字",
//     "Type": "美術字",
//     "weight": "窄的",
//     "feeling": ["圓潤的", "機械的"],
//     "purpose": ["標題", "台客語漢字", "台羅拼音"],
//     "Designer/Creator": "鄭慶科",
//     "license": "開源可商用",
//     "characters": "15985",
//     "missRate": "2",
//     "URL": "https://nightfurysl2001.github.io/WD-XL/zh-Hant.html",
//     "img": "./images/font-img/字體樣本_饅頭黑體.png",
//   },
//   {
//     "id": "8",
//     "name": "源樣黑體",
//     "Type": "黑體",
//     "weight": "字型家族",
//     "feeling": ["正式的", "剛硬的", "傳統的"],
//     "purpose": [
//       "教育寫法",
//       "長篇內文",
//       "標題",
//       "台客語漢字",
//       "台羅拼音",
//       "副標題",
//     ],
//     "Designer/Creator": "柯志杰But",
//     "license": "開源可商用",
//     "characters": "33955",
//     "missRate": "1",
//     "URL": "https://github.com/ButTaiwan/genyog-font",
//     "img": "./images/font-img/字體樣本_饅頭黑體.png",
//   },
//   {
//     "id": "9",
//     "name": "Zen maru Gothic",
//     "Type": "圓體",
//     "weight": "字型家族",
//     "feeling": ["人文的", "親切的", "圓潤的"],
//     "purpose": ["日本字型", "副標題", "短篇內文"],
//     "Designer/Creator": "Type Bank / Morisawa",
//     "license": "開源可商用",
//     "characters": "7864",
//     "missRate": "4",
//     "URL": "https://fonts.google.com/specimen/Zen+Maru+Gothic",
//     "img": "./images/font-img/字體樣本_饅頭黑體.png",
//   },
//   {
//     "id": "10",
//     "name": "togalite トガリテ",
//     "Type": "美術字",
//     "weight": "字型家族",
//     "feeling": ["裝飾的", "誇張的"],
//     "purpose": ["標題", "副標題", "日本字型"],
//     "Designer/Creator": "もじワク研究",
//     "license": "免費可商用",
//     "characters": "4343",
//     "missRate": "5",
//     "URL": "https://moji-waku.com/togalite/",
//     "img": "./images/font-img/字體樣本_饅頭黑體.png",
//   },
// ];
// section.innerHTML 為切換篩選頁面用

// 進行渲染
const section = document.querySelector("section");
const input = document.querySelector("input");

let filterData = [];
// 篩選過程 → 取得關鍵字 → 進行比對(輸入文字得到物件) → 符合的儲存(物件存入陣列)
function filterFonts(word) {
  fontData.forEach(function (item) {
    let string = "";
    string =
      item.name +
      item.Type +
      item.weight +
      item.license +
      item["Designer/Creator"];
    let feelingString = "";
    item["feeling"].forEach(function (aryString) {
      feelingString += aryString;
    });
    let purposeString = "";
    item["purpose"].forEach(function (aryString) {
      purposeString += aryString;
    });
    string += feelingString;
    string += purposeString;
    if (string.includes(word) === true) {
      filterData.push(item);
    }
  });
}

// 渲染卡片
function renderCard(data) {
  let cardHTML = "";
  data.forEach(function (obj) {
    let feelingHTML = ``;
    let purposeHTML = ``;
    obj["feeling"].forEach(function (feeling) {
      feelingHTML += `<a href="#" class="text-btn d-flex jc-c ai-c mb-4 btn-hover">
                  ${feeling}
                </a>`;
    });
    obj["purpose"].forEach(function (purpose) {
      purposeHTML += `<a href="#" class="text-btn d-flex jc-c ai-c mb-4 btn-hover">
                  ${purpose}
                </a>`;
    });
    cardHTML += `
    <div class="box-size over-hide">
            <div class="imgplace "><img src="${obj["img"]}" alt="" /></div>
            <div class="pl-15 pr-14">
              <h3>${obj["name"]}</h3>
              <div class="divider"></div>
              <div class=" d-flex jc-st flex-wrap pt-15 pb-15">
                ${feelingHTML}
                ${purposeHTML}
              </div>
            </div>
          </div>`;
  });
  return cardHTML;
}

// 監聽 input 按下 enter 時 → 執行 filterFonts(keyWord) → 渲染卡片的 HTML → section 的 HTML 加上卡片的 HTML

input.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    if (input.value === "") {
      section.innerHTML = `
    <div class="container pt-70 pb-107">
      <h2 class="pb-8">搜尋結果</h2>
      <p class="center-text font-s mb-62">關於 全部 的搜尋結果</p>
        <div class="card-panel">
        </div>
    </div>
    `;
    } else {
      section.innerHTML = `
    <div class="container pt-70 pb-107">
      <h2 class="pb-8">搜尋結果</h2>
      <p class="center-text font-s mb-62">關於 ${input.value} 的搜尋結果</p>
        <div class="card-panel">
        </div>
    </div>
    `;
    }
    const card = document.querySelector(".card-panel");
    let keyWord = input.value;
    filterData = [];
    filterFonts(keyWord);
    if (filterData.length === 0) {
      section.innerHTML += `<h3 class="no-data">查無相關資料</h3>`;
    } else {
      card.innerHTML = renderCard(filterData);
    }
  }
});

// 渲染字型介紹頁

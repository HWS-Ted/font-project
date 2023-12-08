let fontData;

// 非同步傳入 JSON 檔
function fetchData() {
  fetch("fonts.json")
    .then((response) => response.json())
    .then((data) => {
      // 在這裡使用讀取到的 JSON 資料
      fontData = data;
      // 下面為須取得資料後才能進行的事
      // 或是利用 index 與 font 畫面切換時，會重新讀取此.js檔
      // 放入希望瀏覽器在畫面切換後，進行判斷的事
      if (location.pathname === "/font.html") {
        let id = getId();
        renderIntro(id);
      }
      if (location.pathname === "/index.html" && location.hash !== "") {
        let hash = location.hash;
        let decodedString = decodeURIComponent(hash.slice(1));
        searchInput.value = decodedString;
        searchPanel();
      }
    })
    .catch((error) => {
      console.error("讀取 JSON 檔案時發生錯誤:", error);
    });
}
fetchData();

// 取出location.hash，移除#，轉為數字，放入renderIntro(id)
function getId() {
  let hash = location.hash;
  return hash.slice(1);
}

const renderPanel = document.querySelector(".render-panel");
const searchInput = document.querySelector(".search-input");

// 篩選過程 → 取得關鍵字 → 進行比對(輸入文字最後得到物件) → 符合物件存入陣列
let filterData = [];
function filterFonts(word) {
  fontData.forEach(function (item) {
    // 邏輯：將資料中每個物件的每個字存入字串，再透過 includes 方法，如果包含就會回傳true，所以 string.includes(word) === true 代表該物件含有關鍵字，filterData.push(item) 將該物件存入 filterData 陣列
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

// 渲染字型的卡片
function renderCard(data) {
  let cardHTML = "";
  data.forEach(function (obj) {
    let feelingHTML = ``;
    let purposeHTML = ``;
    // 獨立生成卡片中 feeling 的標籤
    obj["feeling"].forEach(function (feeling) {
      feelingHTML += `<a href="./index.html#${feeling}" class=" text-btn d-flex jc-c ai-c mb-4 btn-hover">
                  ${feeling}
                </a>`;
    });
    // 獨立生成卡片中 purpose 的標籤
    obj["purpose"].forEach(function (purpose) {
      purposeHTML += `<a href="./index.html#${purpose}" class=" text-btn d-flex jc-c ai-c mb-4 btn-hover">
                  ${purpose}
                </a>`;
    });
    // 卡片、feeling、purpose的HTML相加
    cardHTML += `
    <div class="box-size over-hide">
            <a href="./font.html#${obj["id"]}">
            <div class="imgplace "><img src="${obj["img"]}" alt="" /></div></a>
            <div class="pl-15 pr-14">
              <a href="./font.html#${obj["id"]}">
              <h3>${obj["name"]}</h3></a>
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

// 渲染搜尋結果畫面
function searchPanel() {
  if (searchInput.value === "") {
    renderPanel.innerHTML = `
    <div class="container pt-70 pb-107">
      <h2 class="pb-8">搜尋結果</h2>
      <p class="center-text font-s mb-62">關於 全部 的搜尋結果</p>
        <div class="card-panel">
        </div>
    </div>
    `;
  } else {
    renderPanel.innerHTML = `
    <div class="container pt-70 pb-107">
      <h2 class="pb-8">搜尋結果</h2>
      <p class="center-text font-s mb-62">關於 ${searchInput.value} 的搜尋結果</p>
        <div class="card-panel">
        </div>
    </div>
    `;
  }
  // 取得 card-panel 節點(卡片要生成的位置)
  const card = document.querySelector(".card-panel");
  // 將 搜尋文字 存入 keyWord
  let keyWord = searchInput.value;
  // 先清空 filterData,避免舊資料累積
  filterData = [];
  // 將 keyWord 放入 比對資料的函式
  // 符合的資料會被存入 filterData
  filterFonts(keyWord);
  // filterData 陣列長度為0時，代表沒有符合的資料
  if (filterData.length === 0) {
    renderPanel.innerHTML += `<h3 class="no-data">查無相關資料</h3>`;
    // filterData 陣列長度不為0，代表有資料，由 renderCard 渲染卡片
  } else {
    card.innerHTML = renderCard(filterData);
  }
}

// 渲染字型介紹頁(font.html)
let introFont = document.querySelector(".introFont");
// 藉由放入不同id，可渲染不同的字型頁面
function renderIntro(id) {
  // 透過 id 抓出資料
  let font = fontData.find((item) => {
    return item["id"] === id;
  });

  // 生成缺字率的豆腐字數量
  let tofu = "";
  for (let i = 0; i < font.missRate; i++) {
    tofu += `<i class="fa-solid fa-notdef fa-sm"></i>`;
  }

  // 生成功能分類的標籤數量
  let purpose = "";
  for (let i = 0; i < font.purpose.length; i++) {
    purpose += `<div class="td">
                <a href="./index.html#${font.purpose[i]}" class=" key-word btn-hover">${font.purpose[i]}</a>
              </div>`;
  }
  // 生成情境與應用的標籤數量
  let feeling = "";
  for (let i = 0; i < font.feeling.length; i++) {
    feeling += `<div class="td">
                <a href="./index.html#${font.feeling[i]}" class=" key-word btn-hover">${font.feeling[i]}</a>
              </div>`;
  }

  introFont.innerHTML = `
<div class="breadCrumb">
          <a href="./index.html">首頁</a> > <a href="./font.html#${font.id}">${font.name}</a>
        </div>
        <h1 class="fontTitle">${font.name}</h1>
        <img src="${font.img}" alt="" class="fontImg" />
        <div class="table-section">
          <h3>關於字型</h3>
          <div class="table">
            <div class="tr">
              <div class="th">設計師</div>
              <div class="td">${font["Designer/Creator"]}</div>
            </div>
            <div class="tr">
              <div class="th">檔案格式</div>
              <div class="td">ttf.</div>
              <div class="th">授權分類</div>
              <div class="td">
                <a href="./index.html#${font.license}" class=" key-word btn-hover">${font.license}</a>
              </div>
            </div>
            <div class="tr">
              <div class="th">字集規格</div>
              <div class="td">${font.characters}</div>
              <div class="th">缺字率</div>
              <div class="td">
                ${tofu}
              </div>
            </div>
            <div class="tr">
              <div class="th">風格分類</div>
              <div class="td">
                <a href="./index.html#${font.Type}" class=" key-word btn-hover">${font.Type}</a>
              </div>
            </div>
            <div class="tr">
              <div class="th">屬性分類</div>
              <div class="td">
                <a href="./index.html#${font.weight}" class=" key-word btn-hover">${font.weight}</a>
              </div>
            </div>
            <div class="tr">
              <div class="th">功能分類</div>
              ${purpose}
            </div>
            <div class="tr">
              <div class="th">情境與應用</div>
              ${feeling}
            </div>
          </div>
        </div>
        <a href="${font.URL}" target="_blank"><button class="a-button btn-hover">前往下載</button></a>
        <h3 class="textareaContent">Message</h3>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <a href="#"><button class="a-button btn-hover">送出訊息</button></a>`;
}

// 在 index.html 的畫面時,才進行的監聽
// 避免 font.html 執行時產生錯誤
if (location.pathname === "/index.html") {
  // 監聽"輸入"事件發生時，渲染搜尋結果畫面
  searchInput.addEventListener("input", searchPanel);

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

  // 進階搜尋邏輯
  // 讓每個關鍵字標籤的連結都指向 ./index.html#關鍵字
  // 然後在整個視窗下進行監聽，監聽事件 "hashchange" (表示網址#後面發生變化)
  // 然後取得發生變化後的 hash 的值
  // 因電腦會將文字編碼成 encodeURIComponent 與 decodeURIComponent
  // 因此透過 let decodedString = decodeURIComponent(hash.slice(1));
  // 取得原本的中文關鍵字
  // 並將關鍵字賦予 searchInput.value
  // 再次執行 searchPanel() ，使渲染相符合的卡片
  window.addEventListener("hashchange", (e) => {
    let hash = e.target.location.hash;
    let decodedString = decodeURIComponent(hash.slice(1));
    searchInput.value = decodedString;
    searchPanel();
  });
}

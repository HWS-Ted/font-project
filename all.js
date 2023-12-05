let fontJSON = [
  {
    "id": "1",
    "name": "芫荽",
    "Type": "混合",
    "weight": "中等",
    "feeling": "[正式的,人文的,書寫感的]",
    "purpose": "[內文,標題,副標題,台羅拼音]",
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
    "feeling": "[可愛的,誇張的]",
    "purpose": "[標題]",
    "Designer/Creator": "饅頭",
    "license": "開源可商用",
    "characters": "5300",
    "missRate": "4",
    "URL": "https://github.com/mant0u0/MantouSans",
    "img": "./images/font-img/字體樣本_饅頭黑體.png",
  },
];

const input = document.querySelector("input");



const main = document.querySelector("main");



input.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    console.log(input.value);
  }
});

function renderFont(id) {
  const fontObj = fontJSON.find((font) => font["id"] === id);
  console.log(fontObj);
  main.innerHTML = `<input type="text" name="" placeholder="請輸入關鍵字" class="search-input" />
  <h1 class="fontTitle">${fontObj["name"]}</h1>`;
}

renderFont("1");

// 字體介紹頁 測試用 all.html
// main.innerHTML = <input type="text" name="" placeholder="請輸入關鍵字" class="search-input" />;
// <div class="breadCrumb">
//         <a href="./index.html">首頁</a> > <a href="./font.html">${fontObj["name"]}</a>
//       </div>
//       <h1 class="fontTitle">${fontObj["name"]}</h1>
//       <img src=${fontObj["img"]} alt="" class="fontImg" />
//       <div>
//         <h3>關於字型</h3>
//         <p class="fontContent">
//           2020 年底，Fontworks 忽然與 Google Fonts 合作以開放原始碼授權釋出 Klee
//           One 免費字型，不過 Klee
//           是日文字體，用在繁體中文會遇到缺字情況，也有不少字體專案也嘗試要替
//           Klee One 補上中文字，如簡體中文補字的 LXGW WenKai /
//           霞鹜文楷與傳統字形補字的 Klee One 繁體中文版等。
//         </p>
//       </div>
//       <div class="table-section">
//         <h3>關於字型</h3>
//         <div class="table">
//           <div class="tr">
//             <div class="th">設計師</div>
//             <div class="td">${fontObj["Designer/Creator"]}</div>
//           </div>
//           <div class="tr">
//             <div class="th">檔案格式</div>
//             <div class="td">ttf.</div>
//             <div class="th">授權分類</div>
//             <div class="td">
//               <a href="#" class="key-word btn-hover">${fontObj["license"]}</a>
//             </div>
//           </div>
//           <div class="tr">
//             <div class="th">字集規格</div>
//             <div class="td">8000</div>
//             <div class="th">缺字率</div>
//             <div class="td">
//               <i class="fa-solid fa-notdef fa-sm"></i
//               ><i class="fa-solid fa-notdef fa-sm"></i
//               ><i class="fa-solid fa-notdef fa-sm"></i
//               ><i class="fa-solid fa-notdef fa-sm"></i
//               ><i class="fa-solid fa-notdef fa-sm"></i>
//             </div>
//           </div>
//           <div class="tr">
//             <div class="th">風格分類</div>
//             <div class="td">
//               <a href="#" class="key-word btn-hover">黑體</a>
//             </div>
//           </div>
//           <div class="tr">
//             <div class="th">屬性分類</div>
//             <div class="td">
//               <a href="#" class="key-word btn-hover">方的</a>
//             </div>
//             <div class="td">
//               <a href="#" class="key-word btn-hover">字型家族</a>
//             </div>
//           </div>
//           <div class="tr">
//             <div class="th">功能分類</div>
//             <div class="td">
//               <a href="#" class="key-word btn-hover">可商用</a>
//             </div>
//             <div class="td">
//               <a href="#" class="key-word btn-hover">傳統的</a>
//             </div>
//           </div>
//           <div class="tr">
//             <div class="th">情境與應用</div>
//             <div class="td">
//               <a href="#" class="key-word btn-hover">中性的</a>
//             </div>
//             <div class="td">
//               <a href="#" class="key-word btn-hover">傳統的</a>
//             </div>
//             <div class="td">
//               <a href="#" class="key-word btn-hover">誇張的</a>
//             </div>
//             <div class="td">
//               <a href="#" class="key-word btn-hover">恐怖的</a>
//             </div>
//             <div class="td">
//               <a href="#" class="key-word btn-hover">俏皮的</a>
//             </div>
//           </div>
//         </div>
//       </div>
//       <a href="${fontObj[0]["URL"]}" target="_blank"><button class="a-button btn-hover">前往下載</button></a>
//       <h3 class="textareaContent">Message</h3>
//       <textarea name="" id="" cols="30" rows="10"></textarea>
//       <a href="#"><button class="a-button btn-hover">送出訊息</button></a>;

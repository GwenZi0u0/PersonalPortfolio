
function initialize() {
    // init local storage

    if (localStorage.shoppingCart === undefined) {
      localStorage.shoppingCart = JSON.stringify([]);
    }
    shoppingCart = JSON.parse(localStorage.shoppingCart);
    // init goods (items)
    for (let item of items.filter(x => x.id == localStorage.infoItem)) {
      console.log(item);

      var str=encodeURI(item.img)
          product.innerHTML = `
      <img src=${str}></img>
      `;
      text.innerHTML=`
      <label>品牌：</label>${item.品牌}<br><label>產品：</label>${item.name}
      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div id="money">
            <img src="media/money.png">
        </div>
        <label>${item.price}</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br><label>適用族群:</label>${item.適用族群}<br><label>功能：</label><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${item.功能}<br><label>特色：</label>${item.特色}<br><label>連結：</label><a href="${item.產品資訊連結}">官方網站</a>
      
      `
      like_product.innerHTML=`
      <div class="isLiked" id="No${item.id}"onclick="like(${item.id})"></div>
      
      `

  }

  }
  
  initialize();
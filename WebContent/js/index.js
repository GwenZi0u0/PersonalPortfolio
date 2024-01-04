// Can also be used with $(document).ready()
$(function () {
  $(".flexslider").flexslider({
    slideshowSpeed: 5000, //展示时间间隔ms
    animationSpeed: 500, //滚动时间ms
    touch: true //是否支持触屏滑动
  });
});


var shoppingCart = [];

var dragItem = null;
const dropContainer = document.getElementById('list');
const searchBtn = document.getElementById('search-btn');

function initialize() {
  // init local storage
  if (localStorage.shoppingCart === undefined) {
    localStorage.shoppingCart = JSON.stringify([]);
  }
  shoppingCart = JSON.parse(localStorage.shoppingCart);

  // init goods (items)
  let goodsAreas = document.querySelectorAll('.goodsarea');
  for (let item of items) {
    let goods = document.createElement('div');
    goods.classList.add('goods');
    goods.setAttribute('draggable', true);
    goods.dataset.id = item.id;

    goods.addEventListener('dragstart', function (e) {
      dragItem = this;
    });


    let goodsPhoto = document.createElement('div');
    goodsPhoto.classList.add('goodsphoto');

    let goodsIntroduce = document.createElement('div');
    goodsIntroduce.classList.add('goodsintroduce');

    let img = document.createElement('img');
    img.src = item.img;
    // img.onclick=console.log(1)

    goodsIntroduce.innerHTML = `
      <span class=itemName onclick="itemInfo(${item.id})" style=cursor:pointer>${item.name}<br></span>
      <span class="price">金額:${item.price}</span>`

    let like = shoppingCart.find(x => x.id == item.id);
    if (like === undefined) {
      goodsIntroduce.innerHTML = `
      <span class=itemName onclick="itemInfo(${item.id})" style=cursor:pointer>${item.name}<br></span>
      <span class="price">金額:${item.price}</span>
      <div class="heart" id="No${item.id}"onclick="like(${item.id})"></div>`
    }
    else{
      goodsIntroduce.innerHTML = `
      <span class=itemName onclick="itemInfo(${item.id})" style=cursor:pointer>${item.name}<br></span>
      <span class="price">金額:${item.price}</span>
      <div class="isLiked" id="No${item.id}"onclick="like(${item.id})"></div>`
    }
      

    goodsPhoto.append(img);
    goods.append(goodsPhoto);
    goods.append(goodsIntroduce);
    goodsAreas[0].append(goods);

  }


  let rank = items.sort(function (a, b) {
    return a.like < b.like ? 1 : -1;
   });

  let str=rank[0].img;
  document.getElementById("1st").innerHTML=`<span onclick="itemInfo(${rank[0].id})">
  <img src="${str}"></img>
  <label class=likeName>${rank[0].name}</label>
  <label class=likeNum>${rank[0].like}個喜歡</label>
  </span>
   `
  str=rank[1].img;
  document.getElementById("2nd").innerHTML=`<span onclick="itemInfo(${rank[1].id})">
  <img src="${str}"></img>
  <label class=likeName>${rank[1].name}</label>
  <label class=likeNum>${rank[1].like}個喜歡</label>
  </span>
   `
  str=rank[2].img;
  document.getElementById("3rd").innerHTML=`<span onclick="itemInfo(${rank[2].id})">
  <img src="${str}"></img>
  <label class=likeName>${rank[2].name}</label>
  <label class=likeNum>${rank[2].like}個喜歡</label>
  </span>
   `

}

initialize();
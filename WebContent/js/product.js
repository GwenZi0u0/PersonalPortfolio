
var shoppingCart = [];

var dragItem = null;
const dropContainer = document.getElementById('list');
const searchBtn = document.getElementById('search-btn');

dropContainer.addEventListener('dragover', function (e) {
    e.preventDefault();
});

dropContainer.addEventListener('drop', function (e) {
    let id = dragItem.dataset.id;
    let item = shoppingCart.find(x => x.id == id);
    if (item === undefined) {
        shoppingCart.push(items.find(x => x.id == id));
        shoppingCart[shoppingCart.length - 1].amount = 1;
        shoppingCart[shoppingCart.length - 1].isTrash = false;
    } else {
        item.amount++;
    }

    // update local storage
    localStorage.shoppingCart = JSON.stringify(shoppingCart);

    alert('成功加入購物車');

});


function initialize() {
    // init local storage
    // localStorage.clear();
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
        goodsAreas[item.category - 1].append(goods);
    }
}

initialize();
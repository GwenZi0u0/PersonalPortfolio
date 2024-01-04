var shoppingCart = [];

var dragItem = null;
const dropContainer = document.getElementById('list');

dropContainer.addEventListener('dragover', function (e) {
    e.preventDefault();
});

dropContainer.addEventListener('drop', function (e) {
    let id = dragItem.dataset.id;
    let item = shoppingCart.find(x => x.id == id);
    if (item === undefined) {
        shoppingCart.push(items.find(x => x.id == id));
        shoppingCart[shoppingCart.length - 1].amount = 0;
        shoppingCart[shoppingCart.length - 1].isTrash = false;
    }
    shoppingCart[shoppingCart.length - 1].amount++;

    // update local storage
    localStorage.shoppingCart = JSON.stringify(shoppingCart);

    alert('成功加入購物車');
});

function initialize() {
    // init local storage
    if (localStorage.shoppingCart === undefined) {
        localStorage.shoppingCart = JSON.stringify([]);
    }
    shoppingCart = JSON.parse(localStorage.shoppingCart);
    render();
}

function render() {
    // render goods (items)
    console.log(location.search.split('?q=')[1])
    let goodsArea = document.querySelector('.goodsarea');
    if (location.search.split('?q=')[1] == "") {
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
            goodsArea.append(goods);
        }
    }
    else if (location.search.split('?q=')[1] == -2 || location.search.split('?q=')[1] == -1 || location.search.split('?q=')[1] == 0) {
        for (let item of items.filter(x => x.category == (parseInt(location.search.split('?q=')[1]) + 3))) {
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
            goodsArea.append(goods);
        }
    }
    else {
        for (let item of items.filter(x => x.name.includes(decodeURI(location.search.split('?q=')[1])))) {
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
            goodsArea.append(goods);
        }
    }
}

initialize();
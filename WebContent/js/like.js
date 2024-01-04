var shoppingCart = [];

// var dragItem = null;
// const dropContainer = document.getElementById('trash');
const cashier = document.querySelector('.cashier');

// dropContainer.addEventListener('dragover', function (e) {
//     e.preventDefault();
// });

// dropContainer.addEventListener('drop', function (e) {
//     let id = dragItem.dataset.id;
//     let index = shoppingCart.findIndex(x => x.id == id);
//     shoppingCart[index].isTrash = true;

//     // update local storage
//     localStorage.shoppingCart = JSON.stringify(shoppingCart);

//     render();
//     alert('成功移至垃圾桶!');
// });

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
    let goodsArea = document.querySelector('.goodsarea');
    goodsArea.innerHTML = '';
    for (let item of shoppingCart.filter(x => !x.isTrash)) {
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

initialize();

$('.goods').delegate(`[name^="item-"]`, 'input', function (e) {
    let id = this.parentNode.parentNode.dataset.id;
    let item = shoppingCart.find(x => x.id == id);
    item.amount = +this.value;
    localStorage.shoppingCart = JSON.stringify(shoppingCart);
})
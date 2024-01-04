var shoppingCart = [];

var dragItem = null;
const dropContainerByDelete = document.getElementById('delete');
const dropContainerByRecover = document.getElementById('reput');

dropContainerByDelete.addEventListener('dragover', function (e) {
    e.preventDefault();
});

dropContainerByRecover.addEventListener('dragover', function (e) {
    e.preventDefault();
});


dropContainerByDelete.addEventListener('drop', function (e) {
    let id = dragItem.dataset.id;
    let index = shoppingCart.findIndex(x => x.id == id);
    shoppingCart.splice(index, 1);

    // update local storage
    localStorage.shoppingCart = JSON.stringify(shoppingCart);

    render();
    alert('成功刪除!');
});

dropContainerByRecover.addEventListener('drop', function (e) {
    let id = dragItem.dataset.id;
    let index = shoppingCart.findIndex(x => x.id == id);
    shoppingCart[index].isTrash = false;

    // update local storage
    localStorage.shoppingCart = JSON.stringify(shoppingCart);

    render();
    alert('成功還原!');
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
    let goodsArea = document.querySelector('.goodsarea');
    goodsArea.innerHTML = '';
    for (let item of shoppingCart.filter(x => x.isTrash)) {
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
    品名:${item.name}<br>
    數量:<input type="number" name="item-${item.id}" value="${item.amount}" min="1" disabled>
    <br>
    金額:${item.price}
    `;

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
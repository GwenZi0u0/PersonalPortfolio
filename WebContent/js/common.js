function like(id,from) {
    let item = shoppingCart.find(x => x.id == id);
    if (item === undefined) {
        shoppingCart.push(items.find(x => x.id == id));
        document.getElementById("No"+id).className = "isLiked";
        // alert('成功加入購物車');
        item = shoppingCart.find(x => x.id == id);
    } else {
        // shoppingCart.splice(items.find(x => x.id == id));
        document.getElementById("No"+id).className = "heart";
        for(i of shoppingCart){
            if (i.id==id){
                shoppingCart.splice(i,1);
                break;
            }

        }
        // alert('從購物車移除'+nowitem.name)
    }

    if(from == -1){
        location.reload()
    }
    
    // update local storage
    localStorage.shoppingCart = JSON.stringify(shoppingCart);

};

function itemInfo(id){
    localStorage.infoItem=id
    window.location="productInfo.html";
}

function direct(){
    if(sessionStorage.account==undefined){
        alert("登入可觀看收藏");
        window.location="logIn.html";
    }
    else{
        window.location="like.html";
    }
}
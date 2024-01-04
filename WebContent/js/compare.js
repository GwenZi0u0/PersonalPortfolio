
function initialize() {
    if (localStorage.shoppingCart === undefined) {
        localStorage.shoppingCart = JSON.stringify([]);
    }
    shoppingCart = JSON.parse(localStorage.shoppingCart);


    $(function(){
        for(i=1;i<5;i++){
            $("#select1").append($("<optgroup label=" + category(i)+">"));
            for(item of items.filter(x => x.category == i)){
                $("#select1").append($("<option value="+item.id+">" + item.name + "</option>"));
            }
            $("#select1").append($("</optgroup>"));
        }
    });

    $(function(){
        for(i=1;i<5;i++){
            $("#select2").append($("<optgroup label=" + category(i)+">"));
            for(item of items.filter(x => x.category == i)){
                $("#select2").append($("<option value="+item.id+">" + item.name + "</option>"));
            }
            $("#select2").append($("</optgroup>"));
        }
    });
    find(1,1);
    find(2,2);

}
initialize();
function select1(){
    var x = document.getElementById("select1").value;
    find(x,1);
}
function select2(){
    var y = document.getElementById("select2").value;
    find(y,2);
}


function find(id,from){
    for (let item of items.filter(x => x.id == id)) {
        console.log(id,from);
        var str=encodeURI(item.img)
        if(from==1){
            imgBox1.innerHTML=`<img src="${str}"></img>`;
            text1.innerHTML=`
            類別:${category(item.category)}<br>
            品牌:${item.品牌}<br>
            產品:${item.name}<br>
            功能:${item.功能}<br>
            特色:${item.特色}<br>
            適用族群P:${item.適用族群}<br>
            價格:${item.price}<br>
            產品資訊連結:<a href=${item.產品資訊連結}>官方網站</a>
            
            `
        }
        else{
            imgBox2.innerHTML=`<img src=${str}></img>`
            text2.innerHTML=`
            類別:${category(item.category)}<br>
            品牌:${item.品牌}<br>
            產品:${item.name}<br>
            功能:${item.功能}<br>
            特色:${item.特色}<br>
            適用族群P:${item.適用族群}<br>
            價格:${item.price}<br>
            產品資訊連結:<a href=${item.產品資訊連結}>官方網站</a>
            
            `
        }
    }
}
function category(i){
    if (i==1){
        return "健康"
    }
    if (i==2){
        return "復健"
    }
    if (i==3){
        return "環保"
    }
    else{
        return "其他"
    }
}



<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!-- 收藏區 -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>list</title>
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/common.css">
    <link rel="stylesheet" href="shopping_style.css">
    <link rel="stylesheet" href="css/list.css">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@700&display=swap" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"></script>

</head>

<body>
    <!-- 回到頂部 -->
    <div id="link_top"></div>
    <div class="fakeframe">


        <div class="top" id="top">
            <div class="link">
                <a class="index" id="index" href="index.jsp"><img src="css/media/toindex.png"></a>
            </div>
        </div>


        <div class="tab-content" id="tabcontent">
            <div class="tab-pane fade active show" id="link_nekofood">
                <div class="goodsarea"> </div>
            </div>
        </div>

        <!-- <img class="cashier" src="media/cashier.png"> -->

        <div id="trash" class="trash">
            <a href="trash.jsp"><img src="css/media/trash.png"></a>
        </div>
    </div>
    <!-- 回到頂部 -->
    <a href="#link_top" id="gototop">
        <img src="css/media/top.png" alt="">
    </a>

    <script src="js/list.js"></script>
</body>

</html>
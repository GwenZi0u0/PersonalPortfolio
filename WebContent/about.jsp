<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/common.css">
    <link rel="stylesheet" href="css/index.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/about_us.css">
    <link rel="stylesheet" href="css/bootstrap.css">
    <script src="js/common.js"></script>

    <title>About us</title>
</head>

<body>

    <div class="top" id="top">

        <div class="link">

            <a class="index" id="index" href="index.jsp"><img src="css/media/toindex.png"></a>
            <a class="top_a" href="shopping.jsp">
                <div class=mid_div>產品分類</div>
            </a>
            <a class="top_a">
                <div class="mid_div">產品比較</div>
            </a>
            <a class="top_a" href="log in.jsp">
                <div class="mid_div">會員中心</div>
            </a>
            <a class="top_a" href="about_us.jsp">
                <div class="mid_div">關於我們</div>
            </a>

            <form class="form-inline" action="query.jsp">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" name="q">
                <button class="btn btn-info my-2 my-sm-0" type="submit">Search</button>
            </form>
            <a class="login" href="log in.jsp">
                <img src="css/media/login.png">
            </a>
        </div>


        <div id=aboutUS_container>
            <div id=opacity_mask></div>
            <div id="mask_word">
                <div id="text">創作理念</div>
                <div id="text1">我們xxxxxxxx</div>
                <div id="word">小組成員</div>
                <div id="group1">
                    <img src="css/media/gigi.png" alt="">
                </div>
                <div id="group2">
                    <img src="css/media/rita.png" alt="">
                </div>
                <div id="group3">
                    <img src="css/media/guanzi.jpg" alt="">
                </div>
                <div id="word1">&nbsp;&nbsp;082114109 李翎希&nbsp;&nbsp;&nbsp;&nbsp;082114113
                    吳庭瑄&nbsp;&nbsp;&nbsp;&nbsp;082314005 陳冠孜
                </div>
            </div>
            <img src="css/media/path.jpg" alt="" id=main>
            <img src="css/media/wash.png" alt="" class=iot id=wash>
            <img src="css/media/phone.png" alt="" class=iot id=phone>
            <img src="css/media/cloud.png" alt="" class=iot id=cloud>
        </div>
    </div>



</body>

</html>
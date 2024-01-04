<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/common.css">
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/index.css">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://npmcdn.com/flexslider@2.6.0/flexslider.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/flexslider/2.7.2/jquery.flexslider-min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"></script>
</head>

<body>
    <!-- 回到頂部 -->
    <div id="link_top"></div>
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
    </div>

    <div class="flexslider">
        <ul class="slides">
            <li><a href="query.jsp?q=-2"><img src="css/media/health.png" alt=></a></li>
            <li><a href="query.jsp?q=-1"><img src="css/media/sport.png" alt=></a></li>
            <li><a href="query.jsp?q=0"><img src="css/media/AI.png" alt=></a></li>
        </ul>
    </div>
    <!-- 回到頂部 -->
    <a href="#link_top" id="gototop">
        <img src="css/media/top.png" alt="">
    </a>

    <div id="separate"></div>
    <!-- 外部樣式 -->
    <div class="tab-content" id="tabcontent">
        <!-- 健康 -->
        <div class="tab-pane fade active show" id="link_health">
            <div class="goodsarea"> </div>
        </div>

        <!-- 復健 -->
        <div class="tab-pane fade" id="link_rehabilitation">
            <div class="goodsarea"> </div>
        </div>

        <!-- 環保 -->
        <div class="tab-pane fade" id="link_envirement">
            <div class="goodsarea"> </div>
        </div>

        <!-- 其他 -->
        <div class="tab-pane fade" id="link_others">
            <div class="goodsarea"> </div>
        </div>

        <!-- 收藏區 -->
        <a href="list.jsp">
            <div id="list" class="list">
                <img src="css/media/list.png">
            </div>
        </a>

        <script src="js/index.js"></script>

</body>

</html>
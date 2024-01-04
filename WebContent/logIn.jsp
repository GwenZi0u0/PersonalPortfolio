<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!-- 登入 -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="stylesheet" href="css/common.css">
    <link rel="stylesheet" href="css/log in.css">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/bootstrap.css">
    <script src="js/common.js"></script>

    <title>登入頁面</title>
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

    </div>
    <!-- <div id="allad">
        <img src="css/media/AD.png" alt="">
    </div> -->


    <div id="form_div">
        <div id=lab>會員登入</div>
        <form method="post">
            <div class="form_container">
                <label for="Account"><b>帳號</b></label>
                <input type="text" name="Account" required>
                <label for="Password"><b>密碼</b></label>
                <input type="password" name="Password" required>
                <button type="submit" name="LoginButton" id="btn">登入</button>
            </div>
        </form>
        <a href="register.jsp">
            <div id="gotoRegister" class="goto">新會員註冊</div>
            <img src="media/AD.png" alt="">
        </a>

        <div class="forget">忘記密碼</div>
    </div>


</body>

</html>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>bookstore</title>
    <link rel="stylesheet" href="/css/bootstrap.css">
    <link rel="stylesheet" href="/css/common.css">
    <script type="text/javascript" src="../js/jquery-3.3.1.js"></script>
    <script type="text/javascript" src="../js/bootstrap.js"></script>
    <script type="text/javascript" src="../js/bookType.js"></script>
    <script type="text/javascript" src="../js/bookInfo.js"></script>
    <script>
        selectAllBookType();
        selectAllBookInfo();
        selectNewBookInfo();
    </script>
</head>
<body style="background-color: #F5F5D5">
<div class="navbar navbar-default" style="text-align: center;background-color: #F8D29D">
    <div class="container">
        <div class="navbar-header">
            <div class="navbar-brand">明天小书屋</div>
        </div>
        <ul class="nav navbar-nav" style="display:inline-block;float:none;font-size:16px">
            <li class="active"><a href="#allBook" data-toggle="tab">所有图书</a></li>
            <li><a href="#newBook" data-toggle="tab">新书速递</a></li>
            <%--<li><a href="#sellRank" data-toggle="tab">销售排行榜</a></li>--%>
        </ul>
        <ul class="nav navbar-nav navbar-right">
            <li><a href="#"><span class="glyphicon glyphicon-user" aria-hidden="true"></span>&nbsp;&nbsp;登录</a></li>
        </ul>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="tab-content">
            <%--新书速递--%>
            <div id="newBook" class="tab-pane container">
                <div class="row"></div>
            </div>
            <%--所有图书--%>
            <div id="allBook" class="tab-pane active">
                <ul class="nav navbar-nav type">
                    <li class="active"><a href="#allBookType" data-toggle="tab" onclick="selectAllBookInfo()">全部种类</a></li>
                    <li id="selectBookName" style="float:right">
                        <form style="display:inline;">
                            <input id="bookName" type="text" placeholder="书名">
                            <button type="button" class="btn-xs btn-info" onclick="selectBookByName()">
                                <span class="glyphicon glyphicon-search"></span>查询
                            </button>
                        </form>
                    </li>
                </ul>
                <div id="allBookContent" class="tab-content">
                    <div id="allBookType" class="tab-pane active container">
                        <div class="row"></div>
                    </div>
                </div>
            </div>
            <%--销售排行榜--%>
            <%--<div id="sellRank" class="tab-pane">销售排行榜</div>--%>
        </div>
   </div>
</div>
</body>
</html>

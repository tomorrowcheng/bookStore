var bookInfoURL="http://localhost:8080/bookInfo/";
var divsm2='<div class="col-sm-2">'+'<div class="thumbnail">';
var divsm3='<div class="col-sm-3">'+'<div class="thumbnail">';
var divend='</div>'+'</div>';
var row='<div class="row">'+'</div>';
function selectAllBookInfo(){
    $("#selectBookName").show();
    $.ajax({
        type:"POST",
        url:bookInfoURL+"selectAllBookInfo",
        contentType:"application/json",
        crossDomain:true,
        success:function(data){
            $("#allBookType").children('div.row').remove();
            $("#allBookType").append(row);
            for(var i in data.data){
                var picture=data.data[i].picture;
                var price=data.data[i].price;
                var bookName=data.data[i].bookName;
                var bookID=data.data[i].bookID;
                var shopCart='<a style="float:right" href="#" onclick="insertShopping('+bookID+')">'+'<span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>'+"&nbsp;&nbsp;购物车"+'</a>';
                //var authorName=data.data[i].authors.authorName;
                // var img='<img src="'+picture+'" alt="'+bookName+'" style="width:195px;height:210px">';
                // var title='<h4 style="margin-top:5px;margin-bottom:5px;font-weight:bold">'+bookName+'</h4>';
                // var author='<p style="margin:0">'+'<span>'+"作者:"+'</span>'+authorName+'</p>';
                // var priceSpan='<p style="margin:0;color:#b22222">'+'<span>'+"价格："+'</span>'+price+"￥"+shopCart+'</p>';
                // var content=divsm+img+'<div style="margin-right:25px;margin-left:25px">'+title+author+priceSpan+'</div>'+divend;

                var img='<img src="'+picture+'" alt="'+bookName+'" style="width:130px;height:170px" onclick="bookDetailByBookID('+bookID+')">';
                var title='<h5 style="margin-top:5px;margin-bottom:5px;font-weight:bold">'+bookName+'</h5>';
                var priceSpan='<p style="margin:0;color:#b22222">'+'<span>'+"价格："+'</span>'+price+"￥"+shopCart+'</p>';
                var content=divsm2+img+'<div style="margin-left:5px">'+title+priceSpan+'</div>'+divend;
                $("#allBookType>div.row").append(content);
            }
        }
    })
}
function selectBookInfoByTypeID(typeID){
    var myData=JSON.stringify({"typeID":typeID});
    $.ajax({
        type:"POST",
        url:bookInfoURL+"selectBookInfo",
        contentType:"application/json",
        crossDomain:true,
        data:myData,
        success:function(data){
            $("#selectBookName").hide();
            $("#type"+typeID).children('div.row').remove();
            $("#type"+typeID).append(row);
            for(var i in data.data){
                var picture=data.data[i].picture;
                var price=data.data[i].price;
                var bookName=data.data[i].bookName;
                var bookID=data.data[i].bookID;
                var shopCart='<a style="float:right" href="#" onclick="insertShopping('+bookID+')">'+'<span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>'+"&nbsp;&nbsp;购物车"+'</a>';
                var img='<img src="'+picture+'" alt="'+bookName+'" style="width:130px;height:170px" onclick="bookDetailByBookID('+bookID+')">';
                var title='<h5 style="margin-top:5px;margin-bottom:5px;font-weight:bold">'+bookName+'</h5>';
                var priceSpan='<p style="margin:0;color:#b22222">'+'<span>'+"价格："+'</span>'+price+"￥"+shopCart+'</p>';
                var content=divsm2+img+'<div style="margin-left:5px">'+title+priceSpan+'</div>'+divend;
                $("#type"+typeID).children(".row").append(content);
            }
        }
    })
}
function selectNewBookInfo(){
    $.ajax({
        type: "POST",
        url: bookInfoURL + "selectAllBookInfo",
        contentType: "application/json",
        crossDomain:true,
        success: function (data) {
            var len=data.data.length;
            for (var i=len-1;i>len-9;i--) {
                var picture = data.data[i].picture;
                var price = data.data[i].price;
                var bookName = data.data[i].bookName;
                var bookID=data.data[i].bookID;
                var authorName=data.data[i].authors.authorName;
                var shopCart='<a style="float:right" href="#" onclick="insertShopping('+bookID+')">'+'<span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>'+"&nbsp;&nbsp;购物车"+'</a>';
                var img='<img src="'+picture+'" alt="'+bookName+'" style="width:180px;height:195px" onclick="bookDetailByBookID('+bookID+')">';
                var title='<h4 style="margin-top:5px;margin-bottom:5px;font-weight:bold">'+bookName+'</h4>';
                var author='<p style="margin:0">'+'<span>'+"作者:"+'</span>'+authorName+'</p>';
                var priceSpan='<p style="margin:0;color:#b22222">'+'<span>'+"价格："+'</span>'+price+"￥"+shopCart+'</p>';
                var content=divsm3+img+'<div style="margin-right:25px;margin-left:25px">'+title+author+priceSpan+'</div>'+divend;
                $("#newBook>div.row").append(content);
            }
        }
    })
}
function selectBookByName(){
    var bookName=$("#bookName").val();
    var myData=JSON.stringify({"bookName":bookName});
    $.ajax({
        type:"POST",
        url:bookInfoURL+"selectBookInfo",
        contentType:"application/json",
        crossDomain:true,
        dataType:"json",
        data:myData,
        success:function(data){
            $("#allBookType").children('div.row').remove();
            $("#allBookType").append(row);
            for(var i in data.data){
                var picture=data.data[i].picture;
                var price=data.data[i].price;
                var bookName=data.data[i].bookName;
                var bookID=data.data[i].bookID;
                var shopCart='<a style="float:right" href="#" onclick="insertShopping('+bookID+')">'+'<span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>'+"&nbsp;&nbsp;购物车"+'</a>';
                var img='<img src="'+picture+'" alt="'+bookName+'" style="width:130px;height:160px" onclick="bookDetailByBookID('+bookID+')">';
                var title='<h5 style="margin-top:5px;margin-bottom:5px;font-weight:bold">'+bookName+'</h5>';
                var priceSpan='<p style="margin:0;color:#b22222">'+'<span>'+"价格："+'</span>'+price+"￥"+shopCart+'</p>';
                var content=divsm2+img+'<div style="margin-left:5px">'+title+priceSpan+'</div>'+divend;
                $("#allBookType").children(".row").append(content);
            }
        }
    })
}
function userLoginFun(){
    var userNameCheck=$("#shoppingName").val();
    var userPasswordCheck=$("#password").val();
    if(userNameCheck===""){
        alert("请输入Shopping号");
        return false;
    }else if(userPasswordCheck===""){
        alert("请输入会员密码");
        return false;
    }
    var myData=JSON.stringify({"userName":userNameCheck});
    $.ajax({
        type:"POST",
        url:"http://localhost:8080/user/selectUserOnly",
        contentType:"application/json",
        data:myData,
        crossDomain:true,
        success:function(data){
            var code=data.code;
            if(code===1002){
                alert("Shopping号不存在");
            }else{
                var userName=data.data[0].userName;
                var userPassword=data.data[0].userPassword;
                var userID=data.data[0].userID;
                if(userName===userNameCheck && userPassword===userPasswordCheck){
                    var href=$("#PageContext").val()+"/views/user.html?user="+userID;
                    window.top.location.href=href;
                }else{
                    alert("Shopping号或密码不正确")
                }
            }
        }
    })
}
function adminLoginFun(){
    var adminNameCheck=$("#adminName").val();
    var adminPasswordCheck=$("#adminPassword").val();
    if(adminNameCheck===""){
        alert("请输入管理员账号");
        return false;
    }else if(adminPasswordCheck===""){
        alert("请输入管理员密码");
        return false;
    }
    var myData=JSON.stringify({"adminName":adminNameCheck});
    $.ajax({
        type:"POST",
        url:"http://localhost:8080/admin/selectAdmin",
        contentType:"application/json",
        data:myData,
        crossDomain:true,
        success:function(data){
            var code=data.code;
            if(code===1002){
                alert("管理员账号不存在");
            }else if(code===1000){
                var adminPassword=data.data[0].adminPassword;
                var rank=data.data[0].rank;
                if(adminPassword===adminPasswordCheck){
                    if(rank===1){
                        var href=$("#PageContext").val()+"/views/admin.html?admin=1";
                        window.top.location.href=href;
                    }else{
                        var href2=$("#PageContext").val()+"/views/admin.html?admin=2";
                        window.top.location.href=href2;
                    }
                } else{
                    alert("用户名或密码不正确")
                }
            }
        }
    })
}
function registerFun1(){
    var formData=new FormData();
    var file=document.getElementById("photo").files[0];
    formData.append("file",file);
    var userName=$("#shoppingNameAdd").val();
    var userPassword=$("#passwordAdd").val();
    var birthday=$("#birthday").val();
    var myData=JSON.stringify({"userName":userName,"userPassword":userPassword,"birthday":birthday,"userPhoto":""});
    formData.append("user",new Blob([myData],{type:"application/json"}));
    $.ajax({
        type:"POST",
        url:"http://localhost:8080/user/insertUser",
        dataType:"json",
        contentType:false,
        crossDomain:true,
        processData:false,
        data:formData,
        success:function(){
            alert("注册成功");
            $("#register").modal("hide");
            $("#userLogin").modal("show")
        },
        error:function(){
            alert("注册失败")
        }
    });
    // var userOnly1=JSON.stringify({"userName":userName});
    // $.ajax({
    //     type:"POST",
    //     url:"http://localhost:8080/user/selectUserOnly",
    //     data:userOnly1,
    //     contentType:"application/json",
    //     crossDomain:true,
    //     success:function(data){
    //         var userIDOnly=data.data[0].userID;
    //         var userNameOnly=data.data[0].userName;
    //         $("#userIDOnly").val(userIDOnly);
    //         $("#userNameOnly").val(userNameOnly)
    //     },
    //     error:function(){
    //         alert("注册失败")
    //     }
    // });
}
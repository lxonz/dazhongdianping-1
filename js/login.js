

$(function () {

    //导航栏//
    var navlist = $("nav>ul>li");
// console.log(navlist)
    for(var i=0;i<navlist.length;i++) {
        $(navlist[i]).mouseenter(function () {
            //console.log($(this).find("i"));
            $(this).css("color", "#ff6334");
            $(this).find("i").removeClass("icon-zelvxuanzefeiyongdaosanjiaoxingfandui");
            $(this).find("i").addClass("icon-zelvxuanzefeiyongzhengsanjiaoxingzhichi")
        });
        $(navlist[i]).mouseleave(function () {
            //console.log($(this).find("i"));
            $(this).css("color", "black");
            $(this).find("i").removeClass("icon-zelvxuanzefeiyongzhengsanjiaoxingzhichi");
            $(this).find("i").addClass("icon-zelvxuanzefeiyongdaosanjiaoxingfandui")
        });
        $(navlist[2]).off("mouseleave");//第二个解绑事件
        $(navlist[3]).mouseenter(function () {
            $(this).find("ul").css("display", "block");
        })
        $(navlist[3]).mouseleave(function () {
            $(this).find("ul").css("display", "none");
        })
        $(navlist[4]).mouseenter(function () {

            $(this).find("ul").css("display", "block");
        })
        $(navlist[4]).mouseleave(function () {
            $(this).find("ul").css("display", "none");
        })
        $(navlist[5]).mouseenter(function () {

            $(this).find("ul").css("display", "block");
        })
        $(navlist[5]).mouseleave(function () {
            $(this).find("ul").css("display", "none");
        })
        $(navlist[6]).mouseenter(function () {

            $(this).children(".htNav").css("display", "block");
        })
        $(navlist[6]).mouseleave(function () {
            $(this).children(".htNav").css("display", "none");
        })
    }









    /*------------登录选项------------*/

    $("#loginList2").click(function () {
        $("#FORM2").css("display","block");
        $("#FORM1").css("display","none");
        $(this).css("border-bottom","3px solid #ff6342");
        $("#loginList1").css("border-bottom","3px solid #999999");
        $(this).css("color","black");
        $("#loginList1").css("color"," #999999");
    });
    $("#loginList1").click(function () {
        $("#FORM2").css("display","none");
        $("#FORM1").css("display","block");
        $(this).css("border-bottom","3px solid #ff6342");
        $("#loginList2").css("border-bottom","3px solid #999999");
        $(this).css("color","black");
        $("#loginList2").css("color"," #999999");
    })














 });




$(function () {

    //导航栏//
var navlist = $("nav>ul>li");
// console.log(navlist)
for(var i=0;i<navlist.length;i++){
    $(navlist[i]).mouseenter(function(){
        //console.log($(this).find("i"));
        $(this).css("color","#ff6334");
        $(this).find("i").removeClass("icon-zelvxuanzefeiyongdaosanjiaoxingfandui");
        $(this).find("i").addClass("icon-zelvxuanzefeiyongzhengsanjiaoxingzhichi")
    });
    $(navlist[i]).mouseleave(function(){
        //console.log($(this).find("i"));
        $(this).css("color","black");
        $(this).find("i").removeClass("icon-zelvxuanzefeiyongzhengsanjiaoxingzhichi");
        $(this).find("i").addClass("icon-zelvxuanzefeiyongdaosanjiaoxingfandui")
    });
    $(navlist[2]).off("mouseleave");//第二个解绑事件
    $(navlist[3]).mouseenter(function () {
        $(this).find("ul").css("display","block");
    })
    $(navlist[3]).mouseleave(function () {
        $(this).find("ul").css("display","none");
    })
    $(navlist[4]).mouseenter(function () {

        $(this).find("ul").css("display","block");
    })
    $(navlist[4]).mouseleave(function () {
        $(this).find("ul").css("display","none");
    })
    $(navlist[5]).mouseenter(function () {

        $(this).find("ul").css("display","block");
    })
    $(navlist[5]).mouseleave(function () {
        $(this).find("ul").css("display","none");
    })
    $(navlist[6]).mouseenter(function () {

        $(this).children(".htNav").css("display","block");
    })
    $(navlist[6]).mouseleave(function () {
        $(this).children(".htNav").css("display","none");
    })

    ////////////////二维码显示隐藏
    $("#off").click(function () {
        $("#phdp").remove();
    })
}
////////////////////////////////轮播图
    var imgArr = ["../images/001.jpg","../images/002.jpg","../images/003.jpg","../images/004.jpg","../images/005.jpg","../images/001.jpg"]
    var wrap = document.getElementById("wrap");
    var imgCon = document.getElementById("imgCon");
    var listCon = document.getElementById("listCon");
    var reg = document.getElementById("listCon").children;
    var bnCon = document.getElementById("bnCon");
    // var BN = document.getElementById("bnCon").children;
    const WIDTH = 770;
    const HEIGHT = 300;
    var timer = null;
    var index = 0;
    timer = setInterval(autoPlay,1500);
    for (var i = 0; i < imgArr.length; i ++){
        imgCon.style.width = WIDTH * (i + 1) + "px";
        imgCon.style.height = HEIGHT + "px";
        var imgs = document.createElement("img");
        imgs.src = imgArr[i]
        var liList = document.createElement("li");
        liList.appendChild(imgs);
        liList.style.listStyle = "none";
        liList.style.width = WIDTH + "px";
        liList.style.height = HEIGHT + "px";
        liList.style.float = "left";
        imgCon.appendChild(liList);
        if(i == imgArr.length - 1){
            break;
        }else{
            var res = document.createElement("li");
            res.style.background = "#ffffff";

            if(i == 0){
                res.style.background = "#fe6b37";
            }
            res.style.float = "left";
            res.style.listStyle = "none";
            res . style.width = "10px";
            res.style.height = "10px";
            res.style.borderRadius = "10px";
            res.style.margin = "10px";
            res.style.cursor = "pointer";
            // res.innerHTML = i + 1;
            res.style.textAlign = "center";
            listCon.appendChild(res);
        }
        listCon.style.position = "absolute";
        listCon.style.bottom = "20px";
        listCon.style.left = WIDTH / 2 - (20 * (i - 1)) - (10 * ( i - 1))   + "px";
    }
    function getStyle(obj,attr){
        if(window.getComputedStyle){
            return window.getComputedStyle(obj,null)[attr];
        }else{
            return obj.currentStyle[attr];
        }
    }
    function Method(obj,target,attr) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var cur = parseInt(getStyle(obj, attr));
            var speed = (target - cur) / 10;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (target == cur) {
                clearInterval(obj.timer);
                return;
            }
            obj.style[attr] = cur + speed + "px";
        }, 30)
    }
    function autoPlay() {
        index ++ ;
        if(index == 6){
            index = 1;
            imgCon.style.left = 0;
        }
        for(var i = 0; i < reg.length; i ++){
            reg[i].style.background = "#ffffff";
            reg[i].className = "";
        }
        reg [index == 5 ? 0 : index].className = "xiaodian";
        Method(imgCon,-WIDTH * index,"left");
    }
    wrap.onmouseover = function () {
        // bnCon.style.display = "block"
        clearInterval(timer)
    }
    wrap.onmouseout = function () {
        // bnCon.style.display = "none";
        timer = setInterval(autoPlay,1500)
    }
    for (let i = 0; i < reg.length; i++){
        reg[i].onclick = function () {
            index = i - 1;
            clearInterval(timer);
            autoPlay();
        }
    }
    // for (var i = 0; i < BN.length; i ++){
    //     BN[0].onclick = function () {
    //         index --;
    //         if(index == -1){
    //             index = 0;
    //         }
    //         for(var i = 0; i < reg.length; i++){
    //             reg[i].className = "";
    //         };
    //         reg[index].className = "xiaodian";
    //         Method(imgCon,- WIDTH * index,"left");
    //     };
    //     BN[1].onclick = function () {
    //         if(index == reg.length){
    //             index = 0;
    //             imgCon.style.left = 0;
    //         }
    //         index++;
    //         if(index == reg.length){
    //             index = reg.length -1;
    //         }
    //         for(var i = 0; i < reg.length; i++){
    //             reg[i].className = "";
    //         }
    //         reg[index].className = "xiaodian";
    //         Method(imgCon,-WIDTH * index,"left");
    //     }
    // }
    /////////////图片滚动
    // var scrollIndex=0;
    // var Timer=null;
    // function scroll_f(){
    //     clearInterval(Timer);
    //     var oul=$("#lunbo");
    //
    //     var oli=oul.children("li");
    //     var h=oli.height();
    //     var index=0;
    //
    //     oul.css("height",h*oli.length*2);
    //     oul.html(oul.html()+oul.html());
    //     function run()
    //     {
    //         if(scrollIndex>=oli.length){
    //             oul.css({top:0});
    //             scrollIndex=1;
    //             oul.animate({top:-scrollIndex*h},200);
    //         }
    //         else{
    //             scrollIndex++;
    //             oul.animate({top:-scrollIndex*h},200);
    //         }
    //     }
    //     Timer=setInterval(run,1500);
    // }
    // $(function(){
    //     scroll_f();
    // })
/*
* -------------cate
*
* */
    var pro = promiseAjax("../mock/cate.json");
    pro.then(function(msg){
        var msg = JSON.parse(msg);
        var cateimg = document.getElementById("cateimg");
        var str = "";
        for(var key in msg){
            for(var i=0;i<msg[key].length;i++){
                    str += `<li>
                                <img src="${msg[key][i].src}" alt="">
                                <h3>${msg[key][i].storeName}&nbsp;&nbsp;<span  class="icon iconfont icon-test"></span></h3>
                                <ul id="grade">
                                    <li>
                                        <i class="icon iconfont icon-pingfen"></i>
                                    </li>
                                    <li>
                                        <i class="icon iconfont icon-pingfen"></i>
                                    </li>
                                    <li>
                                        <i class="icon iconfont icon-pingfen"></i>
                                    </li>
                                    <li>
                                        <i class="icon iconfont icon-pingfen"></i>
                                    </li>
                                    <li>
                                        <i class="icon iconfont icon-pingfen"></i>
                                    </li>
                                    <li>${msg[key][i].dianping}条点评</li>
                                </ul>
                                <div class="clear"></div>
                                <ul id="sheep">
                                    <li>${msg[key][i].pingzhong}</li>
                                    <li>${msg[key][i].dizhi}</li>
                                </ul>
                                <div class="clear"></div>
                                <h2>￥${msg[key][i].jiage} / 人</h2>
                            </li>`
                }
                cateimg.innerHTML = str;
            }
    },function(msg){
        alert(msg)
    })
/*----------leisure----------*/
    var ppo = promiseAjax("../mock/leisure.json");
    ppo.then(function(msg){
        var msg = JSON.parse(msg);
        var leisure = document.getElementById("leisureimg");
        var sum = "";
        for(var key in msg){
            for(var i=0;i<msg[key].length;i++){
                sum += `<li>
                        <img src="${msg[key][i].src}" alt="">
                        <h3>${msg[key][i].storeName}&nbsp;&nbsp;<span  class="icon iconfont icon-test"></span></h3>
                        <ul id="leisuregrade">
                        <li>
                        <i class="icon iconfont icon-pingfen"></i>
                        </li>
                        <li>
                        <i class="icon iconfont icon-pingfen"></i>
                        </li>
                        <li>
                        <i class="icon iconfont icon-pingfen"></i>
                        </li>
                        <li>
                        <i class="icon iconfont icon-pingfen"></i>
                        </li>
                        <li>
                        <i class="icon iconfont icon-pingfen"></i>
                        </li>
                        <li>${msg[key][i].dianping}条点评</li>
                        </ul>
                        <div class="clear"></div>
                        <ul id="leisuresheep">
                        <li>${msg[key][i].pingzhong}</li>
                        <li>${msg[key][i].dizhi}</li>
                        </ul>
                        <div class="clear"></div>
                        <h2>￥${msg[key][i].jiage} / 人</h2>
                        </li>`;
            }
            leisure.innerHTML = sum;
        }
    },function(msg){
        alert(msg)
    })
///////////////////  married
    var poo = promiseAjax("../mock/married.json");
    poo.then(function(msg){
        var msg = JSON.parse(msg);
        var marriedli = "";
        marriedli += `<li><img src="${msg[0].src}" alt=""></li>
                      <li><img src="${msg[1].src}" alt=""></li>
                      <li><img src="${msg[2].src}" alt=""></li>
                      <li><img src="${msg[3].src}" alt=""></li>
                      <li><img src="${msg[4].src}" alt=""></li>`;
        document.getElementById("marriedImg").innerHTML = marriedli;
    },function(msg){
        alert(msg)
    })



/*----------learning-----------*/
    var learningppo = promiseAjax("../mock/learning.json");
    learningppo.then(function(msg){
        var msg = JSON.parse(msg);
        var learningImg = document.getElementById("learningImg");
        var reg = "";
        for(var key in msg){
            for(var i=0;i<msg[key].length;i++){
                reg += `<li>
                    <img src="${msg[key][i].src}" alt="">
                    <h2>${msg[key][i].storeName}&nbsp;<span class="icon iconfont icon-ding"></span> <span class="icon iconfont icon-test"></span></h2>
                    <ul id="learningP">
                        <li class="icon iconfont icon-pingfen"></li>
                        <li class="icon iconfont icon-pingfen"></li>
                        <li class="icon iconfont icon-pingfen"></li>
                        <li class="icon iconfont icon-pingfen"></li>
                        <li class="icon iconfont icon-pingfen"></li><em>${msg[key][i].dianping}条点评</em>
                    </ul>
                    <div class="clear"></div>
                    <ul id="learningL">
                        <li>${msg[key][i].pingzhong}</li>
                        <li>${msg[key][i].dizhi}</li>
                    </ul>
                    <div class="clear"></div>
                    <h3>￥${msg[key][i].jiage}  / 人</h3>
                </li>`
            }
            learningImg.innerHTML = reg;
        }
    },function(msg){
        alert(msg)
    })



/*----------搜索框----------*/

    var search = document.getElementById("search");
    var box = document.getElementById("searchUl");
    search.onkeyup = function () {
        var txt = this.value;
        console.log(txt)
        var oScript = document.createElement("script");
        document.body.appendChild(oScript);
        oScript.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+txt+"&cb=fx";
    };
    function fx(msg){
        var arr = msg;
        var str = "";
        for(var i = 0; i < arr.length; i++){
            str += `<li>${arr[i]}</li>`;
        }
        box.innerHTML = str;
    }
    box.onclick = function (e) {
        var e = e || event;
        var target = e.target || e.srcElement;
        if(target.nodeName == "LI"){
            search.value = target.innerHTML;
            box.innerHTML = "";
        }
    }





})//////
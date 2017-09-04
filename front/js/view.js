/**
 * Created by 付双明 on 2017/8/21.
 */
mvc.view = {};

var url_href="http://cminic.org/public";
var url_IMG="http://cminic.org/storage/";

mvc.view.basde=function () {
    //    登陆界面
    $(".login_").click(function () {
        $(".login_div_").show();
        $(".colse_login").click(function () {
            $(".login_div_").hide();
        })
    });
    $(".login_left_ul li").click(function () {
        $(this).css({
            color:"#0076f1"
        }).siblings().css({
            color:"#999"
        })
    });
    //
    $(".cooperation_li").click(function () {
        $(".cooperation_fixed").show();
        $(".colse_cooperation").click(function () {
            $(".cooperation_fixed").hide();
        })
    });

//    登陆框
    $(".login_btn").click(function () {
        alert("你输入的账号无效！");
        // console.log("点击了")/**/
    });
    //百度商桥
    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?dd04146c734f2149cf56265f20bf9a36";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
//        hm.hide();

    })();
    //百度商桥 end
    //登百度商桥加载完毕的隐藏
    $(document).ready(function(){
        // alert("ok");
        $(".nb-icon-wrap").addClass("display_none").css({
            display:"none",
            zIndex:"-1"
        });
    });
    window.onload=function(){
        $(".nb-icon-wrap").addClass("display_none").css({
            display:"none",
            zIndex:"-1"
        });
    };
    //登百度商桥加载完毕的隐藏 end
};
mvc.view.app_dom=function () {
    $(".cooperation_app").click(function () {
        $(".app_alert").css({
            display:"table"
        });
        $(".colse_login").click(function () {
            $(".app_alert").css({
                display:"none"
            });
        })

    })
};
//右边导航栏
mvc.view.wirth=function () {
    var wirth_div=$("<div class=\" wirth_div\">" +
        "<div class=\"row\"> " +
        "<div class=\"col-xs-8\"><a href=\"index.html\" >" +
        "<img src=\"images/foot_logo.png\" alt=\"\"></a>" +
        "<div class=\"wirth_text\">" +
        "<h4>重庆隆盈科技有限公司</h4><p class=\"div_hidle\">一站式金融IT服务商，金融软件行业领先品牌，致力于推动科技金融智能化</p></div>" +
        "</div><div class=\"col-xs-4\"><div class=\"wirth_tel\"><p class=\"tel_orange\">023-8815-9689</p><p class=\"tel_text\">免费专业咨询顾问</p></div></div> </div> </div>");
    $(".wirth_logo").append(wirth_div);
};

//顶部导航栏 （含右上角惊喜）
mvc.view.top_nav_right=function () {
    var top_nav_=$("<div class=\"top_nav row\" id=\"home_\"> " +
        "<!--右上角--><a href=\"de_customization.html\"><div class=\"carousel_right div_hidle\"></div></a>" +
        "<!--右上角 end--><div> <!--登录框部分--><div class=\" col-xs-6 login_div\">" +
        "<div class=\"login_\">登录</div><img src=\"images/notice.png\"  class=\"notice_\" alt=\"\">" +
        "<!--邮件--><a  onClick=\"parent.location=\'mailto:fs@lionkeji.com?subject=「商务合作」隆盈金服与您携手共赢\'\"><img src=\"images/mail.png\"  class=\"mail_\" alt=\"\"></a>" +
        "<span class=\"tel_\"><img src=\"images/tel_.png\" alt=\"\">023-88159689</span> </div>" +
        "<!--登录框 ens--><!--建立合作部分  div_hidle-->" +
        "<div class=\"col-xs-5 cooperation_div \">" +
        "<div class=\"row\">" +
        "<div class=\" cooperation_map\">" +
        "网站地图 <span class=\"glyphicon glyphicon-list\" aria-hidden=\"true\"></span>" +
        " <div class=\'cooperation_map_list\' hidden>" +
        "<img class=\'img_span\' src=\'images/sanjiao_wirth.png\' alt=\'\'>" +
        "<ul>" +
        "<p>产品中心</p>" +
        "<li><a href=\'product_all.html\'>产品详情</a></li>" +
        "<li><a href=\'product_all.html\'>产品定制</a></li>" +
        "</ul>" +

        "<ul>" +
        "<p>解决方案</p>" +
        "<li><a href=\'case.html\'>方案详情</a></li>" +
        "<li><a href=\'Latest_information.html\'>行业咨询</a></li>" +
        "</ul>" +
        "<ul class=\'about_us_li\'>" +
        "<p>关于我们</p>" +

        "</ul>" +
        "<ul>" +
        "<p>建立合作</p>" +
        "<li><a href=\'premier/a/job\'>加入我们</a></li>" +
        "<li><a href=\'de_customization.html\'>需求定制</a></li>" +
        "</ul>" +
        "</div>" +
        "</div>" +
        "<div class=\" cooperation_app\">APP下载</div>" +
        "<div class=\" cooperation_li\">建立合作</div></div> </div><!--建立合分 ends--></div></div>" +
        "");
    $(top_nav_).insertBefore($("#myCarousel"));
    mvc.view.basde();//基础代码
    mvc.view.app_dom();

};
//顶部导航栏 （含右上角惊喜）end
//顶部导航栏
mvc.view.top_nav=function () {
    var top_nav_=$("<div class=\"top_nav row\" id=\"home_\"> " +
        // "<!--右上角--><a href=\"de_customization.html\"><div class=\"carousel_right div_hidle\"></div></a>" +
        "<!--右上角 end--><div> <!--登录框部分--><div class=\" col-xs-6 login_div\">" +
        "<div class=\"login_\">登录</div><img src=\"images/notice.png\"  class=\"notice_\" alt=\"\">" +
        "<!--邮件--><a  onClick=\"parent.location=\'mailto:fs@lionkeji.com?subject=「商务合作」隆盈金服与您携手共赢\'\"><img src=\"images/mail.png\"  class=\"mail_\" alt=\"\"></a>" +
        "<span class=\"tel_\"><img src=\"images/tel_.png\" alt=\"\">023-88159689</span> </div>" +
        "<!--登录框 ens--><!--建立合作部分  div_hidle-->" +
        "<div class=\"col-xs-5 cooperation_div \">" +
        "<div class=\"row\">" +
        "<div class=\" cooperation_map\">" +
        "网站地图 <span class=\"glyphicon glyphicon-list\" aria-hidden=\"true\"></span>" +
        " <div class=\'cooperation_map_list\' hidden>" +
        "<img class=\'img_span\' src=\'images/sanjiao_wirth.png\' alt=\'\'>" +
        "<ul>" +
        "<p>产品中心</p>" +
        "<li><a href=\'Product_center.html\'>产品详情</a></li>" +
        "<li><a href=\'Product_center.html\'>产品定制</a></li>" +
        "</ul>" +

        "<ul>" +
        "<p>解决方案</p>" +
        "<li><a href=\'case.html\'>方案详情</a></li>" +
        "<li><a href=\'Latest_information.html\'>行业咨询</a></li>" +
        "</ul>" +
        "<ul class=\'about_us_li\'>" +
        "<p>关于我们</p>" +

        "</ul>" +
        "<ul>" +
        "<p>建立合作</p>" +
        "<li><a href=\'premier/a/job\'>加入我们</a></li>" +
        "<li><a href=\'de_customization.html\'>需求定制</a></li>" +
        "</ul>" +
        "</div>" +
        "</div>" +
        "<div class=\" cooperation_app\">APP下载</div>" +
        "<div class=\" cooperation_li\">建立合作</div></div> </div><!--建立合分 ends--></div></div>" +
        "");
    $(top_nav_).insertBefore($(".wirth_logo"));
    mvc.view.basde();//基础代码
    mvc.view.app_dom();
};
//顶部导航栏

//footer
mvc.view.footer=function () {
    var footer_div=$("<div class=\"footer_div_content\">" +
        "<div class=\"row footer_content\"> <!--隆盈金服--> " +
        "<div class=\"col-xs-4 footer_content_href\">" +
        "<img src=\"images/foot_logo.png\" alt=\"\">" +
        "<div><p><span class=\"div_hidle\">PAIRUI</span><a href=\"www.cdrperi195.com\">www.cdrperi195.com</a></p>" +
        "<p><span  class=\"div_hidle\">ALLIIBABA</span><a href=\"www.alibaba.com\">www.alibaba.com</a></p>" +
        "<p><span  class=\"div_hidle\">BAIDUI</span><a href=\"www.baidued666.com\">www.baidued666.com</a></p>" +
        "<p><span  class=\"div_hidle\">HUAWEI</span><a href=\"www.huaweu244.com\">www.huaweu244.com</a></p>" +
        "</div></div> " +
        "<!--隆盈金服 end-->" +
        "<div class=\"col-xs-8 footer_project\">" +
        "<div class=\"col-xs-3\">" +
        "<p>产品中心</p>" +
        "<ul class=\'prodect_4\'>" +

        "</ul>" +
        "</div>" +
        "<div class=\"col-xs-3\"><p>解决方案</p>" +
        "<ul class=\'solution_4\'>"+

        "</ul> </div>" +
        "<div class=\"col-xs-3\"><p>关于我们</p>" +
        "<ul class=\'about_us_li\'>" +

        "</ul>" +
        " </div><div class=\"col-xs-3\"><p>研发基地</p>" +
        "<ul class=\'rd_base_ul\'>" +

        "<li class=\'kefu_li\'><a  class=\'kefu\'>客服中心</a></li>" +
        "</ul> </div></div></div> " +
        "<p class=\"footer_div_text\">隆盈金服版权所有  渝ICP备14000176号  违法和不良信息举报电话：184 2834 7603</p> </div>");
    $(".footer_div").append(footer_div);

    var html_app=$("<div class=\'app_alert\' hidden>" +
        "<p class=\"colse_login\"> <img src=\"images/colse_.png\" alt=\"\"> </p>" +
        "<div><img src=\'images/扫码大图.png\' alt=''><p class=\'saoma\'>扫码下载</p><p><span>网页链接</span><a href=\'www.longyingkeji.com\'>www.longyingkeji.com</a></p></div></div>");
    $(".container").append(html_app);
    // mvc.view.prodect_();//获取四个产品链接
    $.ajax({
        url:url_href+"/api/products",
        headers: {
            'api_key':'1234567890',
            'Content-Type':'application/json'
        },
        type:"GET",
        success:function (str) {
            var str_pr = $.parseJSON(str);
            for(var i in str_pr){
                if(i<4){
                    var str_div=$("<li><a href=\"Product_center.html?product_id="+str_pr[i].id+"\">"+str_pr[i].name+"</a></li>");
                    $(".prodect_4").append(str_div);
                }
            }

        }
    });
    // mvc.view.prodect_();//获取四个解决方案
    $.ajax({
        url:url_href+"/api/solutions",
        headers: {
            'api_key':'1234567890',
            'Content-Type':'application/json'
        },
        type:"GET",
        success:function (str) {
            var str_sol = $.parseJSON(str);
            for(var i in str_sol){
                if(i<4){
                    var sol_div=$("<li><a href=\"Solution_details.html?id="+str_sol[i].id+"\">"+str_sol[i].title+"</a></li>");
                    $(".solution_4").append(sol_div);
                }
            }

        }
    })


};
mvc.view.footer();
// mvc.view.prodect_=function () {
//
//
// };

//footer end
//联系我们
mvc.view.conact_us=function () {
    $.ajax({
        url:url_href+"/api/settings",
        headers: {
            'api_key':'1234567890',
            'Content-Type':'application/json'
        },
        type:"GET",
        success:function (str) {
            var conactent=$("<div class=\"col-log-6 col-md-6 col-xs-12 div_hidle example\"><img src=\"images/地图.png\" alt=\"\">" +
                " <div class=\"dot\"><img src=\'images/原点.png\' alt=\'\'></div>" +
                "<div class=\"dot_\"><img src=\'images/原点.png\' alt=\'\'></div>" +
                "</div><div class=\"col-log-6 col-md-6 col-xs-12 contant_us_mobile\" >" +
                "<img src=\"images/联系我们背景.png\" class=\"\" alt=\"\">" +
                "<div class=\"contant_us_text\"><ul class=\"contant_us_text_ul\">" +
                "<p class=\"contant_us_title\">联系我们</p>" +
                "<li><img src=\"images/tel_.png\" alt=\"\">"+str.company_phone+"</li>" +
                "<li><img src=\"images/mail_.png\" alt=\"\">"+str.company_email+"</li>" +
                "<li><img src=\"images/Bitmap.png\" alt=\"\">"+str.website_url+"</li>" +
                "<li><img src=\"images/Group 22.png\" alt=\"\">"+str.headquarters_add+"</li>" +
                "<li><img src=\"images/Group 22.png\" alt=\"\">"+str.branch_add+"</li></ul></div></div>");
            $(".conact_us").append(conactent);
            $(".Tianfu_base_text").html(str.company_intro);
            $(".img_logo").attr("src",""+url_IMG+str.logo+"");
        }
    });
};
//关于我们的四个链接 bout_us_li
mvc.view.bout_us_li=function () {
    // alert("ok");
    $.ajax({
        url:url_href+"/api/about-us",
        headers: {
            'api_key':'1234567890',
            'Content-Type':'application/json'
        },
        type:"GET",
        success:function (str) {
            var str_about=$.parseJSON(str);
            for(var i in str_about){
                var about_us_div=$("<li><a href=\"about_us.html?about_="+str_about[i].id+"\">"+str_about[i].title+"</a></li>");

                $(".about_us_li").append(about_us_div);
                // $(".bout_us_li_").append(about_us_div);
            }
        }
    });
};
mvc.view.bout_us_li();

//联系我们end
//滚屏
mvc.view.scrollFunc=function () {
    var scrollFunc=function(e){
        e=e || window.event;
        var t1=document.getElementById("wheelDelta");
        var t2=document.getElementById("detail");
        if(e.wheelDelta){//IE/Opera/Chrome
//            alert("ok");
            subiao();


        }else if(e.detail){//Firefox
//            alert("ok");
            subiao();


        }
    };
    /*注册事件*/
    if(document.addEventListener){
        document.addEventListener('DOMMouseScroll',scrollFunc,false);
    }//W3C
    window.onmousewheel=document.onmousewheel=scrollFunc;//IE/Opera/Chrome
//    if(e.wheelDelta){//IE/Opera/Chrome
//        alert("ok23");
//        subiao();
//
//    }else if(e.detail){//Firefox
//        alert("ok23");
//        subiao();
//
//    }
    function subiao() {
        if($(document).scrollTop()>$(".home_ul_").offset().top+30){
            $(".TOP_nav_fixed").show();
        }else{
            $(".TOP_nav_fixed").hide();

        }
    }

};
//滚屏 end
//产品中心
mvc.view.Product_center=function () {
    $(".Product_center").hover(function () {
        $(this).find(".Product_center_div").show();
    },function () {
        $(this).find(".Product_center_div").hide();
    });
};
//建立合作的复选框
mvc.view.ckeckbox=function () {
    $(".cooperation_ul label").click(function () {
        if($(this).find("input").prop("checked")){
//           alert($(this).find(".input_div").html());
            $(this).find(".input_div").css({
                backgroundImage:"url('images/checked_input.png')",
                backgroundSize:"100% 100%"
            })
        }else{
            $(this).find(".input_div").css({
                background:"#fff"
            })
        }
    });
};
//顶部固定导航栏
mvc.view.top_blue=function () {
    var top_nav=$(" <ul class=\"\"> " +
        "<li class=\"active\"><a href=\"index.html\">首页</a></li> " +
        "<li><a href=\"product_all.html\">产品中心</a></li>" +
        " <li><a href=\"Solution.html\">解决方案</a></li>" +
        " <li><a href=\"case.html\">案例展示</a></li> " +
        "<li><a href=\"Latest_information.html\">行业资讯</a></li> " +
        "<li><a href=\"rd_base.html?base_id=1\">研发基地</a></li> " +
        "<li><a href=\"Contact_us.html\">联系我们</a></li> </ul>");
    $(".TOP_nav_fixed").append(top_nav);
};
//顶部固定导航栏 end

//轮播图里面的导航
mvc.view.in_myCarousel=function () {
 var home_nav=$("<div class=\"home_div\"> " +
     "<div class=\"home_nav\"> " +
     "<div class=\"col-md-3 col-lg-3 img_home div_hidle\">" +
     " <a href=\"index.html\"><img class=\'img_logo\' src=\"\" alt=\"\"> </a> </div> " +
     "<div class=\"col-md-9 col-lg-9 col-xs-12 home_ul_ div_hidle\">" +
     " <ul class=\"\">" +
     " <li class=\"\">" +
     "<a href=\"index.html\">首页</a></li>" +
     " <li  class=\"Product_center\">" +
     " <a href=\"product_all.html\">产品中心</a> " +
     "<div class=\"Product_center_div\" hidden> " +
     "<img src=\"images/sanjiao.png\" class=\"span_\" alt=\"\"> " +
     "<ul class=\"Product_center_ul\"></ul> </div> </li>" +
     " <li><a href=\"Solution.html\">解决方案</a></li> " +
     "<li><a href=\"case.html\">案例展示</a></li>" +
     " <li><a href=\"Latest_information.html\">行业资讯</a></li>" +
     " <li><a href=\"rd_base.html?base_id=1\">研发基地</a></li>" +
     " <li><a href=\"Contact_us.html\">联系我们</a></li> " +
     "</ul> </div> </div> " +
     "<div class=\"home_text\"> <img src=\"images/banner文案.png\" alt=\"\">" +
     "<div class=\"join_us_div\"> <a href=\'premier/a/job\'>加入我们</a> </div> " +
     " </div> " +
     "<!--加入我们--> </div>");
 $(home_nav).insertBefore(".carousel-indicators");
    // mvc.view.scrollFunc();
    mvc.view.Product_center();//产品中心
    // alert($(".container").attr("is_"));
    var home_ative=$(".container").attr("is_");
    // alert(home_ative);
    $(".home_ul_>ul>li").eq(home_ative).addClass("active").siblings().removeClass("active");
    $(".TOP_nav_fixed>ul>li").eq(home_ative).addClass("active").siblings().removeClass("active");

    mvc.view.left_fixed_nav();//右边的固定客服之类
    mvc.controller.nav_list();
};
//轮播图里面的导航 end

//只有一张图片的导航栏
mvc.view.in_myCarousel_img=function () {
    // alert("ok");
    var home_nav=$("<div class=\"home_div\"> " +
        "<div class=\"home_nav\"> " +
        "<div class=\"col-md-3 col-lg-3 img_home div_hidle\">" +
        " <a href=\"index.html\"><img class=\'img_logo\' src=\"\" alt=\"\"> </a> </div> " +
        "<div class=\"col-md-9 col-lg-9 col-xs-12 home_ul_ div_hidle\">" +
        " <ul class=\"\">" +
        " <li class=\"\">" +
        "<a href=\"index.html\">首页</a></li>" +
        " <li  class=\"Product_center\">" +
        " <a href=\"product_all.html\">产品中心</a> " +
        "<div class=\"Product_center_div\" hidden> " +
        "<img src=\"images/sanjiao.png\" class=\"span_\" alt=\"\"> " +
        "<ul class=\"Product_center_ul\"></ul> </div> </li>" +
        " <li><a href=\"Solution.html\">解决方案</a></li> " +
        "<li><a href=\"case.html\">案例展示</a></li>" +
        " <li><a href=\"Latest_information.html\">行业资讯</a></li>" +
        " <li><a href=\"rd_base.html?base_id=1\">研发基地</a></li>" +
        " <li><a href=\"Contact_us.html\">联系我们</a></li> " +
        "</ul> </div> </div> " +
        "<div class=\"join_us_div\"> <a href=\'premier/a/job\'>加入我们</a> </div> " +
        "<!--加入我们--> </div>");
    $(".carousel ").append(home_nav);

    // mvc.view.scrollFunc();
    mvc.view.Product_center();//产品中心
    // alert($(".container").attr("is_"));
    var home_ative=$(".container").attr("is_");
    // alert(home_ative);
    $(".home_ul_>ul>li").eq(home_ative).addClass("active").siblings().removeClass("active");
    $(".TOP_nav_fixed>ul>li").eq(home_ative).addClass("active").siblings().removeClass("active");

    mvc.view.left_fixed_nav();//右边的固定客服之类
    mvc.controller.nav_list();
};
//右边的固定客服之类的
mvc.view.left_fixed_nav=function () {
    var left_div=$("<div class=\"left_fixed_nav\"><div class=\'kefu\'>" +
        "<a ><img src=\"images/客服图标.png\" alt=\"\"><p>在线咨询</p></a>" +
        "</div> <div><a href=\"de_customization.html\"><img src=\"images/需求定制图标.png\" alt=\"\"><p>需求定制</p></a>" +
        "</div><div class=\'tel_img\'><div class=\'tel_img_div\'>023-8815-6989</div><a ><img src=\"images/电话咨询图标.png\" alt=\"\"><p>电话咨询</p></a>" +
        "</div><div class=\'contact_img\'>" +
        "<div class=\'row contact_img_div\'><div class=\'col-xs-6\'><img src=\'images/公众号.png\' alt=\'\'><p>隆盈微博公众号</p></div><div class=\'col-xs-6\'><img src=\'images/公众号.png\' alt=\'\'><p>官方微信公众号</p></div></div>" +
        "<a ><img src=\"images/关注我们图标.png\" alt=\"\"><p>关注我们</p></a></div></div>" +
        "<a href=\"#home_\"><img src=\'images/toTop-icon.png\'  class=\'top_home\' alt=\'返回顶部\'></a>");
    $(".container").append(left_div);

    mvc.view.mobile_nav();//手机导航栏
    $(".kefu").click(function () {
        // alert("ok");
        $(".nb-icon-inner-wrap").click();
    });

    // $(".tel_img").hover(function () {
    //     alert("ok");
    // })


};
//右边的固定客服之类的 end
// mvc.view.top_nav_=function () {
//  var top_nav_=$("<div class=\"top_nav row\" id=\"home_\"> " +
//      "<!--右上角--><a href=\"de_customization.html\"><div class=\"carousel_right div_hidle\"></div></a>" +
//      "<!--右上角 end--><div> <!--登录框部分--><div class=\" col-xs-6 login_div\">" +
//      "<div class=\"login_\">登录</div><img src=\"images/notice.png\"  class=\"notice_\" alt=\"\">" +
//      "<!--邮件--><a href=\"#\"><img src=\"images/mail.png\"  class=\"mail_\" alt=\"\"></a>" +
//      "<span class=\"tel_\"><img src=\"images/tel_.png\" alt=\"\">023-88159689</span> </div>" +
//      "<!--登录框 ens--><!--建立合作部分  div_hidle-->" +
//      "<div class=\"col-xs-5 cooperation_div \">" +
//      "<div class=\"row\">" +
//      "<div class=\" cooperation_map\">网站地图2334</div>" +
//      "<div class=\" cooperation_app\">APP下载</div>" +
//      "<div class=\" cooperation_li\">建立合作</div></div> </div><!--建立合分 ends--></div></div>" +
//      "<div class=\'app_alert\'>qweeeeeeeeeeqwrt</div>");
//     };

//顶部导航asfasf
//app下载 cooperation_app



//手机导航栏
//手机导航栏
mvc.view.mobile_nav=function () {
 var mobile_=$("<div class=\"mobile_nav_fixed\" hidden>" +
     "<div class=\"mobile_nav_div\"><img src=\'images/logo.png\' alt=\'\'></div> " +
     "<ul class=\"mobile_nav_ul\" hidden>" +
     "<li class=\"active\"><a href=\"index.html\">首页</a></li>" +
     "<li><a href=\"product_all.html\">产品中心</a></li>" +
     "<li><a href=\"Solution.html\">解决方案</a></li>" +
     "<li><a href=\"case.html\">案例展示</a></li>" +
     "<li><a href=\"Latest_information.html\">行业资讯</a></li>" +
     "<li><a href=\"rd_base.html?base_id=1\">研发基地</a></li>" +
     "<li><a href=\"Contact_us.html\">联系我们</a></li>" +
     // "<li><button class=\'colse_\'>关闭</button></li>" +
     "</ul></div>");
 $("body").append(mobile_);
    // var mobile_nav_number=0;
    function  hover() {
        $(".mobile_nav_fixed").hover(function () {
            // alert("OK");
            // alert(mobile_nav_number);

            // if(mobile_nav_number%2==0){
            //     $(".mobile_nav_ul").show();
            // }else{
            //     $(".mobile_nav_ul").hide();
            // }
            // // mobile_nav_number++;
            $(".mobile_nav_ul").show();
            // $(".colse_").click(function () {
            //     $(".mobile_nav_ul").hide();
            //     hover();
            // })

        },function () {
            $(".mobile_nav_ul").hide()
        });
    }
    hover();


        // $(".mobile_nav_div").click(function () {
        //     // alert("ok");
        //     $(".mobile_nav_ul").show();
        //     var isOut = true;
        //     var dom = document.getElementsByClassName('mobile_nav_div')[0];
        //     var other = document.getElementsByClassName('mobile_nav_ul')[0];
        //     other.onclick = function(){
        //         if(isOut){
        //             $(".mobile_nav_ul").hide();
        //         }
        //         isOut = true;
        //     };
        //     dom.onclick = function(){
        //         isOut = false;
        //         // this.style.display = 'block';
        //         $(".mobile_nav_ul").show();
        //     };
        // });

};

//截取url的内容
mvc.view.getUrl = function (name) {
    var reg = new RegExp("(^|&)"+name+"=([^&]*)(&|$)");
    var result = window.location.search.substr(1).match(reg);
    return result?decodeURIComponent(result[2]):null;
};

//
mvc.view.cooper_web=function () {
    var cooper_web_div=$("<div class=\'Establish_cooperation\'>"+
        "<div class=\"Establish_cooperation_div\">" +
        " <p class=\"cooperation_title\">建立合作<img class=\"title_line\" src=\"images/标题线条.png\" alt=\"\"></p>" +
        "<div class=\"row cooperation_contact\">" +
        "<div class=\"col-log-4 col-xs-12 col-md-4\">" +
        "<div><span><img src=\"images/姓名图标.png\" alt=\"\"></span>" +
        "<span class=\"span_input\">" +
        "<input type=\"text\" class=\"input_required\" placeholder=\"请输入您的姓名\"/></span></div>" +
        "</div><div class=\"col-log-4 col-xs-12 col-md-4\">" +
        "<div><span><img src=\"images/电话图标.png\" alt=\"\"></span>" +
        "<span class=\"span_input\"> <input type=\"text\"  class=\"input_required PhoneNumberVerification\" maxlength=\"11\"  placeholder=\"请输入您的联系电话\"/></span></div></div>" +
        "<div class=\"col-log-4 col-xs-12 col-md-4\"><div>" +
        "<span><img src=\"images/邮箱图标.png\" alt=\"\"></span>" +
        "<span class=\"span_input\"> " +
        "<input type=\"text\"   class=\"input_required eMaile\" placeholder=\"请输入您的邮箱\"/></span></div></div> </div><!--选择-->" +
        "<ul class=\"cooperation_ul\">" +
        "<li><label><span>行业咨询</span><div class=\"input_div\"></div> " +
        "<input type=\"checkbox\"  value=\'行业咨询\'></label>" +
        "</li><li><label><span>解决方案</span><div class=\"input_div\"></div>" +
        "<input type=\"checkbox\"  value=\'解决方案\'></label>" +
        "</li><li><label><span>产品定制</span><div class=\"input_div\"></div><input type=\"checkbox\"   value=\'产品定制\'></label></li>" +
        "<li><label><span>商务合作</span><div class=\"input_div\"></div><input type=\"checkbox\"   value=\'商务合作\'></label></li>" +
        "</ul><!--选择 end--><!--详情需求-->" +
        "<textarea name=\"\" class=\"cooperation_textarea input_required\" cols=\"30\" rows=\"10\" placeholder=\"请输入您的需求介绍\"></textarea>" +
        "<!--详情需求 end--><!--提交-->" +
        "<button class=\"btn_subimt\">提交</button><!--提交 end-->" +
        "<p class=\"cooperation_p\">郑重承诺：您的信息仅供我司进行商务所用，进行严格保密，绝不泄密第三方</p></div></div>");
    $(cooper_web_div).insertBefore($(".conact_us"));
    mvc.view.ckeckbox();//建立合作的复选款
    mvc.controller.cooperation();
    mvc.controller.PhoneNumberVerification();
    mvc.controller.E_Maile();

};
//
mvc.view.cooper=function () {
    var coop_div=$("<div class=\"cooperation_fixed\"  hidden><div class=\"cooperation_fixed_div\">" +
        " <div class=\"colse_cooperation\">" +
        "<img src=\"images/colse_.png\" alt=\"\"></div>" +
        "<div class=\"Establish_cooperation\">" +
        "<div class=\"Establish_cooperation_div\"> " +
        "<p class=\"cooperation_title\">建立合作<img class=\"title_line\" src=\"images/标题线条.png\" alt=\"\"></p>" +
        "<div class=\"row cooperation_contact\">" +
        "<div class=\"col-log-4 col-xs-12 col-md-4\">" +
        "<div><span><img src=\"images/姓名图标.png\" alt=\"\"></span>" +
        "<span class=\"span_input\">" +
        "<input type=\"text\" class=\"input_required\" placeholder=\"请输入您的姓名\"/></span></div>" +
        "</div><div class=\"col-log-4 col-xs-12 col-md-4\">" +
        "<div><span><img src=\"images/电话图标.png\" alt=\"\"></span>" +
        "<span class=\"span_input\">" +
        "<input type=\"text\"  class=\"input_required PhoneNumberVerification\" maxlength=\"11\"  placeholder=\"请输入您的联系电话\"/></span></div></div>" +
        "<div class=\"col-log-4 col-xs-12 col-md-4\">" +
        "<div><span><img src=\"images/邮箱图标.png\" alt=\"\"></span>" +
        "<span class=\"span_input\"> <input type=\"text\"  class=\"input_required eMaile\" placeholder=\"请输入您的邮箱\"/></span></div></div> " +
        "</div> <!--选择-->" +
        "<ul class=\"cooperation_ul\">" +
        "<li><label><span>行业咨询</span><div class=\"input_div\"></div> " +
        "<input type=\"checkbox\" value=\"行业咨询\">" +
        "</label></li>" +
        "<li><label><span>解决方案</span>" +
        "<div class=\"input_div\"></div>" +
        "<input type=\"checkbox\" value=\"解决方案\"></label></li>" +
        "<li><label><span>产品定制</span><div class=\"input_div\"></div>" +
        "<input type=\"checkbox\" value=\"产品定制\"></label>" +
        "</li><li><label><span>商务合作</span>" +
        "<div class=\"input_div\"></div>" +
        "<input type=\"checkbox\" value=\"商务合作\"></label></li></ul><!--选择 end--><!--详情需求-->" +
        "<textarea name=\"\" class=\"cooperation_textarea input_required\" cols=\"30\" rows=\"10\"  placeholder=\"请输入您的需求\"></textarea>" +
        "<!--详情需求 end--> <!--提交--><button class=\"btn_subimt\">提交</button><!--提交 end-->" +
        "<p class=\"cooperation_p\">郑重承诺：您的信息仅供我司进行商务所用，进行严格保密，绝不泄密第三方</p></div> </div></div> </div>");
    $("body").append(coop_div);
    mvc.view.ckeckbox();//建立合作的复选款
    // mvc.controller.cooperation();
    mvc.controller.PhoneNumberVerification();
    mvc.controller.E_Maile();
};
mvc.view.cooper();






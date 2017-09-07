/**
 * Created by 付双明 on 2017/8/21.
 */
mvc.controller = {};
var url_href="http://cminic.org/public";
var url_IMG="http://cminic.org/public/storage/";
mvc.controller.new_index=function () {
    var category_title=1;
    $.ajax({
        url:url_href+"/api/posts/category",
        headers: {
            'api_key':'1234567890',
            'Content-Type':'application/json'
        },
        crossDomain: true == !(document.all),
        data:{
            random:Math.random()
        },
        type:"GET",
        success:function (str) {
            var str_new_=$.parseJSON(str);
            for(var i in str_new_){
                var new_ul_li=str_new_[i];
                var ul_new=$("<li name=\'"+new_ul_li.id+"\'>"+new_ul_li.name+"</li>");
                $(".new_ul").append(ul_new);
            }
            $(".new_ul li").eq(0).addClass("active");
            $(".new_ul li").click(function () {
                category_title=$(this).attr("name");
                $(this).addClass("active").siblings().removeClass("active");
                new_content(url_href+"/api/posts/category/"+category_title+"");
            });
            new_content(url_href+"/api/posts/category/"+category_title+"");
        }
    });
};
//获取新闻的内容
function new_content(url_) {
    $(".new_content_Company").html("");
    $.ajax({
        url:url_,
        headers: {
            'api_key':'1234567890',
            'Content-Type':'application/json'
        },
        crossDomain: true == !(document.all),
        data:{
            random:Math.random()
        },
        type:"GET",
        success:function (str) {
            var str_new=$.parseJSON(str);
            for(var i in str_new.data){
                var child=str_new.data[i];
                console.log(child.category_id);
                var string=child.updated_at;
                var text=child.body;
                var html_new_=$("<div class=\"col-xs-4\"> <div class=\"Company_news\"> " +
                    "<img src=\""+url_IMG+child.image+"\" alt=\"\"> " +
                    "<p class=\"Company_news_title\"> "+child.title+"</p> " +
                    "<div class=\"Company_news_content\">"+child.excerpt+" </div> <!--时间--> " +
                    "<div class=\"Company_news_time\"> <div class=\"Company_news_time_\">" +
                    " <p class=\"Company_news_time_big\">"+string.substring(5,10)+"</p> " +
                    "<p class=\"Company_news_time_small\">"+string.substring(0,4)+"</p> </div> " +
                    "<a class=\"Company_news_btn\" href=\'new_details.html?news_id="+child.id+"\'>详情</a></div> <!--时间 end--> " +
                    "</div> </div>");
                $(".new_content_Company").append(html_new_);
            }
            var filp=$("<div class=\"news_flip\"> <button  class=\'prev_btn\' name=\'"+str_new.prev_page_url+"\'>上一篇</button> <button  class=\'next_btn\' name=\'"+str_new.next_page_url+"\'>下一篇</button> </div>")
            $(".new_content_Company").append(filp);
            prev_new();//翻页
        }
    })
}
//新闻动态上下翻页
function prev_new() {
    $(".news_flip button").click(function () {
        // alert("ok");
         var prev_name=$(this).attr("name");
         if(prev_name=="null"){
             $(this).css({
                 color:"red"
             })
         }else{
             new_content(prev_name);
         }
    })
}


//行业资讯  Latest_information.html
mvc.controller.Latest_information=function () {
    var category_Latest_information=1;
    $.ajax({
        url:url_href+"/api/posts/category",
        headers: {
            'api_key':'1234567890',
            'Content-Type':'application/json'
        },
        crossDomain: true == !(document.all),
        data:{
            random:Math.random()
        },
        type:"GET",
        success:function (str) {
            var str_new_=$.parseJSON(str);
            for(var i in str_new_){
                var new_ul_li=str_new_[i];
                var ul_new=$("<li name=\'"+new_ul_li.id+"\'>"+new_ul_li.name+"</li>");
                $(".latest_infor_ul").append(ul_new);
            }
            $(".latest_infor_ul li").eq(0).addClass("active");
            $(".latest_infor_ul li").click(function () {
                $(this).addClass("active").siblings().removeClass();
                category_Latest_information=$(this).attr('name');
                Latest_information_content(url_href+"/api/posts/category/"+category_Latest_information+"",category_Latest_information);
            });
            // Latest_information_content(url_)
            Latest_information_content(url_href+"/api/posts/category/"+category_Latest_information+"",category_Latest_information);
        }
    });
};


//行业资讯的内容
function Latest_information_content(url_,number) {
    $(".latest_infor_content").html("");//清空数据
    $.ajax({
        url:url_,
        headers: {
            'api_key':'1234567890',
            'Content-Type':'application/json'
        },
        crossDomain: true == !(document.all),
        data:{
            random:Math.random()
        },
        type:"GET",
        success:function (str) {
            var str_new=$.parseJSON(str);
            for(var i in str_new.data){
                var child=str_new.data[i];
                // console.log(child.category_id);
                // var string=child.updated_at;
                // var text=child.body;
                var html_infor=$("<div class=\"row infor_content\">" +
                    "<div class=\"col-lg-6 col-md-6 col-xs-12\">" +
                    " <img src=\""+url_IMG+child.image+"\" alt=\"\" class=\"infor_img center-block\"></div>" +
                    "<div class=\"col-lg-6 col-md-6 col-xs-12\">" +
                    "<div class=\"infor_p\">" +
                    "<p class=\"infor_title\">"+child.title+"</p>" +
                    "<p class=\"infor_time\">"+child.created_at+"</p>" +
                    "<div class=\"infor_text\">"+child.excerpt+" <a href=\'new_details.html?news_id="+child.id+"\' class=\'new_details_btn\'>详情</a></div></div></div></div>");
                $(".latest_infor_content").append(html_infor);
            }
            if(number==2){
                // alert("afsf");
                $(".infor_content").css({
                    float:"left"
                });
                $(".infor_content:nth-child(2n)>div").css({
                    float:"right"
                })
            }else if(number==3){
                $(".infor_content>div").css({
                    float:"right"
                })
            }
            var filp=$("<div class=\"btn_page\"> <button  class=\'prev_btn\' name=\'"+str_new.prev_page_url+"\'>上一篇</button> <button  class=\'next_btn\' name=\'"+str_new.next_page_url+"\'>下一篇</button> </div>")
            $(".latest_infor_content").append(filp);
            // $(".infor_img").hover(function () {
            //     $(this).css({
            //         webkitTransform:"scale(1.2,1.2)",
            //         mozTransform:"scale(1.2,1.2)",
            //         transform:"scale(1.2,1.2)" ,
            //         transition:" all 2s"
            //     })
            // });
            // prev_new();//上一页
            prev_new_infor();
        }
    });


}
//行业资讯的内容 end
//行业资讯的分页

function prev_new_infor() {
    $(".btn_page button").click(function () {
        // alert("ok");
        var prev_name=$(this).attr("name");
        if(prev_name=="null"){
            $(this).css({
                color:"red"
            })
        }else{
            Latest_information_content(prev_name);
        }
    })
}

//行业资讯  Latest_information.html end


//http://192.168.3.54:8080/AdminPanel/public/api/product-categories
mvc.controller.produc_index=function () {
    $.ajax({
        url:url_href+"/api/product-categories",
        headers: {
            'api_key':'1234567890',
            'Content-Type':'application/json'
        },
        crossDomain: true == !(document.all),
        data:{
            random:Math.random()
        },
        type:"GET",
        success:function (str) {
            for(var i in str.data){
                var html_new_=$("<div class=\"col-xs-4\"> <div class=\"Company_news\"> " +
                    "<img src=\""+url_IMG+child.title+"\" alt=\"\"> " +
                    "<p class=\"Company_news_title\"> "+child.title+"</p> " +
                    "<div class=\"Company_news_content\">"+child.body+" </div> <!--时间--> " +
                    "<div class=\"Company_news_time\"> <div class=\"Company_news_time_\">" +
                    " <p class=\"Company_news_time_big\">"+string.substring(5,10)+"</p> " +
                    "<p class=\"Company_news_time_small\">"+string.substring(0,4)+"</p> </div> " +
                    "<button class=\"Company_news_btn\"><a href=\'Latest_information.html\'>详情</a></button> </div> <!--时间 end--> " +
                    "</div> </div>");
            }
        }
    })
};
//案例展示
mvc.controller.case_index=function () {
    $.ajax({
        url:url_href+"/api/primary-case-studies",
        headers: {
            'api_key':'1234567890',
            'Content-Type':'application/json'
        },
        crossDomain: true == !(document.all),
        data:{
            random:Math.random()
        },
        type:"GET",
        success:function (str) {
            // alert(str);
            var str_=$.parseJSON(str);
            // alert(str_.data);
            // console.log("q342");
            for(var i in str_.data){
                // console.log("q342");
                // alert(str_.title);
                var child=str_.data[i];
                var case_html=$(" <div class=\"col-log-4 col-md-4 col-xs-6\"> " +
                    "<a href=\"case.html?case_id="+child.id+"\">" +
                " <div class=\"case_content_div\">" +
                    "<img src=\""+url_IMG+child.image+"\" alt=\"\">" +
                    "<div class=\"meng_text\">"+child.name+"</div></div></a></div>");
                $(".case_content").append(case_html);
            }
        }
    })
};

//案例展示页面 第一部分

mvc.controller.case_fiey=function (url) {
    $(".success_case").html("");
    $.ajax({
        url:url,
        headers: {
            'api_key':'1234567890',
            'Content-Type':'application/json'
        },
        crossDomain: true == !(document.all),
        data:{
            random:Math.random()
        },
        type:"GET",
        success:function (str) {
            // alert(str);
            var str_=$.parseJSON(str);
            // alert(str_);
            // console.log("q342");
            for(var i in str_.data){
                // console.log("q342");
                // alert(str_.title);
                var child=str_.data[i];
                // alert(child.url);
                var case_yrmian=$("<a href=\'http://"+child.url+"\' target=\'_blank\'><div class=\"success_case_div\">" +
                    "<img src=\""+url_IMG+child.image+"\" alt=\"\">" +
                    "<div class=\"case_blue_right\">" +
                    " <div class=\"case_blue_right_div\">" +
                    "<div class=\"case_blue_right_text\">" +
                    "<P class=\"title_case\">"+child.name+"</P>" +
                    "<P class=\"text_case\">"+child.descrption+"</P></div> </div> </div></div></a>");
                // var case_html=$(" <div class=\"col-log-4 col-md-4 col-xs-6\"> " +
                    // "<a href=\"case.html?case_id="+child.id+"\">" +
                    // " <div class=\"case_content_div\">" +
                    // "<img src=\""+url_IMG+child.image+"\" alt=\"\">" +
                    // "<div class=\"meng_text\">"+child.name+"</div></div></a></div>");
                $(".success_case").append(case_yrmian);
            }
            var filp=$("<div class=\"btn_page\"> <button  class=\'prev_btn\' name=\'"+str_.prev_page_url+"\'>上一篇</button> <button  class=\'next_btn\' name=\'"+str_.next_page_url+"\'>下一篇</button> </div>");
            $(".success_case").append(filp);
            mvc.controller.case_filp();

        }
    })
};
mvc.controller.case_fiey("http://cminic.org/public/api/primary-case-studies");
//案例展示页面 第一部分 end

mvc.controller.case_filp=function () {
    $(".btn_page button").click(function () {
        // alert("ok");
        var prev_name=$(this).attr("name");
        if(prev_name=="null"){
            $(this).css({
                color:"red"
            })
        }else{
            mvc.controller.case_fiey(prev_name);
        }
    })
};
//案例展示页面 第二部分
mvc.controller.case_fiey_2=function () {
    $.ajax({
        url:url_href+"/api/secondary-case-studies",
        headers: {
            'api_key':'1234567890',
            'Content-Type':'application/json'
        },
        crossDomain: true == !(document.all),
        data:{
            random:Math.random()
        },
        type:"GET",
        success:function (str) {
            // alert(str);
            var str_=$.parseJSON(str);
            // alert(str_);
            // console.log("q342");
            for(var i in str_){
                // console.log("q342");
                // alert(str_.title);
                var child=str_[i];
                var case_yrmian_sec=$(" <p class=\"col-lg-6 col-md-6 col-xs-12\"><span>"+child.name+"</span><a href=\"http://"+child.url+"\">"+child.url+"</a></p>");

                $(".Latest_project_content").append(case_yrmian_sec);
            }
        }
    })
};
//案例展示页面 第二部分end

//解决方案
mvc.controller.Solution=function () {
    $.ajax({
        url:url_href+"/api/solutions",
        headers: {
            'api_key':'1234567890',
            'Content-Type':'application/json'
        },
        crossDomain: true == !(document.all),
        data:{
            random:Math.random()
        },
        type:"GET",
        success:function (str) {
            var str_solution=$.parseJSON(str);
            var details_number=0;
            for(var i in str_solution){

                if(details_number<5){
                    // console.log(details_number);
                    var html_solution=str_solution[i];
                    var solution_div=$("<div class=\"row Solution_\">" +
                        "<img  class=\"img_bc\" src=\"images/solute_bc.png\" alt=\"\">" +
                        " <div class=\"col-lg-6 col-xs-12 Solution_img\">" +
                        "<img class=\"center-block\" src=\""+url_IMG+html_solution.image+"\" alt=\"\"></div>" +
                        "<div class=\"col-lg-6  col-xs-12 Solution_text\">" +
                        "<h4>"+html_solution.title+"</h4>" +
                        "<p>"+html_solution.description+"<a  class=\"btn_details\" href=\'Solution_details.html?id="+html_solution.id+"\'>详情</a></p>" +
                        "</div> </div>");
                    $(".Solution").append(solution_div);
                    details_number++;
                }
            }
        }
    })
};

//更多方案
mvc.controller.Solution_more=function () {
    $.ajax({
        url:url_href+"/api/solutions",
        headers: {
            'api_key':'1234567890',
            'Content-Type':'application/json'
        },
        crossDomain: true == !(document.all),
        data:{
            random:Math.random()
        },
        type:"GET",
        success:function (str) {
            var str_solution=$.parseJSON(str);
            var details_number=0;
            for(var i in str_solution){

                if(details_number>=5){
                    console.log(details_number);
                    var html_solution=str_solution[i];
                    // var solution_div=$("<div class=\"col-xs-3  more_case_img\">" +
                    //     "<a href=\"Solution_details.html\">" +
                    //     " <img src=\""+url_IMG+html_solution.image+"\" alt=\"\"><!--遮罩-->" +
                    //     "<div class=\"back_div\">" +
                    //     "<div class=\"back_div_text\">" +
                    //     "<div class=\"back_text_middle\">" +
                    //     "<p class=\"title_back\">"+html_solution.title+"</p>" +
                    //     "<p class=\"text_back\">"+html_solution.description+"</p></div></div></div></a></div>");
                    // $(".more_case_imgs").append(solution_div);
                    var solution_=$("<div class=\"swiper-slide  more_case_img\">" +
                    "<a href=\"Solution_details.html\">" +
                    " <img src=\""+url_IMG+html_solution.image+"\" alt=\"\"><!--遮罩-->" +
                    "<div class=\"back_div\">" +
                    "<div class=\"back_div_text\">" +
                    "<div class=\"back_text_middle\">" +
                    "<p class=\"title_back\">"+html_solution.title+"</p>" +
                    "<p class=\"text_back\">"+html_solution.description+"</p></div></div></div></a></div>");
                    $(".more_case_imgs").append(solution_);

                }
                details_number++;


            }
            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                slidesPerView: 4,
                spaceBetween: 0,
                breakpoints: {
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    }
                },
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev'
                // paginationClickable: true,
                // loop: true
            });
        }
    })
};
//解决方案详情
mvc.controller.Solution_details=function () {
    // alert(mvc.view.getUrl("id"))
    var details_id=mvc.view.getUrl("id");

    $.ajax({
        url:url_href+"/api/solutions/"+details_id+"",
        headers: {
            'api_key':'1234567890',
            'Content-Type':'application/json'
        },
        crossDomain: true == !(document.all),
        data:{
            random:Math.random()
        },
        type:"GET",
        success:function (str) {
            var str_solution=$.parseJSON(str);
            for(var i in str_solution){
                var str_details=str_solution[i];
                // $(".characteristic_System").html(str_details.content);
                $(".Product_intro_text").html(str_details.description);
                $(str_details.content).insertBefore(".Tianfu_base");
                $(".solution_img").attr("src",""+url_IMG+str_details.image+"");
            }
        }
    })
};
//新闻详情
mvc.controller.new_details=function () {
    // alert(mvc.view.getUrl("id"))
    var details_id=mvc.view.getUrl("news_id");

    $.ajax({
        url:url_href+"/api/posts/"+details_id+"",
        headers: {
            'api_key':'1234567890',
            'Content-Type':'application/json'
        },
        crossDomain: true == !(document.all),
        data:{
            random:Math.random()
        },
        type:"GET",
        success:function (str) {
            var str_solution=$.parseJSON(str);
            for(var i in str_solution){
                var str_details=str_solution[i];
                $(".new_titile").html(str_details.title);
                // $(".characteristic_System").html(str_details.content);
                $(".solution_intro").append(str_details.body);
                $(str_details.content).insertBefore(".Tianfu_base");
                // Product_intro_text
                // $(".solution_img").attr("src",""+url_IMG+str_details.image+"");
            }
        }
    })
};
//产品列表
mvc.controller.product_list=function () {
    var categories_p=[];
    $.ajax({
        url:url_href+"/api/product-categories",
        headers: {
            'api_key':'1234567890',
            'Content-Type':'application/json'
        },
        crossDomain: true == !(document.all),
        data:{
            random:Math.random()
        },
        type:"GET",
        success:function (str) {
            var str_product=$.parseJSON(str);
            for(var i in str_product){
                var product_details=str_product[i];
                categories_p.push(product_details.id);
                var product_html=$(" <div class=\"row product_div_\" ><!--左边产品介绍-->" +
                    "<div class=\"col-lg-2 col-xs-3 product_div_left products_15a6c4\">" +
                    " <div> <img src=\""+url_IMG+product_details.icon+"\" alt=\"\">" +
                    "<p name=\'"+product_details.id+"\'>"+product_details.name+"</p></div></div><!--左边产品介绍 end-->" +
                    "<!--右边产品介绍-->" +
                    "<div class=\"col-lg-10 col-xs-9 product_div_right\">" +
                    "</div> </div></div><!--右边产品介绍 end--></div>");

                if((i-0+1)%3==1){
                    $(product_html).find(".product_div_left").css({
                        background:"#15a6c4"
                    });
                }else if((i-0+1)%3==0){
                    $(product_html).find(".product_div_left").css({
                        background:"#5ec185"
                    });
                }else{
                    $(product_html).find(".product_div_left").css({
                        background:"#ea8448"

                    });
                }
                $(".product_div").append(product_html);
            }
            //小分类
            for(var k in categories_p){
                var categories_number=categories_p[k];
                var getInfo = function (Keyword, I) {
                    $.ajax({
                        url:url_href+"/api/category/products/"+Keyword+"",
                        headers: {
                            'api_key':'1234567890',
                            'Content-Type':'application/json'
                        },
                        crossDomain: true == !(document.all),
                        data:{
                            random:Math.random()
                        },
                        type:"GET",
                        success:function (str) {

                            // console.log(str);
                            var str_pr = $.parseJSON(str);
                            // console.log(str_pr);
                            for (var j in str_pr) {
                                // alert(j);
                                var prod_details = str_pr[j];
                                // categories_p.push(product_details.id);
                                var product_ = $(" <div class=\"col-xs-3\">" +
                                    "<div> " +
                                    "<a href=\"Product_center.html?product_id="+prod_details.id+"\">" +
                                    "<img src=\""+url_IMG+prod_details.icon+"\" alt=\"\">" +
                                    "<p name=\'"+prod_details.category_id+"\'>"+prod_details.name+"</p></a></div> " +
                                    "</div>");
                                $(".product_div_right").eq(I).append(product_);
                                // console.log(I);
                                $(".product_div_right >div a").hover(function () {
                                    // alert("ok");
                                    var color_=$(this).parents(".product_div_right").siblings(".product_div_left ").css('backgroundColor');
//        console.log();
                                    $(".product_div_right p").css({
                                        color:"#6e6e6e"
                                    });
                                    $(this).find("p").css({
                                        color:color_
                                    })
                                },function () {
                                    $(".product_div_right p").css({
                                        color:"#6e6e6e"
                                    });
                                })
                            }
                        }
                    })
                };
                getInfo(categories_number, k);
            }
        }
    })
};

//产品详情
mvc.controller.prodcut_details=function () {
    // alert(mvc.view.getUrl("id"))
    var details_id=mvc.view.getUrl("product_id");

    $.ajax({
        url:url_href+"/api/products/"+details_id+"",
        headers: {
            'api_key':'1234567890',
            'Content-Type':'application/json'
        },
        crossDomain: true == !(document.all),
        data:{
            random:Math.random()
        },
        type:"GET",
        success:function (str) {

            var str_solution=$.parseJSON(str);
            // console.log(str_solution);

            for(var i in str_solution){
                var str_details=str_solution[i];
                // $(".characteristic_System").html(str_details.content);
                // $(".product_name").html(str_details.name);
                //标题
                $(".text_img_title").html(str_details.name);


                // $(".Product_intro_img").attr("src",""+url_IMG+str_details.icon+"");
                $(".Product_intro_text").html(str_details.description);
                $(str_details.content).insertBefore(".footer_");

                // alert(str_details.mob_terminals.length)
                var web_=$.parseJSON(str_details.web_terminals);
                for(var j in web_){
                    var web_terminals_=web_[j];
                    // alert(web_[j]);
                    var img_web=$("<div class=\"swiper-slide\"><img src=\'http://192.168.3.54:8080/AdminPanel/public/storage/"+web_terminals_+"\' alt=\'\'></div>");
                    $(".swiper-container1>.swiper-wrapper").append(img_web);
                    var swiper = new Swiper('.swiper-container', {
                        pagination: '.swiper-pagination',
                        paginationClickable: true,
                        nextButton: '.swiper-button-next',
                        prevButton: '.swiper-button-prev'
                    });
                }
                var mob_=$.parseJSON(str_details.mob_terminals);

                for(var K in mob_){
                    var mob_terminals_=mob_[K];
                    // alert(web_[j]);
                    var img_mob=$("<div class=\"swiper-slide\"><img src=\'http://192.168.3.54:8080/AdminPanel/public/storage/"+mob_terminals_+"\' alt=\'\'></div>");
                    $(".swiper-container_mob>.swiper-wrapper").append(img_mob);
                    var swiper = new Swiper('.swiper-container_mob', {
                        pagination: '.swiper-pagination',
                        paginationClickable: true,
                        slidesPerView: 4,
                        spaceBetween: 0,
                        breakpoints: {
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 40
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            }
                        },
                        nextButton: '.swiper-button-next',
                        prevButton: '.swiper-button-prev'
                    });
                }

                if(!str_details.web_terminals){
                    // alert("web_terminals");
                    $(".footer_").hide();
                }
                if(!str_details.mob_terminals){
                    $(".milo_").hide();
                }
            }
        }
    })
};

//导航栏上的分类 妈呀妈呀
mvc.controller.nav_list=function () {
    // $(".Product_center_ul").html("");
    var categories_p=[];
    $.ajax({
        url:url_href+"/api/product-categories",
        headers: {
            'api_key':'1234567890',
            'Content-Type':'application/json'
        },
        crossDomain: true == !(document.all),
        data:{
            random:Math.random()
        },
        type:"GET",
        success:function (str) {
            var str_product=$.parseJSON(str);
            for(var i in str_product){
                var product_details=str_product[i];
                categories_p.push(product_details.id);
                var product_html=$(" <li class=\'Product_center_li\'> <h4 name=\'"+product_details.id+"\'>"+product_details.name+"</h4></li>");
                $(".Product_center_ul").append(product_html);
            }
            //小分类
            for(var k in categories_p){
                var categories_number=categories_p[k];
                var getInfo = function (Keyword, I) {
                    $.ajax({
                        url:url_href+"/api/category/products/"+Keyword+"",
                        headers: {
                            'api_key':'1234567890',
                            'Content-Type':'application/json'
                        },
                        crossDomain: true == !(document.all),
                        data:{
                            random:Math.random()
                        },
                        type:"GET",
                        success:function (str) {
                            var str_pr = $.parseJSON(str);
                            for (var j in str_pr) {
                                var prod_detai = str_pr[j];
                                var product_center = $(" <p><a href=\"Product_center.html?product_id="+prod_detai.id+"\">"+prod_detai.name+"</a></p>");
                                $(".Product_center_li").eq(I).append(product_center);
                            }
                        }
                    })
                };
                getInfo(categories_number, k);
            }
            $(".Product_center_ul").append($("<p class=\"p_clear\"></p>"))


        }
    })
};

//妈呀妈呀  需求定制界面的提交表单
mvc.controller.de_customization=function () {
    $(".Product_center_ul").html("");
    var categories_p=[];
    $.ajax({
        url:url_href+"/api/product-categories",
        headers: {
            'api_key':'1234567890',
            'Content-Type':'application/json'
        },
        crossDomain: true == !(document.all),
        data:{
            random:Math.random()
        },
        type:"GET",
        success:function (str) {
            var str_product=$.parseJSON(str);
            for(var i in str_product){
                var product_details=str_product[i];
                categories_p.push(product_details.id);
                var product_label=$("  <ul><h4>"+product_details.name+"</h4></ul>");
                // $(".Project_description").insertBefore(product_label);
                $(product_label).insertBefore($(".Project_description"));
            }
            //小分类
            for(var k in categories_p){
                var categories_number=categories_p[k];
                var getInfo = function (Keyword, I) {
                    $.ajax({
                        url:url_href+"/api/category/products/"+Keyword+"",
                        headers: {
                            'api_key':'1234567890',
                            'Content-Type':'application/json'
                        },
                        crossDomain: true == !(document.all),
                        data:{
                            random:Math.random()
                        },
                        type:"GET",
                        success:function (str) {
                            var str_input = $.parseJSON(str);
                            for (var j in str_input) {
                                var prod_input = str_input[j];
                                var product_input_div  = $(" <li><label><span>"+prod_input.name+"</span><div class=\"input_div\"></div> <input type=\"checkbox\" class=\'input_check\' value=\'"+prod_input.name+"\'></label></li>");
                                $(".form_content>ul").eq(I).append(product_input_div);
                            }
                            $(".form_content label").click(function () {
                                if($(this).find("input").prop("checked")){
//           alert($(this).find(".input_div").html());
                                    $(this).find(".input_div").css({
                                        backgroundImage:"url('images/checked_input.png') ",
                                        backgroundSize:"100% 100%",
                                        backgroundRepeat:"no-repeat"
                                    })
                                }else{
                                    $(this).find(".input_div").css({
                                        background:"#fff"
                                    })
                                }

                            });

                        }
                    })
                };
                getInfo(categories_number, k);
            }

        }
    })
    mvc.model.de_cust();
};
/*footer 研发基地*/
mvc.controller.rd_base=function () {
    $.ajax({
        url:url_href+"/api/development-bases",
        headers: {
            'api_key':'1234567890',
            'Content-Type':'application/json'
        },
        crossDomain: true == !(document.all),
        data:{
            random:Math.random()
        },
        type:"GET",
        success:function (str) {
            var bases=$.parseJSON(str);

            for(var i in bases){
                var base_infor=bases[i];
                var rd_base_=$("<li><a href=\"rd_base.html?base_id="+base_infor.id+"\">"+base_infor.name+"</a></li>");
                $(rd_base_).insertBefore($(".rd_base_ul>.kefu_li"))
            }
        }
    });
};
mvc.controller.rd_base();//研发基地的可编辑内容

mvc.controller.rd_base_details=function () {

    var base_id=mvc.view.getUrl("base_id");

    $.ajax({
        url:url_href+"/api/development-bases/"+base_id+"",
        headers: {
            'api_key':'1234567890',
            'Content-Type':'application/json'
        },
        crossDomain: true == !(document.all),
        data:{
            random:Math.random()
        },
        type:"GET",
        success:function (str) {
            var bases=$.parseJSON(str);

            for(var i in bases){
                var base_infor_=bases[i];
                $(".content_name").html(base_infor_.name);
                $(".Core_research_img").attr("src",""+url_IMG+base_infor_.logo+"");
                $(".Core_research_text").html(base_infor_.description);
                $(".products_text").html(base_infor_.introduction);
            }
        }
    });
};
/*footer 研发基地 end*/
/*footer 关于我们 */

mvc.controller.about_us=function () {

    var base_id=mvc.view.getUrl("about_");

    $.ajax({
        url:"http://cminic.org/public/api/about-us/"+base_id+"",
        headers: {
            'api_key':'1234567890',
            'Content-Type':'application/json'
        },
        crossDomain: true == !(document.all),
        data:{
            random:Math.random()
        },
        type:"GET",
        success:function (str) {
            var bases=$.parseJSON(str);

            for(var i in bases){
                var base_infor_=bases[i];
                $(".content_name").html(base_infor_.title);
                $(".Core_research_img").attr("src",""+url_IMG+base_infor_.image+"");
                $(".Core_research_text").html(base_infor_.description);
                $(".products_text").html(base_infor_.content);
            }
        }
    });
};
/*footer 关于我们 end*/

//旗下产品
mvc.controller.products_featured=function () {
//   <a href="Product_center.html">互联网小贷系统 ／</a>
    $.ajax({
        url:url_href+"/api/products/featured",
        headers: {
            'api_key':'1234567890',
            'Content-Type':'application/json'
        },
        crossDomain: true == !(document.all),
        data:{
            random:Math.random()
        },
        type:"GET",
        success:function (str) {
            // alert("ok");

            var products_featured=$.parseJSON(str);

            for(var i in products_featured){
                if(i<20){
                    var products_featured_=products_featured[i];
                    var products_featured_div=$("<a href=\"Product_center.html?product_id="+products_featured_.id+"\">"+products_featured_.name+"</a><span> ／</span>");
                    $(".products_content").append(products_featured_div);
                }

            }
        }
    });

};
//旗下产品 end
//隆盈金服
mvc.controller.conten_featured=function () {
    $.ajax({
        url:url_href+"/api/solutions/featured",
        headers: {
            'api_key':'1234567890',
            'Content-Type':'application/json'
        },
        crossDomain: true == !(document.all),
        data:{
            random:Math.random()
        },
        type:"GET",
        success:function (str) {
            var solutions_featured=$.parseJSON(str);

            for(var i in solutions_featured){
                var solutions_featured_=solutions_featured[i];

                var solutions_icon=$.parseJSON(solutions_featured_.icon);
                 console.log(solutions_icon.length);
                var solutions_featured_div="";
                if(i<1){
                     solutions_featured_div=$("<div class=\"col-log-4 col-md-4  col-xs-12 text-center content_details_div\"><!--大数据征信解决方案-->" +
                        "<div class=\"content_details_div_inner\"> <!--图片-->" +
                        " <div class=\"img_\">" +
                        "<img class=\"gray_\"  src=\""+url_IMG+solutions_icon[0]+"\" alt=\"\">" +
                        "<img class=\"blue_\" hidden  src=\""+url_IMG+solutions_icon[1]+"\" alt=\"\"></div><!--图片 end-->" +
                        "<p class=\"title_p\">"+solutions_featured_.title+"</p>" +
                        "<p class=\"intro_p\">"+solutions_featured_.description+"</p><!--点击详情-->" +
                        "<button class=\"details_btn\"><a href=\"Solution_details.html?id="+solutions_featured_.id+"\">详情</a></button><!--点击详情 end--></div></div>");
                    $(".content_details").append(solutions_featured_div);
                }else if(i<3){
                    solutions_featured_div=$("<div class=\"col-log-4 col-md-4  col-xs-6 text-center content_details_div\"><!--大数据征信解决方案-->" +
                        "<div class=\"content_details_div_inner\"> <!--图片-->" +
                        " <div class=\"img_\">" +
                        "<img class=\"gray_\"  src=\""+url_IMG+solutions_icon[0]+"\" alt=\"\">" +
                        "<img class=\"blue_\" hidden  src=\""+url_IMG+solutions_icon[1]+"\" alt=\"\"></div><!--图片 end-->" +
                        "<p class=\"title_p\">"+solutions_featured_.title+"</p>" +
                        "<p class=\"intro_p\">"+solutions_featured_.description+"</p><!--点击详情-->" +
                        "<button class=\"details_btn\"><a href=\"Solution_details.html?id="+solutions_featured_.id+"\">详情</a></button><!--点击详情 end--></div></div>");
                    $(".content_details").append(solutions_featured_div);
                }else{
                     solutions_featured_div=$("<div class=\"col-log-6 col-md-4 col-xs-12 text-center content_details_div_lang\"><!--大数据征信解决方案-->" +
                        "<div class=\"content_details_div_inner\"> <!--图片-->" +
                        " <div class=\"img_\">" +
                        "<img class=\"gray_\"  src=\""+url_IMG+solutions_icon[0]+"\" alt=\"\">" +
                        "<img class=\"blue_\" hidden  src=\""+url_IMG+solutions_icon[1]+"\" alt=\"\"></div><!--图片 end-->" +
                        "<p class=\"title_p\">"+solutions_featured_.title+"</p>" +
                        "<p class=\"intro_p\">"+solutions_featured_.description+"</p><!--点击详情-->" +
                        "<button class=\"details_btn\"><a href=\"Solution_details.html?id="+solutions_featured_.id+"\">详情</a></button><!--点击详情 end--></div></div>");
                    $(".content_details").append(solutions_featured_div);
                }
            //    active_inner
                $(".content_details").find(".content_details_div_inner").eq(1).addClass("active_inner");
                $(".content_details_div_inner").hover(function () {
                    $(".active_inner").removeClass("active_inner");
                })
            }
        }
    });
};

//建立合作
mvc.controller.cooperation=function () {
    $(".btn_subimt").click(function () {
        var btn_subimt_number=0;
        var btn_check=0;
        var b,checked_input_;
        var checked_input=[];
        var input_=["name","tel",'email',"desp"];
        var arry_text="";
        // alert($(this).parent().find(".input_required").length);
        var input_re=$(this).parent().find(".input_required");
        var input_check=$(".cooperation_ul input");
        for(var i=0;i<input_re.length;i++){
            if(input_re.eq(i).val().length>0){
                btn_subimt_number++;
                arry_text=arry_text+input_[i]+"="+input_re.eq(i).val()+"&";
            }
        }
        var pre = '【';
        for(var j=0;j<input_check.length;j++){
            if(input_check.eq(j).prop("checked")){
                btn_check=1;
                checked_input.push(input_check.eq(j).val());
            }
        }
        var newArr = (pre + checked_input.join(';' + pre)).split(';');
        b = newArr.join("】");
        checked_input_= b+ "】";
        if(btn_subimt_number<4||btn_check==0){
            Showbo.Msg.alert("您的信息没有输入完整！");
        }else{
            console.log(arry_text+"checked_input="+JSON.stringify(checked_input_));
            var data_=arry_text+"checked_input="+JSON.stringify(checked_input_);
            $.ajax({
                url:url_href+"/api/contact-us",
                async: true,
                crossDomain: true == !(document.all),
                headers: {
                    'api_key':'1234567890',
                    "content-type": "application/x-www-form-urlencoded",
                    "cache-control": "no-cache"
                },
                type:"POST",
                data:data_,
                success:function (str) {
                    Showbo.Msg.alert(str);
                    $("#dvMsgBtns").click(function () {
                        window.location.reload();
                    });

                }
            });
        }
    })
};
mvc.controller.cooperation();

//手机验证
mvc.controller.PhoneNumberVerification = function () {
    //alert("ok");
    $(".PhoneNumberVerification").blur(function(){
        // alert("o");
        var VerificationNumber=0;

        var PhoneNumberPlaceholder=$(this).attr("placeholder");
        if(/^1[3|5|6|7|8]\d{9}$/.test($(this).val())){
            urse=true;
            VerificationNumber=1;
            // alert(VerificationNumber);
        }else{
            $(this).attr("placeholder",PhoneNumberPlaceholder);
            $(this).val("");
            urse=false;
            VerificationNumber=0;
        }
        // alert(VerificationNumber);
        if(VerificationNumber==1){
            // alert("o");
        }else{
            // alert("11111");

        }
    });
};
//手机验证 end
//邮箱验证
mvc.controller.E_Maile = function () {
    //alert("ok");
    $(".eMaile").blur(function(){
        var PhoneNumberPlaceholder=$(this).attr("placeholder");
        if(/^([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+(\.[a-zA-Z]{2,3})+$/.test($(this).val())){
            urse=true;
            VerificationNumber=1;
        }else{
            $(this).attr("placeholder",PhoneNumberPlaceholder);
            $(this).val("");
            urse=false;
            VerificationNumber=0;
        }
        if(VerificationNumber==1){
            $(".getPhoneVerificationCode").removeAttr("disabled").css({
                background:"#fff"
            });
        }else{
            // $(".getPhoneVerificationCode").attr("disabled","disabled").css({
            //     background:"#a6a6a6"
            // });
        }

    });

};
//邮箱验证  end

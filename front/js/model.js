/**
 * Created by 付双明 on 2017/8/21.
 */
var mvc = {};
mvc.model = {};
var url_href="http://cminic.org/public";
var url_IMG="http://cminic.org/storage/";
// mvc.model.infor=function () {
//     $(".Company_news_btn").click(function () {
//         // alert("ok");
//         window.location.href="Latest_information.html";
//     })
// };

// btn_details
//解决方案
/*mvc.model.Solution=function () {
    $(".btn_details").click(function () {
        // alert("ok");
        window.location.href="Solution_details.html";
    })
};*/
//隆盈金服
// mvc.model.details_btn=function () {
//     $(".details_btn").click(function () {
//         // alert("ok");
//         window.location.href="Solution_details.html";
//     })
// };
mvc.model.de_cust=function () {
    $(".compent_write").click(function () {
        // $(".btn_subimt").click(function () {
            var btn_subimt_number=0;
            var btn_check=0;
            var b,c,checked_caterary_,checked_input_;
             var checked_input=[];
            var checked_caterary=[] ;
            var input_=["name","tel",'compary_name',"desp"];
            var arry_text="";
            // alert($(this).parent().find(".input_required").length);
            var input_re=$(this).parent().find(".required_input");
            var input_check=$(".form_content input");
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
                    input_check.eq(j).parent().parent().siblings("h4").addClass("h4_checked");
                    checked_input.push(input_check.eq(j).val());
                }
            }
            var newArr = (pre + checked_input.join(';' + pre)).split(';');
            b = newArr.join("】");
             checked_input_= b+ "】";
            for(var k=0;k<$(".h4_checked").length;k++){
                checked_caterary.push($(".h4_checked").eq(k).html());/**/
            }
            var newArr_cate = (pre + checked_caterary.join(';' + pre)).split(';');
            bc= newArr_cate.join("】");
            checked_caterary_= bc+ "】";
            if(btn_subimt_number<4||btn_check==0){
                Showbo.Msg.alert("您的信息没有输入完整！");
            }else{
                var data_=arry_text+"checked_input="+JSON.stringify(checked_input_)+"&checked_caterary="+JSON.stringify(checked_caterary_);
                console.log(data_);
                $.ajax({
                    url:url_href+"/api/requirement",
                    async: true,
                    crossDomain: true,
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
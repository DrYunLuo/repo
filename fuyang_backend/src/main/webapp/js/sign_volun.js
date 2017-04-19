/**
 * Created by Administrator on 2017/1/19.
 */
/**
 * Created by Administrator on 2017/1/19.
 */
$(function() {


    $("#file_upload1").change(function() {
        var $file = $(this);
        var fileObj = $file[0];
        var windowURL = window.URL || window.webkitURL;
        var dataURL;
        var $img = $("#preview1");

        if(fileObj && fileObj.files && fileObj.files[0]){
            dataURL = windowURL.createObjectURL(fileObj.files[0]);
            $img.attr('src',dataURL);
        }else{
            dataURL = $file.val();
            var imgObj = document.getElementById("preview1");
            imgObj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";//为预览区域（比如要在某个 div 中预览）添加样式：
            imgObj.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = dataURL;//为 AlphaImageLoader 设置 src 属性。

        }
    });
    $("#file_upload2").change(function() {
        var $file = $(this);
        var fileObj = $file[0];
        var windowURL = window.URL || window.webkitURL;
        var dataURL;
        var $img = $("#preview2");

        if(fileObj && fileObj.files && fileObj.files[0]){
            dataURL = windowURL.createObjectURL(fileObj.files[0]);
            $img.attr('src',dataURL);
        }else{
            dataURL = $file.val();
            var imgObj = document.getElementById("preview2");
            imgObj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";//为预览区域（比如要在某个 div 中预览）添加样式：
            imgObj.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = dataURL;//为 AlphaImageLoader 设置 src 属性。

        }
    });
    function preview(){
        $("#card_upload1").change(function(e){
            var file= e.target.files[0];

            if(!file){
                return false;
            }
            var img = new Image(),url = img.src = URL.createObjectURL(file);
            var $img= $(img);
            $img.css("width","100%");
            img.onload=function() {
                URL.revokeObjectURL(url);
                $("#preview").empty().append($img);
            }
        });
    }
    preview();

    
    $("#upcdcard").click(function(){	//绑定点击事件触发提交方法.
		        $.ajaxFileUpload({
				            url:"/fuyang_backend/volunteers/uploadCardId",
				            secureuri:false,
				            fileElementId:'card_upload1',
				            dataType: 'json',
				            type:"post", 
				            success: function (data) {
				            	//console.log(data);
				               $("#picPath").val(data.data);
				               //console.log($("#picPath").val());
				               alert("上传成功");
				            }
		        });

    });

});


function hasnumber(obj) {
    var maxNums=40;//最多字数
    //console.log(obj.value.length);
    if(obj.value.length<maxNums){
        var curr=maxNums - obj.value.length;
        $("#nums").html('还能输入'+parseInt(curr)+'个字');
    }else{
        obj.value=obj.value.substring(0,maxNums);
        $("#nums").html('您输入的字数超过了限制');
    }
}
function sub(){
    if(!$(".pas2").val()){
        $(".pas_remind").removeClass("pas_remind_success").html("密码不能为空");
        return false;
    }
    if($(".pas1").val()!=$(".pas2").val()){
        $(".pas_remind").removeClass("pas_remind_success").html("两次密码必须相同");
        $(".pas2").html('');
    }
    if($(".pas1").val()==$(".pas2").val()){
        $(".pas_remind").text('').addClass("pas_remind_success");
    }
}
function getcheckPic(){
	$(".check_number").children().attr("src",'/fuyang_backend/volunteers/captcha?abc='+Math.random());
}
var yzmcheck = false;
//验证必填项
var ycRequired = true;
function test(obj){

    if($(obj).attr("type")=='tel'){
        var reg=/^1[34578]\d{9}$/;
//        console.log(reg.test($(obj).val()));
        if(reg.test($(obj).val())){
//            console.log("123");
            $(obj).next().text('').addClass("pas_remind_success");
            ycRequired = true;
        }else{
            $(obj).next().removeClass("pas_remind_success").text("手机号码格式错误");
            ycRequired = false;
        }

    }

    if($(obj).attr("class") == 'next realname'){
        var realName=$(".realname").val();
        var reg=/[^\u0000-\u00FF]/
        if(reg.test(realName)){
            $(obj).next().text('').addClass("pas_remind_success");
            ycRequired = true;
        }else{
            $(obj).next().removeClass("pas_remind_success").text('请输入正确的中文姓名');
            ycRequired = false;
        }
    }

    if($(obj).attr("type")=='email'){
        var email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(email.test($(obj).val())){
            $(obj).next().text('').addClass("pas_remind_success");
            ycRequired = true;
        }else{
            $(obj).next().removeClass("pas_remind_success").text('请输入正确的邮箱');
            ycRequired = false;
        }
    }

    if($(obj).attr("class")=='next cardId'){
        var reg1=/^(\d{18})|(\d{17}x{1})$/;
        console.log($(obj).val());
        if(reg1.test($(obj).val())){
            $(obj).next().text('').addClass("pas_remind_success");
            ycRequired = true;
        }else{
            $(obj).next().removeClass("pas_remind_success").text('请输入正确的身份证号码');
            ycRequired = false;
        }
    }

    if($(obj).attr("class")=='next studentId'){
        var reg1=/^\d{5,10}$/;
        if(reg1.test($(obj).val())){
            $(obj).next().text('').addClass("pas_remind_success");
            ycRequired = true;
        }else{
            $(obj).next().removeClass("pas_remind_success").text('请输入正确的学号');
            ycRequired = false;
        }
    }

    if($(obj).attr("class")=='next qq'){
        var reg1=/^\d{5,11}$/;
        if(reg1.test($(obj).val())){
            $(obj).next().text('').addClass("pas_remind_success");
            ycRequired = true;
        }else{
            $(obj).next().removeClass("pas_remind_success").text('请输入正确的qq号码');
            ycRequired = false;
        }
    }

    if($(obj).attr("id")=="check"){
        var checkNumber=$(obj).val();
        if(!$(obj).val()){
            $(obj).next().removeClass("pas_remind_success").text("验证码不能为空");
        }
        if($(obj).val()){
            $.get("/fuyang_backend/volunteers/checkCode?code="+checkNumber,function(data){
                if(!data.data){
                    $(obj).next().removeClass("pas_remind_success").text("验证码输入错误");
                    yzmcheck = false;
                }else{
                    $(obj).next().text('').addClass("pas_remind_success");
                    yzmcheck = true;
                }
            });
        }
    }
}



function sendAlls(){
   var phone=$(".check_phone").val();
   var password=$(".pas2").val();
   var identification=$("#picPath").val();
   var realname=$(".realname").val();
   var cardType=$(".cardType").val();
   var cardId=$(".cardId").val();
   var party=$(".party").val();
   var regionId=$(".regionId").val();
   var sex=$(".sex").val();
   var raceId=$(".raceId").val();
   var nativePlace=$(".nativePlace").val();
   var studying=$(".studying").val();
   var workAddress=$(".workAddress").val();
   var studentId=$(".studentId").val();
   var email=$(".email").val();
   var qq=$(".qq").val();
   var tradeId=$(".tradeId").val();
   var educationId=$(".educationId").val();
  
   var specialty;
   $(".specialty:checked").each(function (){
   	if( typeof(specialty) == 'undefined'){
           specialty=$(this).val();
       }else{
           specialty+=","+$(this).val();
       }
               
   });
   
   var serviceArea;
   $(".serviceArea:checked").each(function (){
       if( typeof(serviceArea) == 'undefined'){
           serviceArea=$(this).val();
       }else{
           serviceArea+=","+$(this).val();
       }
               
   });
   
   $.post("/fuyang_backend/china/getLocation",{
	   city:realname,
	   keywords:workAddress
   },function(data){
	   if(data.state==0){
		   $(".realname").next().removeClass("pas_remind_success").text(data.data);
	   }else{
		   alert(data.message);
	   }
   });
}



function next(obj){
    if($(obj).parent().parent().attr("id")=="hidden1"){
        var checkPhone=$(".check_phone").val();
        var pas1=$(".pas1").val();
        var pas2=$(".pas2").val();
        var check=$("#check").val();
        
        var $first=false;
        var $twice=false;
        var $third=false;
        var $four=false;
        
        if($(".check_phone").attr("type")=='tel'){
            var reg=/^1[34578]\d{9}$/;
            console.log(reg.test($(".check_phone").val()));
            if(reg.test($(".check_phone").val())){
                console.log("true");
                $(".check_phone").next().text('').addClass("pas_remind_success");
                $first=true;
            }else{
                $(".check_phone").next().removeClass("pas_remind_success").text("手机号码格式错误");
                $first=false;
                console.log("false");
                return false;
            }

        }
        
        if(!yzmcheck){
        	alert("验证码输入错误");
        	return false;
        }
        
        if($("#protocoCheckbox").is(":checked")){
            if(checkPhone && pas1 && pas2 && check){
                $("#hidden1").css("display","none");
                $("#hidden2").css("display","block");
                $(".first").removeClass("active");
                $(".third").addClass("active");
                $("body").scrollTop(0);
            }else{
                alert("信息不能为空");
            }

        }else{
            alert("请同意注册协议");
        }
    }

    if($(obj).parent().parent().attr("id")=="hidden2"){
       /* var e = window.event || arguments[0];
        e.stopPropagation();
        e.preventDefault();*/
        var realName = $(".realname").val();
        var cardId = $(".cardId").val();
        var photos = $(".photos").val();
        //console.log(photos);
        var workAddress = $(".workAddress").val();
        var email = $(".email").val();
        var qq = $(".qq").val();
        
        
        if(realName && cardId && photos && workAddress && email && qq){
        	if(!ycRequired){
        		alert("请检查输入是否正确!");
        		return false;
        	}
        	var identification=$("#picPath").val();
            if(identification == '1'){
            	alert("请上传身份证照片");
            	return false;
            }
        	sendAlls();
        	
        }else{
            alert("信息不能为空");
        }
    }
}

function prev(obj){
    if($(obj).parent().parent().attr("id")=="hidden1"){
        $("body").scrollTop(0);
    }
    if($(obj).parent().parent().attr("id")=="hidden2"){
        $("#hidden1").css("display","block");
        $("#hidden2").css("display","none");
        $("#hidden3").css("display","none");
        $(".third").removeClass("active");
        $(".first").addClass("active");
        $("body").scrollTop(0);
    }
    if($(obj).parent().parent().attr("id")=="hidden3"){
        $("#hidden1").css("display","none");
        $("#hidden2").css("display","block");
        $("#hidden3").css("display","none");
        $(".fiveth").removeClass("active");
        $(".third").addClass("active");
        $("body").scrollTop(0);
    }
}
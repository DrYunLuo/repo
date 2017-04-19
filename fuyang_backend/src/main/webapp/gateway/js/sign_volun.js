/**
 * Created by Administrator on 2017/1/19.
 */
/**
 * Created by Administrator on 2017/1/19.
 */
$(function() {
    checkresult = false;

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

//            console.log(file);
//            $("#path").attr("value",file.name);

            //console.log(file.name);
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


    $("#upcdcard").click(function(){    //绑定点击事件触发提交方法.
                $.ajaxFileUpload({
                            url:"/fuyang_backend/volunteers/uploadCardId",
                            secureuri:false,
                            fileElementId:'card_upload1',
                            dataType: 'json',
                            type:"post", 
                            success: function (data) {
                              //  console.log(data);
                                $("#picPath").val(data.data);
                             //  console.log("picPath------》"+$("#picPath").val());
                            }
                });
        //$("#hidden1").css("display","none");
        //$("#hidden2").css("display","none");
        //$("#hidden3").css("display","block");
        //$(".third").removeClass("active");
        //$(".fiveth").addClass("active");
        //console.log(123);
        //$("body").scrollTop(0);

    });
    //var options={
    //    url:"/fuyang_backend/volunteers/uploadCardId",
    //    type:"post",
    //    success:function(data){  //上传成功后调用的函数
    //        console.log(data);
    //        var photo=data.path;
    //        console.log(photo);
    //        $("#pic").val(photo);
    //        console.log($("#pic").val());
    //    }
    //};
    //$("#form2").submit(function() {     //封装的submit()方法
    //    $(this).ajaxSubmit(options); //将发送的请的地址和方式通过option
    //    方法传给$(this).ajaxSubmit(option);
    //    return false;
    //});
    //
    //$("#upcdcard").click(function(){  //绑定点击事件触发提交方法.
    //    $("#form2").submit();
    //    alert("上传成功");
    //});
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

function sendAlls(){
     var phone=$(".check_phone").val();
     var password=$(".pas2").val();
     var photo=$("#picPath").val();
    var realname=$(".realname").val();
    var cardType=$(".cardType").val();
    var cardId=$(".cardId").val();
    var photo=$("#picPath").val();
    var party=$(".party").val();
    var regionId=$(".regionId").val();
    var sex=$(".sex").val();

  /*  var sexs;
    for(var i=0;i<sex.length;i++){
       if($(sex[i]).is(":checked")){
           sexs=$(sex[i]).attr("value");
        }else{
            return;
        }
    }*/
   
    var raceId=$(".raceId").val();
   var nativePlace=$(".nativePlace").val();
    var studying=$(".studying").val();
    /*var studyings;
    for(var i=0;i<studying.length;i++){
        if($(studying[i]).is(":checked")){
            studyings=$(studying[i]).attr("value");
        }else{
            return;
        }
    }*/
    
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
    
    /*var specialtys;
    console.log("进入方法5");
    for(var i=0;i<specialty.length;i++){
        if($(specialty[i]).is(":checked")){
            specialtys=+$(specialty[i]).attr("value")+",";
        }else{
            return;
        }
    }*/
    
    var serviceArea;
    /*var serviceArea=*/$(".serviceArea:checked").each(function (){
        if( typeof(serviceArea) == 'undefined'){
            serviceArea=$(this).val();
        }else{
            serviceArea+=","+$(this).val();
        }
                
    });

   /* var serviceAreas;
    for(var i=0;i<specialty.length;i++){
        if($(serviceArea[i]).is(":checked")){s
            serviceAreas=+$(serviceArea[i]).attr("value")+",";
        }else{
            return;
        }
    }*/
    
    $.post("/fuyang_backend/volunteers/reVol",{
        phone:phone,
        password:password,
        realname:realname,
        cardType:cardType,
        photo:photo,
        party:party,
        regionId:regionId,
        sex:sex,
        raceId:raceId,
        nativePlace:nativePlace,
        studying:studying,
        workAddress:workAddress,
        studentId:studentId,
        email:email,
        qq:qq,
        tradeId:tradeId,
        educationId:educationId,
        specialty:specialty,
        serviceArea:serviceArea
    },function(data){
            $("#hidden1").css("display","none");
            $("#hidden2").css("display","none");
            $("#hidden3").css("display","block");
            $(".third").removeClass("active");
            $(".fiveth").addClass("active");
            $("body").scrollTop(0);
    });
}


//function sendNumber(){
//    var phone=$(".check_phone").val();
//
//    console.log(phone);
//    $.get("/fuyang_backend/sendMsg/send?phone="+phone,function(data){
//        console.log(data);
//        //if(!data.data.mobile_code){
//        //    alert("响应失败");
//        //    return false;
//        //}
//        checkdata = data.data;
//        console.log(checkdata);
//    });
//    return checkdata;
//}

//$(function(){
//  $.get("http://localhost:8080/fuyang_backend/volunteers/captcha",function(data){
//      console.log(data);
//  })
//})
function sub(){
    if(!$(".pas1").val()){
        $(".pas_first").removeClass("pas_remind_success").html("密码不能为空");
        return false;
    }
    if($(".pas1").val()!=$(".pas2").val()){
        $(".pas_remind").removeClass("pas_remind_success").html("两次密码必须相同");
        $(".pas2").html('');
        return false;
    }
    if($(".pas1").val()==$(".pas2").val()){
        $(".pas_remind").text('').addClass("pas_remind_success");
        return true;
    }
}
function getcheckPic(){
    $(".check_number").children().attr("src",'/fuyang_backend/volunteers/captcha?abc='+Math.random());
}
function test(obj){
    if($(obj).attr("id")=="protocoCheckbox"){
        
       	if(!obj.prop("checked")){
			$(obj).next().next().text("请勾选此条款");
			return false;
		}else{
			$(obj).next().next().removeClass("pas_remind_success").text("");
			return true;
		}
    }
    
    if($(obj).attr("id")=="check"){
        var checkNumber=$(obj).val();
        console.log(checkNumber);
        if(!$(obj).val()){
            $(obj).next().removeClass("pas_remind_success").text("验证码不能为空");
            checkresult = false;
        }
        
        if($(obj).val()){
            $.get("/fuyang_backend/volunteers/checkCode?code="+checkNumber,function(data){
                if(!data.data){
                    $(obj).next().removeClass("pas_remind_success").text("验证码输入错误");
                    checkresult = false;
                }else if(data.data){
                    $(obj).next().addClass("pas_remind_success");
                    checkresult = true;
                }
            });
        }
    }
    
    if($(obj).attr("type")=='tel'){
        var reg=/^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/;
//                $(obj).val().test(reg);
        if(reg.test($(obj).val())){
            $(obj).next().text('').addClass("pas_remind_success");
            return true;
        }else{
            $(obj).next().removeClass("pas_remind_success").text("请输入正确的手机号码");
            return false;
        }
    }
    if($(obj).attr("type")=='email'){
        var email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(email.test($(obj).val())){
            $(obj).next().text('').addClass("pas_remind_success");
            return true;
        }else{
            $(obj).next().text('请输入正确的邮箱');
            return false;
        }
        return;
    }
    if($(obj).attr("name")=='cardId'){
        var reg1=/^\d{18}$/;
        if(reg1.test($(obj).val())){
            $(obj).next().text('').addClass("pas_remind_success");
            return true;
        }else{
            $(obj).next().removeClass("pas_remind_success").text('请输入正确的身份证号码');
            return false;
        }
    }else{
        if($(obj).val()){
            $(obj).next().text('').addClass("pas_remind_success");
            return true;
        }

    }
}


function next(obj){
    if($(obj).parent().parent().attr("id")=="hidden1"){
        var check_phone = test($(".check_phone"));
        
        var protocoCheckbox =test($("#protocoCheckbox"));
        var pas =sub();
        $("check").trigger("onblur");
        
        if(check_phone &&pas&&protocoCheckbox&&checkresult){
                $("#hidden1").css("display","none");
                $("#hidden2").css("display","block");
                $(".first").removeClass("active");
                $(".third").addClass("active");
                $("body").scrollTop(0);
        }
    }
    
    if($(obj).parent().parent().attr("id")=="hidden2"){
    	var tempResult=0;
    	var email = test($("input[type=email]"));
    	var card = test($("input[name=cardId]"));
       /* var e = window.event || arguments[0];*/
        /*e.stopPropagation();*/
        /*e.preventDefault();*/
         /*console.log("1111");*/
        $("input[form=form1][type=text]").each(function(){
        	var value = $(this).val();
        	if(!value){
        		$(this).next().removeClass("pas_remind_success").text('不能为空');
        		tempResult++;
        	}
        });
        
        if(tempResult<1&&email&&card){
        	sendAlls();
        }else{
        	$("input[type=email]").trigger("onblur");
        	$("input[type=email]").trigger("onblur");
        }
        
       /*  $("#form1").submit(function(data){
                console.log(data);*/
              /*  $("#hidden1").css("display","none");
                $("#hidden2").css("display","none");
                $("#hidden3").css("display","block");
                $(".third").removeClass("active");
                $(".fiveth").addClass("active");*/
     /*    });*/
       // console.log(123);
       /* $("body").scrollTop(0);*/
    }
    if($(obj).parent().parent().attr("id")=="hidden3"){
       $("#hidden1").css("display","none");
        $("#hidden2").css("display","none");
        $("#hidden3").css("display","none");
        $("#hidden4").css("display","block");
        $(".fiveth").removeClass("active");
        $(".senventh").addClass("active");
        $("body").scrollTop(0);
    }
}
function prev(obj){
    if($(obj).parent().parent().attr("id")=="hidden1"){
        $("body").scrollTop(0);
    }
    if($(obj).parent().parent().attr("id")=="hidden2"){
//                $("#form1").submit(function(data){
//                    console.log(data);
        $("#hidden1").css("display","block");
        $("#hidden2").css("display","none");
        $("#hidden3").css("display","none");
        $(".third").removeClass("active");
        $(".first").addClass("active");
//                });
//        console.log(123);
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
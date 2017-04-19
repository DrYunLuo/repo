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
    $("#award_upload").change(function() {
        var $file = $(this);
        var fileObj = $file[0];
        var windowURL = window.URL || window.webkitURL;
        var dataURL;
        var $img = $("#award_preview");

        if(fileObj && fileObj.files && fileObj.files[0]){
            dataURL = windowURL.createObjectURL(fileObj.files[0]);
            $img.attr('src',dataURL);
        }else{
            dataURL = $file.val();
            var imgObj = document.getElementById("award_preview");
            imgObj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";//为预览区域（比如要在某个 div 中预览）添加样式：
            imgObj.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = dataURL;//为 AlphaImageLoader 设置 src 属性。

        }
    });
    $("#cdCard_upload").change(function() {
        var $file = $(this);
        var fileObj = $file[0];
        var windowURL = window.URL || window.webkitURL;
        var dataURL;
        var $img = $("#cdCard_preview");

        if(fileObj && fileObj.files && fileObj.files[0]){
            dataURL = windowURL.createObjectURL(fileObj.files[0]);
            $img.attr('src',dataURL);
        }else{
            dataURL = $file.val();
            var imgObj = document.getElementById("cdCard_preview");
            imgObj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";//为预览区域（比如要在某个 div 中预览）添加样式：
            imgObj.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = dataURL;//为 AlphaImageLoader 设置 src 属性。

        }
    });


});
$(function(){
    $("#touchone").click(function(){	//绑定点击事件触发提交方法.
        $.ajaxFileUpload({
            url:'/fuyang_backend/groups/registPic',
            secureuri:false,
            fileElementId:'file_upload1',
            dataType: 'json',
            success: function (data) {
                //console.log(data);
                //alert("成功");
                $("#groupLogo").attr("value",data.data);
                //console.log($("#groupLogo").attr("value"));
            }
        });
    });
    $("#touchtwo").click(function(){	//绑定点击事件触发提交方法.
        $.ajaxFileUpload({
            url:'/fuyang_backend/groups/registPic',
            secureuri:false,
            fileElementId:'file_upload2',
            dataType: 'json',
            success: function (data) {
                //console.log(data);
                //alert("成功");
                $("#signTestify").attr("value",data.data);
                //console.log($("#signTestify").attr("value"));
            }
        });
    });
    $("#touchthree").click(function(){	//绑定点击事件触发提交方法.
        $.ajaxFileUpload({
            url:'/fuyang_backend/groups/registPic',
            secureuri:false,
            fileElementId:'award_upload',
            dataType: 'json',
            success: function (data) {
                //console.log(data);
                //alert("成功");
                $("#awardPic").attr("value",data.data);
                //console.log($("#awardPic").attr("value"));
            }
        });
    });
    $("#touchfour").click(function(){	//绑定点击事件触发提交方法.
        $.ajaxFileUpload({
            url:'/fuyang_backend/groups/registPic',
            secureuri:false,
            fileElementId:'cdCard_upload',
            dataType: 'json',
            success: function (data) {
                //console.log(data);
                //alert("成功");
                $("#contactId").attr("value",data.data);
                //console.log($("#contactId").attr("value"));
            }
        });
    });
    
});

function hasnumber(obj) {
    var maxNums=40;//最多字数
    //console.log(obj.value.length);
    if(obj.value.length<maxNums){
        var curr=maxNums-obj.value.length;
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
    }else{
        $(".pas_remind").text('').addClass("pas_remind_success");
    }
}
function test(obj){
    if($(obj).attr("type")=='tel'){
        var reg=/^((0\d{2,3}\d{7,8})|(1[3584]\d{9}))$/;
//                $(obj).val().test(reg);
        if(reg.test($(obj).val())){
            $(obj).next().text('').addClass("pas_remind_success");
        }else{
        	 $(obj).next().removeClass("pas_remind_success").text("请输入正确的格式");
        }
    }
    if($(obj).attr("type")=='email'){
        var email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(email.test($(obj).val())){
            $(obj).next().text('').addClass("pas_remind_success");
        }else{
            $(obj).next().text('请输入正确的邮箱');
        }
        return;
    }
    if($(obj).attr("type")=='web'){
        var web=/^\w{4}\:\/\/\w+\.\w*\.\w{3,}\/$/;
    }
    if($(obj).attr("type")=='number'){
        var reg1=/^\d{18}$/;
        if(reg1.test($(obj).val())){
            $(obj).next().text('').addClass("pas_remind_success");
        }else{
            $(obj).next().text('请输入正确的身份证号码');
        }
    }else{
        if($(obj).val()){
            $(obj).next().text('').addClass("pas_remind_success");
        }

    }
}
function next(obj){
	if($(obj).attr("id")=="uploadPic"){
		$("#hidden1").css("display","none");
        $("#hidden2").css("display","none");
        $("#hidden3").css("display","block");
        $(".third").removeClass("active");
        $(".fiveth").addClass("active");
        //console.log(123);
        $("body").scrollTop(0);
	}
    if($(obj).parent().parent().attr("id")=="hidden1"){
    	
    	var tempResult=0;
    	  $("#hidden1  input[form=hidden3]").each(function(){
	          	var value = $(this).val();
	          	if(!value){
	          		$(this).next().removeClass("pas_remind_success").text('不能为空');
	          		tempResult++;
	          	}
	       	 $(this).trigger("onblur");
          });
    	
        if(!$(".check_one").is(":checked")){
            //alert("请同意志愿者注册条例");
            return false;
        }
        
        if(tempResult<1){
  		  $("#hidden1").css("display","none");
  	        $("#hidden2").css("display","block");
  	        $(".first").removeClass("active");
  	        $(".third").addClass("active");
  	        $("body").scrollTop(0);
  	  }else{
  		  return false;
  	  }

      
    }
//    if($(obj).parent().parent().attr("id")=="hidden3"){
//        $("#hidden1").css("display","none");
//        $("#hidden2").css("display","none");
//        $("#hidden3").css("display","none");
//        $("#hidden4").css("display","block");
//        $(".fiveth").removeClass("active");
//        $(".senventh").addClass("active");
//        $("body").scrollTop(0);
//    }
}
function lastUp(){
	var tempResult=0;
	  $("#hidden3  div input[type=text]").each(function(){
        	var value = $(this).val();
        	if(!value){
        		$(this).next().removeClass("pas_remind_success").text('不能为空');
        		tempResult++;
        	}
     	 $(this).trigger("onblur");
    });
	console.log(tempResult);
	  if(tempResult>0){
		  return ;
	  }
	
	var sign_count=$(".sign_count").val();
	//console.log(sign_count);
	var pas1=$(".pas1").val();
	var groupLogo=String($("#groupLogo").attr("value"));
	//console.log(groupLogo);
	var signTestify=String($("#signTestify").attr("value"));
	//console.log(signTestify);
	var awardPic=String($("#awardPic").attr("value"));
	//console.log(awardPic);
	var contactId=String($("#contactId").attr("value"));
	//console.log(contactId);
	var groupName=$(".groupName").val();
	var institution=$(".institution").val();
	var phonenumber=$(".phonenumber").val();
	var regionid=$(".regionid").val();
	var groupType=$(".groupType").val();
	var businessScope=$(".businessScope").val();
	var inTime=$(".inTime").val();
	var web=$(".web").val();
	var address=$(".address").val();
	var groupEmail=$(".groupEmail").val();
	var groupDescription=$(".groupDescription").val();
	var contactSname=$(".contactSname").val();
	var contactsTel=$(".contactsTel").val();
	var contactsIscard=$(".contactsIsCard").val();
	var contactsWork=$(".contactsWork").val();
	
//	if(sign_count && pas1 && groupLogo && signTestify && awardPic && contactId && groupName && institution && phonenumber && regionid && groupType && businessScope && inTime && web && address && groupEmail && groupDescription && contactSname && contactsIscard && contactsWork){
//		
//	}
	$.post("/fuyang_backend/groups/registGroup",{
		uid:sign_count,
		pwd:pas1,
		logo:groupLogo,
		filed:signTestify,
		imageUrl:awardPic,
		contactspost:contactId,
		name:groupName,
		institution:institution,
		phonenumber:phonenumber,
		regionid:regionid,
		groupType:groupType,
		businessScope:businessScope,
		inTime:inTime,
		web:web,
		address:address,
		email:groupEmail,
		description:groupDescription,
		contactsname:contactSname,
		contactstel:contactsTel,
		contactsIscard:contactsIscard,
		contactWork:contactsWork,
		checkBy:$("#checkBy").val()
	
	},function(data){
		//console.log("成功");
		 $("#hidden1").css("display","none");
         $("#hidden2").css("display","none");
         $("#hidden3").css("display","none");
         $("#hidden4").css("display","block");
         $(".fiveth").removeClass("active");
         $(".senventh").addClass("active");
         $("body").scrollTop(0);
	});
	
	
	
//	var options={
//	        url:"/fuyang_backend/groups/registGroup",
//	        type:"post",
//	        success:function(data){  //上传成功后调用的函数
//	            //console.log(data);
//	            //alert("成功");
//	             $("#hidden1").css("display","none");
//	             $("#hidden2").css("display","none");
//	             $("#hidden3").css("display","none");
//	             $("#hidden4").css("display","block");
//	             $(".fiveth").removeClass("active");
//	             $(".senventh").addClass("active");
//	             $("body").scrollTop(0);
//	        }
//	    };
//	    $("#hidden3").submit(function() {	  //封装的submit()方法
//	        $(this).ajaxSubmit(options); //将发送的请的地址和方式通过option方法传给$(this).ajaxSubmit(option);
//	        return false;
//	    });
//
//	    $("#sendAll").click(function(e){	//绑定点击事件触发提交方法.
//	    	//alert("进入方法");
//	    	$("#hidden3").submit();
//	    	e.stopPropagation();
//	    	e.preventDefault();
//	        
//	    });

}
function prev(obj){
    if($(obj).parent().parent().attr("id")=="hidden1"){
        $("body").scrollTop(0);
    }
    if($(obj).parent().parent().attr("id")=="hidden2"){
//                $("#form1").submit(function(data){
//                    //console.log(data);
        $("#hidden1").css("display","block");
        $("#hidden2").css("display","none");
        $("#hidden3").css("display","none");
        $("#hidden4").css("display","none");
        $(".third").removeClass("active");
        $(".first").addClass("active");
//                });
        //console.log(123);
        $("body").scrollTop(0);
    }
    if($(obj).parent().parent().attr("id")=="hidden3"){
        $("#hidden1").css("display","none");
        $("#hidden2").css("display","block");
        $("#hidden3").css("display","none");
        $("#hidden4").css("display","none");
        $(".fiveth").removeClass("active");
        $(".third").addClass("active");
        $("body").scrollTop(0);
    }
    if($(obj).parent().parent().attr("id")=="hidden4"){
        $("#hidden1").css("display","none");
        $("#hidden2").css("display","none");

        $("#hidden3").css("display","block");
        $("#hidden4").css("display","none");
        $(".fiveth").addClass("active");
        $(".senventh").removeClass("active");
        $("body").scrollTop(0);
    }
}

/*var app=angular.module('myApp',['ng']);
app.run(function ($http){
    $http.defaults.headers.post={'Content-type':'application/x-www-form-urlencoded'};
});
app.controller("parentCtrl",['$scope','$http',function($scope,$http){
	 $.ajax({
	        type: "POST",
	        url: "/fuyang_backend/code/getCodesByType",
	        data: {
	            'codeType':'auditor'
	        },
	        dataType: "json",
	        success: function(data){
	        	//console.log(data);
	            $scope.selection=data.data;
	            //console.log(data);
	        }
	    });
}]);
*/
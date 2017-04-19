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
                alert("logo上传成功");
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
                alert("登记证书上传成功");
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
                alert("荣誉证书上传成功");
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
                alert("身份证上传成功");
            }
        });
    });
    
});

function hasnumber(obj) {
    var maxNums=300;//最多字数
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
    if($(obj).attr("class") == 'next groupName'){
        if($(obj).val()){

            $(obj).next().text('').addClass("pas_remind_success");
        }else{
            $(obj).next().removeClass("pas_remind_success").text('请输入组织名称');
        }
    }

    if($(obj).attr("class") == 'next institution'){
        if($(obj).val()){
            $(obj).next().text('').addClass("pas_remind_success");
        }else{
            $(obj).next().removeClass("pas_remind_success").text('请输入主管单位');
        }
    }

    if($(obj).attr("class") == 'next businessScope'){
        var reg = /^(\d{18})|([A-Z]{18})$/
        var codes = $(obj).val();
        if(reg.test(codes)){
//            console.log(123);
            $(obj).next().text('').addClass("pas_remind_success");
        }else{
            $(obj).next().removeClass("pas_remind_success").text('请输入正确的社会统一信用代码');
        }
    }
    
    if($(obj).attr("type")=='tel'){
        var reg=/^((0\d{2,3}\d{7,8})|(1[3584]\d{9}))$/;

        if(reg.test($(obj).val())){
            $(obj).next().text('').addClass("pas_remind_success");
        }else{
            $(obj).next().removeClass("pas_remind_success").text('请输入正确联系号码');
        }
    }

    if($(obj).attr("type")=='email'){
        var email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(email.test($(obj).val())){
            $(obj).next().text('').addClass("pas_remind_success");
        }else{
            $(obj).next().removeClass("pas_remind_success").text('请输入正确的邮箱');
        }
        return;
    }

    if($(obj).attr("class") == 'next pas1'){
        if($(obj).val()){
//            console.log("成功");
            $(obj).next().text('').addClass("pas_remind_success");
        }else{
            $(obj).next().removeClass().text('请输入密码');
        }
    }

    if($(obj).attr("class") == 'next web'){
        var reg=/^(http:\/\/)?(www.)?(\w+\.)+\w{2,4}(\/)?$/;
//        console.log(123);
        if(reg.test($(obj).val())){
//            console.log("成功");
            $(obj).next().text('').addClass("pas_remind_success");
        }else{
            $(obj).next().removeClass().text('请输入正确的网址');
        }
    }

    if($(obj).attr("class") == 'next sign_count'){
        if($(obj).val()){
//            console.log("成功");
            $(obj).next().text('').addClass("pas_remind_success");
        }else{
            $(obj).next().removeClass().text('请输入账号');
        }
    }

    if($(obj).attr("class")=='next contactsIsCard'){
        var reg1=/^(\d{18})|(\d{17}x{1})$/;
        if(reg1.test($(obj).val())){
            $(obj).next().text('').addClass("pas_remind_success");
        }else{
            $(obj).next().removeClass("pas_remind_success").text('请输入正确的身份证号码');
        }
    }

    if($(obj).attr("class") == 'next contactSname') {
        var contactSname = $(".contactSname").val();
        var reg = /[^\u0000-\u00FF]/
        if (reg.test(contactSname)) {
            $(".contactSname").next().text('').addClass("pas_remind_success");
        } else {
            $(".contactSname").next().removeClass("pas_remind_success").text('请输入正确的中文姓名');
        }
    }

    if($(obj).attr("class") == 'next contactsWork') {
        var contactSname = $(".contactsWork").val();
        //var reg = /[^\u0000-\u00FF]/
        if (contactSname) {
            $(".contactsWork").next().text('').addClass("pas_remind_success");
        } else {
            $(".contactsWork").next().removeClass("pas_remind_success").text('请输入正确的中文姓名');
        }
    }

}
function next(obj){

	if($(obj).attr("id")=="uploadPic"){

        var groupLogo = $("#groupLogo").val();
        if(!groupLogo){
            alert("请上传组织logo");
            return;
        }

        var signTestify = $("#signTestify").val();
        if(!signTestify){
            alert("请上传组织登记证书");
        }

        var awardPic = $("#awardPic").val();
        if(!awardPic){
            alert("请上传组织荣耀证书");
        }

        var contactId = $("#contactId").val();
        if(!contactId){
            alert("请上传法人身份证照片");
        }

		$("#hidden1").css("display","none");
        $("#hidden2").css("display","none");
        $("#hidden3").css("display","block");
        $(".third").removeClass("active");
        $(".fiveth").addClass("active");
        //console.log(123);
        $("body").scrollTop(0);
	}

    if($(obj).parent().parent().attr("id")=="hidden1"){

        var signCount = $(".sign_count").val();
        if(!signCount){
            $(".sign_count").next().removeClass("pas_remind_success").text('账号不能为空');
            return;
        }

        var pas1 = $(".pas1").val();
        if(!pas1){
            $(".pas1").next().removeClass("pas_remind_success").text('密码不能为空');
            return;
        }

        var pas2 = $(".pas2").val();
        if(!pas2){
            $(".pas2").next().removeClass("pas_remind_success").text('密码不能为空');
            return;
        }
        
        $("#hidden1").css("display","none");
        $("#hidden2").css("display","block");
        $(".first").removeClass("active");
        $(".third").addClass("active");
        $("body").scrollTop(0);
    }

    if($(obj).attr("id")=="sendAll"){

        var groupName = $(".groupName").val();
        if(!groupName){
            //console.log("groupName");
            $(".groupName").next().removeClass().text('组织名称不能为空');
            return;
        }

        var institution = $(".institution").val();
        if(!institution){
            $(".institution").next().removeClass().text('主管单文不能为空');
            return;
        }

        var phonenumber = $(".phonenumber").val();
        if(!phonenumber){
            $(".phonenumber").next().removeClass().text('组织电话不能为空');
            return;
        }

        var businessScope = $(".businessScope").val();
        if(!businessScope){
            $(".businessScope").next().removeClass().text('信用代码不能为空');
            return;
        }

        var inTime = $(".inTime").val();
        if(!inTime){
            $(".inTime").next().removeClass().text('有效期不能为空');
            return;
        }

        var web = $(".web").val();
        if(!web){
            $(".web").next().removeClass().text('网址不能为空');
            return;
        }

        var address = $(".address").val();
        if(!address){
            $(".address").next().removeClass().text('地址不能为空');
            return;
        }

        var groupEmail = $(".groupEmail").val();
        if(!groupEmail){
            $(".groupEmail").next().removeClass().text('邮箱不能为空');
            return;
        }

        var groupDescription = $(".groupDescription").val();
        if(!groupDescription){
            $(".groupDescription").next().removeClass().text('组织描述不能为空');
            return;
        }

        var contactSname = $(".contactSname").val();
        if(!contactSname){
            $(".contactSname").next().removeClass().text('联系人不能为空');
            return;
        }

        var contactsTel = $(".contactsTel").val();
        if(!contactsTel){
            $(".contactsTel").next().removeClass().text('法人联系方式不能为空');
            return;
        }

        var contactsIsCard = $(".contactsIsCard").val();
        if(!contactsIsCard){
            $(".contactsIsCard").next().removeClass().text('法人身份证号码不能为空');
            return;
        }

        var contactsWork = $(".contactsWork").val();
        if(!contactsWork) {
            $(".contactsWork").next().removeClass().text('法人工作领域不能为空');
            return;
        }

        lastUp();
    }
}

function lastUp(){
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
	
	//console.log(groupType);
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
		 $("#hidden1").css("display","none");
         $("#hidden2").css("display","none");
         $("#hidden3").css("display","none");
         $("#hidden4").css("display","block");
         $(".fiveth").removeClass("active");
         $(".senventh").addClass("active");
         $("body").scrollTop(0);
        
	});
}

function prev(obj){
    if($(obj).parent().parent().attr("id")=="hidden1"){
        $("body").scrollTop(0);
    }

    if($(obj).parent().parent().attr("id")=="hidden2"){
        $("#hidden1").css("display","block");
        $("#hidden2").css("display","none");
        $("#hidden3").css("display","none");
        $("#hidden4").css("display","none");
        $(".third").removeClass("active");
        $(".first").addClass("active");
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

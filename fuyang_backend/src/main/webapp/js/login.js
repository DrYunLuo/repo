//加密
var hexcase = 0;
var chrsz = 8;
function hex_sha1(s) {

    return binb2hex(core_sha1(AlignSHA1(s)));

}
function sha1_vm_test() {

    return hex_sha1("abc") == "a9993e364706816aba3e25717850c26c9cd0d89d";

}
function core_sha1(blockArray) {

    var x = blockArray; // append padding
    var w = Array(80);

    var a = 1732584193;

    var b = -271733879;

    var c = -1732584194;

    var d = 271733878;

    var e = -1009589776;

    for (var i = 0; i < x.length; i += 16) // 每次处理512位 16*32
    {

        var olda = a;

        var oldb = b;

        var oldc = c;

        var oldd = d;

        var olde = e;

        for (var j = 0; j < 80; j++) // 对每个512位进行80步操作
        {

            if (j < 16)
                w[j] = x[i + j];

            else
                w[j] = rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);

            var t = safe_add(safe_add(rol(a, 5), sha1_ft(j, b, c, d)), safe_add(safe_add(e, w[j]), sha1_kt(j)));

            e = d;

            d = c;

            c = rol(b, 30);

            b = a;

            a = t;

        }

        a = safe_add(a, olda);

        b = safe_add(b, oldb);

        c = safe_add(c, oldc);

        d = safe_add(d, oldd);

        e = safe_add(e, olde);

    }

    return new Array(a, b, c, d, e);

}
function sha1_ft(t, b, c, d) {

    if (t < 20)
        return (b & c) | ((~b) & d);

    if (t < 40)
        return b ^ c ^ d;

    if (t < 60)
        return (b & c) | (b & d) | (c & d);

    return b ^ c ^ d; // t<80
}
function sha1_kt(t) {

    return (t < 20) ? 1518500249 : (t < 40) ? 1859775393 : (t < 60) ? -1894007588 : -899497514;

}
function safe_add(x, y) {

    var lsw = (x & 0xFFFF) + (y & 0xFFFF);

    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);

    return (msw << 16) | (lsw & 0xFFFF);

}
function rol(num, cnt) {

    return (num << cnt) | (num >>> (32 - cnt));

}
function AlignSHA1(str) {

    var nblk = ((str.length + 8) >> 6) + 1, blks = new Array(nblk * 16);

    for (var i = 0; i < nblk * 16; i++)
        blks[i] = 0;

    for (i = 0; i < str.length; i++)

        blks[i >> 2] |= str.charCodeAt(i) << (24 - (i & 3) * 8);

    blks[i >> 2] |= 0x80 << (24 - (i & 3) * 8);

    blks[nblk * 16 - 1] = str.length * 8;

    return blks;

}
function binb2hex(binarray) {

    var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";

    var str = "";

    for (var i = 0; i < binarray.length * 4; i++) {

        str += hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8 + 4)) & 0xF) +

            hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8)) & 0xF);

    }

    return str;

}
function calcDigest() {

    var digestM = hex_sha1(document.SHAForm.SourceMessage.value);

    document.SHAForm.MessageDigest.value = digestM;
}
//在全局定义验证码
var code ;
//产生验证码
function createCode(){
    code = "";
    var codeLength = 5;
    var random = [2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','J','K','M','N','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','m','n','p','q','r','s','t','u','v','w','x','y','z'];
    for(var i = 0; i < codeLength; i++) {
        var index = Math.floor(Math.random()*(random.length));
        code += random[index];
    }
    $(".yzm_box span").html(code);
}
createCode();
$(".refreshyzm,.yzm_box").on("click",function(e){
    e.preventDefault();
    createCode();
});
//其他网页跳转
var op=location.search.substr(location.search.indexOf('op')+3);
if(op=='volunlogin'){
    $("a[part='volun']").addClass("active").siblings(".active").removeClass("active");
    $("#form-"+op).removeClass().addClass("db").siblings().removeClass().addClass("dn");
}else if(op=='orglogin'){
    $("a[part='org']").addClass("active").siblings(".active").removeClass("active");
    $("#form-"+op).removeClass().addClass("db").siblings().removeClass().addClass("dn");
}

//志愿者登录验证
$("#form-volunlogin :input").blur(function(){
    //验证用户名
    if($(this).is("#vname")){
        if($.trim(this.value) == ""){
            var errorMsg = " 请输入用户名";
            $(this).next().removeClass().addClass('onError').html(errorMsg);
        }else{
            $(this).next().removeClass().html("");
        }
    }
    //验证密码
    if($(this).is("#vpwd")){
        if($.trim(this.value) == ""){
            var errorMsg = "请输入密码";
            $(this).next().html(errorMsg).removeClass().addClass('onError');
        }else{
            $(this).next().removeClass().html("");
        }
    }
    //验证随机验证码
    if($(this).is(".validate")){
        if($(this).val()==''){
            $(this).addClass('inputErr');
        }else if($(this).val().toUpperCase() != code.toUpperCase()){
            $(this).addClass('inputErr');
        }else{
            $(this).removeClass('inputErr');
        }
    }
});
//    .keyup(function(){
//    $(this).triggerHandler("blur");
//}).focus(function(){
//    $(this).triggerHandler("blur");
//});
//志愿者登录按钮
$("#bt-volunlogin").click(function(){
    $("#form-volunlogin .required:input").trigger("blur");
    var numError = $("#form-volunlogin .onError").length+$("#form-volunlogin .inputErr").length;
    if(numError){
        return false;
    }
    var name=$("#vname").val();
    var password=$("#vpwd").val();
    var keyParams = hex_sha1(name+password+'yichuangspace');
    //登录验证
    $.ajax({
        type: "POST",
        url: "/fuyang_backend/account/login",
        data: {
        	'name':name,
        	'password':password,
            'keyParams':keyParams
        	},
        dataType: "json",
        success: function(data){
            //console.log(data);
            if(data.message=='用户不存在'){
                var errorMsg = "用户名不存在";
                $("#vname").next().removeClass().addClass('onError').html(errorMsg);
            }else if(data.message=='错误密码'){
                var errorMsg = "密码错误";
                $("#vpwd").next().removeClass().addClass('onError').html(errorMsg);
            }else if(data.state==0){
                setStorage('data',JSON.stringify(data));
                //localStorage.setItem('data',JSON.stringify(data));
                window.open("./management/manage.html",'_self');
            }
         }
    });
});
//组织登录验证
$("#form-orglogin :input").blur(function(){
    //验证用户名
    if($(this).is("#oname")){
        if($.trim(this.value) == ""){
            var errorMsg = " 请输入用户名";
            $(this).next().removeClass().addClass('onError').html(errorMsg);
        }else{
            $(this).next().removeClass().html("");
        }
    }
    //验证密码
    if($(this).is("#opwd")){
        if($.trim(this.value) == ""){
            var errorMsg = "请输入密码";
            $(this).next().html(errorMsg).removeClass().addClass('onError');
        }else{
            $(this).next().removeClass().html("");
        }
    }
    if($(this).is(".validate")){
        if($(this).val()==''){
            $(this).addClass('inputErr');
        }else if($(this).val().toUpperCase() != code.toUpperCase()){
            $(this).addClass('inputErr');
        }else{
            $(this).removeClass('inputErr');
        }
    }
});
//    .keyup(function(){
//    $(this).triggerHandler("blur");
//}).focus(function(){
//    $(this).triggerHandler("blur");
//});
//组织登录按钮
$("#bt-orglogin").click(function(){
    $("#form-orglogin .required:input").trigger("blur");
    var numError = $("#form-orglogin .onError").length+$("#form-orglogin .inputErr").length;
    if(numError){
        return false;
    }
    var name=$("#oname").val();
    var password=$("#opwd").val();
    var keyParams = hex_sha1(name+password+'yichuangspace');
    //登录验证
    $.ajax({
        type: "POST",
        url: "/fuyang_backend/account/login",
        data: {
            'name':name,
            'password':password,
            'keyParams':keyParams
        },
        dataType: "json",
        success: function(data){
            //console.log(data);
            if(data.message=='用户不存在'){
                var errorMsg = "用户名不存在";
                $("#oname").next().removeClass().addClass('onError').html(errorMsg);
            }else if(data.message=='错误密码'){
                var errorMsg = "密码错误";
                $("#opwd").next().removeClass().addClass('onError').html(errorMsg);
            }else if(data.state==0){
                setStorage('data',JSON.stringify(data));
                //localStorage.setItem('data',JSON.stringify(data));
                window.open("./management/manage.html",'_self');
            }
        }
    });
});
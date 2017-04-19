$(function(){
    /*
     *
     * A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined
     * in FIPS PUB 180-1
     *
     * By lizq
     *
     * 2006-11-11
     *
     */
    /*
     *
     * Configurable variables.
     *
     */
    var hexcase = 0;
    /* hex output format. 0 - lowercase; 1 - uppercase */
    var chrsz = 8;
    /* bits per input character. 8 - ASCII; 16 - Unicode */
    /*
     *
     * The main function to calculate message digest
     *
     */
    function hex_sha1(s) {

        return binb2hex(core_sha1(AlignSHA1(s)));

    }

    /*
     *
     * Perform a simple self-test to see if the VM is working
     *
     */
    function sha1_vm_test() {

        return hex_sha1("abc") == "a9993e364706816aba3e25717850c26c9cd0d89d";

    }

    /*
     *
     * Calculate the SHA-1 of an array of big-endian words, and a bit length
     *
     */
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

    /*
     *
     * Perform the appropriate triplet combination function for the current
     * iteration
     *
     * 返回对应F函数的值
     *
     */
    function sha1_ft(t, b, c, d) {

        if (t < 20)
            return (b & c) | ((~b) & d);

        if (t < 40)
            return b ^ c ^ d;

        if (t < 60)
            return (b & c) | (b & d) | (c & d);

        return b ^ c ^ d; // t<80
    }

    /*
     *
     * Determine the appropriate additive constant for the current iteration
     *
     * 返回对应的Kt值
     *
     */
    function sha1_kt(t) {

        return (t < 20) ? 1518500249 : (t < 40) ? 1859775393 : (t < 60) ? -1894007588 : -899497514;

    }

    /*
     *
     * Add integers, wrapping at 2^32. This uses 16-bit operations internally
     *
     * to work around bugs in some JS interpreters.
     *
     * 将32位数拆成高16位和低16位分别进行相加，从而实现 MOD 2^32 的加法
     *
     */
    function safe_add(x, y) {

        var lsw = (x & 0xFFFF) + (y & 0xFFFF);

        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);

        return (msw << 16) | (lsw & 0xFFFF);

    }

    /*
     *
     * Bitwise rotate a 32-bit number to the left.
     *
     * 32位二进制数循环左移
     *
     */
    function rol(num, cnt) {

        return (num << cnt) | (num >>> (32 - cnt));

    }

    /*
     *
     * The standard SHA1 needs the input string to fit into a block
     *
     * This function align the input string to meet the requirement
     *
     */
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

    /*
     *
     * Convert an array of big-endian words to a hex string.
     *
     */
    function binb2hex(binarray) {

        var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";

        var str = "";

        for (var i = 0; i < binarray.length * 4; i++) {

            str += hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8 + 4)) & 0xF) +

                hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8)) & 0xF);

        }

        return str;

    }


    /*
     *
     * calculate MessageDigest accord to source message that inputted
     *
     */
    function calcDigest() {

        var digestM = hex_sha1(document.SHAForm.SourceMessage.value);

        document.SHAForm.MessageDigest.value = digestM;

    }
//********************************定义的变量******************************
    var test1='1';
    var test2='2';
    var test3='3';
    var test4='4';
    var test5='5';
    var test6='6';
    var test7='7';
    var key1=hex_sha1('yichuangspace');
    var keyParams1 = hex_sha1(test1+'yichuangspace');
    var keyParams2 = hex_sha1(test2+'yichuangspace');
    var keyParams3 = hex_sha1(test3+'yichuangspace');
    var keyParams4 = hex_sha1(test4+'yichuangspace');
    var keyParams5 = hex_sha1(test5+'yichuangspace');
    var keyParams6 = hex_sha1(test6+'yichuangspace');
    var keyParams7 = hex_sha1(test7+'yichuangspace');

//********************************后台获取主贴数和回复数******************************
    var key1=hex_sha1('yichuangspace');
    $.get("/fuyang_backend/bbs/postTotal?keyParams="+key1,function(data){
        $("#forth .myul1 li").eq(4).children("span").text(data.data+'条');
    });
    $.get("/fuyang_backend/bbs/getAtomsTotal?keyParams="+key1,function(data){
        //console.log(data);
        $("#forth .myul1 li").eq(6).children("span").text(data.data+'条');
    });
//********************************后台获取下拉框的值******************************
    $("#sel").empty().append("<option selected='selected'>选择主题分类</option>");
    $.get("/fuyang_backend/code/postTypeList?keyParams="+key1,function(data){
        for(var i=0;i<data.data.length;i++){
            //console.log(data.data[i].codeValue);
            $("#sel").append("<option value='"+data.data[i].codeValue+"'>"+data.data[i].codeValueName+"</option>");
        }
    });

//********************************初始化显示帖子数******************************
    $.post("/fuyang_backend/bbs/getPostList",{
        pageSize:6,
        pageNo:1,
        type:'1',
        keyParams:keyParams1
    },function(result){
        //console.log(result);
        $("#page").Page({
            totalPages:Math.ceil(result.data.total/6),//分页总数
            liNums: 5,//分页的数字按钮数(建议取奇数)
            activeClass: 'activP', //active 类样式定义
            callBack : function(page){
                //console.log(page);
                $.post("/fuyang_backend/bbs/getPostList",{
                    pageSize:6,
                    pageNo:page,
                    type:'1',
                    keyParams:keyParams1
                },function(data){
                    //console.log(data);
                    $("#student").empty();
                    for(var i =0;i<data.data.list.length;i++){
                        $("#student").append('<div class="row"><div class="dv1 col-xs-9 col-sm-10 col-md-6 col-lg-6"><div class="media"><a class="pull-left"><img class="media-object" src="'+data.data.list[i].photo+'" alt="丢失图片"></a><div class="media-body"><h3 class="media-heading">' + data.data.list[i].title + '</h3><p>' + (data.data.list[i].content >= 12 ? data.data.list[i].content.slice(0, 13) : data.data.list[i].content) + '<span class="sp">' + (data.data.list[i].content >= 36 ? data.data.list[i].content.slice(13, 37) : (data.data.list[i].content.length >= 12 ? data.data.list[i].content.slice(13) : '')) + '</span>...<span style="color:#990000;">>>></span></p></div></div></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+data.data.list[i].author+'</p></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+data.data.list[i].click+'</p></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+data.data.list[i].createTime+'</p></div></div>');
                    }
                    $("#student .row").each(function(index,value){
                        $(value).on("click",function(){
                            var cid=hex_sha1(data.data.list[index].id+'yichuangspace');
                            $.post("/fuyang_backend/bbs/updateClick",{
                                id:data.data.list[index].id,
                                keyParams:cid
                            },function(result){
                                //console.log(result);
                            });
                        });
                    });
                });
            }
        });
        $("#student").empty();
        for(var i =0;i<result.data.list.length;i++){
            $("#student").append('<div class="row"><div class="dv1 col-xs-9 col-sm-10 col-md-6 col-lg-6"><div class="media"><a class="pull-left"><img class="media-object" src="'+result.data.list[i].photo+'" alt="丢失图片"></a><div class="media-body"><h3 class="media-heading">' + result.data.list[i].title + '</h3><p>' + (result.data.list[i].content >= 12 ? result.data.list[i].content.slice(0, 13) : result.data.list[i].content) + '<span class="sp">' + (result.data.list[i].content >= 36 ? result.data.list[i].content.slice(13, 37) : (result.data.list[i].content.length >= 12 ? result.data.list[i].content.slice(13) : '')) + '</span>...<span style="color:#990000;">>>></span></p></div></div></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+result.data.list[i].author+'</p></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+result.data.list[i].click+'</p></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+result.data.list[i].createTime+'</p></div></div>');
        }
        $("#student .row").each(function(index,value){
            $(value).on("click",function(){
                var cid=hex_sha1(result.data.list[index].id+'yichuangspace');
                $.post("/fuyang_backend/bbs/updateClick",{
                    id:result.data.list[index].id,
                    keyParams:cid
                },function(data){
                   // console.log(data);
                });
            });
        });
    });
//********************************点击助学那一行获取值******************************
    $("#top_ul li").each(function(i,v){
        $(v).on("click",function(){
            $("#fifinp").val('');
            //******************改变颜色******************
            $("#top_ul li").each(function(index,value){
                $(value).css("backgroundColor","#eee");
            });
            $("#top_ul li").eq(i).css("backgroundColor","#e84c3d");
            //******************div的显示情况******************
            $("#seventh>div").each(function(index,value){
                $(value).hide();
            });
            $("#seventh>div").eq(i).show();
            var $index= (i+1).toString();
            //alert($index);
            var keyP=hex_sha1($index+'yichuangspace');
            //********************************初始化显示帖子数******************************
            $.post("/fuyang_backend/bbs/getPostList",{
                pageSize:6,
                pageNo:1,
                type: $index,
                keyParams:keyP
            },function(result){
               // console.log(result);
                $("#page").Page({
                    totalPages:Math.ceil((result.data.total)/6),//分页总数
                    liNums: 5,//分页的数字按钮数(建议取奇数)
                    activeClass: 'activP', //active 类样式定义
                    callBack : function(page){
                       // console.log(page);
                        $.post("/fuyang_backend/bbs/getPostList",{
                            pageSize:6,
                            pageNo:page,
                            type:$index,
                            keyParams:keyP
                        },function(data){
                           // console.log(data);
                            $("#seventh>div").eq(i).empty();
                            for(var f=0;f<data.data.list.length;f++){
                                $("#seventh>div").eq(i).append('<div class="row"><div class="dv1 col-xs-9 col-sm-10 col-md-6 col-lg-6"><div class="media"><a class="pull-left"><img class="media-object" src="'+result.data.list[f].photo+'" alt="丢失图片"></a><div class="media-body"><h3 class="media-heading">' + result.data.list[f].title + '</h3><p>' + (result.data.list[f].content >= 12 ? result.data.list[f].content.slice(0, 13) : result.data.list[f].content) + '<span class="sp">' + (result.data.list[f].content >= 36 ? result.data.list[f].content.slice(13, 37) : (result.data.list[f].content.length >= 12 ? result.data.list[f].content.slice(13) : '')) + '</span>...<span style="color:#990000;">>>></span></p></div></div></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+result.data.list[f].author+'</p></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+result.data.list[f].click+'</p></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+result.data.list[f].createTime+'</p></div></div>');
                            }
                            $("#seventh>div").eq(i).children(".row").each(function(index,value){
                                $(value).on("click",function(){
                                    var cid=hex_sha1(data.data.list[index].id+'yichuangspace');
                                    $.post("/fuyang_backend/bbs/updateClick",{
                                        id:data.data.list[index].id,
                                        keyParams:cid
                                    },function(result){
                                        //console.log(result);
                                    });
                                });
                            });
                        });
                    }
                });
                $("#seventh>div").eq(i).empty();
                for(var f=0;f<result.data.list.length;f++){
                    $("#seventh>div").eq(i).append('<div class="row"><div class="dv1 col-xs-9 col-sm-10 col-md-6 col-lg-6"><div class="media"><a class="pull-left"><img class="media-object" src="'+result.data.list[f].photo+'" alt="丢失图片"></a><div class="media-body"><h3 class="media-heading">' + result.data.list[f].title + '</h3><p>' + (result.data.list[f].content >= 12 ? result.data.list[f].content.slice(0, 13) : result.data.list[f].content) + '<span class="sp">' + (result.data.list[f].content >= 36 ? result.data.list[f].content.slice(13, 37) : (result.data.list[f].content.length >= 12 ? result.data.list[f].content.slice(13) : '')) + '</span>...<span style="color:#990000;">>>></span></p></div></div></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+result.data.list[f].author+'</p></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+result.data.list[f].click+'</p></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+result.data.list[f].createTime+'</p></div></div>');
                }
                $("#seventh>div").eq(i).children(".row").each(function(index,value){
                    $(value).on("click",function(){
                        var cid=hex_sha1(result.data.list[index].id+'yichuangspace');
                        $.post("/fuyang_backend/bbs/updateClick",{
                            id:result.data.list[index].id,
                            keyParams:cid
                        },function(data){
                            //console.log(data);
                        });
                    });
                });
            });//----
        });
    });
//******************点击搜索标题信息对应的样式******************
    $("#fifbtn").click(function(){
        var fifValue=$("#fifinp").val();
        if(!fifValue){
            //alert('请输入搜索内容!!!');
        }else{
            $("#fifinp").val('');
            var keyP=hex_sha1(fifValue+'yichuangspace');
            $.post("/fuyang_backend/bbs/search",{
                pageNo:1,
                pageSize:6,
                title:fifValue,
                keyParams:keyP
            },function(result){
                //console.log(result.data.list.length);
                if(result.data.list.length==0){
                    //alert('没找到输入内容!!!');
                    $("#fifinp").val('');
                }else{
                    $("#page").Page({
                        totalPages:Math.ceil(result.data.total/6),//分页总数
                        liNums: 5,//分页的数字按钮数(建议取奇数)
                        activeClass: 'activP', //active 类样式定义
                        callBack : function(page){
                           // console.log(page);
                            $.post("/fuyang_backend/bbs/search",{
                                pageSize:6,
                                pageNo:page,
                                title:fifValue,
                                keyParams:keyP
                            },function(data){
                                //console.log(data);
                                $("#student").empty();
                                for(var i =0;i<data.data.list.length;i++){
                                    $("#student").append('<div class="row"><div class="dv1 col-xs-9 col-sm-10 col-md-6 col-lg-6"><div class="media"><a class="pull-left"><img class="media-object" src="'+data.data.list[i].photo+'" alt="丢失图片"></a><div class="media-body"><h3 class="media-heading">' + data.data.list[i].title + '</h3><p>' + (data.data.list[i].content >= 12 ? data.data.list[i].content.slice(0, 13) : data.data.list[i].content) + '<span class="sp">' + (data.data.list[i].content >= 36 ? data.data.list[i].content.slice(13, 37) : (data.data.list[i].content.length >= 12 ? data.data.list[i].content.slice(13) : '')) + '</span>...<span style="color:#990000;">>>></span></p></div></div></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+data.data.list[i].author+'</p></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+data.data.list[i].click+'</p></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+data.data.list[i].createTime+'</p></div></div>');
                                }
                                $("#student .row").each(function(index,value){
                                    $(value).on("click",function(){
                                        var cid=hex_sha1(data.data.list[index].id+'yichuangspace');
                                        $.post("/fuyang_backend/bbs/updateClick",{
                                            id:data.data.list[index].id,
                                            keyParams:cid
                                        },function(result){
                                            //console.log(result);
                                        });
                                    });
                                });
                            });
                        }
                    });
                    $("#student").empty();
                    for(var i=0;i<result.data.list.length;i++){
                        $("#seventh").children("div").each(function(i,v){
                            $(v).hide();
                        });
                        $("#student").show();
                        $("#top_ul li").each(function(i,v){
                            $(v).css("backgroundColor","#eee");
                        });
                        $("#top_ul li:first").css("backgroundColor","#e84c3d");
                        $("#student").append('<div class="row"><div class="dv1 col-xs-9 col-sm-10 col-md-6 col-lg-6"><div class="media"><a class="pull-left"><img class="media-object" src="'+result.data.list[i].photo+'" alt="丢失图片"></a><div class="media-body"><h3 class="media-heading">' + result.data.list[i].title + '</h3><p>' + (result.data.list[i].content.length >= 12 ? result.data.list[i].content.slice(0, 13) : result.data.list[i].content) + '<span class="sp">' + (result.data.list[i].content.length >= 36 ? result.data.list[i].content.slice(13, 37) : (result.data.list[i].content.length >= 12 ? result.data.list[i].content.slice(13) : '')) + '</span>...<span style="color:#990000;">>>></span></p></div></div></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+result.data.list[i].author+'</p></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+result.data.list[i].click+'</p></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+result.data.list[i].createTime+'</p></div></div>');
                    };
                    $("#student .row").each(function(index,value){
                        $(value).on("click",function(){
                            var cid=hex_sha1(result.data.list[index].id+'yichuangspace');
                            $.post("/fuyang_backend/bbs/updateClick",{
                                id:result.data.list[index].id,
                                keyParams:cid
                            },function(data){
                               // console.log(data);
                            });
                        });
                    });
                };
            });
        };
    });
//****************点击提交图片************************
    var bool=false;
//    var options={
//    	url:"/fuyang_backend/bbs/postsPic?keyParams="+key1,
//    	type:"post",
//    	success:function(data){  //上传成功后调用的函数
//    		console.log(data);
//            bool=true;
//    	}
//    };
//    $("#luntan_form1").submit(function() {	  //封装的submit()方法
//    	$(this).ajaxSubmit(options); //将发送的请的地址和方式通过option方法传给$(this).ajaxSubmit(option);
//    	return false;
//    });
//    $("#luntan_upload").click(function(){
//        $("#luntan_form1").submit();
//    });
//    


    $("#luntan_upload").click(function(){	//绑定点击事件触发提交方法.
        $.ajaxFileUpload({
            url:'/fuyang_backend/bbs/registPic',
            secureuri:false,
            fileElementId:'luntan_file',
            dataType: 'json',
            success: function (data) {
                //console.log(data);
                //alert("成功");
                $("#postPic").val(data.data);
                //console.log($("#postPic").val());
                bool=true;
            }
        });
    });
//****************点击发布新贴************************
    $("#luntan_ann").click(function(){
        var selectValue=$("select option:selected").attr("value");

        //console.log(selectValue);
        var textValue=$("#luntan_inp").val();
        var textareaValue=$(".textarea").val();
        //console.log(textValue);
        //console.log(textareaValue);
//        $("select option:first").attr("selected","selected");
        $("#luntan_inp").val('');
        var pictues = $("#postPic").val();
        if(!selectValue || !textValue && !textareaValue && !bool){
            //alert('请正确填写信息并上传图片!!!');
        };

       // console.log($("#postPic").val());
        if(selectValue && textValue && textareaValue && bool){
            $.post("/fuyang_backend/bbs/savePost", {
                type: selectValue,
                title: textValue,
                //picture: arr[arr.length-1],
                content: textareaValue,
                picture:pictues,
//                keyParams: keyVT,
            },function (data) {
                //console.log(data);
                //alert('发帖成功!!!');
                $("select option:first").attr("selected","selected");
                $("#inp").val('');
                $("[class='luntan_file']").val("");
                $("textarea").val('');
            });
        };
    });
});
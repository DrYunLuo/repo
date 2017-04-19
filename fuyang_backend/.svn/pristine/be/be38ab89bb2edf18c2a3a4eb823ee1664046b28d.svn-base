/**
 * Created by Administrator on 2017/2/8.
 */
$(function(){
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


    function GetQueryString(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    }

    var obj = GetQueryString("id");

    //console.log(obj);


    //根据链接中的参数id 获取帖子内容
    var keyParams=hex_sha1(obj+'yichuangspace');
    $.post("/fuyang_backend/bbs/getPostById",{
        id:obj,
        keyParams:keyParams,
    }, function (data) {
        //console.log(data);
        $("#postContent").empty().append(' <h2>帖子内容</h2> <div> <p>&nbsp;&nbsp;&nbsp;&nbsp;'+data.data.content+'</p> </div><div class="share col-xs-12 col-sm-12 col-md-12 col-lg-12"> <a class="collect" href=""></a> <span class="collect_number"></span> <a class="discuss" style="margin-right:2px;" href=""></a><span class="discuss_number collect_number" style="margin-right:20px;"></span> <a class="priase" onclick="thumbs()"></a> <span class="priase_number">'+data.data.click+'</span> </div>');
    });
    
    $.get('/fuyang_backend/bbs/atomsTotal?postId='+obj+'&keyParams='+keyParams,function(data){
    	$(".discuss_number").text(data.data);
    });
//    根据帖子id获取帖子评论
    $.post("/fuyang_backend/bbs/postComments",{
        pageSize:6,
        pageNo:1,
        postId:obj,
        keyParams:keyParams,
    },function(data){
        //console.log(data);

        var str='';
        $.each(data.data.list,function(i,v){
            str +='<li> <p class="comment_person"> <span class="comment_people">'+ v.realname+'</span> <span class="comment_time">'+v.createTime+'</span> </p> <p class="comment_content">'+v.content+'</p> </li>';
        
        });
        $("#postPomment").empty().append(str);

        var total=Math.ceil(data.data.total/6);

        //评论分页  插件
        $("#pagination").Page({
            totalPages:total,
            liNums:5,
            callBack:function(page,size,count){
                $.post("/fuyang_backend/bbs/postComments",{
                    pageSize:6,
                    pageNo:page,
                    postId:obj,
                    keyParams:keyParams,
                },function(data){
                    //console.log(data);
                    var str='';
                    $.each(data.data.list, function (i,v) {
                    	 str +='<li> <p class="comment_person"> <span class="comment_people">'+ v.realname+'</span> <span class="comment_time">'+v.createTime+'</span> </p> <p class="comment_content">'+v.content+'</p> </li>';
                                             });
                    $("#postPomment").empty().append(str);
                });
            },
        });
    });
    $("#form2").on("click",function(){
    	var postComment = $("#postComment").val();
        var postParams = hex_sha1(postComment+'yichuangspace');
        $.post("/fuyang_backend/bbs/addAtoms",{
        	content:postComment,
        	keyParams:postParams,
        },function(data){
        	alert("评论成功");
        	$("#postComment").val('');
        });
    });
    
    function thumbs(){
    	var keyParams1=hex_sha1(obj+'yichuangspace');
    	$.get('/fuyang_backend/bbs/updateClick?id='+obj+'&keyParams='+keyParams1,function(data){
    		//console.log(data);
    		var text=parseInt($(".priase_number").text());
    		$(".priase_number").text(text+1);
    	});
    }
    
});

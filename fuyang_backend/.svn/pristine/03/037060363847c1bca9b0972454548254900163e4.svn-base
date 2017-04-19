//function luntan(){
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
//********************************定义的变量******************************
	//****************日期变量**************
	var month=new Date().getMonth();
	var date=new Date().getDate();
	var bool=true;
	var seventh;
	var pagesize;
	var page=1;
	var context='';

	var test1='1';
	var test2='2';
	var test3='3';
	var test4='4';
	var test5='5';
	var test6='6';
	var test7='7';
	var keyParams1 = hex_sha1(test1+'yichuangspace');
	var keyParams2 = hex_sha1(test2+'yichuangspace');
	var keyParams3 = hex_sha1(test3+'yichuangspace');
	var keyParams4 = hex_sha1(test4+'yichuangspace');
	var keyParams5 = hex_sha1(test5+'yichuangspace');
	var keyParams6 = hex_sha1(test6+'yichuangspace');
	var keyParams7 = hex_sha1(test7+'yichuangspace');
	//助学部分调接口
	$.post("/fuyang_backend/bbs/getPostList",{
		type:'1',
		keyParams:keyParams1
	},function(result){
		//console.log(result.data.list.length);
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
					//console.log(data);
				});
			});
		});
		page=1;
		paging();
		isPage();
		showPage();
		showPrev();
		showNext();
		//startShow();
	});
	//助残部分调接口
	$.post("/fuyang_backend/bbs/getPostList",{
		type:test2,
		keyParams:keyParams2
	},function(result){
		//console.log(result);
		$("#disabled").empty();
		for(var i =0;i<result.data.list.length;i++){
			$("#disabled").append('<div class="row"><div class="dv1 col-xs-9 col-sm-10 col-md-6 col-lg-6"><div class="media"><a class="pull-left"><img class="media-object" src="'+result.data.list[i].photo+'" alt="丢失图片"></a><div class="media-body"><h3 class="media-heading">' + result.data.list[i].title + '</h3><p>' + (result.data.list[i].content >= 12 ? result.data.list[i].content.slice(0, 13) : result.data.list[i].content) + '<span class="sp">' + (result.data.list[i].content >= 36 ? result.data.list[i].content.slice(13, 37) : (result.data.list[i].content.length >= 12 ? result.data.list[i].content.slice(13) : '')) + '</span>...<span style="color:#990000;">>>></span></p></div></div></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+result.data.list[i].author+'</p></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+result.data.list[i].click+'</p></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+result.data.list[i].createTime+'</p></div></div>');
		}
		$("#disabled .row").each(function(index,value){
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
		page=1;
		paging();
		isPage();
		showPage();
		showPrev();
		showNext();
		startShow();
	});
	//敬老部分调接口
	$.post("/fuyang_backend/bbs/getPostList",{
		type:test3,
		keyParams:keyParams3
	},function(result){
		//console.log(result);
		$("#old").empty();
		for(var i =0;i<result.data.list.length;i++){
			$("#old").append('<div class="row"><div class="dv1 col-xs-9 col-sm-10 col-md-6 col-lg-6"><div class="media"><a class="pull-left"><img class="media-object" src="'+result.data.list[i].photo+'" alt="丢失图片"></a><div class="media-body"><h3 class="media-heading">' + result.data.list[i].title + '</h3><p>' + (result.data.list[i].content >= 12 ? result.data.list[i].content.slice(0, 13) : result.data.list[i].content) + '<span class="sp">' + (result.data.list[i].content >= 36 ? result.data.list[i].content.slice(13, 37) : (result.data.list[i].content.length >= 12 ? result.data.list[i].content.slice(13) : '')) + '</span>...<span style="color:#990000;">>>></span></p></div></div></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+result.data.list[i].author+'</p></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+result.data.list[i].click+'</p></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+result.data.list[i].createTime+'</p></div></div>');
		}
		$("#old .row").each(function(index,value){
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
		page=1;
		paging();
		isPage();
		showPage();
		showPrev();
		showNext();
		startShow();
	});
//扶贫部分调接口
	$.post("/fuyang_backend/bbs/getPostList",{
		type:test4,
		keyParams:keyParams4
	},function(result){
		//console.log(result);
		$("#pover").empty();
		for(var i =0;i<result.data.list.length;i++){
			$("#pover").append('<div class="row"><div class="dv1 col-xs-9 col-sm-10 col-md-6 col-lg-6"><div class="media"><a class="pull-left"><img class="media-object" src="'+result.data.list[i].photo+'" alt="丢失图片"></a><div class="media-body"><h3 class="media-heading">' + result.data.list[i].title + '</h3><p>' + (result.data.list[i].content >= 12 ? result.data.list[i].content.slice(0, 13) : result.data.list[i].content) + '<span class="sp">' + (result.data.list[i].content >= 36 ? result.data.list[i].content.slice(13, 37) : (result.data.list[i].content.length >= 12 ? result.data.list[i].content.slice(13) : '')) + '</span>...<span style="color:#990000;">>>></span></p></div></div></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+result.data.list[i].author+'</p></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+result.data.list[i].click+'</p></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+result.data.list[i].createTime+'</p></div></div>');
		}
		$("#pover .row").each(function(index,value){
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
		page=1;
		paging();
		isPage();
		showPage();
		showPrev();
		showNext();
		startShow();
	});
//救援部分调接口
	$.post("/fuyang_backend/bbs/getPostList",{
		type:test5,
		keyParams:keyParams5,
	},function(result){
		//console.log(result);
		$("#help").empty();
		for(var i =0;i<result.data.list.length;i++){
			$("#help").append('<div class="row"><div class="dv1 col-xs-9 col-sm-10 col-md-6 col-lg-6"><div class="media"><a class="pull-left"><img class="media-object" src="'+result.data.list[i].photo+'" alt="丢失图片"></a><div class="media-body"><h3 class="media-heading">' + result.data.list[i].title + '</h3><p>' + (result.data.list[i].content >= 12 ? result.data.list[i].content.slice(0, 13) : result.data.list[i].content) + '<span class="sp">' + (result.data.list[i].content >= 36 ? result.data.list[i].content.slice(13, 37) : (result.data.list[i].content.length >= 12 ? result.data.list[i].content.slice(13) : '')) + '</span>...<span style="color:#990000;">>>></span></p></div></div></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+result.data.list[i].author+'</p></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+result.data.list[i].click+'</p></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+result.data.list[i].createTime+'</p></div></div>');
		};
		$("#help .row").each(function(index,value){
			$(value).on("click",function(){
				var cid=hex_sha1(result.data.list[index].id+'yichuangspace');
				$.post("/fuyang_backend/bbs/updateClick",{
					id:result.data.list[index].id,
					keyParams:cid,
				},function(data){
					//console.log(data);
				});
			});
		});
		page=1;
		paging();
		isPage();
		showPage();
		showPrev();
		showNext();
		startShow();
	});
//环保部分调接口
	$.post("/fuyang_backend/bbs/getPostList",{
		type:test6,
		keyParams:keyParams6,
	},function(result){
		//console.log(result);
		$("#protect").empty();
		for(var i =0;i<result.data.list.length;i++){
			$("#protect").append('<div class="row"><div class="dv1 col-xs-9 col-sm-10 col-md-6 col-lg-6"><div class="media"><a class="pull-left"><img class="media-object" src="'+result.data.list[i].photo+'" alt="丢失图片"></a><div class="media-body"><h3 class="media-heading">' + result.data.list[i].title + '</h3><p>' + (result.data.list[i].content >= 12 ? result.data.list[i].content.slice(0, 13) : result.data.list[i].content) + '<span class="sp">' + (result.data.list[i].content >= 36 ? result.data.list[i].content.slice(13, 37) : (result.data.list[i].content.length >= 12 ? result.data.list[i].content.slice(13) : '')) + '</span>...<span style="color:#990000;">>>></span></p></div></div></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+result.data.list[i].author+'</p></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+result.data.list[i].click+'</p></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+result.data.list[i].createTime+'</p></div></div>');
		};
		page=1;
		paging();
		isPage();
		showPage();
		showPrev();
		showNext();
		startShow();
		$("#protect .row").each(function(index,value){
			$(value).on("click",function(){
				var cid=hex_sha1(result.data.list[index].id+'yichuangspace');
				$.post("/fuyang_backend/bbs/updateClick",{
					id:result.data.list[index].id,
					keyParams:cid,
				},function(data){
					//console.log(data);
				});
			});
		});

	});
//其他部分调接口
	$.post("/fuyang_backend/bbs/getPostList",{
		type:test7,
		keyParams:keyParams7,
	},function(result){
		//console.log(result);
		$("#other").empty();
		for(var i =0;i<result.data.list.length;i++){
			$("#other").append('<div class="row"><div class="dv1 col-xs-9 col-sm-10 col-md-6 col-lg-6"><div class="media"><a class="pull-left"><img class="media-object" src="'+result.data.list[i].photo+'" alt="丢失图片"></a><div class="media-body"><h3 class="media-heading">' + result.data.list[i].title + '</h3><p>' + (result.data.list[i].content >= 12 ? result.data.list[i].content.slice(0, 13) : result.data.list[i].content) + '<span class="sp">' + (result.data.list[i].content >= 36 ? result.data.list[i].content.slice(13, 37) : (result.data.list[i].content.length >= 12 ? result.data.list[i].content.slice(13) : '')) + '</span>...<span style="color:#990000;">>>></span></p></div></div></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+result.data.list[i].author+'</p></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+result.data.list[i].click+'</p></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+result.data.list[i].createTime+'</p></div></div>');
		};
		$("#other .row").each(function(index,value){
			$(value).on("click",function(){
				var cid=hex_sha1(result.data.list[index].id+'yichuangspace');
				$.post("/fuyang_backend/bbs/updateClick",{
					id:result.data.list[index].id,
					keyParams:cid,
				},function(data){
					//console.log(data);
				});
			});
		});
		page=1;
		paging();
		isPage();
		showPage();
		showPrev();
		showNext();
		startShow();
	});

//******************点击搜索标题信息对应的样式******************
	$("#fifbtn").click(function(){
		var fifValue=$("#fifinp").val();
		if(!fifValue){
			//alert('请输入搜索内容!!!');
		}else{
			var keyP=hex_sha1(fifValue+'yichuangspace');
			$.post("/fuyang_backend/bbs/search",{
				title:fifValue,
				keyParams:keyP,
			},function(result){
				//console.log(result.data.list.length);
				if(result.data.list.length==0){
					//alert('没找到输入内容!!!');
					$("#fifinp").val('');
				}else{
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
					page=1;
					paging();
					isPage();
					showPage();
					showPrev();
					showNext();
					startShow();
				};
			});
		};

	});
//******************点击助学那一行响应对应的样式******************
	$("#seventh").children("div").each(function(i,v){
		$(v).hide();
	});
	$("#student").show();
	function top(){
		$("#top_ul li").each(function(i,v){
			if(i==0){
				$(v).css("background-color","#e84c3d");
			}else{
				$(v).css("background-color","#eee");
			}
		});
		$("#top_ul li").each(function(i,v){
			$(v).on("click",function(){
				switch(i){
					case 0:
						$("#seventh").children("div").each(function(i,v){
							$(v).hide();
						});
						$("#student").show();
						$.post("/fuyang_backend/bbs/getPostList",{
							type:test1,
							keyParams:keyParams1
						},function(result){
							//console.log(result);
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
										//console.log(data);
									});
								});
							});
							page=1;
							paging();
							isPage();
							showPage();
							showPrev();
							showNext();
							startShow();
						});
						break;
					case 1:
						$("#seventh").children("div").each(function(i,v){
							$(v).hide();
						});
						$("#disabled").show();
						$.post("/fuyang_backend/bbs/getPostList",{
							type:test2,
							keyParams:keyParams2
						},function(result){
							//console.log(result);
							$("#disabled").empty();
							for(var i =0;i<result.data.list.length;i++){
								$("#disabled").append('<div class="row"><div class="dv1 col-xs-9 col-sm-10 col-md-6 col-lg-6"><div class="media"><a class="pull-left"><img class="media-object" src="'+result.data.list[i].photo+'" alt="丢失图片"></a><div class="media-body"><h3 class="media-heading">' + result.data.list[i].title + '</h3><p>' + (result.data.list[i].content >= 12 ? result.data.list[i].content.slice(0, 13) : result.data.list[i].content) + '<span class="sp">' + (result.data.list[i].content >= 36 ? result.data.list[i].content.slice(13, 37) : (result.data.list[i].content.length >= 12 ? result.data.list[i].content.slice(13) : '')) + '</span>...<span style="color:#990000;">>>></span></p></div></div></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+result.data.list[i].author+'</p></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+result.data.list[i].click+'</p></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+result.data.list[i].createTime+'</p></div></div>');
							};
							$("#disabled .row").each(function(index,value){
								$(value).on("click",function(){
									var cid=hex_sha1(result.data.list[index].id+'yichuangspace');
									$.post("/fuyang_backend/bbs/updateClick",{
										id:result.data.list[index].id,
										keyParams:cid,
									},function(data){
										//console.log(data);
									});
								});
							});
							page=1;
							paging();
							isPage();
							showPage();
							showPrev();
							showNext();
							startShow();
						});
						break;
					case 2:
						$("#seventh").children("div").each(function(i,v){
							$(v).hide();
						});
						$("#old").show();
						$.post("/fuyang_backend/bbs/getPostList",{
							type:test3,
							keyParams:keyParams3,
						},function(result){
							//console.log(result);
							$("#old").empty();
							for(var i =0;i<result.data.list.length;i++){
								$("#old").append('<div class="row"><div class="dv1 col-xs-9 col-sm-10 col-md-6 col-lg-6"><div class="media"><a class="pull-left"><img class="media-object" src="'+result.data.list[i].photo+'" alt="丢失图片"></a><div class="media-body"><h3 class="media-heading">' + result.data.list[i].title + '</h3><p>' + (result.data.list[i].content >= 12 ? result.data.list[i].content.slice(0, 13) : result.data.list[i].content) + '<span class="sp">' + (result.data.list[i].content >= 36 ? result.data.list[i].content.slice(13, 37) : (result.data.list[i].content.length >= 12 ? result.data.list[i].content.slice(13) : '')) + '</span>...<span style="color:#990000;">>>></span></p></div></div></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+result.data.list[i].author+'</p></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+result.data.list[i].click+'</p></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+result.data.list[i].createTime+'</p></div></div>');
							};
							$("#old .row").each(function(index,value){
								$(value).on("click",function(){
									var cid=hex_sha1(result.data.list[index].id+'yichuangspace');
									$.post("/fuyang_backend/bbs/updateClick",{
										id:result.data.list[index].id,
										keyParams:cid,
									},function(data){
										//console.log(data);
									});
								});
							});
							page=1;
							paging();
							isPage();
							showPage();
							showPrev();
							showNext();
							startShow();
						});
						break;
					case 3:
						$("#seventh").children("div").each(function(i,v){
							$(v).hide();
						});
						$("#pover").show();
						$.post("/fuyang_backend/bbs/getPostList",{
							type:test4,
							keyParams:keyParams4,
						},function(result){
							//console.log(result);
							$("#pover").empty();
							for(var i =0;i<result.data.list.length;i++){
								$("#pover").append('<div class="row"><div class="dv1 col-xs-9 col-sm-10 col-md-6 col-lg-6"><div class="media"><a class="pull-left"><img class="media-object" src="'+result.data.list[i].photo+'" alt="丢失图片"></a><div class="media-body"><h3 class="media-heading">' + result.data.list[i].title + '</h3><p>' + (result.data.list[i].content >= 12 ? result.data.list[i].content.slice(0, 13) : result.data.list[i].content) + '<span class="sp">' + (result.data.list[i].content >= 36 ? result.data.list[i].content.slice(13, 37) : (result.data.list[i].content.length >= 12 ? result.data.list[i].content.slice(13) : '')) + '</span>...<span style="color:#990000;">>>></span></p></div></div></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+result.data.list[i].author+'</p></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+result.data.list[i].click+'</p></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+result.data.list[i].createTime+'</p></div></div>');
							};
							$("#pover .row").each(function(index,value){
								$(value).on("click",function(){
									var cid=hex_sha1(result.data.list[index].id+'yichuangspace');
									$.post("/fuyang_backend/bbs/updateClick",{
										id:result.data.list[index].id,
										keyParams:cid,
									},function(data){
										//console.log(data);
									});
								});
							});
							page=1;
							paging();
							isPage();
							showPage();
							showPrev();
							showNext();
							startShow();
						});
						break;
					case 4:
						$("#seventh").children("div").each(function(i,v){
							$(v).hide();
						});
						$("#help").show();
						$.post("/fuyang_backend/bbs/getPostList",{
							type:test5,
							keyParams:keyParams5,
						},function(result){
							//console.log(result);
							$("#help").empty();
							for(var i =0;i<result.data.list.length;i++){
								$("#help").append('<div class="row"><div class="dv1 col-xs-9 col-sm-10 col-md-6 col-lg-6"><div class="media"><a class="pull-left"><img class="media-object" src="'+result.data.list[i].photo+'" alt="丢失图片"></a><div class="media-body"><h3 class="media-heading">' + result.data.list[i].title + '</h3><p>' + (result.data.list[i].content >= 12 ? result.data.list[i].content.slice(0, 13) : result.data.list[i].content) + '<span class="sp">' + (result.data.list[i].content >= 36 ? result.data.list[i].content.slice(13, 37) : (result.data.list[i].content.length >= 12 ? result.data.list[i].content.slice(13) : '')) + '</span>...<span style="color:#990000;">>>></span></p></div></div></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+result.data.list[i].author+'</p></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+result.data.list[i].click+'</p></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+result.data.list[i].createTime+'</p></div></div>');
							};
							$("#help .row").each(function(index,value){
								$(value).on("click",function(){
									var cid=hex_sha1(result.data.list[index].id+'yichuangspace');
									$.post("/fuyang_backend/bbs/updateClick",{
										id:result.data.list[index].id,
										keyParams:cid,
									},function(data){
										//console.log(data);
									});
								});
							});
							page=1;
							paging();
							isPage();
							showPage();
							showPrev();
							showNext();
							startShow();
						});
						break;
					case 5:
						$("#seventh").children("div").each(function(i,v){
							$(v).hide();
						});
						$("#protect").show();
						$.post("/fuyang_backend/bbs/getPostList",{
							type:test6,
							keyParams:keyParams6,
						},function(result){
							//console.log(result);
							$("#protect").empty();
							for(var i =0;i<result.data.list.length;i++){
								$("#protect").append('<div class="row"><div class="dv1 col-xs-9 col-sm-10 col-md-6 col-lg-6"><div class="media"><a class="pull-left"><img class="media-object" src="'+result.data.list[i].photo+'" alt="丢失图片"></a><div class="media-body"><h3 class="media-heading">' + result.data.list[i].title + '</h3><p>' + (result.data.list[i].content >= 12 ? result.data.list[i].content.slice(0, 13) : result.data.list[i].content) + '<span class="sp">' + (result.data.list[i].content >= 36 ? result.data.list[i].content.slice(13, 37) : (result.data.list[i].content.length >= 12 ? result.data.list[i].content.slice(13) : '')) + '</span>...<span style="color:#990000;">>>></span></p></div></div></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+result.data.list[i].author+'</p></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+result.data.list[i].click+'</p></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+result.data.list[i].createTime+'</p></div></div>');
							};
							page=1;
							paging();
							isPage();
							showPage();
							showPrev();
							showNext();
							startShow();
							$("#protect .row").each(function(index,value){
								$(value).on("click",function(){
									var cid=hex_sha1(result.data.list[index].id+'yichuangspace');
									$.post("/fuyang_backend/bbs/updateClick",{
										id:result.data.list[index].id,
										keyParams:cid,
									},function(data){
										//console.log(data);
									});
								});
							});

						});
						break;
					case 6:
						$("#seventh").children("div").each(function(i,v){
							$(v).hide();
						});
						$("#other").show();
						$.post("/fuyang_backend/bbs/getPostList",{
							type:test7,
							keyParams:keyParams7,
						},function(result){
							//console.log(result);
							$("#other").empty();
							for(var i =0;i<result.data.list.length;i++){
								$("#other").append('<div class="row"><div class="dv1 col-xs-9 col-sm-10 col-md-6 col-lg-6"><div class="media"><a class="pull-left"><img class="media-object" src="'+result.data.list[i].photo+'" alt="丢失图片"></a><div class="media-body"><h3 class="media-heading">' + result.data.list[i].title + '</h3><p>' + (result.data.list[i].content >= 12 ? result.data.list[i].content.slice(0, 13) : result.data.list[i].content) + '<span class="sp">' + (result.data.list[i].content >= 36 ? result.data.list[i].content.slice(13, 37) : (result.data.list[i].content.length >= 12 ? result.data.list[i].content.slice(13) : '')) + '</span>...<span style="color:#990000;">>>></span></p></div></div></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+result.data.list[i].author+'</p></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+result.data.list[i].click+'</p></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+result.data.list[i].createTime+'</p></div></div>');
							};
							$("#other .row").each(function(index,value){
								$(value).on("click",function(){
									var cid=hex_sha1(result.data.list[index].id+'yichuangspace');
									$.post("/fuyang_backend/bbs/updateClick",{
										id:result.data.list[index].id,
										keyParams:cid,
									},function(data){
										//console.log(data);
									});
								});
							});
							page=1;
							paging();
							isPage();
							showPage();
							showPrev();
							showNext();
							startShow();
						});
						break;
				}
				$("#top_ul li").each(function(index,value){
					$(value).css("background-color","#eee");
				});
				$(v).css("background-color","#e84c3d");
			});
		});
	};

//******************点击发布新贴的js代码******************
	function post(){
		//var selectValue=$("select option:selected").attr("value");
		//var textValue=$("#inp").val();
		//var fileValue=$("[class='luntan_file']").val();
		//var textareaValue=$("textarea").val();

		//var keyVT=hex_sha1('yichuangspace');
		//var options={
		//	url:"/fuyang_backend/bbs/savePosts",
		//	type:"post",
		//	success:function(data){  //上传成功后调用的函数
		//		console.log(data);
		//		alert('提交成功！！！');
		//	},
		//};
		//$("#form2").submit(function() {	  //封装的submit()方法
		//	$(this).ajaxSubmit(options); //将发送的请的地址和方式通过option方法传给$(this).ajaxSubmit(option);
		//	alert(111);
		//	return false;
		//});
		//var options={
		//	url:"/fuyang_backend/bbs/savePosts?keyParams="+key1,
		//	type:"post",
		//	success:function(data){  //上传成功后调用的函数
		//		console.log(data);
		//	}
		//};
		//$("#file_btn").submit(function() {	  //封装的submit()方法
		//	$(this).ajaxSubmit(options); //将发送的请的地址和方式通过option方法传给$(this).ajaxSubmit(option);
		//	return false;
		//});
		//$("#file_btn").click(function(){
		//	$("#file_btn").submit();
		//	alert(11);
		//});
		//	var selectValue = $("select option:selected").attr("value");
		//	var textValue = $("#inp").val();
		//	var fileValue = $("[class='luntan_file']").val();
		//	//alert(arr[arr.length-1]);
		//	var textareaValue = $("textarea").val();
		//	if (!textValue || !textareaValue || !fileValue) {
		//		bool = true;
		//		alert('请选择内容!!!');
		//	};
		//	if (!selectValue && textValue && textareaValue && fileValue) {
		//		bool = true;
		//		alert('请选择主题分类!!!');
		//	};
		//	if (selectValue && textValue && textareaValue && fileValue) {
		//		bool = false;
		//		var keyVT = hex_sha1(selectValue + textValue + fileValue + textareaValue + 'yichuangspace');
		//		$("#form2").submit();
		//		//$.post("/fuyang_backend/bbs/savePosts", {
		//		//	type: selectValue,
		//		//	title: textValue,
		//		//	//picture: arr[arr.length-1],
		//		//	content: textareaValue,
		//		//	keyParams: keyVT,
		//		//}, function (data) {
		//		//	console.log(data);
		//		//	alert('发帖成功!!!');
		//		//	$("select option:first").attr("selected","selected");
		//		//	$("#inp").val('');
		//		//	$("[class='luntan_file']").val("");
		//		//	$("textarea").val('');
		//		//});
		//	};
		//});
		//switch(selectValue){
		//case "1":
		//	var keyVT=hex_sha1(selectValue+textValue+fileValue+textareaValue+'yichuangspace');
		//	$.post("/fuyang_backend/bbs/savePosts",{
		//		type:selectValue,
		//		title:textValue,
		//		picture:fileValue,
		//		content:textareaValue,
		//		keyParams:keyVT,
		//	},function(data) {
		//		console.log(data);
		//		alert('发帖成功!!!');
		//		window.location.reload();
//						$("#student").append($("<div class='row'><div class='dv1 col-xs-9 col-sm-10 col-md-6 col-lg-6'><div class='media'><a class='pull-left' href='#'><img class='media-object' src=''></a><div class='media-body'><h3 class='media-heading'>" + textValue + "</h3><p>" + (textareaValue.length >= 12 ? textareaValue.slice(0, 13) : textareaValue) + "<span class='sp'>" + (textareaValue.length >= 36 ? textareaValue.slice(13, 37) : (textareaValue.length >= 12 ? textareaValue.slice(13) : '')) + "</span>...<span style='color:#990000;'>>>></span></p></div></div></div><div class='dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2'><p class='red text-center'>小太阳</p></div><div class='dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2'><p class='red text-center'>11344</p></div><div class='dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2'><p class='red text-center'>" + (month + 1) + "-" + date + "</p></div></div>"));
//						$("#top_ul>li").each(function (i, v) {
//							$(v).css("backgroundColor", "#eee");
//						});
//						$("#top_ul>li").eq(0).css("backgroundColor", "#e84c3d");
//						$("#seventh>div").each(function (i, v) {
//							$(v).hide();
//						});
//						$("#student").show();
//						$("#seventh>div").each(function (i, v) {
//							if ($(v).css("display") == "block") {
//								seventh = $(v).children(".row").size();
//								pagesize = Math.ceil(seventh / 6);
//								if (pagesize == 0) {
//									pagesize = 1;
//								}
//								;
//							}
//						});
//						page = pagesize;
//						paging();
//						if (pagesize >= 5) {
//							var page_num = pagesize - 4;
//							$("#page_ul li").each(function (i, v) {
//								if (i >= 1 && i <= 5) {
//									$(v).children("a").text(page_num++);
//								}
//							});
//						} else {
//							var page_num = 1;
//							$("#page_ul li").each(function (i, v) {
//								if (i >= 1 && i <= pagesize) {
//									$(v).children("a").text(page_num++);
//								}
//							});
//						}
//						;
//						$("#seventh>div").each(function (i, v) {
//							if ($(v).css("display") == "block") {
//								$(v).children(".row").each(function (n, va) {
//									if (n >= (pagesize - 1) * 6 && n < pagesize * 6) {
//										$(va).show();
//									} else {
//										$(va).hide();
//									}
//								});
//							} else {
//								$(v).hide();
//							}
//						});
//						showPage();
//						showPrev();
//						showNext();
////                  startShow();
//						isPage();
//						if (!bool) {
//							bool = '';
//							$("select option").each(function (i, v) {
//								$(v).removeAttr("selected");
//							});
//							$("select option:first").attr("selected", "selected");
//							$("#inp").val('');
//							$("[class='luntan_file']").val('');
//							$("textarea").val('');
//						};

//					});
//                break;
//                case "2":
//                    $("#disabled").append("<div class='row'><div class='dv1 col-xs-9 col-sm-10 col-md-6 col-lg-6'><div class='media'><a class='pull-left' href='#'><img class='media-object' src='"+fileValue+"'></a><div class='media-body'><h3 class='media-heading'>"+textValue+"</h3><p>"+(textareaValue.slice(0,13))+"<span class='sp'>"+(textareaValue.slice(13,37))+"</span>...<span style='color:#990000;'>>>></span></p></div></div></div><div class='dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2'><p class='red text-center'>小太阳</p></div><div class='dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2'><p class='red text-center'>11344</p></div><div class='dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2'><p class='red text-center'>"+(month+1)+"-"+date+"</p></div></div>");
//					$("#top_ul>li").each(function(i,v){
//						$(v).css("backgroundColor","#eee");
//					});
//					$("#top_ul>li").eq(1).css("backgroundColor","#e84c3d");
//					$("#seventh>div").each(function(i,v){
//						$(v).hide();
//					});
//					$("#disabled").show();
//                    $("#seventh>div").each(function(i,v){
//				        if($(v).css("display")=="block"){
//				            seventh=$(v).children(".row").size();
//				            pagesize=Math.ceil(seventh/6);
//				            if(pagesize==0){
//				                pagesize=1;
//				            };
//				        }
//				    });
//                    page=pagesize;
//                    paging();
//					if(pagesize>=5){
//				    	var page_num=pagesize-4;
//				    	$("#page_ul li").each(function(i,v){
//	                        if(i>=1 && i<=5){
//	                            $(v).children("a").text(page_num++);
//	                        }
//	                    });
//				    }else{
//				    	var page_num=1;
//				    	$("#page_ul li").each(function(i,v){
//	                        if(i>=1 && i<=pagesize){
//	                            $(v).children("a").text(page_num++);
//	                        }
//	                    });
//				    };
//				    $("#seventh>div").each(function(i,v){
//	                    if($(v).css("display")=="block"){
//	                        $(v).children(".row").each(function(n,va){
//	                            if(n>=(pagesize-1)*6 && n<pagesize*6){
//	                                $(va).show();
//	                            }else{
//	                                $(va).hide();
//	                            }
//	                        });
//	                    }else{
//	                        $(v).hide();
//	                    }
//	                });
//                    showPage();
//					showPrev();
//                    showNext();
////                  startShow();
//                    isPage();
//                      if(!bool){
//                          bool='';
//                          $("select option").each(function(i,v){
//                              $(v).removeAttr("selected");
//                          });
//                          $("select option:first").attr("selected","selected");
//                          $("#inp").val('');
//						  $("[class='luntan_file']").val('');
//                          $("textarea").val('');
//                      };
//                    break;
//                case "3":
//                    $("#old").append("<div class='row'><div class='dv1 col-xs-9 col-sm-10 col-md-6 col-lg-6'><div class='media'><a class='pull-left' href='#'><img class='media-object' src='"+fileValue+"'></a><div class='media-body'><h3 class='media-heading'>"+textValue+"</h3><p>"+(textareaValue.slice(0,13))+"<span class='sp'>"+(textareaValue.slice(13,37))+"</span>...<span style='color:#990000;'>>>></span></p></div></div></div><div class='dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2'><p class='red text-center'>小太阳</p></div><div class='dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2'><p class='red text-center'>11344</p></div><div class='dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2'><p class='red text-center'>"+(month+1)+"-"+date+"</p></div></div>");
//                    $("#top_ul>li").each(function(i,v){
//                   		$(v).css("backgroundColor","#eee");
//                   	});
//                   	$("#top_ul>li").eq(2).css("backgroundColor","#e84c3d");
//                   	$("#seventh>div").each(function(i,v){
//                   		$(v).hide();
//                   	});
//                   	$("#old").show();
//                    $("#seventh>div").each(function(i,v){
//				        if($(v).css("display")=="block"){
//				            seventh=$(v).children(".row").size();
//				            pagesize=Math.ceil(seventh/6);
//				            if(pagesize==0){
//				                pagesize=1;
//				            };
//				        }
//				    });
//                    page=pagesize;
//                    paging();
//					if(pagesize>=5){
//				    	var page_num=pagesize-4;
//				    	$("#page_ul li").each(function(i,v){
//	                        if(i>=1 && i<=5){
//	                            $(v).children("a").text(page_num++);
//	                        }
//	                    });
//				    }else{
//				    	var page_num=1;
//				    	$("#page_ul li").each(function(i,v){
//	                        if(i>=1 && i<=pagesize){
//	                            $(v).children("a").text(page_num++);
//	                        }
//	                    });
//				    };
//				    $("#seventh>div").each(function(i,v){
//	                    if($(v).css("display")=="block"){
//	                        $(v).children(".row").each(function(n,va){
//	                            if(n>=(pagesize-1)*6 && n<pagesize*6){
//	                                $(va).show();
//	                            }else{
//	                                $(va).hide();
//	                            }
//	                        });
//	                    }else{
//	                        $(v).hide();
//	                    }
//	                });
//                    showPage();
//					showPrev();
//                    showNext();
////                  startShow();
//                    isPage();
//                      if(!bool){
//                          bool='';
//                          $("select option").each(function(i,v){
//                              $(v).removeAttr("selected");
//                          });
//                          $("select option:first").attr("selected","selected");
//                          $("#inp").val('');
//						  $("[class='luntan_file']").val('');
//                          $("textarea").val('');
//                      };
//                    break;
//                case "4":
//                    $("#pover").append("<div class='row'><div class='dv1 col-xs-9 col-sm-10 col-md-6 col-lg-6'><div class='media'><a class='pull-left' href='#'><img class='media-object' src='"+fileValue+"'></a><div class='media-body'><h3 class='media-heading'>"+textValue+"</h3><p>"+(textareaValue.slice(0,13))+"<span class='sp'>"+(textareaValue.slice(13,37))+"</span>...<span style='color:#990000;'>>>></span></p></div></div></div><div class='dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2'><p class='red text-center'>小太阳</p></div><div class='dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2'><p class='red text-center'>11344</p></div><div class='dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2'><p class='red text-center'>"+(month+1)+"-"+date+"</p></div></div>");
//                    $("#top_ul>li").each(function(i,v){
//                   		$(v).css("backgroundColor","#eee");
//                   	});
//                   	$("#top_ul>li").eq(3).css("backgroundColor","#e84c3d");
//                   	$("#seventh>div").each(function(i,v){
//                   		$(v).hide();
//                   	});
//                   	$("#pover").show();
//                    $("#seventh>div").each(function(i,v){
//				        if($(v).css("display")=="block"){
//				            seventh=$(v).children(".row").size();
//				            pagesize=Math.ceil(seventh/6);
//				            if(pagesize==0){
//				                pagesize=1;
//				            };
//				        }
//				    });
//                    page=pagesize;
//                    paging();
//					if(pagesize>=5){
//				    	var page_num=pagesize-4;
//				    	$("#page_ul li").each(function(i,v){
//	                        if(i>=1 && i<=5){
//	                            $(v).children("a").text(page_num++);
//	                        }
//	                    });
//				    }else{
//				    	var page_num=1;
//				    	$("#page_ul li").each(function(i,v){
//	                        if(i>=1 && i<=pagesize){
//	                            $(v).children("a").text(page_num++);
//	                        }
//	                    });
//				    };
//				    $("#seventh>div").each(function(i,v){
//	                    if($(v).css("display")=="block"){
//	                        $(v).children(".row").each(function(n,va){
//	                            if(n>=(pagesize-1)*6 && n<pagesize*6){
//	                                $(va).show();
//	                            }else{
//	                                $(va).hide();
//	                            }
//	                        });
//	                    }else{
//	                        $(v).hide();
//	                    }
//	                });
//                    showPage();
//					showPrev();
//                    showNext();
////                  startShow();
//                    isPage();
//                      if(!bool){
//                          bool='';
//                          $("select option").each(function(i,v){
//                              $(v).removeAttr("selected");
//                          });
//                          $("select option:first").attr("selected","selected");
//                          $("#inp").val('');
//						  $("[class='luntan_file']").val('');
//                          $("textarea").val('');
//                      };
//                    break;
//                case "5":
//                    $("#help").append("<div class='row'><div class='dv1 col-xs-9 col-sm-10 col-md-6 col-lg-6'><div class='media'><a class='pull-left' href='#'><img class='media-object' src='"+fileValue+"'></a><div class='media-body'><h3 class='media-heading'>"+textValue+"</h3><p>"+(textareaValue.slice(0,13))+"<span class='sp'>"+(textareaValue.slice(13,37))+"</span>...<span style='color:#990000;'>>>></span></p></div></div></div><div class='dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2'><p class='red text-center'>小太阳</p></div><div class='dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2'><p class='red text-center'>11344</p></div><div class='dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2'><p class='red text-center'>"+(month+1)+"-"+date+"</p></div></div>");
//                    $("#top_ul>li").each(function(i,v){
//                   		$(v).css("backgroundColor","#eee");
//                   	});
//                   	$("#top_ul>li").eq(4).css("backgroundColor","#e84c3d");
//                   	$("#seventh>div").each(function(i,v){
//                   		$(v).hide();
//                   	});
//                   	$("#help").show();
//                    $("#seventh>div").each(function(i,v){
//				        if($(v).css("display")=="block"){
//				            seventh=$(v).children(".row").size();
//				            pagesize=Math.ceil(seventh/6);
//				            if(pagesize==0){
//				                pagesize=1;
//				            };
//				        }
//				    });
//                    page=pagesize;
//                    paging();
//					if(pagesize>=5){
//				    	var page_num=pagesize-4;
//				    	$("#page_ul li").each(function(i,v){
//	                        if(i>=1 && i<=5){
//	                            $(v).children("a").text(page_num++);
//	                        }
//	                    });
//				    }else{
//				    	var page_num=1;
//				    	$("#page_ul li").each(function(i,v){
//	                        if(i>=1 && i<=pagesize){
//	                            $(v).children("a").text(page_num++);
//	                        }
//	                    });
//				    };
//				    $("#seventh>div").each(function(i,v){
//	                    if($(v).css("display")=="block"){
//	                        $(v).children(".row").each(function(n,va){
//	                            if(n>=(pagesize-1)*6 && n<pagesize*6){
//	                                $(va).show();
//	                            }else{
//	                                $(va).hide();
//	                            }
//	                        });
//	                    }else{
//	                        $(v).hide();
//	                    }
//	                });
//                    showPage();
//					showPrev();
//                    showNext();
////                  startShow();
//                    isPage();
//                      if(!bool){
//                          bool='';
//                          $("select option").each(function(i,v){
//                              $(v).removeAttr("selected");
//                          });
//                          $("select option:first").attr("selected","selected");
//                          $("#inp").val('');
//						  $("[class='luntan_file']").val('');
//                          $("textarea").val('');
//                      };
//                    break;
//                case "6":
//                    $("#protect").append("<div class='row'><div class='dv1 col-xs-9 col-sm-10 col-md-6 col-lg-6'><div class='media'><a class='pull-left' href='#'><img class='media-object' src='"+fileValue+"'></a><div class='media-body'><h3 class='media-heading'>"+textValue+"</h3><p>"+(textareaValue.slice(0,13))+"<span class='sp'>"+(textareaValue.slice(13,37))+"</span>...<span style='color:#990000;'>>>></span></p></div></div></div><div class='dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2'><p class='red text-center'>小太阳</p></div><div class='dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2'><p class='red text-center'>11344</p></div><div class='dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2'><p class='red text-center'>"+(month+1)+"-"+date+"</p></div></div>");
//                    $("#top_ul>li").each(function(i,v){
//                   		$(v).css("backgroundColor","#eee");
//                   	});
//                   	$("#top_ul>li").eq(5).css("backgroundColor","#e84c3d");
//                   	$("#seventh>div").each(function(i,v){
//                   		$(v).hide();
//                   	});
//                   	$("#protect").show();
//                    $("#seventh>div").each(function(i,v){
//				        if($(v).css("display")=="block"){
//				            seventh=$(v).children(".row").size();
//				            pagesize=Math.ceil(seventh/6);
//				            if(pagesize==0){
//				                pagesize=1;
//				            };
//				        }
//				    });
//                    page=pagesize;
//                    paging();
//					if(pagesize>=5){
//				    	var page_num=pagesize-4;
//				    	$("#page_ul li").each(function(i,v){
//	                        if(i>=1 && i<=5){
//	                            $(v).children("a").text(page_num++);
//	                        }
//	                    });
//				    }else{
//				    	var page_num=1;
//				    	$("#page_ul li").each(function(i,v){
//	                        if(i>=1 && i<=pagesize){
//	                            $(v).children("a").text(page_num++);
//	                        }
//	                    });
//				    };
//				    $("#seventh>div").each(function(i,v){
//	                    if($(v).css("display")=="block"){
//	                        $(v).children(".row").each(function(n,va){
//	                            if(n>=(pagesize-1)*6 && n<pagesize*6){
//	                                $(va).show();
//	                            }else{
//	                                $(va).hide();
//	                            }
//	                        });
//	                    }else{
//	                        $(v).hide();
//	                    }
//	                });
//                    showPage();
//					showPrev();
//                    showNext();
////                  startShow();
//                    isPage();
//                      if(!bool){
//                          bool='';
//                          $("select option").each(function(i,v){
//                              $(v).removeAttr("selected");
//                          });
//                          $("select option:first").attr("selected","selected");
//                          $("#inp").val('');
//						  $("[class='luntan_file']").val('');
//                          $("textarea").val('');
//                      };
//                    break;
//                case "7":
//                    $("#other").append("<div class='row'><div class='dv1 col-xs-9 col-sm-10 col-md-6 col-lg-6'><div class='media'><a class='pull-left' href='#'><img class='media-object' src='"+fileValue+"'></a><div class='media-body'><h3 class='media-heading'>"+textValue+"</h3><p>"+(textareaValue.slice(0,13))+"<span class='sp'>"+(textareaValue.slice(13,37))+"</span>...<span style='color:#990000;'>>>></span></p></div></div></div><div class='dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2'><p class='red text-center'>小太阳</p></div><div class='dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2'><p class='red text-center'>11344</p></div><div class='dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2'><p class='red text-center'>"+(month+1)+"-"+date+"</p></div></div>");
//                    $("#top_ul>li").each(function(i,v){
//                   		$(v).css("backgroundColor","#eee");
//                   	});
//                   	$("#top_ul>li").eq(6).css("backgroundColor","#e84c3d");
//                   	$("#seventh>div").each(function(i,v){
//                   		$(v).hide();
//                   	});
//                   	$("#other").show();
//                    $("#seventh>div").each(function(i,v){
//				        if($(v).css("display")=="block"){
//				            seventh=$(v).children(".row").size();
//				            pagesize=Math.ceil(seventh/6);
//				            if(pagesize==0){
//				                pagesize=1;
//				            };
//				        }
//				    });
//                    page=pagesize;
//                    paging();
//					if(pagesize>=5){
//				    	var page_num=pagesize-4;
//				    	$("#page_ul li").each(function(i,v){
//	                        if(i>=1 && i<=5){
//	                            $(v).children("a").text(page_num++);
//	                        }
//	                    });
//				    }else{
//				    	var page_num=1;
//				    	$("#page_ul li").each(function(i,v){
//	                        if(i>=1 && i<=pagesize){
//	                            $(v).children("a").text(page_num++);
//	                        }
//	                    });
//				    };
//				    $("#seventh>div").each(function(i,v){
//	                    if($(v).css("display")=="block"){
//	                        $(v).children(".row").each(function(n,va){
//	                            if(n>=(pagesize-1)*6 && n<pagesize*6){
//	                                $(va).show();
//	                            }else{
//	                                $(va).hide();
//	                            }
//	                        });
//	                    }else{
//	                        $(v).hide();
//	                    }
//	                });
//                    showPage();
//					showPrev();
//                    showNext();
////                  startShow();
//                    isPage();
//                      if(!bool){
//                          bool='';
//                          $("select option").each(function(i,v){
//                              $(v).removeAttr("selected");
//                          });
//                          $("select option:first").attr("selected","selected");
//                          $("#inp").val('');
//						  $("[class='luntan_file']").val('');
//                          $("textarea").val('');
//                      };
//                    break;
//            }
//        }
//    });

	};

//******************分页部分的js代码******************
	function paging(){
		isPage();
		context='';
		$("#seventh").children("div").each(function(i,v){
			if($(v).css("display")=="block"){
				seventh=$(v).children(".row").size();
				pagesize=Math.ceil(seventh/6);
				if(pagesize==0){
					pagesize=1;
				}
				if(seventh<=30){
					if(seventh==0){
						$("#page_ul").html("<li><a>上一页</a></li><li><a>1</a><li><li><a>下一页</a></li>");
					}else if(seventh>0){
						for(var i=1;i<=pagesize;i++){
							context+="<li><a>"+i+"</a></li>";
						}
						$("#page_ul").html("<li><a>上一页</a></li>"+context+"<li><a>下一页</a></li>");
					}
				}else{
					$("#page_ul").html("<li><a>上一页</a></li><li><a>1</a></li><li><a>2</a></li><li><a>3</a></li><li><a>4</a></li><li><a>5</a></li><li><a>下一页</a></li>");
				}
			};
		});
	};

//******************点击页码部分的js代码******************
	function showPage(){
		$("#seventh>div").each(function(i,v){
			if($(v).css("display")=="block"){
				seventh=$(v).children(".row").size();
				pagesize=Math.ceil(seventh/6);
				if(pagesize==0){
					pagesize=1;
				};
			}
		});
		$("#page_ul li").each(function(index,value){
			if(pagesize<=5 && index>=1 && index<=pagesize){
				$(value).click(function(){
					var text=$(value).children("a").text();
					page=text;
					//console.log(page);
					$("#seventh>div").each(function(i,v){
						if($(v).css("display")=="block"){
							$(v).children(".row").each(function(n,va){
								if(n>=(text-1)*6 && n<text*6){
									$(va).show();
								}else{
									$(va).hide();
								}
							});
						}else{
							$(v).hide();
						}
					});
					isPage();
				});
			};
			if(pagesize>5 && index>=1 && index<=5){
				$(value).click(function(){
					var text=$(value).children("a").text();
					page=text;
					//console.log(page);
					if(text>=1 || text<3){
						var num=1;
						$("#page_ul li").each(function(i,v){
							if(i>=1 && i<=5){
								$(v).children("a").text(num++);
							}
						});
					};
					if(text>=3 && text<=(pagesize-2)){
						var num=text-2;
						$("#page_ul li").each(function(i,v){
							if(i>=1 && i<=5){
								$(v).children("a").text(num++);
							}
						});
					};
					if(text>(pagesize-2)){
						var num=pagesize-4;
						$("#page_ul li").each(function(i,v){
							if(i>=1 && i<=5){
								$(v).children("a").text(num++);
							}
						});
					};
					$("#seventh>div").each(function(i,v){
						if($(v).css("display")=="block"){
							$(v).children(".row").each(function(n,va){
								if(n>=(text-1)*6 && n<text*6){
									$(va).show();
								}else{
									$(va).hide();
								}
							});
						}else{
							$(v).hide();
						}
					});
					isPage();
				});
			}
		});
	};

//******************点击页码部分的上一页js代码******************
	function showPrev(){
		$("#seventh>div").each(function(i,v){
			if($(v).css("display")=="block"){
				seventh=$(v).children(".row").size();
				pagesize=Math.ceil(seventh/6);
				if(pagesize==0){
					pagesize=1;
				};
			}
		});
		if(pagesize<=5){
			//点击上一页。。。
			$("#page_ul li:first").click(function(){
				var num=1;
				$("#page_ul li").each(function(i,v){
					if(i>0 && i<=pagesize){
						$(v).children("a").text(num);
						num++;
					};
				});
				//获取page。。。
				$("#page_ul li").each(function(i,v){
					if(i>0 && i<=pagesize){
						if($(this).css("backgroundColor")=="#e84c3d"){
							page=$(this).children("a").text();
						};
					};
				});
				page--;
				if(page<=1){
					page=1;
				};
				isPage();
				$("#seventh>div").each(function(i,v){
					if($(v).css("display")=="block"){
						$(v).children(".row").each(function(n,va){
							if(n>=(page-1)*6 && n<page*6){
								$(va).show();
							}else{
								$(va).hide();
							}
						});
					}else{
						$(v).hide();
					}
				});
			});
		};
		if(pagesize>5){
			//点击上一页。。。
			$("#page_ul li:first").click(function(){
				if($("#page_ul li").eq(5).children("a").text()<=5){
					var num=1;
					$("#page_ul li").each(function(i,v){
						if(i>0 && i<=5){
							$(v).children("a").text(num);
							num++;
						};
					});
				}else{
					$("#page_ul li").each(function(i,v){
						if(i>0 && i<=5){
							var num=$(v).children("a").text()-1;
							$(v).children("a").text(num);
						};
					});
				};
				//获取page。。。
				$("#page_ul li").each(function(i,v){
					if(i>0 && i<=pagesize){
						if($(this).css("backgroundColor")=="#e84c3d"){
							page=$(this).children("a").text();
						};
					};
				});
				page--;
				if(page<=1){
					page=1;
				};
				isPage();
				$("#seventh>div").each(function(i,v){
					if($(v).css("display")=="block"){
						$(v).children(".row").each(function(n,va){
							if(n>=(page-1)*6 && n<page*6){
								$(va).show();
							}else{
								$(va).hide();
							}
						});
					}else{
						$(v).hide();
					}
				});
			});
		};
	};
//******************点击页码部分的下一页js代码******************
	function showNext(){
		$("#seventh>div").each(function(i,v){
			if($(v).css("display")=="block"){
				seventh=$(v).children(".row").size();
				pagesize=Math.ceil(seventh/6);
				if(pagesize==0){
					pagesize=1;
				};
			}
		});
		if(pagesize<=5){
			//点击下一页。。。
			$("#page_ul li:last").click(function(){
				var num=1;
				$("#page_ul li").each(function(i,v){
					if(i>0 && i<=pagesize){
						$(v).children("a").text(num);
						num++;
					};
				});
				//获取page。。。
				$("#page_ul li").each(function(i,v){
					if(i>0 && i<=pagesize){
						if($(this).css("backgroundColor")=="#e84c3d"){
							page=$(this).children("a").text();
						};
					};
				});
				page++;
				if(page>=pagesize){
					page=pagesize;
				};
				isPage();
				$("#seventh>div").each(function(i,v){
					if($(v).css("display")=="block"){
						$(v).children(".row").each(function(n,va){
							if(n>=(page-1)*6 && n<page*6){
								$(va).show();
							}else{
								$(va).hide();
							}
						});
					}else{
						$(v).hide();
					}
				});
			});
		};
		if(pagesize>5){
			//点击下一页。。。
			$("#page_ul li:last").click(function(){
				if($("#page_ul li").eq(1).children("a").text()>=(pagesize-4)){
					var num=pagesize-4;
					$("#page_ul li").each(function(i,v){
						if(i>0 && i<=5){
							$(v).children("a").text(num);
							num++;
						};
					});
				}else{
					$("#page_ul li").each(function(i,v){
						if(i>0 && i<=5){
							var ss=$(v).children("a").text()
							var num=++ss;
							$(v).children("a").text(num);
						};
					});
				};
				//获取page。。。
				$("#page_ul li").each(function(i,v){
					if(i>0 && i<=pagesize){
						if($(this).css("backgroundColor")=="#e84c3d"){
							page=$(this).children("a").text();
						};
					};
				});
				page++;
				if(page>=pagesize){
					page=pagesize;
				};
				isPage();
				$("#seventh>div").each(function(i,v){
					if($(v).css("display")=="block"){
						$(v).children(".row").each(function(n,va){
							if(n>=(page-1)*6 && n<page*6){
								$(va).show();
							}else{
								$(va).hide();
							}
						});
					}else{
						$(v).hide();
					}
				});
			});
		};
	};
//******************最开始显示row的js代码******************
	function startShow(){
		$("#seventh").children("div").each(function(i,v){
			if($(v).css("display")=="block"){
				$(v).children(".row").each(function(index,value){
					if(index<=5){
						$(value).show();
					}else{
						$(value).hide();
					}
				});
			}
		});
	};
//******************判断是第几页的js代码******************
	function isPage(){
		$("#page_ul li").each(function(i,v){
			if($(v).children("a").text()==page){
				$(v).children("a").css("backgroundColor","#e84c3d");
			}else{
				$(v).children("a").css("backgroundColor","#fff");
			};
		});
	};

//******************点击首页的js代码******************
	function showFirst(){
		$("#page_ul li:first").click(function(){
			var connect;
			$("#seventh>div").each(function(i,v){
				if($(v).css("display")=="block"){
					seventh=$(v).children(".row").size();
					pagesize=Math.ceil(seventh/6);
					if(pagesize==0){
						pagesize=1;
					};
					if(i<=5){
						$(v).show();
					}else{
						$(v).hide();
					};
				}
			});
			if(pagesize<=5){
				for(var i=1;i<=pagesize;i++){
					connect+='<li><a>'+i+'</a></li>';
				};
				$("#page_ul").html("<li><a>首页</a></li><li><a>上一页</a></li>"+connect+"<li><a>下一页</a></li><li><a>尾页</a></li>");
			}else{
				for(var i=1;i<=5;i++){
					connect+='<li><a>'+i+'</a></li>';
				};
				$("#page_ul").html("<li><a>首页</a></li><li><a>上一页</a></li>"+connect+"<li><a>下一页</a></li><li><a>尾页</a></li>");
			};
		});
	};

//******************点击尾页的js代码******************
	function showLast(){
		$("#page_ul li:last").click(function(){
			var connect;
			$("#seventh>div").each(function(i,v){
				if($(v).css("display")=="block"){
					seventh=$(v).children(".row").size();
					pagesize=Math.ceil(seventh/6);
					if(pagesize==0){
						pagesize=1;
					};
					if(i<=5){
						$(v).show();
					}else{
						$(v).hide();
					};
				}
			});
			if(pagesize<=5){
				for(var i=1;i<=pagesize;i++){
					connect+='<li><a>'+i+'</a></li>';
				};
				$("#page_ul").html("<li><a>首页</a></li><li><a>上一页</a></li>"+connect+"<li><a>下一页</a></li><li><a>尾页</a></li>");
			}else{
				for(var i=1;i<=5;i++){
					connect+='<li><a>'+i+'</a></li>';
				};
				$("#page_ul").html("<li><a>首页</a></li><li><a>上一页</a></li>"+connect+"<li><a>下一页</a></li><li><a>尾页</a></li>");
			};
		});
	};
	top();
	post();
//paging();
//isPage();
//showPage();
//showPrev();
//showNext();
//startShow();
});
//};














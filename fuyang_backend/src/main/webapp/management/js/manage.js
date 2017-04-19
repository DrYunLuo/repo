$("#create_active .fr li input").css("borderColor","#4682B4");
//*****************点击左侧的按钮切换对应的div*****************
$("#box_left>ul").on('click','li',function(){
    $(this).addClass("active").siblings('.active').removeClass("active");
});

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

//编辑未通过审核的志愿者信息信息
function changeEle(){
	$(".editMess").show().next().hide();

}
//Angular.js
var app=angular.module('myApp',['ng','ngRoute']);
app.run(function ($http){
    $http.defaults.headers.post={'Content-type':'application/x-www-form-urlencoded'};
});
//传myId
app.factory('myId', function () {
    var myObject = {};
    var _setter = function (data) {
        myObject = data;
    };
    var _getter = function () {
        return myObject;
    };
    return {
        setter: _setter,
        getter: _getter
    };
});
//管理员信息
app.controller('adminInfoCtrl',['$rootScope','$scope','$http',function($rootScope,$scope,$http){
    var id=$rootScope.user.id;
    var keyParams = hex_sha1(id+'yichuangspace');
    $http.get('/fuyang_backend/user/getInfo?id='+id+'&keyParams='+keyParams).success(function(json){
        $scope.admin=json.data.group;
    });
}]);
//管理员查询待审组织
app.controller('orgReviewCtrl',['$rootScope','$scope','$http',"myId",function($rootScope,$scope,$http,myId){
	var keywords = ''; 
  	var keyParams1 = hex_sha1("yichuangspace");
$http.get('/fuyang_backend/groups/unreviewedGroups?status='+keywords+'&pageSize='+10+'&pageNo='+1+'&keyParams='+keyParams1).success(function(data){ 	
    	$scope.groupList = data.data.list;
    	
    	if($scope.groupList.groupType == '1'){
       		$scope.groupList.groupType = '巾帼团队';
		}
		if($scope.groupList.groupType == '2'){
			$scope.groupList.groupType = '阳光助残';
		}
		if($scope.groupList.groupType == '3'){
			$scope.groupList.groupType = '邻里守望';
		}
		if($scope.groupList.groupType == '4'){
			$scope.groupList.groupType = '关爱留守儿童';
		}
		if($scope.groupList.groupType == '5'){
			$scope.groupList.groupType = '环境保护';
		}
		if($scope.groupList.groupType == '6'){
			$scope.groupList.groupType = '应急救援';
		}
		if($scope.groupList.groupType == '7'){
			$scope.groupList.groupType = '扶贫开发';
		}
		if($scope.groupList.groupType == '8'){
			$scope.groupList.groupType = '文化宣传';
		}
		if($scope.groupList.groupType == '9'){
			$scope.groupList.groupType = '网络文明';
		}
		if($scope.groupList.groupType == '10'){
			$scope.groupList.groupType = '大型赛会';
		}
		if($scope.groupList.groupType == '11'){
			$scope.groupList.groupType = '普法宣传';
		}
		if($scope.groupList.groupType == '12'){
			$scope.groupList.groupType = '其他';
		}
       	
       	
       	for(var i=0;i<$scope.groupList.length;i++){
       		if($scope.groupList[i].status=='0'){
       			$scope.groupList[i].status = '不通过';
       		}
       		if($scope.groupList[i].status=='1'){
       			$scope.groupList[i].status = '已审核';
       		}
       		if($scope.groupList[i].status=='2'){
       			$scope.groupList[i].status = '未审核';
       		}
       	}
       	
       	var totalPages = data.data.pages;
       	
       	$("#org_rpage").Page({
       		totalPages:totalPages,
       		liNums:10,
       		callBack:function(page,size,count){
       			$http.get('/fuyang_backend/groups/unreviewedGroups?status='+keywords+'&pageSize='+10+'&pageNo='+page+'&keyParams='+keyParams1).success(function(data){
       				$scope.groupList = data.data.list;
       				
       				if($scope.groupList.groupType == '1'){
       		       		$scope.groupList.groupType = '巾帼团队';
       				}
       				if($scope.groupList.groupType == '2'){
       					$scope.groupList.groupType = '阳光助残';
       				}
       				if($scope.groupList.groupType == '3'){
       					$scope.groupList.groupType = '邻里守望';
       				}
       				if($scope.groupList.groupType == '4'){
       					$scope.groupList.groupType = '关爱留守儿童';
       				}
       				if($scope.groupList.groupType == '5'){
       					$scope.groupList.groupType = '环境保护';
       				}
       				if($scope.groupList.groupType == '6'){
       					$scope.groupList.groupType = '应急救援';
       				}
       				if($scope.groupList.groupType == '7'){
       					$scope.groupList.groupType = '扶贫开发';
       				}
       				if($scope.groupList.groupType == '8'){
       					$scope.groupList.groupType = '文化宣传';
       				}
       				if($scope.groupList.groupType == '9'){
       					$scope.groupList.groupType = '网络文明';
       				}
       				if($scope.groupList.groupType == '10'){
       					$scope.groupList.groupType = '大型赛会';
       				}
       				if($scope.groupList.groupType == '11'){
       					$scope.groupList.groupType = '普法宣传';
       				}
       				if($scope.groupList.groupType == '12'){
       					$scope.groupList.groupType = '其他';
       				}
       				
       				for(var i=0;i<$scope.groupList.length;i++){
       		       		if($scope.groupList[i].status=='0'){
       		       			$scope.groupList[i].status = '不通过';
       		       		}
       		       		if($scope.groupList[i].status=='1'){
       		       			$scope.groupList[i].status = '已审核';
       		       		}
       		       		if($scope.groupList[i].status=='2'){
       		       			$scope.groupList[i].status = '未审核';
       		       		}
       		       	}
       			});
       		}
       	});
});
	$scope.groupStatus = function(obj){
   	 ////console.log(obj);
   	 
   	 var keywords = ''; 
   	 var keyParams1 = hex_sha1("yichuangspace");
   	 
   	 if(obj==3){ 
   		 keywords = '';
   	 }
   	 if(obj==0){
   		 keywords = '0';
   	 }
   	 if(obj==1){
   		 keywords = '1';
   	 }
   	 if(obj==2){
   		 keywords = '2';
   	 }
   	      
   	 ////console.log(keywords);
   	
       $http.get('/fuyang_backend/groups/unreviewedGroups?status='+keywords+'&pageSize='+10+'&pageNo='+1+'&keyParams='+keyParams1).success(function(data){
       	
    	$scope.groupList = data.data.list;
       	////console.log(data);
       	
       	////console.log($scope.groupList);
       	
       	if($scope.groupList.groupType == '1'){
       		$scope.groupList.groupType = '巾帼团队';
		}
		if($scope.groupList.groupType == '2'){
			$scope.groupList.groupType = '阳光助残';
		}
		if($scope.groupList.groupType == '3'){
			$scope.groupList.groupType = '邻里守望';
		}
		if($scope.groupList.groupType == '4'){
			$scope.groupList.groupType = '关爱留守儿童';
		}
		if($scope.groupList.groupType == '5'){
			$scope.groupList.groupType = '环境保护';
		}
		if($scope.groupList.groupType == '6'){
			$scope.groupList.groupType = '应急救援';
		}
		if($scope.groupList.groupType == '7'){
			$scope.groupList.groupType = '扶贫开发';
		}
		if($scope.groupList.groupType == '8'){
			$scope.groupList.groupType = '文化宣传';
		}
		if($scope.groupList.groupType == '9'){
			$scope.groupList.groupType = '网络文明';
		}
		if($scope.groupList.groupType == '10'){
			$scope.groupList.groupType = '大型赛会';
		}
		if($scope.groupList.groupType == '11'){
			$scope.groupList.groupType = '普法宣传';
		}
		if($scope.groupList.groupType == '12'){
			$scope.groupList.groupType = '其他';
		}
       	
       	
       	for(var i=0;i<$scope.groupList.length;i++){
       		if($scope.groupList[i].status=='0'){
       			$scope.groupList[i].status = '不通过';
       		}
       		if($scope.groupList[i].status=='1'){
       			$scope.groupList[i].status = '已审核';
       		}
       		if($scope.groupList[i].status=='2'){
       			$scope.groupList[i].status = '未审核';
       		}
       	}
       	
       	var totalPages = data.data.pages;
       	
       	////console.log(totalPages);
       	
       	$("#org_rpage").empty();
       	
       	$("#org_rpage").Page({
       		totalPages:totalPages,
       		liNums:10,
       		callBack:function(page,size,count){
       			$http.get('/fuyang_backend/groups/unreviewedGroups?status='+keywords+'&pageSize='+10+'&pageNo='+page+'&keyParams='+keyParams1).success(function(data){
       				$scope.groupList = data.data.list;
       				
       				if($scope.groupList.groupType == '1'){
       		       		$scope.groupList.groupType = '巾帼团队';
       				}
       				if($scope.groupList.groupType == '2'){
       					$scope.groupList.groupType = '阳光助残';
       				}
       				if($scope.groupList.groupType == '3'){
       					$scope.groupList.groupType = '邻里守望';
       				}
       				if($scope.groupList.groupType == '4'){
       					$scope.groupList.groupType = '关爱留守儿童';
       				}
       				if($scope.groupList.groupType == '5'){
       					$scope.groupList.groupType = '环境保护';
       				}
       				if($scope.groupList.groupType == '6'){
       					$scope.groupList.groupType = '应急救援';
       				}
       				if($scope.groupList.groupType == '7'){
       					$scope.groupList.groupType = '扶贫开发';
       				}
       				if($scope.groupList.groupType == '8'){
       					$scope.groupList.groupType = '文化宣传';
       				}
       				if($scope.groupList.groupType == '9'){
       					$scope.groupList.groupType = '网络文明';
       				}
       				if($scope.groupList.groupType == '10'){
       					$scope.groupList.groupType = '大型赛会';
       				}
       				if($scope.groupList.groupType == '11'){
       					$scope.groupList.groupType = '普法宣传';
       				}
       				if($scope.groupList.groupType == '12'){
       					$scope.groupList.groupType = '其他';
       				}
       				
       				for(var i=0;i<$scope.groupList.length;i++){
       		       		if($scope.groupList[i].status=='0'){
       		       			$scope.groupList[i].status = '不通过';
       		       		}
       		       		if($scope.groupList[i].status=='1'){
       		       			$scope.groupList[i].status = '已审核';
       		       		}
       		       		if($scope.groupList[i].status=='2'){
       		       			$scope.groupList[i].status = '未审核';
       		       		}
       		       	}
       			});
       		}
       	});
       });
   };   
    $scope.getId=function(obj){
        myId.setter(obj.id);
    };
}]);
//组织审核详情页
app.controller('orgReviewDetailCtrl',['$scope','$http','$routeParams','myId',function($scope,$http,$routeParams,myId){
//    var id=myId.getter();
	var id = $routeParams.id;
    var keyParams = hex_sha1(id+'yichuangspace');
    $http.get('/fuyang_backend/groups/getGroupById?id='+id+'&keyParams='+keyParams).success(function(json){
    	
    	////console.log(json);
    	
        $scope.org=json.data[0];
    });

    $(".button-group").on("click","button",function(){
        var auditStatus = $(this).attr("class");
        var groupInfo = $scope.org;
        var groupId = groupInfo.id;
        var reason = $("#reason").val();
        $.ajax({
            type: "POST",
            url: "/fuyang_backend/groups/reviewedGroups",
            data: {
                'id':groupId,
                'notes':reason,
                'auditStatus':auditStatus
            },
            dataType: "json",
            success: function(data){
                //////console.log(data);
                if(data.state=='0'){
                    $('.md-modal').addClass('md-show');
                    $('.md-close').on('click',function(){
                        $('.md-modal').removeClass('md-show');
                        window.open("./manage.html#/orgReview",'_self');
                    });
                }
            }
        });
    });
}]);

//管理员各状态下的志愿者
app.controller('volReviewCtrl',['$scope','$http','myId',function($scope,$http,myId){
	var keywords = ''; 
	var keyParams1 = hex_sha1('yichuangspace');
	
	
    
    $scope.searchVolun = function(){
    	var keyParams2 = hex_sha1(keywords+'yichuangspace');
    	var realName = $('#volunRealName').val();
    	console.log(realName);
        var phoneNumber= $('#volunTel').val();
        console.log(phoneNumber);
        var postData = {
        		status:keywords,
        		sRealName:realName,
        		sTel:phoneNumber,
        		pageSize:'10',
        		keyParams:keyParams2,       		
        };
    	$http.post('/fuyang_backend/volunteers/findVolunByStatus',$.param(postData)).success(function(data){
    		$scope.volunList = data.data.list;
    		for(var i=0;i<$scope.volunList.length;i++){
        		if($scope.volunList[i].status=='0'){
        			$scope.volunList[i].status = '不通过';
        		}
        		if($scope.volunList[i].status=='1'){
        			$scope.volunList[i].status = '已审核';
        		}
        		if($scope.volunList[i].status=='2'){
        			$scope.volunList[i].status = '未审核';
        		}
        	}
    		
    		var totalPages = data.data.pages;
    		$("#volun_rpage").Page({
        		totalPages:totalPages,
        		liNums:10,
        		callBack:function(page,size,count){
        			var postDatas = {
        	        		status:keywords,
        	        		sRealName:realName,
        	        		sTel:phoneNumber,
        	        		pageSize:'10',
        	        		pageNo:page,
        	        		keyParams:keyParams2,       		
        	        };
        			$http.post('/fuyang_backend/volunteers/findVolunByStatus',$.param(postDatas)).success(function(data){
        				$scope.volunList = data.data.list;
        				for(var i=0;i<$scope.volunList.length;i++){
        	        		if($scope.volunList[i].status=='0'){
        	        			$scope.volunList[i].status = '不通过';
        	        		}
        	        		if($scope.volunList[i].status=='1'){
        	        			$scope.volunList[i].status = '已审核';
        	        		}
        	        		if($scope.volunList[i].status=='2'){
        	        			$scope.volunList[i].status = '未审核';
        	        		}
        	        	}
        			});
        		}
        	});
    	});
    	
    }
      
	 $http.get('/fuyang_backend/volunteers/findVolunByStatus?status='+keywords+'&pageSize='+10+'&pageNo='+1+'&keyParams='+keyParams1).success(function(data){
     	$scope.volunList = data.data.list;
     	for(var i=0;i<$scope.volunList.length;i++){
    		if($scope.volunList[i].status=='0'){
    			$scope.volunList[i].status = '不通过';
    		}
    		if($scope.volunList[i].status=='1'){
    			$scope.volunList[i].status = '已审核';
    		}
    		if($scope.volunList[i].status=='2'){
    			$scope.volunList[i].status = '未审核';
    		}
    	}
     	
     	var totalPages = data.data.pages;
     	
     	$("#volun_rpage").Page({
    		totalPages:totalPages,
    		liNums:10,
    		callBack:function(page,size,count){
    			$http.get('/fuyang_backend/volunteers/findVolunByStatus?status='+keywords+'&pageSize='+10+'&pageNo='+page+'&keyParams='+keyParams1).success(function(data){
    				$scope.volunList = data.data.list;
    				for(var i=0;i<$scope.volunList.length;i++){
    	        		if($scope.volunList[i].status=='0'){
    	        			$scope.volunList[i].status = '不通过';
    	        		}
    	        		if($scope.volunList[i].status=='1'){
    	        			$scope.volunList[i].status = '已审核';
    	        		}
    	        		if($scope.volunList[i].status=='2'){
    	        			$scope.volunList[i].status = '未审核';
    	        		}
    	        	}
    			});
    		}
    	});
	 });
    $scope.volStatus = function(obj){
    	 ////console.log(obj);
    	 
    	 var keywords = ''; 
    	 var keyParams1 = '';
    	 
    	 if(obj==3){ 
    		 keywords = '';
    		 keyParams1 = hex_sha1('yichuangspace');
    	 }
    	 if(obj==0){
    		 keywords = '0'
    		 keyParams1 = hex_sha1(keywords+'yichuangspace');
    	 }
    	 if(obj==1){
    		 keywords = '1';
    		 keyParams1 = hex_sha1(keywords+'yichuangspace');
    	 }
    	 if(obj==2){
    		 keywords = '2';
    		 keyParams1 = hex_sha1(keywords+'yichuangspace');
    	 }
    	      
        $http.get('/fuyang_backend/volunteers/findVolunByStatus?status='+keywords+'&pageSize='+10+'&pageNo='+1+'&keyParams='+keyParams1).success(function(data){
        	$scope.volunList = data.data.list;
        	////console.log(data);
        	////console.log($scope.volunList);
        	
        	for(var i=0;i<$scope.volunList.length;i++){
        		if($scope.volunList[i].status=='0'){
        			$scope.volunList[i].status = '不通过';
        		}
        		if($scope.volunList[i].status=='1'){
        			$scope.volunList[i].status = '已审核';
        		}
        		if($scope.volunList[i].status=='2'){
        			$scope.volunList[i].status = '未审核';
        		}
        	}
        	
        	var totalPages = data.data.pages;
        	
        	////console.log(totalPages);
        	
        	$("#volun_rpage").empty();
        	
        	$("#volun_rpage").Page({
        		totalPages:totalPages,
        		liNums:10,
        		callBack:function(page,size,count){
        			$http.get('/fuyang_backend/volunteers/findVolunByStatus?status='+keywords+'&pageSize='+10+'&pageNo='+page+'&keyParams='+keyParams1).success(function(data){
        				$scope.volunList = data.data.list;
        				for(var i=0;i<$scope.volunList.length;i++){
        	        		if($scope.volunList[i].status=='0'){
        	        			$scope.volunList[i].status = '不通过';
        	        		}
        	        		if($scope.volunList[i].status=='1'){
        	        			$scope.volunList[i].status = '已审核';
        	        		}
        	        		if($scope.volunList[i].status=='2'){
        	        			$scope.volunList[i].status = '未审核';
        	        		}
        	        	}
        			});
        		}
        	});
        });
    };
    $scope.getId=function(obj){
        myId.setter(obj.id);
    };
}]);
//志愿者审核详情页
app.controller('volReviewDetailCtrl',['$scope','$routeParams','$http','myId',function($scope,$routeParams,$http,myId){
//    var id=myId.getter();
	var id = $routeParams.id;
    var keyParams = hex_sha1(id+'yichuangspace');
    $http.get('/fuyang_backend/volunteers/volunList?id='+id+'&keyParams='+keyParams).success(function(json){
        console.log(json);
        $scope.volunteer=json.data.list[0];
    });
   
//    通过接口
    
    $scope.agreeVolun = function(){
    	var status = '1';
    	var reason = $("#reason").val();
		var keyParams = hex_sha1(id+status+'yichuangspace');
    	$.post('/fuyang_backend/volunteers/ourShenHe',{
    		volunteerId:id,
    		notes:reason,
    		auditStatus:status,
    		keyParams:keyParams,
    	},function(data){
    		
                $('.md-modal').addClass('md-show');
                $('.md-close').on('click',function(){
                    $('.md-modal').removeClass('md-show');
                    window.open("./manage.html#/volunReview",'_self');
                });
        
    	});
    }
    
//    不通过接口
    $scope.disagreeVolun = function(){
    	var status = '0';
    	var reason = $("#reason").val();
    	if(!reason){
    		alert("请输入理由");
    		return false;
    	}
		var keyParams = hex_sha1(id+status+'yichuangspace');
    	$.post('/fuyang_backend/volunteers/ourShenHe',{
    		volunteerId:id,
    		notes:reason,
    		auditStatus:status,
    		keyParams:keyParams,
    	},function(data){
                $('.md-modal').addClass('md-show');
                $('.md-close').on('click',function(){
                    $('.md-modal').removeClass('md-show');
                    window.open("./manage.html#/volunReview",'_self');
                });
    	});
    }
}]);

//管理员获取待审活动
app.controller('activityReviewCtrl',['$rootScope','$scope','$http','myId',function($rootScope,$scope,$http,myId){
    var phone="";
    var totalPage;
    var status = "";
    
    var keyParams = hex_sha1('yichuangspace');
    $http.get('/fuyang_backend/campaigns/getCampaignsByStatus?checkBy='+phone+'&status='+status+'&pageSize=10&pageNo=1&keyParams='+keyParams).success(function(json){
        totalPage=json.data.pages;
        var pagesize=10;
        var list = json.data.list;
        var status_temp;
        
        $scope.list=json.data.list;
        
        $("#act_rvpage").Page({
            totalPages: totalPage,
            liNums: 5,
            activeClass: 'activP',
            callBack : function(page){
                $http.get('/fuyang_backend/campaigns/getCampaignsByStatus?checkBy='+phone+'&status='+status+'&pageSize='+pagesize+'&pageNo='+page+'&keyParams='+keyParams).success(function(obj){
                    //////console.log(obj);
                    $scope.list=obj.data.list;
                });
            }
        });
    });
    
    $scope.searchBtn = function(){
    	var status = $("#status").val();
    	var cTitle = $("#cTitle").val();
    	var cHostUnit = $("#cHostUnit").val();
    	
    	$http.get('/fuyang_backend/campaigns/getCampaignsByStatus?checkBy='+phone+'&status='+status+'&sTitle='+cTitle+'&sHostUnit='+cHostUnit+'&pageSize=10&pageNo=1&keyParams='+keyParams).success(function(json){
    		totalPage = json.data.pages;
    		 $scope.list=json.data.list;
    		  var pagesize=10;
    		 
    		 $("#act_rvpage").Page({
    	            totalPages: totalPage,
    	            liNums: 5,
    	            activeClass: 'activP',
    	            callBack : function(page){
    	            	$http.get('/fuyang_backend/campaigns/getCampaignsByStatus?checkBy='+phone+'&status='+status+'&sTitle='+cTitle+'&sHostUnit='+cHostUnit+'&pageSize='+pagesize+'&pageNo='+page+'&keyParams='+keyParams).success(function(obj){
    	                    //////console.log(obj);
    	                    $scope.list=obj.data.list;
    	                });
    	            }
    	        });
    		
    	});
    }
    $scope.getId=function(obj){
        myId.setter(obj);
    };
}]);

//活动审核详情页
app.controller('actReviewDetailCtrl',['$scope','$http','myId',function($scope,$http,myId){
    var id=myId.getter().id;
    var status = myId.getter().status;
    
    var keyParams = hex_sha1(id+'yichuangspace');
    $http.get('/fuyang_backend/campaigns/getCampaignInfoId?id='+id+'&keyParams='+keyParams).success(function(json){
        $scope.act=json.data[0];
    });
    if(status != '2'){
    	 $(".button-group").hide();
    }
    $(".button-group").on("click","button",function(){
        var auditStatus = $(this).attr("class");
        var actInfo = $scope.act;
        var actId = actInfo.id;
        var reason = $("#reason").val();
        $.ajax({
            type: "POST",
            url: "/fuyang_backend/campaigns/checkCampaign",
            data: {
                'id':actId,
                'notes':reason,
                'auditStatus':auditStatus
            },
            dataType: "json",
            success: function(data){
                //////console.log(data);
                if(data.state=='0'){
                    $('.md-modal').addClass('md-show');
                    $('.md-close').on('click',function(){
                        $('.md-modal').removeClass('md-show');
                        window.open("./manage.html#/activityReview",'_self');
                    });
                }
            }
        });
    });
}]);

var picUrl='';
//上传标题图片
function uploadPic(){
    $.ajaxFileUpload({
        url:'/fuyang_backend/news/uploadNewsTitle',
        secureuri:false,
        fileElementId:'newsPic',
        dataType: 'json',
        success: function (data) {
            picUrl=data.data;
            //////console.log(picUrl);
            $("#picView").html('<img src='+picUrl+'>');
//            $("#isPublishTrue").attr("disabled", false);
//            $("#isPublishFalse").attr("disabled", false);
        }
    });
};
//新闻编辑
app.controller('newsEditCtrl',['$scope','$http','$routeParams',function($scope,$http,$routeParams){
    var newsId=$routeParams.newsId;
    var editor='';
    //富文本编辑器
    function kedit(kedit){
        editor = KindEditor.create(kedit,{
            resizeType: 0,
            allowImageUpload : true,
            allowFileManager : true,
            uploadJson :'/fuyang_backend/fileUpload/upload',
        });
    }
    kedit('#editor_id');
    if(newsId!=undefined){
        var keyParams=hex_sha1(newsId+'yichuangspace');
        $http.get('/fuyang_backend/news/getNewById?id='+newsId+'&keyParams='+keyParams).success(function(json){
            //////console.log.log(json);
            $scope.news=json.data[0];
            editor.html($scope.news.content);
            $("#newsType").val($scope.news.newsType);
            $('#newsSummary').html($scope.news.summary);
            $("#picView").html('<img src='+$scope.news.titleImgUrl+'>');
            var isPublishFlag = $scope.news.isPublish;
            if(isPublishFlag == '1'){
            	$("#isPublishTrue").attr("checked","checked");
            }else{
            	$("#isPublishFalse").attr("checked","checked");
            }
        });
    }
    $scope.newsSubmit=function(){
        if(newsId==undefined){
            newsId='';
        }
        var content=editor.html();
        var title=$("#newsTitle").val();
        var summary=$('#newsSummary').val();
        var author=$("#newsAuthor").val();
        var titleImgUrl=$("#picView img").attr('src');
        var newsType=$("#newsType").val();
        
        var isPublish = $("input[name='isPublish']:checked").val();
        if(isPublish == '1' && (titleImgUrl=='' || titleImgUrl == undefined || titleImgUrl == null)){
        	alert("设为轮播图必须上传新闻标题图片，请上传后提交");
        	return;
        }
        $.ajax({
            type: "POST",
            url: "/fuyang_backend/news/updateOrAdd",
            data: {
                'id':newsId,
                'title':title,
                'summary':summary,
                'content':content,
                'author':author,
                'titleImgUrl':titleImgUrl,
                'newsType':newsType,
                'isPublish':isPublish
            },
            dataType: "json",
            success: function(data){
                //////console.log(data);
                if(data.state=='0'){
                    $('.md-modal').addClass('md-show');
                    $('.md-close').on('click',function(){
                        $('.md-modal').removeClass('md-show');
                        window.open("./manage.html#/newsEdit",'_self');
                    });
                }else{
                    alert("操作失败");
                }
            }
        });
    };
}]);
//新闻管理
app.controller('newsManageCtrl',['$scope','$http',function($scope,$http){
    $scope.uploadData=function(){
        var keyParams = hex_sha1('yichuangspace');
        $http.get('/fuyang_backend/news/getNewsDynamicParam?pageSize=10&pageNo=1&keyParams='+keyParams).success(function(json){
            var totalPage=json.data.pages;
            var pagesize=10;
            $scope.dataList=json.data.list;
            $("#newsManagePage").Page({
                totalPages: totalPage,
                liNums: 5,
                activeClass: 'activP',
                callBack : function(page){
                    $scope.page=page;
                    $http.get('/fuyang_backend/news/getNewsDynamicParam?pageSize='+pagesize+'&pageNo='+page+'&keyParams='+keyParams).success(function(obj){
                        $scope.dataList=obj.data.list;

                    });
                } 
            });
        });
    };
    $scope.uploadData();
    angular.forEach($scope.dataList, function (data) {
        data.check = false;
    });
    //全选
    $scope.checkAll=function(){
        angular.forEach($scope.dataList, function (data) {
            data.check = $scope.isCkeck;
        });
    };
    //删除
    $scope.removeData=function(data){
        var newPwdParams=hex_sha1(data.id+'yichuangspace');
        $http.post('/fuyang_backend/news/delete',$.param({'keyParams':newPwdParams,'id':data.id})).success(function(json){
            if(json.message=='操作成功'){
                $scope.dataList.splice($scope.dataList.indexOf(data), 1);
            }
        });
    };
    //批量删除
    $scope.deleteMore=function(){
        //var deleteList=[];
        //for (var i = 0; i < $scope.dataList.length; i++) {
        //    if ($scope.dataList[i].check) {
        //        deleteList.push($scope.dataList[i]);
        //        $scope.dataList.splice($scope.dataList.indexOf($scope.dataList[i]), 1);
        //        i--;
        //    }
        //}
        alert('还没实现');
    };
    //搜索
    $scope.search=function(){
        alert('还没实现');
    }
}]);
//帖子管理
app.controller('postManageCtrl',['$scope','$http',function($scope,$http){
    $("#postManagePage").Page({
        totalPages: 5,
        liNums: 5,
        activeClass: 'activP',
        callBack : function(page){
        }
    });
}]);

//组织信息
app.controller('orgInfoCtrl',['$rootScope','$scope','$http',function($rootScope,$scope,$http){
    var id=$rootScope.user.id;
    var keyParams = hex_sha1(id+'yichuangspace');
    $http.get('/fuyang_backend/user/getInfo?id='+id+'&keyParams='+keyParams).success(function(json){
        //////console.log(json);
        $scope.org=json.data.group;
    });
}]);
//组织查询待审核志愿者
app.controller('newVolunReviewCtrl',['$rootScope','$scope','$http','myId',function($rootScope,$scope,$http,myId){
    var GroupId =$rootScope.user.groupId;
    var GroupCheck = "";
    var keyParams = hex_sha1('yichuangspace');
    $http.get('/fuyang_backend/volunteers/getUncheckedVol?GroupId='+GroupId+'&GroupCheck='+GroupCheck+'&pageSize=10&pageNo=1&keyParams='+keyParams).success(function(json){
        //////console.log(json);
        var totalPage=json.data.pages;
        var pagesize=10;
        $scope.list=json.data.list;
        $("#org_rvolunpage").Page({
            totalPages: totalPage,
            liNums: 5,
            activeClass: 'activP',
            callBack : function(page){
                $http.get('/fuyang_backend/volunteers/getUncheckedVol?GroupId='+GroupId+'&GroupCheck='+GroupCheck+'&pageSize='+pagesize+'&pageNo='+page+'&keyParams='+keyParams).success(function(obj){
                    $scope.list=obj.data.list;
                });
            }
        });
    });
    $scope.searchBtn = function(){
    	var sRealName = $("#cRealName").val();
    	var sTel = $("#cTel").val();
    	var GroupCheck = $("#groupCheck").val();
    	
    	 var keyParams = hex_sha1('yichuangspace');
    	    $http.get('/fuyang_backend/volunteers/getUncheckedVol?GroupId='+GroupId+'&sRealName='+sRealName+'&sTel='+sTel+'&GroupCheck='+GroupCheck+'&pageSize=10&pageNo=1&keyParams='+keyParams).success(function(json){
    	        //////console.log(json);
    	        var totalPage=json.data.pages;
    	        var pagesize=10;
    	        $scope.list=json.data.list;
    	        $("#org_rvolunpage").Page({
    	            totalPages: totalPage,
    	            liNums: 5,
    	            activeClass: 'activP',
    	            callBack : function(page){
    	                $http.get('/fuyang_backend/volunteers/getUncheckedVol?GroupId='+GroupId+'&sRealName='+sRealName+'&sTel='+sTel+'&GroupCheck='+GroupCheck+'&pageSize='+pagesize+'&pageNo='+page+'&keyParams='+keyParams).success(function(obj){
    	                    $scope.list=obj.data.list;
    	                });
    	            }
    	        });
    	    });
    };
    $scope.getId=function(obj){
        myId.setter(obj);
    };
}]);
//组织审核志愿者详情页
app.controller('newVolReviewDetailCtrl',['$rootScope','$scope','$http','myId',function($rootScope,$scope,$http,myId){
	var GroupId =$rootScope.user.groupId;
    var id=myId.getter().id;
    var groupCheck = myId.getter().groupCheck;
    var keyParams = hex_sha1(id+'yichuangspace');
    
    $http.get('/fuyang_backend/volunteers/volunList?id='+id+'&keyParams='+keyParams).success(function(json){
       // console.log(json);
    	var volunteer = json.data.list[0];
    	volunteer.specialty = volunteer.specialty+',';
    	volunteer.serviceArea = volunteer.serviceArea + ',';
        $scope.volunteer=volunteer;
        
        //console.log("specialty-------------"+volunteer.specialty);
        //console.log("specialty-------------"+volunteer.serviceArea);
    });
    if(groupCheck != '2'){
    	$('.button-group').hide();
    }
    $(".button-group").on("click","button",function(){
        var auditStatus = $(this).attr("class");
        var volunInfo = $scope.volunteer;
        var volunId = volunInfo.id;
        var reason = $("#reason").val();
        var keyParams = hex_sha1(volunId+reason+auditStatus+GroupId+'yichuangspace');
        $.ajax({
            type: "POST",
            url: "/fuyang_backend/volunteers/groupShenHe",
            data: {
                'id':volunId,
                'notes':reason,
                'GroupCheck':auditStatus,
                'GroupId':GroupId,
                'keyParams':keyParams
            },
            dataType: "json",
            success: function(data){
                //////console.log(data);
                if(data.state=='0'){
                    $('.md-modal').addClass('md-show');
                    $('.md-close').on('click',function(){
                        $('.md-modal').removeClass('md-show');
                        window.open("./manage.html#/newVolunReview",'_self');
                    });
                }
            }
        });
    });
}]);
//组织审核志愿者参加活动
app.controller('actVolReviewCtrl',['$rootScope','$scope','$http','myId',function($rootScope,$scope,$http,myId){
    var groupId =$rootScope.user.groupId;
    var type = $rootScope.user.type;
    var iscalc = "";
    if(type == "3"){
    	groupId = "";
    }
    var keyParams = hex_sha1(groupId+iscalc+'yichuangspace');
    $http.get('/fuyang_backend/records/unreviewedCam?groupId='+groupId+'&iscalc='+iscalc+'&pageSize=10&pageNo=1&keyParams='+keyParams).success(function(json){
        //////console.log(json);
        var totalPage=json.data.pages;
        var pagesize=10;
        $scope.list=json.data.list;
        $("#actvolun_rvpage").Page({
            totalPages: totalPage,
            liNums: 5,
            activeClass: 'activP',
            callBack : function(page){
                $http.get('/fuyang_backend/records/unreviewedCam?groupId='+groupId+'&iscalc='+iscalc+'&pageSize='+pagesize+'&pageNo='+page+'&keyParams='+keyParams).success(function(obj){
                    $scope.list=obj.data.list;
                });
            }
        });
    });
    
    $scope.searchBtn = function(){
    	var sRealName = $("#cRealName").val();
    	var sTel = $("#cTel").val();
    	var iscalc = $("#iscalc").val();
    	keyParams = hex_sha1(groupId+iscalc+'yichuangspace');
    	 $http.get('/fuyang_backend/records/unreviewedCam?groupId='+groupId+'&sRealName='+sRealName+'&sTel='+sTel+'&iscalc='+iscalc+'&pageSize=10&pageNo=1&keyParams='+keyParams).success(function(json){
    	        //////console.log(json);
    	        var totalPage=json.data.pages;
    	        var pagesize=10;
    	        $scope.list=json.data.list;
    	        $("#actvolun_rvpage").Page({
    	            totalPages: totalPage,
    	            liNums: 5,
    	            activeClass: 'activP',
    	            callBack : function(page){
    	                $http.get('/fuyang_backend/records/unreviewedCam?groupId='+groupId+'&iscalc='+iscalc+'&pageSize='+pagesize+'&pageNo='+page+'&keyParams='+keyParams).success(function(obj){
    	                    $scope.list=obj.data.list;
    	                });
    	            }
    	        });
    	    });
    };
    
    $scope.getId=function(obj){
        myId.setter(obj);
    };
}]);
//组织审核志愿者参加活动详情页
app.controller('actVolReviewDetailCtrl',['$scope','$http','myId',function($scope,$http,myId){
    var id=myId.getter().volunteerId;
    var iscalc = myId.getter().iscalc;
    var auditNotes = myId.getter().auditNotes;
    var keyParams = hex_sha1(id+'yichuangspace');
    $http.get('/fuyang_backend/volunteers/volunList?id='+id+'&keyParams='+keyParams).success(function(json){
    	var volunteer = json.data.list[0];
    	volunteer.specialty = volunteer.specialty+',';
    	volunteer.serviceArea = volunteer.serviceArea + ',';
    	
    	//console.log('specialty--------'+volunteer.specialty);
    	//console.log('serviceArea--------'+volunteer.serviceArea);
    	
        $scope.volunteer=volunteer;
        $scope.auditNotes = auditNotes;
    });
    if(iscalc != '2'){
    	$(".button-group").hide();
    }
    $(".button-group").on("click","button",function(){
        var iscalc = $(this).attr("class");
        var volunId = myId.getter().id;
        var campaignId=myId.getter().campaignId;
        var reason = $("#reason").val();
        var keyParams = hex_sha1(volunId+iscalc+'yichuangspace');
        $.ajax({
            type: "POST",
            url: "/fuyang_backend/records/reviewedCam",
            data: {
                'id':volunId,
                'auditNotes':reason,
                'iscalc':iscalc,
                'CampaignId':campaignId,
                'keyParams':keyParams
            },
            dataType: "json",
            success: function(data){
                //////console.log(data);
                if(data.state=='0'){
                    $('.md-modal').addClass('md-show');
                    $('.md-close').on('click',function(){
                        $('.md-modal').removeClass('md-show');
                        window.open("./manage.html#/actVolReview",'_self');
                    });
                }
            }
        });
    });
}]);

//志愿者信息
app.controller('volInfoCtrl',['$rootScope','$scope','$http',function($rootScope,$scope,$http){
    var id=$rootScope.user.volunteerId;
    var keyParams = hex_sha1(id+'yichuangspace');
    $http.get('/fuyang_backend/volunteers/getVolunById?id='+id+'&keyParams='+keyParams).success(function(json){
       console.log(json);
        $scope.volunteer=json.data[0];
    });
    $scope.changePhoto=function(){
    	$.ajaxFileUpload({
            url:'/fuyang_backend/volunteers/uploadCardId',
            secureuri:false,
            fileElementId:'uploadCardId',
            dataType: 'json',
            success: function (data) {
                //////console.log(data);
                alert("成功");
                $("#changephoto").attr("value",data.data);
                //////console.log($("#groupLogo").attr("value"));
            }
        });
    }

//    上传图片时 本地预览
    $("#uploadCardId").on('change',function(e){
    	var file= e.target.files[0];
		if(!file){
			return false;
		}
		var img= new Image(),url=img.src=URL.createObjectURL(file);
		$img=$(img);//转换为jquery变量,
		$img.css('width','100%');
		img.onload = function(){
			URL.revokeObjectURL(url);
			$('#parentPreview').empty().append($img);
		}
    });
    
//    提交修改后的志愿者信息
    $scope.newMessage=function(){
    	var realName = $(".realName").val();
    	var sex1 = $(".sex1").is(":checked");
    	var sex2 = $(".sex2").is(":checked");
    	var sex = "";
    	if(sex1){
    		sex = $(".sex1").val();
    	}
    	if(sex2){
    		sex = $(".sex2").val();
    	}
    	var party = $(".party").val();
    	var educationId = $(".paeducationId").val();
    	var tel = $(".tel").val();
    	var experience = $(".experience").val();
    	var homeAddress = $(".homeAddress").val();
    	var qq = $(".qq").val();
    	var cardId = $(".cardId").val();
    	var email = $("email").val();
    	var regionId = $("regionId").val();
    	var identification = $(".photo").val();
    	////console.log(photo);
    	////console.log(id);
    	$.post("/fuyang_backend/volunteers/updateVolunInfo",{
    		id:id,
    		realname:realName,
    		sex:sex,
    		party:party,
    		educationId:educationId,
    		tel:tel,
    		experience:experience,
    		homeAddress:homeAddress,
    		qq:qq,
    		cardId:cardId,
    		email:email,
    		regionId:regionId,
    		identification:identification,		
    	},function(data){
    		////console.log(data);
    		history.go(0);
    	});
    	
    }
}]);
//志愿者已参加活动
app.controller('joinedActivityCtrl',['$rootScope','$scope','$http',function($rootScope,$scope,$http){
    var id=$rootScope.user.volunteerId;
    var keyParams = hex_sha1(id+'yichuangspace');
    $http.get('/fuyang_backend/volunteers/getAllCampaignsById?id='+id+'&pageSize=5&pageNo=1&keyParams='+keyParams).success(function(json){
        //////console.log(json);
        var totalPage=json.data.pages;
        var pagesize=5;
        $scope.list=json.data.list;
        $("#vol_joinedActpage").Page({
            totalPages: totalPage,
            liNums: 5,
            activeClass: 'activP',
            callBack : function(page){
                $http.get('/fuyang_backend/volunteers/getAllCampaignsById?id='+id+'&pageSize=5&pageNo=1&keyParams='+keyParams).success(function(obj){
                    //////console.log(obj);
                    $scope.list=obj.data.list;
                });
            }
        });
    });
}]);
//修改密码
app.controller('ModifyCtrl',['$rootScope','$scope','$http', function ($rootScope,$scope,$http) {
    $("#box_left>ul").children().removeClass("active");
    var userId = $rootScope.user.id;
    var $first=false;
    var $twice=false;
    var $third=false;
    var $four=false;
//************************对原密码输入框进行验证*********************
    $("#change_pwd input").eq(0).on("blur",function(){
        var value=$(this).val();
        if(!value){
            $("#change_pwd span.dn").eq(0).css("color",'red').text('请输入原密码').show();
            $first=false;
        }else{
            $("#change_pwd span.dn").eq(0).hide();
            $first=true;
        };
    });
//************************对第一个新密码输入框进行验证*********************
    $("#change_pwd input").eq(1).on("blur",function(){
        var value=$(this).val();
        var reg = /^[\w]{6,16}$/;
        if(!value){
            $("#change_pwd span.dn").eq(1).text('请输入新密码').show();
            $twice=false;
        }else if(!value.match(reg)){
            $("#change_pwd span.dn").eq(1).text('密码格式不匹配').show();
            $twice=false;
        }else{
            $("#change_pwd span.dn").eq(1).hide();
            $twice=true;
        };
    });
//************************对第二次新密码输入框进行验证*********************
    $("#change_pwd input").eq(2).on("blur",function(){
        var value1=$(this).val();
        var value2=$("#change_pwd input").eq(1).val();
        if(!value1){
            $("#change_pwd span.dn").eq(2).text('请再输入新密码').show();
            $third=false;
        }else if(value1!=value2){
            $("#change_pwd span.dn").eq(2).text('两次密码不一致').show();
            $third=false;
        }else{
            $("#change_pwd span.dn").eq(2).hide();
            $third=true;
        }
    });
    //验证是否和原密码一致
    $("#cpwd_inp1").on('blur',function(){
        var opwd=hex_sha1(userId+$(this).val()+'yichuangspace');
        $http.post('/fuyang_backend/user/checkPwd',$.param({'keyParams':opwd,'password':$(this).val(),'userId':userId})).success(function(json){
            if(json.state == 2004){
                $scope.msg="原密码输入错误";
                $("#change_pwd span.dn").eq(0).css("color",'red').show();
            }else if(json.state == 0){
            	$four=true;
            	$scope.msg="密码正确";
                $("#change_pwd span.dn").eq(0).css("color",'green').show();
                
            }
        });
    });
    $("#change_pwd .bt-save").on("click",function() {
        if ($first && $twice && $third && $four) {
            var newPwd=$("#change_pwd input").eq(1).val();
            var newPwdParams=hex_sha1(userId+newPwd+'yichuangspace');
            $http.post('/fuyang_backend/user/modifyPwd',$.param({'keyParams':newPwdParams,'password':newPwd,'userId':userId})).success(function(json){
            	if(json.state == 0){
            		 /* $scope.msg="密码修改成功";
                      $("#change_pwd span.dn").eq(0).show();*/
            		alert("密码修改成功");
            	}else{
            		/* $scope.msg="密码修改失败";
                     $("#change_pwd span.dn").eq(0).show();*/
            		alert("密码修改失败");
            	}
               /* if(json.data==false){
                    $scope.msg="密码修改失败";
                    $("#change_pwd span.dn").eq(0).show();
                }else if(json.data==0){
                    $scope.msg="密码修改成功";
                    $("#change_pwd span.dn").eq(0).show();
                }*/
            });
        }else{
            return false;
        }
    });
}]);

var actPicUrl='';
//上传活动图片
function uploadActPic(){
    $.ajaxFileUpload({
        url:'/fuyang_backend/fileUpload/uploadCampaignImg',
        secureuri:false,
        fileElementId:'campaignImg',
        dataType: 'json',
        success: function (data) {
            actPicUrl=data.url;
            $('#imageUrl').val(actPicUrl);
            $("#actPicView").html('<img src='+actPicUrl+'>');
            $('#create_active .container .first-row div.fl').css('background','#fff');
        }
    });
};

//精品活动
app.controller('fineActCtrl',['$rootScope','$scope', '$http','myId',function($rootScope,$scope,$http,myId){
    var status=1;
    var keyParams = hex_sha1('yichuangspace');
    $http.get('/fuyang_backend/campaigns/getCampaignsByStatus?status='+status+'&pageSize=5&pageNo=1&keyParams='+keyParams).success(function(json){
            var totalPage=json.data.pages;
            var pageSize=10;
        var groupId =$rootScope.user.groupId;
            $scope.fineAct=json.data.list;
            $("#fineManagePage").Page({
                totalPages: totalPage,
                activeClass: 'activP',
                callBack : function(page){
                    $http.get('/fuyang_backend/campaigns/updateCampBatch?id='+groupId+'&pageSize='+pageSize+'&pageNo='+page+'&keyParams='+keyParams).success(function(obj){
                        $scope.fineAct=obj.data.list;
                    });
                }
            });
    });
    $scope.checkAll=function(){
        angular.forEach($scope.dataList, function (data) {
            data.check = $scope.isCkeck;
        });
    };
    //模糊查询
    $scope.fineselect=function(){
var select_txt=document.getElementById("select_txt").value;
        ////console.log(select_txt);
        $http.get('/fuyang_backend/campaigns/getCampaignsByStatus?title='+select_txt).success( function(json){
            ////console.log(json);
            var totalPage=json.data.pages;
            var pageSize=10;
            var groupId =$rootScope.user.groupId;
            $scope.fineAct=json.data.list;
            ////console.log($scope.fineAct);
            $("#fineManagePage").Page({
                totalPages: totalPage,
                activeClass: 'activP',
                callBack : function(page){
                    $http.get('/fuyang_backend/campaigns/updateCampBatch?id='+groupId+'&pageSize='+pageSize+'&pageNo='+page+'&keyParams='+keyParams).success(function(obj){
                        $scope.fineAct=obj.data.list;
                    });
                }
            });

        });
    };
  /*  $scope.finebind=function(){
        //console.log(this.data.id)
    }*/
    //推送
    $scope.fine_push=function(){
        var ids="";
            $("input[type='checkbox']:checkbox:checked").each(function(i,e){
                ids = ids + $(this).text()+",";
            });
        //console.log(id);

$http.get('/fuyang_backend/campaigns/updateCampBatch?campIds='+ids).success(function(obj){
    //console.log(obj);
    var status=obj.state;
   if(status==0){alert("推送成功！")}else{
       alert("推送失败，请重新推送！")
   }
})
    };
}]);
//组织信息
app.controller('orgInfoCtrl',['$rootScope','$scope','$http',function($rootScope,$scope,$http){
    var id=$rootScope.user.id;
    var keyParams = hex_sha1(id+'yichuangspace');
    $http.get('/fuyang_backend/user/getInfo?id='+id+'&keyParams='+keyParams).success(function(json){
        ////console.log(json);
        $scope.org=json.data.group;
    });
}]);
/*//组织查询待审核志愿者
app.controller('newVolunReviewCtrl',['$rootScope','$scope','$http','myId',function($rootScope,$scope,$http,myId){
    var GroupId =$rootScope.user.groupId;
    var GroupCheck = 2;
    var keyParams = hex_sha1('yichuangspace');
    $http.get('/fuyang_backend/volunteers/getUncheckedVol?GroupId='+GroupId+'&GroupCheck='+GroupCheck+'&pageSize=4&pageNo=1&keyParams='+keyParams).success(function(json){
        ////console.log(json);
        var totalPage=json.data.pages;
        var pagesize=4;
        $scope.list=json.data.list;
        $("#org_rvolunpage").Page({
            totalPages: totalPage,
            liNums: 5,
            activeClass: 'activP',
            callBack : function(page){
                $http.get('/fuyang_backend/volunteers/getUncheckedVol?GroupId='+GroupId+'&GroupCheck='+GroupCheck+'&pageSize='+pagesize+'&pageNo='+page+'&keyParams='+keyParams).success(function(obj){
                    $scope.list=obj.data.list;
                });
            }
        });
    });
    $scope.getId=function(obj){
        myId.setter(obj);
    };
}]);
*/

//发布活动
app.controller('createActCtrl',['$rootScope','$scope','$http',function($rootScope,$scope,$http){
	var groupId =$rootScope.user.groupId;
	var adminId = $rootScope.user.id;
	/*
    //*****************设置全局变量，用于验证提交事件********************
    var theme=false;
    var company=false;
    var time=false;
    var place=false;
    var person=false;
    var phone=false;
    var person_num=false;
    var reward=false;
    //****************验证活动主题是否合法****************
    var firstValue;
    var firstValuelen;
    var firstBol=true;
    $("#create_active .fr li:first input").blur(function(){
        firstValue=$(this).val();
        if(firstValue){
            firstValuelen=firstValue.length;
            if(firstValuelen>=20){
                $("#create_active .fr li:first div.dn").text('输入字符不得超过20个!!!').show();
                $(this).css("borderColor","red");
            }else{
                for(var i=0;i<firstValuelen;i++){
                    if(!isNaN(firstValue.slice(i,i+1))){
                        firstBol=false;
                        break;
                    }
                }
                if(firstBol){
                    $("#create_active .fr li:first div.dn").hide();
                    theme=true;
                }else{
                    $("#create_active .fr li:first div.dn").text('输入字符不能含有数字!!!').show();
                    $(this).css("borderColor","red");
                    firstBol=true;
                }
            }
        }else{
            $("#create_active .fr li:first div.dn").text('活动主题不能为空!!!').show();
            $(this).css("borderColor","red");
        }
    });
    //****************验证主办单位是否合法。****************
    var reg1=/^[\u4e00-\u9fa5a-zA-Z]+$/;
    $("#create_active .fr li").eq(1).find("input").blur(function(){
        var processValue=$(this).val();
        if(processValue){
            if(reg1.test(processValue)){
                company=true;
                $("#create_active .fr li").eq(1).find("div.dn").hide();
            }else{
                $("#create_active .fr li").eq(1).find("div.dn").text('您输入的主办单位不合法!!!').show();
                $(this).css("borderColor","red");
            }
        }else{
            $("#create_active .fr li").eq(1).find("div.dn").text('主办单位不能为空!!!').show();
            $(this).css("borderColor","red");
        }
    })
    //****************验证活动开始时间是否合法。****************
    var dateYear=new Date().getFullYear();
    var dateMonth=new Date().getMonth()+1;
    if(dateMonth>9){
        dateMonth='0'+dateMonth;
    }else{
        dateMonth=dateMonth;
    }
    var dateDate=new Date().getDate();
    if(dateDate>9){
        dateDate='0'+dateDate;
    }else{
        dateDate=dateDate;
    }
    $("#create_active .fr li").eq(2).find("input").blur(function(){
        var timeValue=$(this).val();
        if(timeValue){
            if(parseInt(timeValue.slice(0,4))>=dateYear){
                if(parseInt(timeValue.slice(5,7))>=dateMonth){
                    if(parseInt(timeValue.slice(8,10))>dateDate){
                        time=true;
                        $("#create_active .fr li").eq(2).find("div.dn").hide();
                    }else{
                        $("#create_active .fr li").eq(2).find("div.dn").text('时间不能小于现在时间!!!').show();
                        $(this).css("borderColor","red");
                    }
                }else{
                    $("#create_active .fr li").eq(2).find("div.dn").text('时间不能小于现在时间!!!').show();
                    $(this).css("borderColor","red");
                }
            }else{
                $("#create_active .fr li").eq(2).find("div.dn").text('时间不能小于现在时间!!!').show();
                $(this).css("borderColor","red");
            }
        }else{
            $("#create_active .fr li").eq(2).find("div.dn").text('时间不能为空!!!').show();
            $(this).css("borderColor","red");
        }
    });
    //****************验证结束时间是否合法。****************
    $("#create_active .fr li").eq(3).find("input").blur(function() {
        var processValue = $(this).val();
        if (processValue) {
            if (reg1.test(processValue)) {
                $("#create_active .fr li").eq(3).find("div.dn").hide();
                place=true;
            } else {
                $("#create_active .fr li").eq(3).find("div.dn").text('结束时间不合法!!!').show();
                $(this).css("borderColor","red");
            }
        } else {
            $("#create_active .fr li").eq(3).find("div.dn").text('结束时间不能为空!!!').show();
            $(this).css("borderColor","red");
        }
    });
    //****************验证联系人是否合法****************
    $("#create_active .fr li").eq(4).find("input").blur(function() {
        var processValue = $(this).val();
        if (processValue) {
            if (reg1.test(processValue)) {
                $("#create_active .fr li").eq(4).find("div.dn").hide();
                person=true;
            } else {
                $("#create_active .fr li").eq(4).find("div.dn").text('联系人不合法!!!').show();
                $(this).css("borderColor","red");
            }
        } else {
            $("#create_active .fr li").eq(4).find("div.dn").text('联系人不能为空!!!').show();
            $(this).css("borderColor","red");
        }
    });
    //****************验证联系人电话是否合法****************
    var reg2=/^[1][3458]\d{9}$/;
    $("#create_active .fr li").eq(5).find("input").blur(function() {
        var processValue = $(this).val();
        if (processValue) {
            if (reg2.test(processValue)) {
                $("#create_active .fr li").eq(5).find("div.dn").hide();
                phone=true;
            } else {
                $("#create_active .fr li").eq(5).find("div.dn").text('联系人电话格式不正确!!!').show();
                $(this).css("borderColor","red");
            }
        } else {
            $("#create_active .fr li").eq(5).find("div.dn").text('联系人电话不能为空!!!').show();
            $(this).css("borderColor","red");
        }
    });
    //****************验证活动地点是否合法。****************
    $("#create_active .fr li").eq(6).find("input").blur(function() {
        var processValue = $(this).val();
        if (processValue) {
            if (reg1.test(processValue)) {
                $("#create_active .fr li").eq(6).find("div.dn").hide();
                place=true;
            } else {
                $("#create_active .fr li").eq(6).find("div.dn").text('活动地点不合法!!!').show();
                $(this).css("borderColor","red");
            }
        } else {
            $("#create_active .fr li").eq(6).find("div.dn").text('活动地点不能为空!!!').show();
            $(this).css("borderColor","red");
        }
    });
    //****************验证活动奖励是否合法。****************
    $("#create_active .fr li").eq(7).find("input").blur(function() {
        var processValue = $(this).val();
        if (processValue) {
            $("#create_active .fr li").eq(7).find("div.dn").hide();
            reward=true;
        } else {
            $("#create_active .fr li").eq(7).find("div.dn").text('活动奖励不能为空!!!').show();
            $(this).css("borderColor","red");
        }
    });*/
    //日期控件
    function timeStamp2String(){
        var datetime = new Date();
        var year = datetime.getFullYear();
        var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
        var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
        var hour = datetime.getHours()< 10 ? "0" + datetime.getHours() : datetime.getHours();
        var minute = datetime.getMinutes()< 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
        var second = datetime.getSeconds()< 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
        return year + "-" + month + "-" + date+" "+hour+":"+minute+":"+second;
    }
    function DateInit(){
        $("#startTime").jeDate({
            skinCell:"jedatered",
            format:"YYYY-MM-DD hh:mm",
            isTime:true,
            minDate: timeStamp2String()
        });
        $("#endTime").jeDate({
            skinCell:"jedatered",
            format:"YYYY-MM-DD hh:mm",
            isTime:true,
            minDate: timeStamp2String()
        });
    }
    DateInit();

    //****************点击提交判断****************
    $("#create_active .bt-submit").on("click",function(){
//        var text_Value=$("[name='description']").val();
//        if(theme && company && time && place && person && phone && person_num && reward && text_Value){
//            $("#create_active .third .dn").hide();
//            $.post("",{},function(data){});
//        }else{
//            $("#create_active .third .dn").show();
//            return false;
//        }
    	 //提交活动信息
    	//必填项校验
    	var campaignTitle = $("#title").val();
    	var campaignHostUnit = $("#hostUnit").val();
    	var campaignStartTime = $("#startTime").val();
    	var campaignEndTime = $("#endTime").val();
    	var campaignPricipalName = $("#pricipalName").val();
    	var campaignPricipalTel = $("#pricipalTel").val();
    	var campaignLocation = $("#location").val();
    	var campaignLimit = $("#limit").val();
    	var campaignCheckBy = $("#checkBy").val();
    	var campaignImage = $("#imageUrl").val();
    	var campaignDescription = $("#description").val();
    	if(!campaignTitle){
    		alert("请填写标题");
    		return;
    	}
    	if(!campaignHostUnit){
    		alert("请填写主办单位");
    		return;
    	}
    	if(!campaignStartTime){
    		alert("请选择活动开始时间");
    		return;
    	}
    	if(!campaignEndTime){
    		alert("请选择活动结束时间");
    		return;
    	}
    	if(!campaignPricipalName){
    		alert("请填写联系人姓名");
    		return;
    	}
    	if(!campaignPricipalTel){
    		alert("请填写联系人电话");
    		return;
    	}
    	
    	if(!campaignLocation){
    		alert("请填写活动地点");
    		return;
    	}
    	if(!campaignLimit){
    		alert("请填写参与人数");
    		return;
    	}
    	if(!campaignCheckBy){
    		alert("请选择审核人");
    		return;
    	}if(!campaignImage){
    		alert("请上传标志图");
    		return;
    	}
    	if(!campaignDescription){
    		alert("请填写活动描述");
    		return;
    	}
        $.ajax({
        	type: "POST",
        	url: "/fuyang_backend/campaigns/registCam",
        	data: {
        		"title":$("#title").val(),
        		"hostUnit":$("#hostUnit").val(),
        		"startTime":$("#startTime").val(),
        		"endTime":$("#endTime").val(),
        		"pricipalName":$("#pricipalName").val(),
        		"pricipalTel":$("#pricipalTel").val(),
        		"location":$("#location").val(),
        		"limit":$("#limit").val(),
        		"checkBy":$("#checkBy").val(),
        		"image":$("#imageUrl").val(),
        		"groupId":groupId,
        		"adminId":adminId,
        		"description":$("#description").val()
        	},
        	dataType: "json",
        	success: function(data){
        		alert("发布成功");
        		//////console.log(data);
        	}
        });
    });
    
}]);
//路由
app.config(function($routeProvider){
    $routeProvider
    .when('/activityReview',{templateUrl:'tpl/activityReview.html'})
    .when('/actVolReview',{templateUrl:'tpl/actVolReview.html'})
    .when('/adminInfo',{templateUrl:'tpl/adminInfo.html'})
    .when('/createActivity',{templateUrl:'tpl/createActivity.html'})
    .when('/joinedActivity',{templateUrl:'tpl/joinedActivity.html'})
    .when('/modifyPwd',{templateUrl:'tpl/modifyPwd.html'})
    .when('/newVolunReview',{templateUrl:'tpl/newVolunReview.html'})
    .when('/orgInfo',{templateUrl:'tpl/orgInfo.html'})
    .when('/orgReview',{templateUrl:'tpl/orgReview.html'})
    .when('/volunInfo',{templateUrl:'tpl/volunInfo.html'})
    .when('/volunReview',{templateUrl:'tpl/volunReview.html'})
    .when('/editManage',{templateUrl:'tpl/editManage.html'})
    .when('/newsEdit/:newsId',{templateUrl:'tpl/newsEdit.html'})
    .when('/newsEdit',{templateUrl:'tpl/newsEdit.html'})
    .when('/newsManage',{templateUrl:'tpl/newsManage.html'})
    .when('/postManage',{templateUrl:'tpl/postManage.html'})
    .when('/volunReviewDetail/:id',{templateUrl:'tpl/volunReviewDetail.html'})
    .when('/newVolunReviewDetail',{templateUrl:'tpl/newVolunReviewDetail.html'})
    .when('/actVolReviewDetail',{templateUrl:'tpl/actVolReviewDetail.html'})
    .when('/actReviewDetail',{templateUrl:'tpl/actReviewDetail.html'})
    .when('/fineAct',{templateUrl:'tpl/fineAct.html'})
    .when('/orgReviewDetail/:id',{templateUrl:'tpl/orgReviewDetail.html'});
});
//页面总控制器
app.controller("parentCtrl",['$rootScope','$scope','$location','$http',function($rootScope,$scope,$location,$http){
    var keyParams = hex_sha1('yichuangspace');
    //跳转
    $rootScope.jump=function(arg){
        $location.path(arg);
    }
    //获取用户权限
    var user=getStorage('data',1000*60*60*24);    	    
    if (user!="" && user!=null) {
        $rootScope.user=user.data;
        //////console.log(user);
        var roleId=user.data.type;
        $http.get('/fuyang_backend/rolePower/getUserPowers?roleId='+roleId+'&keyParams='+keyParams).success(function(json){
            $scope.menus=json.data;
            location.href="./manage.html#/"+json.data[0].powerUrl;
            
            ////console.log(json.data);
        });
        //  获取userid，通过userid查询审核状态
        var userId = $rootScope.user.id;
        var keyParams = hex_sha1(userId+'yichuangspace');
        var token = $rootScope.user.token;
        $http.get('/fuyang_backend/user/getUserById?id='+userId+'&keyParams='+keyParams+'&token='+token).success(function (data) {
            var status = data.data.volunteer[0].status;
            $scope.notes = data.data.volunteer[0].notes;
            if(status=='1'){
                $(".auditState").text("已认证");
            }
            if(status=='2'){
                $(".auditState").text("认证中");
            }
            if(status=='0'){
                $(".auditState").text("未通过");
                $scope.changeHtml=function(){
                    $('#motai').modal();
                }
            }
        });
    }else{
        alert("请登录");
        localStorage.removeItem('data');
    }
    $rootScope.logout=function(){
        localStorage.removeItem('data');
        location.href="../#/start";
    };
}]);

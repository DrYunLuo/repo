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



function getPosts(obj){
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
    var types;
    var keyParams;

    if($(obj).children().text()=='助学'){
        types=test1;
        $(obj).css("backgroundColor","#e84c3d").siblings().css("backgroundColor","#eaeaea");
        $(obj).children().css("color","#fff");
        keyParams=keyParams1;
        $(obj).siblings().children().css("color","#333");
    }
    if($(obj).children().text()=='助残'){
        types=test2;
        keyParams=keyParams2;
        $(obj).css("backgroundColor","#e84c3d").siblings().css("backgroundColor","#eaeaea");
        $(obj).children().css("color","#fff");
        $(obj).siblings().children().css("color","#333");

    }
    if($(obj).children().text()=='敬老'){
        types=test3;
        keyParams=keyParams3;
        $(obj).css("backgroundColor","#e84c3d").siblings().css("backgroundColor","#eaeaea");
        $(obj).children().css("color","#fff");
        $(obj).siblings().children().css("color","#333");

    }
    if($(obj).children().text()=='扶贫'){
        types=test4;
        keyParams=keyParams4;
        $(obj).css("backgroundColor","#e84c3d").siblings().css("backgroundColor","#eaeaea");
        $(obj).children().css("color","#fff");
        $(obj).siblings().children().css("color","#333");
    }
    if($(obj).children().text()=='救援'){
        types=test5;
        keyParams=keyParams5;
        $(obj).css("backgroundColor","#e84c3d").siblings().css("backgroundColor","#eaeaea");
        $(obj).children().css("color","#fff");
        $(obj).siblings().children().css("color","#333");
    }
    if($(obj).children().text()=='环保'){
        types=test6;
        keyParams=keyParams6;
        $(obj).css("backgroundColor","#e84c3d").siblings().css("backgroundColor","#eaeaea");
        $(obj).children().css("color","#fff");
        $(obj).siblings().children().css("color","#333");
    }
    if($(obj).children().text()=='其他'){
        types=test7;
        keyParams=keyParams7;
        $(obj).css("backgroundColor","#e84c3d").siblings().css("backgroundColor","#eaeaea");
        $(obj).children().css("color","#fff");
        $(obj).siblings().children().css("color","#333");
    }


    $.post("/fuyang_backend/bbs/getPostList",{
        pageSize:6,
        pageNo:1,
        type:types,
        keyParams:keyParams
    },function(data){
        $("#student").empty();

        var strs='';

        $.each(data.data.list,function(index,v){
            strs+='<div class="row"><div class="dv1 col-xs-9 col-sm-10 col-md-6 col-lg-6"><div class="media"><a class="pull-left" href="luntan_detail.html?id="+'+v.id+'><img class="media-object" src="'+v.photo+'" alt="丢失图片"></a><div class="media-body"><a href="luntan_detail.html?id='+v.id+'"> <h3 class="media-heading">' + v.title + '</h3></a><p>' + (v.content >= 12 ? v.content.slice(0, 13) : v.content) + '<span class="sp">' + (v.content >= 36 ? v.content.slice(13, 37) : (v.content.length >= 12 ? v.content.slice(13) : '')) + '</span>...<span style="color:#990000;">>>></span></p></div></div></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+v.author+'</p></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+v.click+'</p></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+v.createTime+'</p></div></div>';
        });

        $("#student").empty().append(strs);

        $("#page").Page({
            totalPages:Math.ceil(data.data.total/6),//分页总数
            liNums: 5,//分页的数字按钮数(建议取奇数)
            activeClass: 'activP', //active 类样式定义
            callBack : function(page,size,count){
                //////console.log(page);
                $.post("/fuyang_backend/bbs/getPostList",{
                    pageSize:6,
                    pageNo:page,
                    type:types,
                    keyParams:keyParams
                },function(data){

                    $("#student").empty();
                    var strs='';
                    $.each(data.data.list,function(index,v){
                        strs+='<div class="row"><div class="dv1 col-xs-9 col-sm-10 col-md-6 col-lg-6"><div class="media"><a class="pull-left" href="luntan_detail.html?id='+v.id+'"><img class="media-object" src="'+v.photo+'" alt="丢失图片"></a><div class="media-body"><a href="luntan_detail.html?id='+v.id+'"> <h3 class="media-heading">' + v.title + '</h3></a><p>' + (v.content >= 12 ? v.content.slice(0, 13) : v.content) + '<span class="sp">' + (v.content >= 36 ? v.content.slice(13, 37) : (v.content.length >= 12 ? v.content.slice(13) : '')) + '</span>...<span style="color:#990000;">>>></span></p></div></div></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+v.author+'</p></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+v.click+'</p></div><div class="dv2 col-xs-3 col-sm-2 col-md-2 col-lg-2"><p class="red text-center">'+v.createTime+'</p></div></div>';
                    });

                    $("#student").empty().append(strs);
                });
            },
        });
    });
}



//Angular.js
var app=angular.module('myApp',['ng','ngRoute']);
app.run(function ($http){
    $http.defaults.headers.post={'Content-type':'application/x-www-form-urlencoded'};
});

//首页
app.controller('startCtrl', ['$scope','$http',function ($scope,$http) {
    document.body.scrollTop=0;
    var keyParams = hex_sha1('yichuangspace');
    //志愿者人数
    $http.get('/fuyang_backend/volunteers/volTotal?keyParams='+keyParams).success(function(json){
        $scope.volTotal=json.data;
    });
    //总服务时长
    $http.get('/fuyang_backend/volunteers/volTotalTimes?keyParams='+keyParams).success(function(json){
        $scope.volTotalTimes=json.data;
    });
    //通知公告
    $http.get('/fuyang_backend/news/getNewsDynamicParam?newsType=1&keyParams='+keyParams).success(function(json){
        //////console.log(json);
        $scope.announcements=json.data.list;
    });
    //各区动态
    $http.get('/fuyang_backend/news/getNewsDynamicParam?newsType=2&keyParams='+keyParams).success(function(json){
        $scope.news=json.data.list;
    });
    //活动信息
    $http.get('/fuyang_backend/news/getNewsDynamicParam?newsType=3&keyParams='+keyParams).success(function(json){
        $scope.campaigns=json.data.list;
    });
    //精品活动
    var keyParams = hex_sha1('yichuangspace');
    var status=1;
    $http.get('/fuyang_backend/campaigns/getCampaignsByStatus?status='+status+'&pageSize=5&pageNo=1&keyParams='+keyParams).success(function(json){
        $scope.qualityAct=json.data.list;
       // console.log($scope.qualityAct);
       $.each($scope.qualityAct,function (value,index) {
         //  console.log(value,index.id);
           publishFineFlag=index.publishFineFlag;
        if(publishFineFlag==1){
            $http.get('/fuyang_backend/campaigns/getCampaignsByStatus?status='+status+'&publishFineFlag='+1+'&pageSize=5&pageNo=1&keyParams='+keyParams).success(function(json){
                $scope.qualityAct=json.data.list;
                //console.log($scope.qualityAct);
                $.each($scope.qualityAct, function(idx, obj) {
                    var startTime=new Date(obj.startTime.replace(new RegExp("-","gm"),"/")).getTime();
                    var endTime=new Date(obj.endTime.replace(new RegExp("-","gm"),"/")).getTime();
                    var nowTime=new Date().getTime();
                    if(nowTime<startTime-3600000){
                        ////console.log(idx+'活动招募中');
                        obj.activeState='recruiting';
                    }else if(nowTime<startTime){
                        obj.activeState='ongoing';
                        ////console.log(idx+'活动前一个小时停止招募');
                    }else if(nowTime<endTime){
                        obj.activeState='ongoing';
                        ////console.log(idx+'活动进行中');
                    }else if(nowTime>=endTime){
                        obj.activeState='ended';
                        ////console.log(idx+'活动已结束');
                    }
                });
            });
        }else {   $http.get('/fuyang_backend/campaigns/getNewCampaigns?pageSize=4&pageNo=1&keyParams='+keyParams).success(
            function (json) {
              // console.log(json);
                $scope.qualityAct=json.data.list;
                // console.log($scope.qualityAct);
                $.each($scope.qualityAct, function(idx, obj) {
                    var startTime=new Date(obj.startTime.replace(new RegExp("-","gm"),"/")).getTime();
                    var endTime=new Date(obj.endTime.replace(new RegExp("-","gm"),"/")).getTime();
                    var nowTime=new Date().getTime();
                    if(nowTime<startTime-3600000){
                        //console.log(idx+'活动招募中');
                        obj.activeState='recruiting';
                    }else if(nowTime<startTime){
                        obj.activeState='ongoing';
                        //console.log(idx+'活动前一个小时停止招募');
                    }else if(nowTime<endTime){
                        obj.activeState='ongoing';
                        //console.log(idx+'活动进行中');
                    }   else if(nowTime>=endTime){
                        obj.activeState='ended';
                        //console.log(idx+'活动已结束');
                    }
                });
            }
        );
        }
       })
    });
    //志愿风采
    //组织排行
    $http.get('/fuyang_backend/groups/getRankingGroups?pageNo=1&pageSize=5&keyParams='+keyParams).success(function(json){
        $scope.groupsRank=json.data.list;
    });
    //志愿者排行
    $http.get('/fuyang_backend/volunteers/getRankingVolun?pageNo=1&pageSize=5&keyParams='+keyParams).success(function(json){
        $scope.volunRank=json.data.list;
    });
    //公益人物
    $http.get('/fuyang_backend/volunteers/getRankingVolun?pageSize=3&pageNo=1&keyParams='+keyParams).success(function(json){
        $scope.volunteers=json.data.list;
    });
    //志愿者故事
    $http.get('/fuyang_backend/news/getNewsDynamicParam?newsType=4&keyParams='+keyParams).success(function(json){
        $scope.volunStory=json.data.list;
        ////console.log($scope.volunStory);
    });
    //轮播图
    $http.get('/fuyang_backend/news/getNewsDynamicParam?isPublish=1&keyParams='+keyParams).success(function(json){
        $scope.imgs=json.data.list;
    });
}]);
//新闻详情
app.controller('newsDetailCtrl', ['$scope','$http','$routeParams',function ($scope,$http,$routeParams) {
    document.body.scrollTop=0;
    var id=$routeParams.newsId;
    var keyParams = hex_sha1('yichuangspace');
    $http.get('/fuyang_backend/news/getNewsDynamicParam?id='+id+'&keyParams='+keyParams).success(function(json){
        $scope.newsDetail=json.data.list[0];
        var newsType=json.data.list[0].newsType;
        $scope.newsType=newsType;
        if(newsType==1){
            $scope.newsDetail.newsType='通知公告';
        }else if(newsType==2){
            $scope.newsDetail.newsType='各区动态';
        }else if(newsType==3){
            $scope.newsDetail.newsType='活动信息';
        }else if(newsType==4){
            $scope.newsDetail.newsType='公益人物';
        }
        //////console.log($scope.newsDetail);
        $("#news_content").html($scope.newsDetail.content);
        
        console.log($scope.newsDetail.content);
    });

    //各区动态
    $http.get('/fuyang_backend/news/getNewsDynamicParam?newsType=2&keyParams='+keyParams).success(function(json){
        $scope.news=json.data.list;
    });
    //活动信息
    $http.get('/fuyang_backend/news/getNewsDynamicParam?newsType=3&keyParams='+keyParams).success(function(json){
        $scope.campaigns=json.data.list;
        ////console.log($scope.campaigns);
    });
}]);

//首页品牌组织
app.controller('groupCtrl', ['$scope','$http',function ($scope,$http) {
    document.body.scrollTop=0;
    var keyParams = hex_sha1('yichuangspace');
    //各区动态
    $http.get('/fuyang_backend/news/getNewsDynamicParam?newsType=2&keyParams='+keyParams).success(function(json){
        $scope.news=json.data.list;
    });
    //活动信息
    $http.get('/fuyang_backend/news/getNewsDynamicParam?newsType=3&keyParams='+keyParams).success(function(json){
        $scope.campaigns=json.data.list;
    });

    $scope.searchGroup=function(){
        var keyParams = hex_sha1('yichuangspace');
        var groupKeyword = $("#groupKeyword").val();
        ////console.log(groupKeyword);
        var grouptypes = $("#groupTypes").val();
        ////console.log(grouptypes);
        var keyParams12 = hex_sha1(grouptypes+'yichuangspace');
        ////console.log(grouptypes);
        $http.get('/fuyang_backend/groups/getGroupListByTypeOrName?name='+groupKeyword+'&groupType='+grouptypes+'&pageSize='+5+'&pageNo='+1+'&keyParams='+keyParams12).success(function(data){
            ////console.log(data);
            $scope.groupsListOne=data.data.list;
            ////console.log($scope.groupsListOne);
            var totalPage = data.data.total;
            $("#group_listPage").Page({
                totalPages: totalPage,
                liNums: 5,
                activeClass: 'activP',
                callBack : function(page){
                    $http.get('/fuyang_backend/groups/getGroupListByTypeOrName?pageNo='+page+'&pageSize=5&keyParams='+keyParams).success(function(obj){
                        //////console.log(obj);
                        $scope.groupsListOne=obj.data.list;
                        ////console.log($scope.groupsListOne);
                    });
                }
            });
        });
//        $.post("/fuyang_backend/groups/getGroupListByTypeOrName",{
//            name:groupKeyword,
//            groupType:grouptypes,
//            pageSize:5,
//            pageNo:1,
//            keyParams:keyParams12,
//        },function(data){
//            //console.log(data);
//            var totalPage=data.data.pages;
//            var pagesize=4;
//            var str='';
//            $.each(data.data.list,function(i,v){
//                str += '<div class="medias col-xs-12 col-sm-12 col-md-12 col-lg-12" style="padding:8px 0;"> <a class="media-left col-xs-4 col-sm-4 col-md-4 col-lg-4" id="groupPic" href="#"> <img src="'+v.imageUrl+'"> </a> <div class="media-body col-xs-7 col-sm-7 col-md-7 col-lg-7"> <h4 class="media-heading"><a href="#/group_detail" >'+ v.name+'</a></h4> <div class="person">团员人数：&nbsp;<span>'+ v.volTotal+'</span>&nbsp;&nbsp;帮扶项目：&nbsp;<span>'+ v.socialTotal+'</span>&nbsp;&nbsp;服务时长：&nbsp;<span>'+v.serverTime+'</span>&nbsp;&nbsp;活动个数：&nbsp;<span >'+ v.campaignCount+'</span>&nbsp;&nbsp; </div> <p class="groups_description"> 组织简介：<span class="description">'+ v.description+'</span></p> <div class="groups_mess">团队编号：<span class="groups_number" style="color:#e84c3d;">'+ v.groupCode+'</span>成立时间：<span class="status">'+ v.registrationDate+'</span> </div> </div> </div>';
//            });
//            $(".groups_detail").empty().append(str);
//
//            //分页效果
//            $("#group_listPage").empty();
//            $("#group_listPage").Page({
//                totalPages: totalPage,
//                liNums: 5,
//                callBack : function(page,size,count){
//                    $.post('/fuyang_backend/groups/allGroups',{
//                        pageSize:pagesize,
//                        pageNo:page,
//                        keyParams:keyParams,
//                    },function(data){
//                        //////console.log(data);
//                        var str='';
//                        $.each(data.data.list,function(i,v){
//                            str += '<div class="medias col-xs-12 col-sm-12 col-md-12 col-lg-12" style="padding:8px 0;"> <a class="media-left col-xs-4 col-sm-4 col-md-4 col-lg-4" id="groupPic" href="#"> <img src="'+v.imageUrl+'"> </a> <div class="media-body col-xs-7 col-sm-7 col-md-7 col-lg-7"> <h4 class="media-heading"><a href="#/group_detail" >'+ v.name+'</a></h4> <div class="person">团员人数：&nbsp;<span>'+ v.volTotal+'</span>&nbsp;&nbsp;帮扶项目：&nbsp;<span>'+ v.socialTotal+'</span>&nbsp;&nbsp;服务时长：&nbsp;<span>'+v.serverTime+'</span>&nbsp;&nbsp;活动个数：&nbsp;<span >'+ v.campaignCount+'</span>&nbsp;&nbsp; </div> <p class="groups_description"> 组织简介：<span class="description">'+ v.description+'</span></p> <div class="groups_mess">团队编号：<span class="groups_number" style="color:#e84c3d;">'+ v.groupCode+'</span>成立时间：<span class="status">'+ v.registrationDate+'</span> </div> </div> </div>';
//                        });
//                        $(".groups_detail").empty().append(str);
//                    })
//                }
//            });
//        });
    }
    //获取所有的组织
    $http.get('/fuyang_backend/groups/allGroups?pageNo=1&pageSize=5&keyParams='+keyParams).success(function(json){
        $scope.groupsListOne=json.data.list;
        ////console.log($scope.groupsListOne);             

        var totalPage=json.data.pages;
        ////console.log(totalPage);
        var pageSize=5;
        //////console.log(json);      
        $("#group_listPage").Page({
            totalPages: totalPage,
            liNums: 5,
            activeClass: 'activP',
            callBack : function(page){
                $http.get('/fuyang_backend/groups/allGroups?pageNo='+page+'&pageSize=5&keyParams='+keyParams).success(function(obj){
                    //////console.log(obj);
                    $scope.groupsListOne=obj.data.list;
                    ////console.log($scope.groupsListOne);
                });
            }
        });

    });
    //点击获取所有组织
    $scope.helpSub=function(){

        $('.allGroups').addClass("groups_active").parent().siblings().children().removeClass("groups_active");
        $http.get('/fuyang_backend/groups/allGroups?pageNo=1&pageSize=5&keyParams='+keyParams).success(function(data){
            $scope.groupsListOne=data.data.list;
            ////console.log($scope.groupsListOne);
            var totalPage=data.data.pages;
            $("#group_listPage").Page({
                totalPages: totalPage,
                liNums: 5,
                activeClass: 'activP',
                callBack : function(page){
                    $http.get('/fuyang_backend/groups/allGroups?pageNo='+page+'&pageSize=5&keyParams='+keyParams).success(function(obj){
                        //////console.log(obj);
                        $scope.groupsListOne=obj.data.list;
                        ////console.log($scope.groupsListOne);
                    });
                }
            });
        });
    }

    //获取所有推荐的组织
    $scope.recommend=function(){
        $('.recommedGroups').addClass("groups_active").parent().siblings().children().removeClass("groups_active");
        $http.get('/fuyang_backend/groups/getRecommend?pageNo=1&pageSize=5&keyParams='+keyParams).success(function(data){
            $scope.groupsListOne=data.data.list;
            ////console.log($scope.groupsListOne);
            var totalPage=data.data.pages;
            $("#group_listPage").Page({
                totalPages: totalPage,
                liNums: 5,
                activeClass: 'activP',
                callBack : function(page){
                    $http.get('/fuyang_backend/groups/getRecommend?pageNo='+page+'&pageSize=5&keyParams='+keyParams).success(function(obj){
                        //////console.log(obj);
                        $scope.groupsListOne=obj.data.list;
                        ////console.log($scope.groupsListOne);
                    });
                }
            });
        });
    }

    //获取所有最新的组织
    $scope.newMost=function(){
        $('.newMostGroups').addClass("groups_active").parent().siblings().children().removeClass("groups_active");
        $http.get('/fuyang_backend/groups/newGroup?pageNo=1&pageSize=5&keyParams='+keyParams).success(function(data){
            $scope.groupsListOne=data.data.list;
            ////console.log();
            var totalPage=data.data.pages;
            $("#group_listPage").Page({
                totalPages: totalPage,
                liNums: 5,
                activeClass: 'activP',
                callBack : function(page){
                    $http.get('/fuyang_backend/groups/newGroup?pageNo='+page+'&pageSize=5&keyParams='+keyParams).success(function(obj){
                        //////console.log(obj);
                        $scope.groupsListOne=obj.data.list;
                        ////console.log($scope.groupsListOne);
                    });
                }
            });
        });
    }

    //获取所有最热的组织
    $scope.hotMost=function(){
        $('.hotMostGroups').addClass("groups_active").parent().siblings().children().removeClass("groups_active");
        $http.get('/fuyang_backend/groups/newGroup?pageNo=1&pageSize=5&keyParams='+keyParams).success(function(data){
            $scope.groupsListOne=data.data.list;
            var totalPage=data.data.pages;
            $("#group_listPage").Page({
                totalPages: totalPage,
                liNums: 5,
                activeClass: 'activP',
                callBack : function(page){
                    $http.get('/fuyang_backend/groups/newGroup?pageNo='+page+'&pageSize=5&keyParams='+keyParams).success(function(obj){
                        //////console.log(obj);
                        $scope.groupsListOne=obj.data.list;
                        ////console.log($scope.groupsListOne);
                    });
                }
            });
        });
    }

    //获取人数最多的组织
    $scope.volMost=function(){
        $('.campaignMost').addClass("groups_active").parent().siblings().children().removeClass("groups_active");
        $http.get('/fuyang_backend/groups/mostVol?pageNo=1&pageSize=5&keyParams='+keyParams).success(function(data){
            $scope.groupsListOne=data.data.list;
            ////console.log();
            var totalPage=data.data.pages;
            $("#group_listPage").Page({
                totalPages: totalPage,
                liNums: 5,
                activeClass: 'activP',
                callBack : function(page){
                    $http.get('/fuyang_backend/groups/mostVol?pageNo='+page+'&pageSize=5&keyParams='+keyParams).success(function(obj){
                        //////console.log(obj);
                        $scope.groupsListOne=obj.data.list;
                        ////console.log($scope.groupsListOne);
                    });
                }
            });
        });
    }
    //获取活动数最多的组织
    $scope.campaignMost=function(){
        $http.get('/fuyang_backend/groups/getRankingGroups?pageNo=1&pageSize=5&keyParams='+keyParams).success(function(data){
            $scope.groupsListOne=data.data.list;
            ////console.log();
            $("#group_listPage").Page({
                totalPages: totalPage,
                liNums: 5,
                activeClass: 'activP',
                callBack : function(page){
                    $http.get('/fuyang_backend/groups/getRankingGroups?pageNo='+page+'&pageSize=5&keyParams='+keyParams).success(function(obj){
                        //////console.log(obj);
                        $scope.groupsListOne=obj.data.list;
                        ////console.log($scope.groupsListOne);
                    });
                }
            });
        });
    }

    $scope.signGroup=function(){
        location.href='sign_groups.html';
    };
}]);
//组织详情页
app.controller('groupDetailCtrl', ['$rootScope','$scope','$http','$routeParams',function ($rootScope,$scope,$http,$routeParams) {
    document.body.scrollTop=0;
    var groupId=$routeParams.id;
    var keyParams = hex_sha1('yichuangspace');
    //各区动态
    $http.get('/fuyang_backend/news/getNewsDynamicParam?newsType=2&keyParams='+keyParams).success(function(json){
        $scope.news=json.data.list;
    });
    //活动信息
    $http.get('/fuyang_backend/news/getNewsDynamicParam?newsType=3&keyParams='+keyParams).success(function(json){
        $scope.campaigns=json.data.list;
    });

    var token;
    var userType;
    var volunteerId;

    var data_temp = $rootScope.user;
    if(data_temp){
        token=data_temp.token;
        userType= data_temp.type;
        volunteerId = data_temp.volunteerId;
    }

    var keyParams = hex_sha1(groupId+'yichuangspace');
    //根据组织id查询所有发布的活动
    $http.get('/fuyang_backend/groups/getCampaignListByGroupId?id='+groupId+'&pageNo=1&pageSize=3&keyParams='+keyParams).success(function(json){
        var totalPage=json.data.pages;
        var pageSize=3;
        $scope.allCampaign=json.data.list;
        $("#actlist_page").Page({
            totalPages: totalPage,
            liNums: 5,
            activeClass: 'activP',
            callBack : function(page){
                $http.get('/fuyang_backend/groups/getCampaignListByGroupId?id='+groupId+'&pageSize='+pageSize+'&pageNo='+page+'&keyParams='+keyParams).success(function(obj){
                    $scope.allCampaign=obj.data.list;
                });
            }
        });
    });
    
    $http.get('/fuyang_backend/groups/getGroupById?id='+groupId+'&keyParams='+keyParams).success(function(json){
        $scope.org=json.data[0];
        ////console.log($scope.org);
        if($scope.org.groupType=='1'){
            $scope.org.groupType = '巾帼团队';
        }
        if($scope.org.groupType=='2'){
            $scope.org.groupType = '阳光助残';
        }
        if($scope.org.groupType=='3'){
            $scope.org.groupType = '邻里守望';
        }
        if($scope.org.groupType=='4'){
            $scope.org.groupType = '关爱留守儿童';
        }
        if($scope.org.groupType=='5'){
            $scope.org.groupType = '环境保护';
        }
        if($scope.org.groupType=='6'){
            $scope.org.groupType = '应急救援';
        }
        if($scope.org.groupType=='7'){
            $scope.org.groupType = '扶贫开发';
        }
        if($scope.org.groupType=='8'){
            $scope.org.groupType = '文化宣传';
        }
        if($scope.org.groupType=='9'){
            $scope.org.groupType = '网络文明';
        }
        if($scope.org.groupType=='10'){
            $scope.org.groupType = '大型赛会';
        }
        if($scope.org.groupType=='11'){
            $scope.org.groupType = '普法宣传';
        }
        if($scope.org.groupType=='12'){
            $scope.org.groupType = '其他';
        }
    });

    var keyParams1 = hex_sha1("yichuangspace");
    $http.get('/fuyang_backend/groups/newGroup?pageNo=1&pageSize=5&keyParams='+keyParams1).success(function(data){
        $scope.groupsListOne=data.data.list;
    });

    $scope.joinGroup=function(){
        if(!$rootScope.user){
            alert("请登录");
            return;
        }
        //1.ajax判断异地登录 if异地登录return
        var keyParams = hex_sha1(token+'yichuangspace');
        $http.get('/fuyang_backend/common/checkToken?token='+token+'&keyParams='+keyParams).success(function(data){
            ////console.log(data.message);
            if(!data.data){
                alert("您的账号已经在别处登录，请重新登录后继续操作！");
                return;
            }
        });
        //2.判断是否为志愿者
        if(userType == '' ){
            alert("您还未成为志愿者，请登录志愿者后继续操作！");
            return;
        }else if(userType != '1'){
            alert("只有志愿者才能加入组织！");
            return;
        }
        //3.ajax调用参加接口
        var keyParams1 = hex_sha1(groupId+volunteerId+'yichuangspace');
        $http.get('/fuyang_backend/volunteers/joinGroup?GroupId='+groupId+'&id='+volunteerId+'&keyParams='+keyParams1).success(function(data){
            var joinState = data.state;
            if(joinState == 0){
                alert("您的申请已经提交成功，请等待审核！");
            }else if(joinState == 1005){
                alert("您已经加入过组织，请不要重复申请！");
            }else{
            	alert("操作失败，请稍候重试！");
            }
        });
    }
}]);

//首页活动列表
app.controller('campaignCtrl', ['$scope','$http',function ($scope,$http) {
    document.body.scrollTop=0;
    var keyParams = hex_sha1('yichuangspace');
    //各区动态
    $http.get('/fuyang_backend/news/getNewsDynamicParam?newsType=2&keyParams='+keyParams).success(function(json){
        $scope.news=json.data.list;
    });
    //活动信息
    $http.get('/fuyang_backend/news/getNewsDynamicParam?newsType=3&keyParams='+keyParams).success(function(json){
        $scope.campaigns=json.data.list;
    });
    //全部
    var status=1;
    $http.get('/fuyang_backend/campaigns/getCampaignsByStatus?status='+status+'&pageSize=5&pageNo=1&keyParams='+keyParams).success(function(json){
        var totalPage=json.data.pages;
        var pageSize=5;
        //////console.log(json);
        $scope.list=json.data.list;
        $("#campaign_page").Page({
            totalPages: totalPage,
            liNums: 5,
            activeClass: 'activP',
            callBack : function(page){
                $http.get('/fuyang_backend/campaigns/getCampaignsByStatus?status='+status+'&pageSize='+pageSize+'&pageNo='+page+'&keyParams='+keyParams).success(function(obj){
                    ////console.log(obj);
                    $scope.list=obj.data.list;
                });
            }
        });
    });
    
//    获取所有活动
    $scope.allactivity = function(){
    	$http.get('/fuyang_backend/campaigns/getCampaignsByStatus?status='+status+'&pageSize=5&pageNo=1&keyParams='+keyParams).success(function(json){
            var totalPage=json.data.pages;
            var pageSize=5;
            //////console.log(json);
            $scope.list=json.data.list;
            $("#campaign_page").Page({
                totalPages: totalPage,
                liNums: 5,
                activeClass: 'activP',
                callBack : function(page){
                    $http.get('/fuyang_backend/campaigns/getCampaignsByStatus?status='+status+'&pageSize='+pageSize+'&pageNo='+page+'&keyParams='+keyParams).success(function(obj){
                        ////console.log(obj);
                        $scope.list=obj.data.list;
                    });
                }
            });
        });
    }
    
//    获取今日的活动
    $scope.todayactivity = function(){
    	$http.get('/fuyang_backend/campaigns/today?pageSize=5&pageNo=1&keyParams='+keyParams).success(function(json){
            var totalPage=json.data.pages;
            var pageSize=5;
            //////console.log(json);
            $scope.list=json.data.list;
            $("#campaign_page").Page({
                totalPages: totalPage,
                liNums: 5,
                activeClass: 'activP',
                callBack : function(page){
                    $http.get('/fuyang_backend/campaigns/today?pageSize='+pageSize+'&pageNo='+page+'&keyParams='+keyParams).success(function(obj){
                        ////console.log(obj);
                        $scope.list=obj.data.list;
                    });
                }
            });
        });
    }
    
//    获取本周活动
    $scope.weekactivity = function(){
    	$http.get('/fuyang_backend/campaigns/week?pageSize=5&pageNo=1&keyParams='+keyParams).success(function(json){
            var totalPage=json.data.pages;
            var pageSize=5;
            //////console.log(json);
            $scope.list=json.data.list;
            $("#campaign_page").Page({
                totalPages: totalPage,
                liNums: 5,
                activeClass: 'activP',
                callBack : function(page){
                    $http.get('/fuyang_backend/campaigns/week?pageSize='+pageSize+'&pageNo='+page+'&keyParams='+keyParams).success(function(obj){
                        ////console.log(obj);
                        $scope.list=obj.data.list;
                    });
                }
            });
        });
    }
    
//    获取本月活动
    $scope.monthactivity = function(){
    	$http.get('/fuyang_backend/campaigns/month?pageSize=5&pageNo=1&keyParams='+keyParams).success(function(json){
            var totalPage=json.data.pages;
            var pageSize=5;
            //////console.log(json);
            $scope.list=json.data.list;
            $("#campaign_page").Page({
                totalPages: totalPage,
                liNums: 5,
                activeClass: 'activP',
                callBack : function(page){
                    $http.get('/fuyang_backend/campaigns/month?pageSize='+pageSize+'&pageNo='+page+'&keyParams='+keyParams).success(function(obj){
                        ////console.log(obj);
                        $scope.list=obj.data.list;
                    });
                }
            });
        });
    }
    
//    获取最热活动
    $scope.hotactivity = function(){
    	$http.get('/fuyang_backend/campaigns/getHostCampaigns?pageSize=5&pageNo=1&keyParams='+keyParams).success(function(json){
            var totalPage=json.data.pages;
            var pageSize=5;
            //////console.log(json);
            $scope.list=json.data.list;
            $("#campaign_page").Page({
                totalPages: totalPage,
                liNums: 5,
                activeClass: 'activP',
                callBack : function(page){
                    $http.get('/fuyang_backend/campaigns/getHostCampaigns?pageSize='+pageSize+'&pageNo='+page+'&keyParams='+keyParams).success(function(obj){
                        ////console.log(obj);
                        $scope.list=obj.data.list;
                    });
                }
            });
        });
    }
    
//    获取最新活动
    $scope.newactivity = function(){
    	$http.get('/fuyang_backend/campaigns/getNewCampaigns?pageSize=5&pageNo=1&keyParams='+keyParams).success(function(json){
            var totalPage=json.data.pages;
            var pageSize=5;
            //////console.log(json);
            $scope.list=json.data.list;
            $("#campaign_page").Page({
                totalPages: totalPage,
                liNums: 5,
                activeClass: 'activP',
                callBack : function(page){
                    $http.get('/fuyang_backend/campaigns/getNewCampaigns?pageSize='+pageSize+'&pageNo='+page+'&keyParams='+keyParams).success(function(obj){
                        ////console.log(obj);
                        $scope.list=obj.data.list;
                    });
                }
            });
        });
    }
    
    $scope.createAct=function(){
        alert('待实现');
    };
}]);
//活动详情页
app.controller('actDetailCtrl', ['$rootScope','$scope','$http','$routeParams',function ($rootScope,$scope,$http,$routeParams) {
    document.body.scrollTop=0;
    var keyParams = hex_sha1('yichuangspace');
    //各区动态
    $http.get('/fuyang_backend/news/getNewsDynamicParam?newsType=2&keyParams='+keyParams).success(function(json){
        $scope.news=json.data.list;
    });
    //活动信息
    $http.get('/fuyang_backend/news/getNewsDynamicParam?newsType=3&keyParams='+keyParams).success(function(json){
        $scope.campaigns=json.data.list;
    });
    var id=$routeParams.actId;
    var keyParams = hex_sha1(id+'yichuangspace');
    $http.get('/fuyang_backend/campaigns/getCampaignInfoId?id='+id+'&keyParams='+keyParams).success(function(json){
        $scope.activity=json.data[0];
        //获取当前时间毫秒数
        $scope.nowTimeMsec=new Date().getTime();
        //将活动日期转化为毫秒数
        $scope.startTimeMsec=new Date($scope.activity.startTime.replace(new RegExp("-","gm"),"/")).getTime();
        $scope.endTimeMsec=new Date($scope.activity.endTime.replace(new RegExp("-","gm"),"/")).getTime();
        if($scope.nowTimeMsec<$scope.startTimeMsec-3600000){
            var msg='申请加入';
        }else if($scope.nowTimeMsec<$scope.startTimeMsec){
            var msg='活动前一小时停止招募';
            $('#obtn').prop('disabled',true);
            $('#obtn').css('backgroundColor',"#C0C0C0");
        }else if($scope.nowTimeMsec<$scope.endTimeMsec){
            var msg='活动进行中';
            $('#obtn').prop('disabled',true);
        }else if($scope.nowTimeMsec>=$scope.endTimeMsec){
            var msg='活动已结束';
            $('#obtn').prop('disabled',true);
            $('#obtn').css('backgroundColor',"#C0C0C0");
        }
        $('#obtn').html(msg);
        //if($rootScope.user){
        //    var token=$rootScope.user.token;
        //    var volunteerId=$rootScope.user.volunteerId;
        //    //console.log(volunteerId);
        //    var keyParams = hex_sha1(volunteerId+id+'yichuangspace');
        //    $http.get('/fuyang_backend/records/judge?volunteerId='+volunteerId+'&campaignId='+id+'&keyParams='+keyParams+'&token='+token).success(function(json){
        //        var queryState = json.state;
        //        //console.log(json);
        //        if('0'==queryState){
        //            var msg="审核通过，请准时参加";
        //            $('#obtn').prop('disabled',true);
        //        }else{
        //            $http.get('/fuyang_backend/records/partTake?volunteerId='+volunteerId+'&campaignId='+id+'&keyParams='+keyParams+'&token='+token).success(function(json){
        //                var returnState = json.state;
        //                if("0" == returnState){
        //                    var msg='报名成功，请等待审核';
        //                    $('#obtn').prop('disabled',true);
        //                }
        //            });
        //        }
        //        $('#obtn').html(msg);
        //    });
        //}
    });
    $scope.joinAct=function(){
        var limit=$scope.activity.limit;
        var membercount=$scope.activity.memberCount;
        if(limit<membercount){
            $('#obtn').html('活动人数已满');
        }
        if($scope.nowTimeMsec<$scope.startTimeMsec-3600000){
            if($rootScope.user){
                var token=$rootScope.user.token;
                var volunteerId=$rootScope.user.volunteerId;
                var userType = $rootScope.user.type;
                if("1" != userType){
                    alert("您不是志愿者，不可参加活动！");
                    return;
                }
                var keyParams = hex_sha1(token+'yichuangspace');
                $http.get('/fuyang_backend/common/checkToken?token='+token+'&keyParams='+keyParams).success(function(data){
                    if(!data.data){
                        alert("您的账号已经在别处登录，请重新登录后继续操作！");
                        return;
                    }
                });
                var keyParams = hex_sha1(volunteerId+id+'yichuangspace');
//                $http.get('/fuyang_backend/records/judge?volunteerId='+volunteerId+'&campaignId='+id+'&keyParams='+keyParams+'&token='+token).success(function(json){
//                    var queryState = json.state;
//                    if('0'==queryState){
//                        alert("您也申请过此活动，请准时参加!");
//                    }else{
                        $http.get('/fuyang_backend/records/partTake?volunteerId='+volunteerId+'&campaignId='+id+'&keyParams='+keyParams+'&token='+token).success(function(json){
                            var returnState = json.state;
//                            if("2002" == returnState){
//                                alert("请重新登录");
//                            }else if("0" == returnState){
//                                alert('报名成功，请等待审核');
//                            }
                            alert(json.message);
                        });
//                    }
//                });
            }else{
                alert("请登录！")
            }
        }
    }
}]);
//风采人物后台数据接口。。。。
app.controller('personCtrl', ['$scope','$http',function ($scope,$http) {
    document.body.scrollTop=0;
    var keyParams = hex_sha1('yichuangspace');

    //各区动态
    $http.get('/fuyang_backend/news/getNewsDynamicParam?newsType=2&keyParams='+keyParams).success(function(json){
        $scope.news=json.data.list;
    });
    //活动信息
    $http.get('/fuyang_backend/news/getNewsDynamicParam?newsType=3&keyParams='+keyParams).success(function(json){
        $scope.campaigns=json.data.list;
    });
    //*******************初始化显示****************
    $http.get('/fuyang_backend/volunteers/getRankingVolun?pageSize=10&pageNo=1&keyParams='+keyParams).success(function(json){
        ////console.log(json);
        var totalPage=json.data.pages;
        var pagesize=10;
        $scope.list=json.data.list;
        $("#person_listPage").Page({
            totalPages: totalPage,
            liNums: 5,
            activeClass: 'activP',
            callBack : function(page){
                $http.get('/fuyang_backend/volunteers/getRankingVolun?pageSize='+pagesize+'&pageNo='+page+'&keyParams='+keyParams).success(function(obj){
                    ////console.log(obj);
                    $scope.list=obj.data.list;
                });
            }
        });
    });
    //*******************点击全部显示****************
    $scope.showTotal=function(){
        $http.get('/fuyang_backend/volunteers/allVolun?pageSize=10&pageNo=1&keyParams='+keyParams).success(function(json){
            ////console.log(json);
            var totalPage=json.data.pages;
            var pagesize=10;
            $scope.list=json.data.list;
            $("#person_listPage").Page({
                totalPages: totalPage,
                liNums: 5,
                activeClass: 'activP',
                callBack : function(page){
                    $http.get('/fuyang_backend/volunteers/allVolun?pageSize='+pagesize+'&pageNo='+page+'&keyParams='+keyParams).success(function(obj){
                        ////console.log(obj);
                        $scope.list=obj.data.list;
                    });
                }
            });
        });
    };
    //*******************点击推荐显示****************
    $scope.showF=function(){
        $http.get('/fuyang_backend/volunteers/getRankingVolun?pageSize=10&pageNo=1&keyParams='+keyParams).success(function(json){
            ////console.log(json);
            var totalPage=json.data.pages;
            var pagesize=10;
            $scope.list=json.data.list;
            $("#person_listPage").Page({
                totalPages: totalPage,
                liNums: 5,
                activeClass: 'activP',
                callBack : function(page){
                    $http.get('/fuyang_backend/volunteers/getRankingVolun?pageSize='+pagesize+'&pageNo='+page+'&keyParams='+keyParams).success(function(obj){
                        ////console.log(obj);
                        $scope.list=obj.data.list;
                    });
                }
            });
        });
    };
    //*******************点击最新显示****************
    $scope.showTW=function(){
        $http.get('/fuyang_backend/volunteers/getNewVolun?pageSize=10&pageNo=1&keyParams='+keyParams).success(function(json){
            ////console.log(json);
            var totalPage=json.data.pages;
            var pagesize=10;
            $scope.list=json.data.list;
            $("#person_listPage").Page({
                totalPages: totalPage,
                liNums: 5,
                activeClass: 'activP',
                callBack : function(page){
                    $http.get('/fuyang_backend/volunteers/getNewVolun?pageSize='+pagesize+'&pageNo='+page+'&keyParams='+keyParams).success(function(obj){
                        ////console.log(obj);
                        $scope.list=obj.data.list;
                    });
                }
            });
        });
    };
    //*******************点击最热显示****************
    $scope.showTH=function(){
        $http.get('/fuyang_backend/volunteers/getMostCam?pageSize=10&pageNo=1&keyParams='+keyParams).success(function(json){
            ////console.log(json);
            var totalPage=json.data.pages;
            var pagesize=10;
            $scope.list=json.data.list;
            $("#person_listPage").Page({
                totalPages: totalPage,
                liNums: 5,
                activeClass: 'activP',
                callBack : function(page){
                    $http.get('/fuyang_backend/volunteers/getMostCam?pageSize='+pagesize+'&pageNo='+page+'&keyParams='+keyParams).success(function(obj){
                        ////console.log(obj);
                        $scope.list=obj.data.list;
                    });
                }
            });
        });
    };
}]);

//通知公告列表
app.controller('newsListCtrl1', ['$scope','$http',function ($scope,$http) {
    document.body.scrollTop=0;
    var keyParams = hex_sha1('yichuangspace');
    //通知公告
    $http.get('/fuyang_backend/news/getNewsDynamicParam?newsType=1&keyParams='+keyParams).success(function(json){
        ////console.log(json);
        var totalPage=json.data.pages;
        var pagesize=10;
        $scope.announcements=json.data.list;
        $("#newslist_page1").Page({
            totalPages: totalPage,
            liNums: 5,
            activeClass: 'activP',
            callBack : function(page){
                $http.get('/fuyang_backend/news/getNewsDynamicParam?newsType=1+&pageSize='+pagesize+'&pageNo='+page+'&keyParams='+keyParams).success(function(obj){
                    $scope.announcements=obj.data.list;
                });
            }
        });
    });
}]);
//各区动态列表
app.controller('newsListCtrl2', ['$scope','$http',function ($scope,$http) {
    document.body.scrollTop=0;
    var keyParams = hex_sha1('yichuangspace');
    //各区动态
    $http.get('/fuyang_backend/news/getNewsDynamicParam?newsType=2&keyParams='+keyParams).success(function(json){
        ////console.log(json);
        var totalPage=json.data.pages;
        var pagesize=10;
        $scope.news=json.data.list;
        $("#newslist_page2").Page({
            totalPages: totalPage,
            liNums: 5,
            activeClass: 'activP',
            callBack : function(page){
                $http.get('/fuyang_backend/news/getNewsDynamicParam?newsType=2+&pageSize='+pagesize+'&pageNo='+page+'&keyParams='+keyParams).success(function(obj){
                    $scope.news=obj.data.list;
                });
            }
        });
    });
}]);
//活动信息列表
app.controller('newsListCtrl3', ['$scope','$http',function ($scope,$http) {
    document.body.scrollTop=0;
    var keyParams = hex_sha1('yichuangspace');
    //活动信息
    $http.get('/fuyang_backend/news/getNewsDynamicParam?newsType=3&keyParams='+keyParams).success(function(json){
        ////console.log(json);
        var totalPage=json.data.pages;
        var pagesize=10;
        $scope.campaigns=json.data.list;
        $("#newslist_page3").Page({
            totalPages: totalPage,
            liNums: 5,
            activeClass: 'activP',
            callBack : function(page){
                $http.get('/fuyang_backend/news/getNewsDynamicParam?newsType=3+&pageSize='+pagesize+'&pageNo='+page+'&keyParams='+keyParams).success(function(obj){
                    $scope.campaigns=obj.data.list;
                });
            }
        });
    });
}]);
//公益人物列表
app.controller('newsListCtrl4', ['$scope','$http',function ($scope,$http) {
    document.body.scrollTop=0;
    var keyParams = hex_sha1('yichuangspace');
    //活动信息
    $http.get('/fuyang_backend/news/getNewsDynamicParam?newsType=4&keyParams='+keyParams).success(function(json){
        //////console.log(json);
        var totalPage=json.data.pages;
        var pagesize=10;
        $scope.volunStory=json.data.list;
        $("#newslist_page4").Page({
            totalPages: totalPage,
            liNums: 5,
            activeClass: 'activP',
            callBack : function(page){
                $http.get('/fuyang_backend/news/getNewsDynamicParam?newsType=4+&pageSize='+pagesize+'&pageNo='+page+'&keyParams='+keyParams).success(function(obj){
                    $scope.volunStory=obj.data.list;
                });
            }
        });
    });
}]);

app.directive('repeatFinish',function(){
    return {
        link: function(scope,element,attr){
            if(scope.$last == true){
                scope.$eval( attr.repeatFinish );
            }
        }
    }
});
//客户端下载
app.controller('clientCtrl',['$rootScope','$scope','$http',function($rootScope,$scope,$http){

}]);
//页面父控制器
app.controller('parentCtrl',['$rootScope','$scope','$http',function($rootScope,$scope,$http){
    document.body.scrollTop=0;
    $scope.renderFinish = function(){
        $('.carousel').carousel();
    };
    var user=getStorage('data',1000*60*60*24);
    if (user!="" && user!=null) {
        $rootScope.user=user.data;
    }else{
        localStorage.removeItem('data');
    }
    $rootScope.logout=function(){
        localStorage.removeItem('data');
        location.reload();
    };
}]);
app.config(function($routeProvider){
    $routeProvider.when('/start',{
        templateUrl:'tpl/start.html',
    }).
        when('/groups',{
            templateUrl:'tpl/groups.html'
        }).
        when('/campaign',{
            templateUrl:'tpl/campaign.html',
        }).
        when('/luntan',{
            templateUrl:'tpl/luntan.html',
        }).
        when('/client',{
            templateUrl:'tpl/client.html',
        }).
        when('/volun',{
            templateUrl:'tpl/volun.html',
        }).
        when('/association_profile',{
            templateUrl:'tpl/association_profile.html',
        }).
        when('/group_detail/:id',{
            templateUrl:'tpl/group_detail.html',
        }).
        when('/news_detail',{
            templateUrl:'tpl/news_detail.html',
        }).
        when('/news_detail/:newsId',{
            templateUrl:'tpl/news_detail.html',
        }).
        when('/active_detail/:actId',{
            templateUrl:'tpl/active_detail.html',
        }).
        when('/1/news_list',{
            templateUrl:'tpl/newsList/1/list.html',
        }).
        when('/2/news_list',{
            templateUrl:'tpl/newsList/2/list.html',
        }).
        when('/3/news_list',{
            templateUrl:'tpl/newsList/3/list.html',
        }).
        when('/4/news_list',{
            templateUrl:'tpl/newsList/4/list.html',
        }).
        otherwise({
            redirectTo:'/start',
        })
});

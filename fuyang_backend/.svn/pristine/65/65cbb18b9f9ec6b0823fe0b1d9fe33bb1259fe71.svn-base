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

function changeCss(obj){
    //alert(111);
    //console.log(obj);
    var keyParams = hex_sha1('yichuangspace');
    if(obj.text=="全部"){
        $(obj).addClass("groups_active").parent().siblings().children().removeClass("groups_active");

        //分页前页面打开是展现第一页的内容
        $.post("/fuyang_backend/groups/allGroups",{
            pageSize:4,
            pageNo:1,
            keyParams:keyParams,
        },function(data){
            //console.log(data);
            var totalPage=data.data.pages;
            var pagesize=4;
            var str='';
            $.each(data.data.list,function(i,v){
                str += '<div class="medias col-xs-12 col-sm-12 col-md-12 col-lg-12" style="padding:8px 0;"> <a class="media-left col-xs-4 col-sm-4 col-md-4 col-lg-4" id="groupPic" href="#/group_detail?"> <img src="'+v.imageUrl+'"> </a> <div class="media-body col-xs-7 col-sm-7 col-md-7 col-lg-7"> <h4 class="media-heading"><a href="#/group_detail" >'+ v.name+'</a></h4> <div class="person">团员人数：&nbsp;<span>'+ v.volTotal+'</span>&nbsp;&nbsp;帮扶项目：&nbsp;<span>'+ v.socialTotal+'</span>&nbsp;&nbsp;服务时长：&nbsp;<span>'+v.serverTime+'</span>&nbsp;&nbsp;活动个数：&nbsp;<span >'+ v.campaignCount+'</span>&nbsp;&nbsp; </div> <p class="groups_description"> 组织简介：<span class="description">'+ v.description+'</span></p> <div class="groups_mess">团队编号：<span class="groups_number" style="color:#e84c3d;">'+ v.groupCode+'</span>成立时间：<span class="status">'+ v.registrationDate+'</span> </div> </div> </div>';
            });
            $(".groups_detail").empty().append(str);

            //分页效果
            $("#group_listPage").empty();
            $("#group_listPage").Page({
                totalPages: totalPage,
                liNums: 5,
                callBack : function(page,size,count){
                    $.post('/fuyang_backend/groups/allGroups',{
                        pageSize:pagesize,
                        pageNo:page,
                        keyParams:keyParams,
                    },function(data){
                        //console.log(data);
                        var str='';
                        $.each(data.data.list,function(i,v){
                            str += '<div class="medias col-xs-12 col-sm-12 col-md-12 col-lg-12" style="padding:8px 0;"> <a class="media-left col-xs-4 col-sm-4 col-md-4 col-lg-4" id="groupPic" href="#"> <img src="'+v.imageUrl+'"> </a> <div class="media-body col-xs-7 col-sm-7 col-md-7 col-lg-7"> <h4 class="media-heading"><a href="#/group_detail" >'+ v.name+'</a></h4> <div class="person">团员人数：&nbsp;<span>'+ v.volTotal+'</span>&nbsp;&nbsp;帮扶项目：&nbsp;<span>'+ v.socialTotal+'</span>&nbsp;&nbsp;服务时长：&nbsp;<span>'+v.serverTime+'</span>&nbsp;&nbsp;活动个数：&nbsp;<span >'+ v.campaignCount+'</span>&nbsp;&nbsp; </div> <p class="groups_description"> 组织简介：<span class="description">'+ v.description+'</span></p> <div class="groups_mess">团队编号：<span class="groups_number" style="color:#e84c3d;">'+ v.groupCode+'</span>成立时间：<span class="status">'+ v.registrationDate+'</span> </div> </div> </div>';
                        });
                        $(".groups_detail").empty().append(str);
                    })
                }
            });
        });

    }
    if(obj.text=="推荐"){
        $(obj).addClass("groups_active").parent().siblings().children().removeClass("groups_active");

        //分页前页面打开是展现第一页的内容
        $.post("/fuyang_backend/groups/getRecommend",{
            pageSize:4,
            pageNo:1,
            keyParams:keyParams,
        },function(data){
            //console.log(data);
            var totalPage=data.data.pages;
            var pagesize=4;
            var str='';
            $.each(data.data.list,function(i,v){
                str += '<div class="medias col-xs-12 col-sm-12 col-md-12 col-lg-12" style="padding:8px 0;"> <a class="media-left col-xs-4 col-sm-4 col-md-4 col-lg-4" id="groupPic" href="#"> <img src="'+v.imageUrl+'"> </a> <div class="media-body col-xs-7 col-sm-7 col-md-7 col-lg-7"> <h4 class="media-heading"><a href="#/group_detail" >'+ v.name+'</a></h4> <div class="person">团员人数：&nbsp;<span>'+ v.volTotal+'</span>&nbsp;&nbsp;帮扶项目：&nbsp;<span>'+ v.socialTotal+'</span>&nbsp;&nbsp;服务时长：&nbsp;<span>'+v.serverTime+'</span>&nbsp;&nbsp;活动个数：&nbsp;<span >'+ v.campaignCount+'</span>&nbsp;&nbsp; </div> <p class="groups_description"> 组织简介：<span class="description">'+ v.description+'</span></p> <div class="groups_mess">团队编号：<span class="groups_number" style="color:#e84c3d;">'+ v.groupCode+'</span>成立时间：<span class="status">'+ v.registrationDate+'</span> </div> </div> </div>';
            });
            $(".groups_detail").empty().append(str);

            //分页效果
            $("#group_listPage").empty();
            $("#group_listPage").Page({
                totalPages: totalPage,
                liNums: 5,
                callBack : function(page,size,count){
                    $.post('/fuyang_backend/groups/getRecommend',{
                        pageSize:pagesize,
                        pageNo:page,
                        keyParams:keyParams,
                    },function(data){
                        //console.log(data);
                        var str='';
                        $.each(data.data.list,function(i,v){
                            str += '<div class="medias col-xs-12 col-sm-12 col-md-12 col-lg-12" style="padding:8px 0;"> <a class="media-left col-xs-4 col-sm-4 col-md-4 col-lg-4" id="groupPic" href="#"> <img src="'+v.imageUrl+'"> </a> <div class="media-body col-xs-7 col-sm-7 col-md-7 col-lg-7"> <h4 class="media-heading"><a href="#/group_detail" >'+ v.name+'</a></h4> <div class="person">团员人数：&nbsp;<span>'+ v.volTotal+'</span>&nbsp;&nbsp;帮扶项目：&nbsp;<span>'+ v.socialTotal+'</span>&nbsp;&nbsp;服务时长：&nbsp;<span>'+v.serverTime+'</span>&nbsp;&nbsp;活动个数：&nbsp;<span >'+ v.campaignCount+'</span>&nbsp;&nbsp; </div> <p class="groups_description"> 组织简介：<span class="description">'+ v.description+'</span></p> <div class="groups_mess">团队编号：<span class="groups_number" style="color:#e84c3d;">'+ v.groupCode+'</span>成立时间：<span class="status">'+ v.registrationDate+'</span> </div> </div> </div>';
                        });
                        $(".groups_detail").empty().append(str);
                    })
                }
            });
        });

    }
    if(obj.text=="最新"){
        $(obj).addClass("groups_active").parent().siblings().children().removeClass("groups_active");

        //分页前页面打开是展现第一页的内容
        $.post("/fuyang_backend/groups/newGroup",{
            pageSize:4,
            pageNo:1,
            keyParams:keyParams,
        },function(data){
            //console.log(data);
            var totalPage=data.data.pages;
            var pagesize=4;
            var str='';
            $.each(data.data.list,function(i,v){
                str += '<div class="medias col-xs-12 col-sm-12 col-md-12 col-lg-12" style="padding:8px 0;"> <a class="media-left col-xs-4 col-sm-4 col-md-4 col-lg-4" id="groupPic" href="#"> <img src="'+v.imageUrl+'"> </a> <div class="media-body col-xs-7 col-sm-7 col-md-7 col-lg-7"> <h4 class="media-heading"><a href="#/group_detail" >'+ v.name+'</a></h4> <div class="person">团员人数：&nbsp;<span>'+ v.volTotal+'</span>&nbsp;&nbsp;帮扶项目：&nbsp;<span>'+ v.socialTotal+'</span>&nbsp;&nbsp;服务时长：&nbsp;<span>'+v.serverTime+'</span>&nbsp;&nbsp;活动个数：&nbsp;<span >'+ v.campaignCount+'</span>&nbsp;&nbsp; </div> <p class="groups_description"> 组织简介：<span class="description">'+ v.description+'</span></p> <div class="groups_mess">团队编号：<span class="groups_number" style="color:#e84c3d;">'+ v.groupCode+'</span>成立时间：<span class="status">'+ v.registrationDate+'</span> </div> </div> </div>';
            });
            $(".groups_detail").empty().append(str);

            //分页效果
            $("#group_listPage").empty();
            $("#group_listPage").Page({
                totalPages: totalPage,
                liNums: 5,
                callBack : function(page,size,count){
                    $.post('/fuyang_backend/groups/newGroup',{
                        pageSize:pagesize,
                        pageNo:page,
                        keyParams:keyParams,
                    },function(data){
                        //console.log(data);
                        var str='';
                        $.each(data.data.list,function(i,v){
                            str += '<div class="medias col-xs-12 col-sm-12 col-md-12 col-lg-12" style="padding:8px 0;"> <a class="media-left col-xs-4 col-sm-4 col-md-4 col-lg-4" id="groupPic" href="#"> <img src="'+v.imageUrl+'"> </a> <div class="media-body col-xs-7 col-sm-7 col-md-7 col-lg-7"> <h4 class="media-heading"><a href="#/group_detail" >'+ v.name+'</a></h4> <div class="person">团员人数：&nbsp;<span>'+ v.volTotal+'</span>&nbsp;&nbsp;帮扶项目：&nbsp;<span>'+ v.socialTotal+'</span>&nbsp;&nbsp;服务时长：&nbsp;<span>'+v.serverTime+'</span>&nbsp;&nbsp;活动个数：&nbsp;<span >'+ v.campaignCount+'</span>&nbsp;&nbsp; </div> <p class="groups_description"> 组织简介：<span class="description">'+ v.description+'</span></p> <div class="groups_mess">团队编号：<span class="groups_number" style="color:#e84c3d;">'+ v.groupCode+'</span>成立时间：<span class="status">'+ v.registrationDate+'</span> </div> </div> </div>';
                        });
                        $(".groups_detail").empty().append(str);
                    })
                }
            });
        });

    }
    if(obj.text=="最热"){
        $(obj).addClass("groups_active").parent().siblings().children().removeClass("groups_active");

        //分页前页面打开是展现第一页的内容
        $.post("/fuyang_backend/groups/mostVol",{
            pageSize:4,
            pageNo:1,
            keyParams:keyParams,
        },function(data){
            //console.log(data);
            var totalPage=data.data.pages;
            var pagesize=4;
            var str='';
            $.each(data.data.list,function(i,v){
                str += '<div class="medias col-xs-12 col-sm-12 col-md-12 col-lg-12" style="padding:8px 0;"> <a class="media-left col-xs-4 col-sm-4 col-md-4 col-lg-4" id="groupPic" href="#"> <img src="'+v.imageUrl+'"> </a> <div class="media-body col-xs-7 col-sm-7 col-md-7 col-lg-7"> <h4 class="media-heading"><a href="#/group_detail" >'+ v.name+'</a></h4> <div class="person">团员人数：&nbsp;<span>'+ v.volTotal+'</span>&nbsp;&nbsp;帮扶项目：&nbsp;<span>'+ v.socialTotal+'</span>&nbsp;&nbsp;服务时长：&nbsp;<span>'+v.serverTime+'</span>&nbsp;&nbsp;活动个数：&nbsp;<span >'+ v.campaignCount+'</span>&nbsp;&nbsp; </div> <p class="groups_description"> 组织简介：<span class="description">'+ v.description+'</span></p> <div class="groups_mess">团队编号：<span class="groups_number" style="color:#e84c3d;">'+ v.groupCode+'</span>成立时间：<span class="status">'+ v.registrationDate+'</span> </div> </div> </div>';
            });
            $(".groups_detail").empty().append(str);

            //分页效果
            $("#group_listPage").empty();
            $("#group_listPage").Page({
                totalPages: totalPage,
                liNums: 5,
                callBack : function(page,size,count){
                    $.post('/fuyang_backend/groups/mostVol',{
                        pageSize:pagesize,
                        pageNo:page,
                        keyParams:keyParams,
                    },function(data){
                        //console.log(data);
                        var str='';
                        $.each(data.data.list,function(i,v){
                            str += '<div class="medias col-xs-12 col-sm-12 col-md-12 col-lg-12" style="padding:8px 0;"> <a class="media-left col-xs-4 col-sm-4 col-md-4 col-lg-4" id="groupPic" href="#"> <img src="'+v.imageUrl+'"> </a> <div class="media-body col-xs-7 col-sm-7 col-md-7 col-lg-7"> <h4 class="media-heading"><a href="#/group_detail" >'+ v.name+'</a></h4> <div class="person">团员人数：&nbsp;<span>'+ v.volTotal+'</span>&nbsp;&nbsp;帮扶项目：&nbsp;<span>'+ v.socialTotal+'</span>&nbsp;&nbsp;服务时长：&nbsp;<span>'+v.serverTime+'</span>&nbsp;&nbsp;活动个数：&nbsp;<span >'+ v.campaignCount+'</span>&nbsp;&nbsp; </div> <p class="groups_description"> 组织简介：<span class="description">'+ v.description+'</span></p> <div class="groups_mess">团队编号：<span class="groups_number" style="color:#e84c3d;">'+ v.groupCode+'</span>成立时间：<span class="status">'+ v.registrationDate+'</span> </div> </div> </div>';
                        });
                        $(".groups_detail").empty().append(str);
                    })
                }
            });
        });

    }
    if(obj.text=="活动最多"){
        $(obj).addClass("groups_active").parent().siblings().children().removeClass("groups_active");

        //分页前页面打开是展现第一页的内容
        $.post("/fuyang_backend/groups/getRankingGroups",{
            pageSize:4,
            pageNo:1,
            keyParams:keyParams,
        },function(data){
            //console.log(data);
            var totalPage=data.data.pages;
            var pagesize=4;
            var str='';
            $.each(data.data.list,function(i,v){
                str += '<div class="medias col-xs-12 col-sm-12 col-md-12 col-lg-12" style="padding:8px 0;"> <a class="media-left col-xs-4 col-sm-4 col-md-4 col-lg-4" id="groupPic" href="#"> <img src="'+v.imageUrl+'"> </a> <div class="media-body col-xs-7 col-sm-7 col-md-7 col-lg-7"> <h4 class="media-heading"><a href="#/group_detail" >'+ v.name+'</a></h4> <div class="person">团员人数：&nbsp;<span>'+ v.volTotal+'</span>&nbsp;&nbsp;帮扶项目：&nbsp;<span>'+ v.socialTotal+'</span>&nbsp;&nbsp;服务时长：&nbsp;<span>'+v.serverTime+'</span>&nbsp;&nbsp;活动个数：&nbsp;<span >'+ v.campaignCount+'</span>&nbsp;&nbsp; </div> <p class="groups_description"> 组织简介：<span class="description">'+ v.description+'</span></p> <div class="groups_mess">团队编号：<span class="groups_number" style="color:#e84c3d;">'+ v.groupCode+'</span>成立时间：<span class="status">'+ v.registrationDate+'</span> </div> </div> </div>';
            });
            $(".groups_detail").empty().append(str);

            //分页效果
            $("#group_listPage").empty();
            $("#group_listPage").Page({
                totalPages: totalPage,
                liNums: 5,
                callBack : function(page,size,count){
                    $.post('/fuyang_backend/groups/getRankingGroups',{
                        pageSize:pagesize,
                        pageNo:page,
                        keyParams:keyParams,
                    },function(data){
                        //console.log(data);
                        var str='';
                        $.each(data.data.list,function(i,v){
                            str += '<div class="medias col-xs-12 col-sm-12 col-md-12 col-lg-12" style="padding:8px 0;"> <a class="media-left col-xs-4 col-sm-4 col-md-4 col-lg-4" id="groupPic" href="#"> <img src="'+v.imageUrl+'"> </a> <div class="media-body col-xs-7 col-sm-7 col-md-7 col-lg-7"> <h4 class="media-heading"><a href="#/group_detail" >'+ v.name+'</a></h4> <div class="person">团员人数：&nbsp;<span>'+ v.volTotal+'</span>&nbsp;&nbsp;帮扶项目：&nbsp;<span>'+ v.socialTotal+'</span>&nbsp;&nbsp;服务时长：&nbsp;<span>'+v.serverTime+'</span>&nbsp;&nbsp;活动个数：&nbsp;<span >'+ v.campaignCount+'</span>&nbsp;&nbsp; </div> <p class="groups_description"> 组织简介：<span class="description">'+ v.description+'</span></p> <div class="groups_mess">团队编号：<span class="groups_number" style="color:#e84c3d;">'+ v.groupCode+'</span>成立时间：<span class="status">'+ v.registrationDate+'</span> </div> </div> </div>';
                        });
                        $(".groups_detail").empty().append(str);
                    })
                }
            });
        });

    }
}


var keyParams = hex_sha1('yichuangspace');
function searchGroup(){
    var groupKeyword=$("#groupKeyword").val();
    $.post("/fuyang_backend/groups/search",{
        name:groupKeyword,
        pageSize:5,
        pageNo:1,
        keyParams:keyParams,
    },function(data){
        //console.log(data);
        var totalPage=data.data.pages;
        var pagesize=4;
        var str='';
        $.each(data.data.list,function(i,v){
            str += '<div class="medias col-xs-12 col-sm-12 col-md-12 col-lg-12" style="padding:8px 0;"> <a class="media-left col-xs-4 col-sm-4 col-md-4 col-lg-4" id="groupPic" href="#"> <img src="'+v.imageUrl+'"> </a> <div class="media-body col-xs-7 col-sm-7 col-md-7 col-lg-7"> <h4 class="media-heading"><a href="#/group_detail" >'+ v.name+'</a></h4> <div class="person">团员人数：&nbsp;<span>'+ v.volTotal+'</span>&nbsp;&nbsp;帮扶项目：&nbsp;<span>'+ v.socialTotal+'</span>&nbsp;&nbsp;服务时长：&nbsp;<span>'+v.serverTime+'</span>&nbsp;&nbsp;活动个数：&nbsp;<span >'+ v.campaignCount+'</span>&nbsp;&nbsp; </div> <p class="groups_description"> 组织简介：<span class="description">'+ v.description+'</span></p> <div class="groups_mess">团队编号：<span class="groups_number" style="color:#e84c3d;">'+ v.groupCode+'</span>成立时间：<span class="status">'+ v.registrationDate+'</span> </div> </div> </div>';
        });
        $(".groups_detail").empty().append(str);

        //分页效果
        $("#group_listPage").empty();
        $("#group_listPage").Page({
            totalPages: totalPage,
            liNums: 5,
            callBack : function(page,size,count){
                $.post('/fuyang_backend/groups/allGroups',{
                    pageSize:pagesize,
                    pageNo:page,
                    keyParams:keyParams,
                },function(data){
                    //console.log(data);
                    var str='';
                    $.each(data.data.list,function(i,v){
                        str += '<div class="medias col-xs-12 col-sm-12 col-md-12 col-lg-12" style="padding:8px 0;"> <a class="media-left col-xs-4 col-sm-4 col-md-4 col-lg-4" id="groupPic" href="#"> <img src="'+v.imageUrl+'"> </a> <div class="media-body col-xs-7 col-sm-7 col-md-7 col-lg-7"> <h4 class="media-heading"><a href="#/group_detail" >'+ v.name+'</a></h4> <div class="person">团员人数：&nbsp;<span>'+ v.volTotal+'</span>&nbsp;&nbsp;帮扶项目：&nbsp;<span>'+ v.socialTotal+'</span>&nbsp;&nbsp;服务时长：&nbsp;<span>'+v.serverTime+'</span>&nbsp;&nbsp;活动个数：&nbsp;<span >'+ v.campaignCount+'</span>&nbsp;&nbsp; </div> <p class="groups_description"> 组织简介：<span class="description">'+ v.description+'</span></p> <div class="groups_mess">团队编号：<span class="groups_number" style="color:#e84c3d;">'+ v.groupCode+'</span>成立时间：<span class="status">'+ v.registrationDate+'</span> </div> </div> </div>';
                    });
                    $(".groups_detail").empty().append(str);
                })
            }
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
        //console.log(json);
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
    //优秀志愿者或组织
    $http.get('/fuyang_backend/volunteers/getRankingVolun?pageSize=4&pageNo=1&keyParams='+keyParams).success(function(json){
        $scope.volunteers=json.data.list;
    });

    //轮播图
    $http.get('/fuyang_backend/news/getNewsDynamicParam?isPublish=1&keyParams='+keyParams).success(function(json){
        $scope.imgs=json.data.list;
    });
}]);
//新闻详情
app.controller('newsDetailCtrl', ['$scope','$http','$routeParams',function ($scope,$http,$routeParams) {
    var id=$routeParams.newsId;
    var keyParams = hex_sha1('yichuangspace');
    $http.get('/fuyang_backend/news/getNewsDynamicParam?id='+id+'&keyParams='+keyParams).success(function(json){
        $scope.news=json.data.list[0];
        var newsType=json.data.list[0].newsType;
        if(newsType==1){
            $scope.news.newsType='通知公告';
        }else if(newsType==2){
            $scope.news.newsType='各区动态';
        }else if(newsType==3){
            $scope.news.newsType='活动信息';
        }
        //console.log($scope.news);
        $("#news_content").html($scope.news.content);
    });
}]);
//品牌组织后台数据接口。。。。
app.controller('groupCtrl', ['$scope','$http',function ($scope,$http) {
    var keyParams = hex_sha1('yichuangspace');
    //各区动态
    $http.get('/fuyang_backend/news/getNewsDynamicParam?newsType=2&keyParams='+keyParams).success(function(json){
        $scope.news=json.data.list;
    });
    //活动信息
    $http.get('/fuyang_backend/news/getNewsDynamicParam?newsType=3&keyParams='+keyParams).success(function(json){
        $scope.campaigns=json.data.list;
    });


    $scope.signGroup=function(){
      location.href='sign_groups.html';
    };
    //全部
    $.post("/fuyang_backend/groups/allGroups",{
        pageSize:4,
        pageNo:1,
        keyParams:keyParams,
    },function(data){
        //console.log(data);
        var totalPage=data.data.pages;
        var pagesize=4;
        var str='';
        $.each(data.data.list,function(i,v){
            str += '<div class="medias col-xs-12 col-sm-12 col-md-12 col-lg-12" style="padding:8px 0;"> <a class="media-left col-xs-4 col-sm-4 col-md-4 col-lg-4" id="groupPic" href="#"> <img src="'+v.imageUrl+'"> </a> <div class="media-body col-xs-7 col-sm-7 col-md-7 col-lg-7"> <h4 class="media-heading"><a href="#/group_detail" >'+ v.name+'</a></h4> <div class="person">团员人数：&nbsp;<span>'+ v.volTotal+'</span>&nbsp;&nbsp;帮扶项目：&nbsp;<span>'+ v.socialTotal+'</span>&nbsp;&nbsp;服务时长：&nbsp;<span>'+v.serverTime+'</span>&nbsp;&nbsp;活动个数：&nbsp;<span >'+ v.campaignCount+'</span>&nbsp;&nbsp; </div> <p class="groups_description"> 组织简介：<span class="description">'+ v.description+'</span></p> <div class="groups_mess">团队编号：<span class="groups_number" style="color:#e84c3d;">'+ v.groupCode+'</span>成立时间：<span class="status">'+ v.registrationDate+'</span> </div> </div> </div>';
        });
        $(".groups_detail").empty().append(str);

        //分页效果
        $("#group_listPage").empty();
        $("#group_listPage").Page({
            totalPages: totalPage,
            liNums: 5,
            callBack : function(page,size,count){
                $.post('/fuyang_backend/groups/allGroups',{
                    pageSize:pagesize,
                    pageNo:page,
                    keyParams:keyParams,
                },function(data){
                    //console.log(data);
                    var str='';
                    $.each(data.data.list,function(i,v){
                        str += '<div class="medias col-xs-12 col-sm-12 col-md-12 col-lg-12" style="padding:8px 0;"> <a class="media-left col-xs-4 col-sm-4 col-md-4 col-lg-4" id="groupPic" href="#"> <img src="'+v.imageUrl+'"> </a> <div class="media-body col-xs-7 col-sm-7 col-md-7 col-lg-7"> <h4 class="media-heading"><a href="#/group_detail" >'+ v.name+'</a></h4> <div class="person">团员人数：&nbsp;<span>'+ v.volTotal+'</span>&nbsp;&nbsp;帮扶项目：&nbsp;<span>'+ v.socialTotal+'</span>&nbsp;&nbsp;服务时长：&nbsp;<span>'+v.serverTime+'</span>&nbsp;&nbsp;活动个数：&nbsp;<span >'+ v.campaignCount+'</span>&nbsp;&nbsp; </div> <p class="groups_description"> 组织简介：<span class="description">'+ v.description+'</span></p> <div class="groups_mess">团队编号：<span class="groups_number" style="color:#e84c3d;">'+ v.groupCode+'</span>成立时间：<span class="status">'+ v.registrationDate+'</span> </div> </div> </div>';
                    });
                    $(".groups_detail").empty().append(str);
                })
            }
        });
    });
}]);
//活动详情
app.controller('campaignCtrl', ['$scope','$http',function ($scope,$http) {
    var keyParams = hex_sha1('yichuangspace');
    //各区动态
    $http.get('/fuyang_backend/news/getNewsDynamicParam?newsType=2&keyParams='+keyParams).success(function(json){
        $scope.news=json.data.list;
    });
    //活动信息
    $http.get('/fuyang_backend/news/getNewsDynamicParam?newsType=3&keyParams='+keyParams).success(function(json){
        $scope.campaigns=json.data.list;
    });
}]);
//风采人物后台数据接口。。。。
app.controller('personCtrl', ['$scope','$http',function ($scope,$http) {
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
    $http.get('/fuyang_backend/volunteers/getRankingVolun?pageSize=12&pageNo=1&keyParams='+keyParams).success(function(json){
        //console.log(json);
        var totalPage=json.data.pages;
        var pagesize=12;
        $scope.list=json.data.list;
        $("#person_listPage").Page({
            totalPages: totalPage,
            liNums: 5,
            activeClass: 'activP',
            callBack : function(page){
                $http.get('/fuyang_backend/volunteers/getRankingVolun?pageSize='+pagesize+'&pageNo='+page+'&keyParams='+keyParams).success(function(obj){
                    //console.log(obj);
                    $scope.list=obj.data.list;
                });
            }
        });
    });
    //*******************点击全部显示****************
    $scope.showTotal=function(){
        $http.get('/fuyang_backend/volunteers/allVolun?pageSize=12&pageNo=1&keyParams='+keyParams).success(function(json){
            //console.log(json);
            var totalPage=json.data.pages;
            var pagesize=12;
            $scope.list=json.data.list;
            $("#person_listPage").Page({
                totalPages: totalPage,
                liNums: 5,
                activeClass: 'activP',
                callBack : function(page){
                    $http.get('/fuyang_backend/volunteers/allVolun?pageSize='+pagesize+'&pageNo='+page+'&keyParams='+keyParams).success(function(obj){
                        //console.log(obj);
                        $scope.list=obj.data.list;
                    });
                }
            });
        });
    };
    //*******************点击推荐显示****************
    $scope.showF=function(){
        $http.get('/fuyang_backend/volunteers/getRankingVolun?pageSize=12&pageNo=1&keyParams='+keyParams).success(function(json){
            //console.log(json);
            var totalPage=json.data.pages;
            var pagesize=12;
            $scope.list=json.data.list;
            $("#person_listPage").Page({
                totalPages: totalPage,
                liNums: 5,
                activeClass: 'activP',
                callBack : function(page){
                    $http.get('/fuyang_backend/volunteers/getRankingVolun?pageSize='+pagesize+'&pageNo='+page+'&keyParams='+keyParams).success(function(obj){
                        //console.log(obj);
                        $scope.list=obj.data.list;
                    });
                }
            });
        });
    };
    //*******************点击最新显示****************
    $scope.showTW=function(){
        $http.get('/fuyang_backend/volunteers/getNewVolun?pageSize=12&pageNo=1&keyParams='+keyParams).success(function(json){
            //console.log(json);
            var totalPage=json.data.pages;
            var pagesize=12;
            $scope.list=json.data.list;
            $("#person_listPage").Page({
                totalPages: totalPage,
                liNums: 5,
                activeClass: 'activP',
                callBack : function(page){
                    $http.get('/fuyang_backend/volunteers/getNewVolun?pageSize='+pagesize+'&pageNo='+page+'&keyParams='+keyParams).success(function(obj){
                        //console.log(obj);
                        $scope.list=obj.data.list;
                    });
                }
            });
        });
    };
    //*******************点击最热显示****************
    $scope.showTH=function(){
        $http.get('/fuyang_backend/volunteers/getMostCam?pageSize=12&pageNo=1&keyParams='+keyParams).success(function(json){
            //console.log(json);
            var totalPage=json.data.pages;
            var pagesize=12;
            $scope.list=json.data.list;
            $("#person_listPage").Page({
                totalPages: totalPage,
                liNums: 5,
                activeClass: 'activP',
                callBack : function(page){
                    $http.get('/fuyang_backend/volunteers/getMostCam?pageSize='+pagesize+'&pageNo='+page+'&keyParams='+keyParams).success(function(obj){
                        //console.log(obj);
                        $scope.list=obj.data.list;
                    });
                }
            });
        });
    };
}]);

//通知公告列表
app.controller('newsListCtrl1', ['$scope','$http',function ($scope,$http) {
    var keyParams = hex_sha1('yichuangspace');
    //通知公告
    $http.get('/fuyang_backend/news/getNewsDynamicParam?newsType=1&keyParams='+keyParams).success(function(json){
        //console.log(json);
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
    var keyParams = hex_sha1('yichuangspace');
    //各区动态
    $http.get('/fuyang_backend/news/getNewsDynamicParam?newsType=2&keyParams='+keyParams).success(function(json){
        //console.log(json);
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
    var keyParams = hex_sha1('yichuangspace');
    //活动信息
    $http.get('/fuyang_backend/news/getNewsDynamicParam?newsType=3&keyParams='+keyParams).success(function(json){
        //console.log(json);
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
//页面父控制器
app.controller('parentCtrl',['$scope','$http',function($scope,$http){

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
        when('/volun',{
            templateUrl:'tpl/volun.html',
        }).
        when('/association_profile',{
            templateUrl:'tpl/association_profile.html',
        }).
        when('/group_detail',{
            templateUrl:'tpl/group_detail.html',
        }).
        when('/group_detail/:groupId',{
            templateUrl:'tpl/group_detail.html',
        }).
        when('/news_detail',{
            templateUrl:'tpl/news_detail.html',
        }).
        when('/news_detail/:newsId',{
            templateUrl:'tpl/news_detail.html',
        }).
        when('/active_detail',{
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
        otherwise({
            redirectTo:'/start',
        })
});

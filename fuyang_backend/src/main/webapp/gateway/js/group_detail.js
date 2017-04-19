$("#actlist_page").Page({
    totalPages: 5,
    liNums: 5,
    activeClass: 'activP',
    callBack : function(page){
    }
});
$("#main_tabs").on("click",'span',function(e){
    $(this).removeClass("current").addClass("current").siblings().removeClass("current");
    var index=$(this).index();
    $(this).parent().next().children().eq(index).removeClass().addClass("db").siblings().removeClass().addClass("dn");
});
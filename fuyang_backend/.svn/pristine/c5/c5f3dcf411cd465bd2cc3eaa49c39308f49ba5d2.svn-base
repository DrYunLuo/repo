$(function(){
var init={
//	init对象的第一个值......
	dataEach:function(){
		$.getJSON("/fuyang_backend/volunteers/volceshi",function(result){
			//console.log(result);
			$.each(result.data,function(index,value){
				$(".checked_volunteer .table").append(index+'<tr><td class="special"><a href="volunteer.html?id='+value._id+'"  class="active_name">'+value.realname+'</a></td><td class="anniu"><div class="container"><a onclick="messagesubmit.checkfunc()" class="btn check">通过</a><a class="btn no_check">不通过</a></div></td></tr>');
			});
		});
	}
//	init对象的第二个值......	
};
	init.dataEach();

});

// 点击显示志愿者详情


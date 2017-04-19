//封装过期控制代码
function setStorage(key,value){
    var curTime = new Date().getTime();
    localStorage.setItem(key,JSON.stringify({data:value,time:curTime}));
}
function getStorage(key,exp){
    var data = localStorage.getItem(key);
    var dataObj = JSON.parse(data);
    if(dataObj!=null){
        if (new Date().getTime() - dataObj.time>exp) {
            //console.log('信息已过期');
        }else{
            //console.log("data="+dataObj.data);
            //console.log(JSON.parse(dataObj.data));
            var dataObjDatatoJson = JSON.parse(dataObj.data);
            return dataObjDatatoJson;
        }
    }
}

window.onload = function(){
    this.setInterval(function(){
        let temp = new Date();
        document.getElementById('span').innerHTML = 
            temp.getUTCFullYear() + '-' + temp.getUTCMonth() + '-' + temp.getDate() + ' ' + 
            temp.getHours() + ':' + temp.getMinutes() + ':' + temp.getSeconds();
    }, 1000);
}
// 2019-11-4 12:16:01
window.onload = function(){
	var container = document.getElementById('container');
	var containerBox = document.getElementById('containerBox');
	var list = document.getElementById('list');
	var prev = document.getElementById('prev');
	var next = document.getElementById('next');
	var animated = false;
	var timer;

	function animate(offset){
		var animated = true;
		var newLeft = parseInt(list.style.left) + offset;
		var time = 500;
		var interval = 10;
		var speed = offset/(time/interval);

		function go(){
			if ((speed < 0 && parseInt(list.style.left) > newLeft)|| (speed > 0 && parseInt(list.style.left) < newLeft) ){
				list.style.left = parseInt(list.style.left) + speed + "px";
				setTimeout(go,interval);
			}else{
				var animated = false;
				list.style.left = newLeft  + "px";
				if (newLeft > -700) {
					list.style.left = -1400 + "px";
				}
				if (newLeft < -1400) {
					list.style.left = -700 + "px";
				}
			}
		}
		go();
	}

	function play(){
		timer = setInterval(function(){
			next.onclick();
		},3000);
	}
	function stop(){
		clearInterval(timer);
	}
	prev.onclick = function(){
		animate(700);
	}
	next.onclick = function(){
		animate(-700);
	}
	containerBox.onmouseover = stop;
	containerBox.onmouseout = play;


	var v1=document.getElementById('tu');
    var v2=document.getElementById('bannerBox');
    var v3=document.getElementById('bannerEnd');
	var v4=document.getElementById('banner');
    v3.innerHTML = v2.innerHTML;//将v2容器里面的图片插入到v3容器里面  使其空白区域被遮住。
    function fun(){
       	if(v1.scrollLeft<=0){
           	v1.scrollLeft=1300;
       	}else{
           	v1.scrollLeft--;
       	}
    }
    var fun1=setInterval(fun,20);
    v1.onmouseover = function() {//鼠标经过时  清除定时器  停止图片的滚动
        clearInterval(fun1)
    };
    v1.onmouseout = function() {//鼠标离开后  继续滚动图片
        fun1 = setInterval(fun, 20)
    };





    var btn = document.getElementById('btn');
	var timer3;
	var isTop = true;
	//获取页面可视区高度
	var clientHeight = document.documentElement.clientHeight;
	//滚动条滚动时触发
	window.onscroll = function() {
	//显示回到顶部按钮
	var osTop = document.documentElement.scrollTop || document.body.scrollTop;
	if (osTop >= clientHeight) {
	  	btn.style.display = "block";
	} else {
	  	btn.style.display = "none";
	};
	//回到顶部过程中用户滚动滚动条，停止定时器
	if (!isTop) {
		clearInterval(timer3);
	};
		isTop = false;
	}
	btn.onclick = function() {
	  	//设置定时器
	  	timer3 = setInterval(function(){
	    //获取滚动条距离顶部高度
	    var osTop = document.documentElement.scrollTop || document.body.scrollTop;
	    var ispeed = Math.floor(-osTop / 7);
	    document.documentElement.scrollTop = document.body.scrollTop = osTop+ispeed;
	    //到达顶部，清除定时器
	    if (osTop == 0) {
	      clearInterval(timer3);
	    };
	    isTop = true;
	  },30);
	};




}




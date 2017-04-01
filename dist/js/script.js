window.onload=function () {
	var music=document.getElementById('music');
	var audio=document.getElementsByTagName('audio')[0];
	var page1=document.getElementById('page1');
	var page2=document.getElementById('page2');
	var page3=document.getElementById('page3');
	music.onclick=function () {
		audio.addEventListener("ended",function () {
			music.setAttribute("class","");
		},false)

		// 控制音乐播放效果
		music.addEventListener("touchstart",function (event) {
			if (audio.paused) {
			audio.play();
			this.style.webkitAnimationPlayState="running";
			// this.setAttribute("class","play");
		} else {
			audio.pause();
			this.style.webkitAnimationPlayState="paused";
			// this.setAttribute("class","");
		}
		},false)
	}
	page1.addEventListener("touchstart",function () {
		page1.style.display="none";
		page2.style.display="block";
		page3.style.display="block";
		page3.style.top="100%";
		setTimeout(function () {
		page2.setAttribute("class","page fadeOut");
		page3.setAttribute("class","page fadeIn");
	},6000)
	},false)
	
}
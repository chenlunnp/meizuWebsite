window.onload=function  () {
			var container =document.getElementById("po");
			var list=document.getElementById("list");				//
			var buttons=document.getElementById("buttons").getElementsByTagName("span");
			
			var prev=document.getElementById("prev");
			var next=document.getElementById("next");
			var index=1;
			var animated =false;
			var timer;

			function showb() {					//按钮的切换显示
				for (var i = 0; i <buttons.length; i++) {
					if (buttons[i].className=="on"){
						buttons[i].className="";
						break;
					}
				}
					buttons[index -1].className ="on";
			}

			function animate(offset) {			//图片运动时间
				if (offset==0) {
					return;
				}
				animated=true;
				var news=parseInt(list.style.left)+offset;
				var time=300;   //总时间
				var interval =10;	//间隔时间
				var speed=offset/(time/interval);
				

				function go() {
					if ((speed < 0 && parseInt(list.style.left)>news) ||  (speed>0 && parseInt(list.style.left)<news)) {
						list.style.left=parseInt(list.style.left)+speed+"px";
						setTimeout(go,interval);
						
						// statement
					
					}else{			
						list.style.left =news+"px";
						if (news>-1330) {
							list.style.left=-6650+"px";
						}
						if (news<-6650 ){
							list.style.left=-1330+"px";
						}
						animated=false;
						}
					}
			go();
			}

				function play() {
					timer=setTimeout(function () {
						next.onclick();
						play();
					},2000);   //执行
				}
				function stop() {
					clearTimeout(timer);
				}

				next.onclick=function () {			//显示在最上面的
					if	(animated) {
						return;
					}
					if (index==5) {
					index=1;
					}
					else {
					index+=1;
					}
				
					showb();
					animate(-1330);
				
				}
				prev.onclick=function () {
					if	(animated) {
						return;
					}
					if (index==1) {
					index=5;
					}
					else {
					index-=1;
					}
					showb();
					
					animate(1330);
			
			}
			 for (var i = 0; i < buttons.length; i++) {
                buttons[i].onclick = function () {
                    if (animated) {
			 		
                        return;
                    }
                    if(this.className == 'on') {
                        return;
                    }
                    var myIndex = parseInt(this.getAttribute('index'));
                    var offset = -1330 * (myIndex - index);
                   
                    
                    animate(offset);
                    index = myIndex;
                    showb();
              
                   
                }

		}
		container.onmouseover = stop;
            container.onmouseout = play;

            play();


//左侧第二导航栏
	
	function sidebar(){
		
		var index = 0;
		var bvin=0;
		var bvout = 0;
		var listb =document.getElementById("listb");
		var listb_li =listb.getElementsByTagName("li");
		var listb_lip =listb.getElementsByTagName("p");
		var contentb =document.getElementsByClassName("contentb")[0];
	
		var contentb_b =contentb.getElementsByClassName("b");
	
		
		function changeLi(curLi){
			
			for(var i = 0;i<contentb_b.length;i++){
				listb_li[i].className="";
				contentb_b[i].className="b";			//先清空类名				
			}

			listb_li[curLi].className="li_selected";
			contentb_b[curLi].className ="b contentb_selected";  //给鼠标经过的li添加一个类名	
		}
		
		
		for(var j = 0 ; j<listb_li.length;j++){
			listb_li[j].onmouseenter = function(){
				bvin = 1;
				
				contentb.style.display='block';
				index = this.getAttribute("index");				//获取鼠标经过元素的index值
				changeLi(index);//调用这个函数并将index值作为changeling的参数
			
			}
			
//			鼠标离开时,没有进入右侧菜单,直接移除
			listb_li[j].onmouseleave = function(){
				
				if(bvin == 1 && bvout == 0){
					allNone()
			
				}
			}
		
		}	
		
//		离开右侧二级菜单时  隐藏各样式
		contentb.onmouseleave=function() {
				bvout = 1;		
				allNone()
		}
		
//		鼠标移入全部商品分类时,隐藏各样式

			listb_lip.onmouseover=function() {
				contentb.style.display="none";
			}

		
		
//		初始状态
		function  allNone(){''
			contentb.style.display="none";
				for(var i = 0;i<contentb_b.length;i++){
					listb_li[i].className="";
	
				}
		}

	}
	sidebar();
		
		
	//横向导航
	function hengnav() {
		var navz =document.getElementById("navz");
		var navz_li =navz.getElementsByTagName("li");
		var zzxnav =document.getElementsByClassName("zzxnav")[0];
		var xiaonav =zzxnav.getElementsByClassName("xiaonav");
		var plo=0
		var index=0;
		

		for (j=0;j<navz_li.length;j	++) {
			
			navz_li[j].onmouseenter =function() {
//				xiaonav.style.display="block";
				index=this.getAttribute("index");
					zzxnav.style.display="block";
					
			for(var i = 0;i<xiaonav.length;i++){  			//初始化
				navz_li[i].className="";
				xiaonav[i].className="xiaonav";			//先清空类名				
			}
					xiaonav[index].className=" xiaonav xiaonav_selected";
			}
		
		
		}
		zzxnav.onmouseleave=function() {
			zzxnav.style.display="none";
		}
		
	}
	
		
		
		hengnav();
		
		function huanglinli () {
			var big =document.getElementsByClassName("big")[0];
			var sprev =document.getElementById("sprev");
			var snext =document.getElementById("snext");
			
			var ziti =document.getElementsByClassName("ziti");
			var heng =document.getElementById("heng");
			 
			 var timer01 =setInterval(auto,8000);
			 a=0;
			 function auto() {
			 	if(a==0){
			 		console.log("111");
				 	big.className="big yyyy";
				 	a=1;
			 	}else{
					big.className="big uuuu";
					a=0;
				}
			 }
			 
			}
			
		 huanglinli();
		 
		 
	
			window.onscroll = function  (){
			
			var	t=document.documentElement.scrollTop || document.body.scrollTop;
			
			var huidao=document.getElementById("huidao");
			
		
			if(t  >500 ){
				huidao.className="show";
			}
			else {
				huidao.className="hide";
			}
	
		}
		}
	


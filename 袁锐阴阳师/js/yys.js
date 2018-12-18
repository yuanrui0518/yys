	function get(n){
		var even=document.querySelectorAll(n);
		if(even.length==1){
			return even[0];
		}else{
			return even;
		}
	}





	window.onscroll=function(){
			var nav=get(".nav")
			if(document.documentElement.scrollTop>=nav.offsetHeight){
				nav.style.position="fixed";
			}
			if(!document.documentElement.scrollTop>=nav.offsetHeight){
				nav.style.position="absolute";

			}
		}

		window.onload=function(){
				var dt=get(".dt")
				var dd=get(".dd")
				var newf=get(".newf")
				var newzx=get("newzx")
				var  box=get(".box")
				dd.onclick=function(){
					newf.style.display="block"
					this.style.color="#fff"
					this.style.backgroundColor="#c2a060"
					box.style.display="none"
					dt.style.color=""
					dt.style.backgroundColor=""
				}
				dt.onclick=function(){

					box.style.display="block"
					newf.style.display="none"
					this.style.color="#fff"
					this.style.backgroundColor="#c2a060"
					dd.style.color=""
					dd.style.backgroundColor=""
				}
			var minz=get(".min-list")
			var mina=get(".min-a")
			var nodeA=mina.children
			var shi=get(".shisheng")
			var nodeUL=shi.children
			var alist=get(".alist")
			var quanbu=get(".quanbu")
			alist.onclick=function(){
				minz.style.display="block"
				this.style.display="none"

			}
			for(var i=0;i<nodeA.length;i++){
				nodeA[i].setAttribute("index",i)
				nodeA[i].onclick=function(){
					var index=this.getAttribute("index")
					for(j=0;j<nodeUL.length;j++){
						nodeUL[j].className=""
						nodeUL[j].style.opacity=0;
					}
					nodeUL[index].className="ul1"
					nodeUL[index].style.opacity=1;
				}

			}
				var li1=get(".szsli1")
				var li2=get(".szsli2")
				var li3=get(".szsli3")
				li1.onclick=function(){
					minz.style.display="block"
					alist.style.display="none"

				}
				li2.onclick=function(){
					alist.style.display="none"

				}

		}
		

		$(function(){
			var newzx=$(".newzx");
			var box=$(".box");
			var ol=$(".box ol");
			var width=1016;
			var prev=$(".shang");
			var next=$(".xia");
			var _index=0;
			prev.click(function(){

					if(_index==0){
						ol.animate({
							left:-_index*width,

						})
						_index=3;
						
					}	
					_index--
						ol.animate({
							left:-_index*width,

						})
	
				})

		
			next.click(function(){
				_index++;
				if(_index<4){
					if(_index==3){
						_index=0
					}
					ol.animate({
						left:-_index*width,
					})
				}
			})
			//左右箭头
			var zuoyou=$(".zyjt span")
			var all=get(".all")
			var ollist=get(".all ol")
			var width=1016;
			var n=0;
			$(".all ol").eq(0).css("opacity","1")
			zuoyou[0].style.visiblility="hidden";
			zuoyou.eq(1).click(function(){
				n++;
				zuoyou[0].style.visibility="visible"
				if(n<ollist.length){
					this.style.visibilty="hidden"
					if(n==ollist.length-1){
						this.style.visibility="hidden"
					}
						$(".all").animate({
						marginLeft:-n*width
					})
					fn(n)	
				}
				
			})

			zuoyou.eq(0).click(function(){
				n--;
				if(n>=0){
					zuoyou[1].style.visibility="visible"
					if(n==0){
						this.style.visibility="hidden"
					}
					$(".all").animate({
						marginLeft:-n*width,
					})
					fn(n)
				}
			})
			function fn(index){
				for(var i=0;i<ollist.length;i++){
					ollist[i].style.opacity=0;
				}
				$(".all ol").eq(index).animate({
					opacity:1,

				},1000)
			}

			var left=$(".zhujiao .fl i")
			var right=$(".zhujiao .fr i")
			var zul=$(".zjt ul li")
			var ulleng=$(".zjt ul li").length
			var zol=$(".zjt ol li")
			var m=0;
		
			
			if(m<ulleng-1){
				if(m==ulleng-1){
					m=0
				}
				function animatestop(){
					m++;
					console.log(ulleng-1)
					zul.eq(m).animate({
						right:77,
						opacity:1
					},800)
					zol.eq(m).animate({
						left:55,
						opacity:1
					},800)
					right.click(function(){
						zul.eq(m).animate({
							right:0,
							opacity:0
						},600)
						zol.eq(m).animate({
							left:0,
							opacity:0
						},600,animatestop)
					})
				}
			}

			
			left.click(function(){
				zul.eq(m).animate({
					right:0,
					opacity:0
				},800)
				zol.eq(m).animate({
					left:0,
					opacity:0
				},800,animatestop)
			})
			

			
		})	



		
	



// 		button2.onclick = function(){
// 		this.className="p1"
// 		$("#span2").style.display="block";
// 		$("#span1").style.display="none";
// 		button1.className="";
// 		$("#allWidth3").style.display="none";
// 		$("#allWidth1").style.display="block";
// 	}
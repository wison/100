
$(function(){
	(function(){
		var aLi = $('#menu li');
		var arrText = [
			'例如：荷棠鱼坊烧鱼 或 樱花日本料理',
			'例如：昌平区育新站龙旗广场2号楼609室',
			'例如：万达影院双人情侣券',
			'例如：东莞出事了，大老虎是谁？',
			'例如：北京初春降雪，天气变幻莫测'
		];
		var oText = $('.form').find('.text');
		var iNow=0;
		aLi.each( function(index){
			$(this).click(function(){
					aLi.attr('class','gradient');
				    $(this).attr('class','active');
				    iNow=index;
				    oText.val(arrText[iNow]);
				    
			});
		});
		
		oText.focus(function(){
			if($(this).val()==arrText[iNow]){
				$(this).val('');
			}
		});
		
		oText.blur(function(){
			if($(this).val()==''){
				oText.val(arrText[iNow]);
			}
		});

	})();

	(function(){
		var oUl= $('.update ul');
		var oUpdate =$('.update');
		var oDiv = oUpdate.find('.wrap');
		var iH =0;
		var iNow=0;
		var arrData = [
			{ 'name':'萱萱', 'time':4, 'title':'那些灿烂华美的瞬间', 'url':'#' },
			{ 'name':'畅畅', 'time':5, 'title':'广东3天抓获涉黄疑犯', 'url':'#'},
			{ 'name':'萱萱', 'time':6, 'title':'国台办回应王郁琦', 'url':'#' },
			{ 'name':'畅畅', 'time':7, 'title':'那些灿烂华美的瞬间', 'url':'#' },
			{ 'name':'萱萱', 'time':8, 'title':'那些灿烂华美的瞬间', 'url':'#' },
			{ 'name':'畅畅', 'time':9, 'title':'广东3天抓获涉黄疑犯', 'url':'#' },
			{ 'name':'萱萱', 'time':10, 'title':'国台办回应王郁琦', 'url':'#' },
			{ 'name':'畅畅', 'time':11, 'title':'那些灿烂华美的瞬间', 'url':'#' }
		];
		var str = '';
		var oBtnUp=$('#updateUpBtn');
		var oBtnDown=$('#updateDownBtn');
		var timer =null;
		for(var i=0; i<arrData.length; i++){
			str+='<li><a href="'+arrData[i].url+'"><strong>'+arrData[i].name+'</strong><span>'+arrData[i].time+'</span>'+arrData[i].title+'</a></li>';
//			console.log(str);
			oUl.html(str);
		}
		iH = oUl.find('li').height();
//		console.log(iH);
//		oUl.animate({'top':iH*-1},3000,'elasticOut');
		oBtnUp.click(function(){
			doMove(-1);
		});
		oBtnDown.click(function(){
			doMove(1);
		});
		
		function autoPlay(){
			timer=setInterval(function(){
				doMove(-1);
			},2500);
		}
		autoPlay();
		
		oUpdate.hover(function(){
			clearInterval(timer);
		}, autoPlay);
		function doMove(num){
			iNow+=num;
			if(Math.abs(iNow)>arrData.length-1){
				iNow=0;
			}
			if(iNow>0){
				iNow=-(arrData.length-1);
			}
			oUl.stop().animate({'top':iH*iNow},2200,'elasticOut');
		}
	})();
	
	//选项卡切换
	(function(){
		fnTab($('.tabNav1'),$('.tabCon1'))
		fnTab($('.tabNav2'),$('.tabCon2'))
		fnTab($('.tabNav4'),$('.tabCon4'))
		fnTab($('.tabNav5'),$('.tabCon5'))
		function fnTab(oNav,aCon){
			var aElem = oNav.children();
			aCon.hide().eq(0).show();
			aElem.each(function(index){
				$(this).click(function(){
					aElem.removeClass('active').addClass('gradient');
					$(this).addClass('active');
					aElem.find('a').attr('class','triangle_down_gray');
					$(this).find('a').attr('class','triangle_down_red');
					console.log(index);
					aCon.hide().eq(index).show();
				});
			});
		}
	})();
	
	(function(){
		var oDiv = $('#fade');
		var img1 = $('.reconmend_img1');
		var img2 = $('.reconmend_img2');
		var oLi1 = img1.find('ul li');
		var oLi2 = img2.find('ul li');
		var oP =oDiv.find('p');
		var arr = [ '爸爸去哪儿啦~', '人像摄影中的光影感', '娇柔妩媚、美艳大方' ];
		var iNow = 0;
		var timer = null;
		fnFade();
		autoPlay();
		oLi2.click(function(){
			iNow = $(this).index();
			
			fnFade();
			
		});
		function autoPlay(){
			timer = setInterval(function(){
				iNow++;
				iNow%=arr.length;
				fnFade();
			},2000)
		}
		oDiv.hover(function (){ clearInterval(timer); }, autoPlay);
		function fnFade(){
			oLi1.each(function(i){
				if(i != iNow){
					oLi1.eq(i).fadeOut().css('zIndex','1');
					oLi2.eq(i).removeClass('active');
				}
				else{
					oLi1.eq(i).fadeIn().css('zIndex','2');
					oLi2.eq(i).addClass('active');
					
				}
			});
			oP.text(arr[iNow]);
		};
		
	})();
	
	//日历提示
	(function(){
		var aSpan = $('.calendar h3 span');
		var aImg = $('.calendar .img');
		var oPrompt = $('.today_info');
		var oImg = oPrompt.find('img');
		var oStrong = oPrompt.find('strong');
		var oP = oPrompt.find('p');
		
		aImg.hover(function(){
			var iTop = $(this).parent().position().top-30;
			var iLeft = $(this).parent().position().left+55;
			var index = $(this).parent().index()%aSpan.size();
			
			 oP.text($(this).attr('info'));
			oImg.attr('src', $(this).attr('src'));
			oStrong.text( aSpan.eq(index).text() );
			oPrompt.show().css({'left':iLeft,'top':iTop});
			
		},function(){
			oPrompt.hide();
		});
	})();
	
	(function(){
		var oUl = $('.wrap_bbs');
		var oLi = oUl.find('li');
		
		oLi.mouseover(function(){
			oLi.removeClass('active').eq($(this).index()).addClass('active');
		});
	})();
	
	(function (){
		var arr = [
			'',
			'用户1<br />人气1',
			'用户名：性感宝贝<br />区域：朝阳CBD<br />人气：124987',
			'用户3<br />人气3',
			'用户4<br />人气4',
			'用户5<br />人气5',
			'用户6<br />人气6',
			'用户7<br />人气7',
			'用户8<br />人气8',
			'用户9<br />人气9',
			'用户10<br />人气10'
		];
		$('.hot_area li').mouseover(function (){
			
			if ( $(this).index() == 0 ) return;
			
			$('.hot_area li p').remove();
			
			$(this).append('<p style="width:'+ ($(this).width()-12) +'px; height:'+ ($(this).height()-12) +'px;">'+ arr[$(this).index()] +'</p>');
		});
	})();
	//	https://github.com/wison/100DU.git
});


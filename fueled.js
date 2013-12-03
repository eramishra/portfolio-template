var animLogo = 1500;
var delayLogo = 500;
var animWork = 300;
var bringHeader = animLogo + animLogo + delayLogo;
var projObj = new Array();
var hover = 0;
var img_count=0;
var images = new Array();
var path="";
var projId = "";
var projArr = "";
var projName = "";
var projWorkCount = "";
var currentProjNum = 0;
var deviceLike = "desktop"
var loaderTop = (window.innerHeight - 50)/2;
var imageArr = new Array();
var desktopImageArr = new Array();
var iPhoneImageArr = new Array();
var iPadImageArr =  new Array();
var homeImages = new Array()
var prevState;
var currentState;

//array consisting the paths of images for slideshows of all projects in order: project name, background image (if present) else "" and then all work images

desktopImageArr[0]= new Array("tri", "img/clients/slides/tri-bg.png", "img/clients/slides/tri-bg1.jpg", "img/clients/slides/tri-bg2.jpg", "img/clients/slides/tri-bg3.jpg");
desktopImageArr[1]= new Array("har", "img/clients/slides/har-bg.jpg", "img/clients/slides/har-bg1.png", "img/clients/slides/har-bg2.jpg");
desktopImageArr[2]= new Array("chi", "img/clients/slides/chi-bg.jpg", "img/clients/slides/chi-bg1.jpg", "img/clients/slides/chi-bg2.jpg", "img/clients/slides/chi-bg3.jpg");
desktopImageArr[3]= new Array("eff", "img/clients/slides/eff-bg.jpg", "img/clients/slides/eff-bg1.jpg", "img/clients/slides/eff-bg2.jpg", "img/clients/slides/eff-bg3.jpg");
desktopImageArr[4]= new Array("bum", "img/clients/slides/bum-bg.jpg", "img/clients/slides/bum-bg1.png", "img/clients/slides/bum-bg2.jpg", "img/clients/slides/bum-bg3.png");
desktopImageArr[5]= new Array("ud",  "img/clients/slides/ud-bg.jpg", "img/clients/slides/ud-bg1.png", "img/clients/slides/ud-bg2.jpg", "img/clients/slides/ud-bg3.jpg", "img/clients/slides/ud-bg4.jpg");
desktopImageArr[6]= new Array("fas", "img/clients/slides/fas-bg.png", "img/clients/slides/fas-bg1.png", "img/clients/slides/fas-bg2.jpg", "img/clients/slides/fas-bg3.png", "img/clients/slides/fas-bg4.png");
desktopImageArr[7]= new Array("jon", "", "img/clients/slides/jon-bg1.png", "img/clients/slides/jon-bg2.jpg");
desktopImageArr[8]= new Array("mtv", "", "img/clients/slides/mtv-bg1.jpg", "img/clients/slides/mtv-bg2.jpg", "img/clients/slides/mtv-bg3.png");
desktopImageArr[9]= new Array("hoo",  "img/clients/slides/hoo-bg.jpg","img/clients/slides/hoo-bg1.png", "img/clients/slides/hoo-bg2.png", "img/clients/slides/hoo-bg3.jpg");
desktopImageArr[10]= new Array("sho", "img/clients/slides/sho-bg.jpg", "img/clients/slides/sho-bg1.png", "img/clients/slides/sho-bg2.jpg", "img/clients/slides/sho-bg3.jpg");
desktopImageArr[11]= new Array("mal", "", "img/clients/slides/malibu-bg1.jpg", "img/clients/slides/malibu-bg2.jpg", "img/clients/slides/malibu-bg3.jpg");
desktopImageArr[12]= new Array("mlb", "img/clients/slides/mlb-bg.jpg",  "img/clients/slides/mlb-bg1.jpg", "img/clients/slides/mlb-bg2.jpg", "img/clients/slides/mlb-bg3.jpg", "img/clients/slides/mlb-bg4.jpg", "img/clients/slides/mlb-bg5.jpg");

iPhoneImageArr[0]= new Array("tri", "img/clients/slides/tri-bg.jpg", "img/clients/slides/iphone-tri-bg1.jpg", "img/clients/slides/iphone-tri-bg2.jpg", "img/clients/slides/iphone-tri-bg3.jpg");
iPhoneImageArr[1]= new Array("har", "img/clients/slides/har-bg.jpg", "img/clients/slides/iphone-har-bg1.jpg", "img/clients/slides/iphone-har-bg2.jpg");
iPhoneImageArr[2]= new Array("chi", "img/clients/slides/chi-bg.jpg", "img/clients/slides/iphone-chi-bg1.jpg", "img/clients/slides/iphone-chi-bg2.jpg", "img/clients/slides/iphone-chi-bg3.jpg");
iPhoneImageArr[3]= new Array("eff", "img/clients/slides/eff-bg.jpg", "img/clients/slides/iphone-eff-bg1.jpg", "img/clients/slides/iphone-eff-bg2.jpg", "img/clients/slides/iphone-eff-bg3.jpg");
iPhoneImageArr[4]= new Array("bum", "img/clients/slides/bum-bg.jpg", "img/clients/slides/iphone-bum-bg1.jpg", "img/clients/slides/iphone-bum-bg2.jpg", "img/clients/slides/iphone-bum-bg3.jpg");
iPhoneImageArr[5]= new Array("ud",  "img/clients/slides/ud-bg.jpg", "img/clients/slides/iphone-ud-bg1.jpg", "img/clients/slides/iphone-ud-bg2.jpg", "img/clients/slides/iphone-ud-bg3.jpg", "img/clients/slides/iphone-ud-bg4.jpg");
iPhoneImageArr[6]= new Array("fas", "img/clients/slides/fas-bg.jpg", "img/clients/slides/iphone-fas-bg1.jpg", "img/clients/slides/iphone-fas-bg2.jpg", "img/clients/slides/iphone-fas-bg3.jpg", "img/clients/slides/iphone-fas-bg4.jpg");
iPhoneImageArr[7]= new Array("jon", "", "img/clients/slides/jon-bg1.jpg", "img/clients/slides/iphone-jon-bg2.jpg");
iPhoneImageArr[8]= new Array("mtv", "", "img/clients/slides/mtv-bg1.jpg", "img/clients/slides/iphone-mtv-bg2.jpg", "img/clients/slides/iphone-mtv-bg3.jpg");
iPhoneImageArr[9]= new Array("hoo",  "img/clients/slides/hoo-bg.jpg","img/clients/slides/iphone-hoo-bg1.jpg", "img/clients/slides/iphone-hoo-bg2.jpg", "img/clients/slides/iphone-hoo-bg3.jpg");
iPhoneImageArr[10]= new Array("sho", "img/clients/slides/sho-bg.jpg", "img/clients/slides/iphone-sho-bg1.jpg", "img/clients/slides/iphone-sho-bg2.jpg", "img/clients/slides/iphone-sho-bg3.jpg");
iPhoneImageArr[11]= new Array("mal", "", "img/clients/slides/iphone-malibu-bg1.jpg", "img/clients/slides/iphone-malibu-bg2.jpg", "img/clients/slides/iphone-malibu-bg3.jpg");
iPhoneImageArr[12]= new Array("mlb", "img/clients/slides/mlb-bg.jpg",  "img/clients/slides/mlb-bg1.jpg", "img/clients/slides/mlb-bg2.jpg", "img/clients/slides/mlb-bg3.jpg", "img/clients/slides/mlb-bg4.jpg", "img/clients/slides/mlb-bg5.jpg");

iPadImageArr[0]= new Array("tri", "img/clients/slides/tri-bg.jpg", "img/clients/slides/ipad-tri-bg1.jpg", "img/clients/slides/ipad-tri-bg2.jpg", "img/clients/slides/ipad-tri-bg3.jpg");
iPadImageArr[1]= new Array("har", "img/clients/slides/har-bg.jpg", "img/clients/slides/ipad-har-bg1.jpg", "img/clients/slides/ipad-har-bg2.jpg");
iPadImageArr[2]= new Array("chi", "img/clients/slides/chi-bg.jpg", "img/clients/slides/ipad-chi-bg1.jpg", "img/clients/slides/ipad-chi-bg2.jpg", "img/clients/slides/ipad-chi-bg3.jpg");
iPadImageArr[3]= new Array("eff", "img/clients/slides/eff-bg.jpg", "img/clients/slides/ipad-eff-bg1.jpg", "img/clients/slides/ipad-eff-bg2.jpg", "img/clients/slides/ipad-eff-bg3.jpg");
iPadImageArr[4]= new Array("bum", "img/clients/slides/bum-bg.jpg", "img/clients/slides/ipad-bum-bg1.jpg", "img/clients/slides/ipad-bum-bg2.jpg", "img/clients/slides/ipad-bum-bg3.jpg");
iPadImageArr[5]= new Array("ud",  "img/clients/slides/ud-bg.jpg", "img/clients/slides/ipad-ud-bg1.jpg", "img/clients/slides/ipad-ud-bg2.jpg", "img/clients/slides/ipad-ud-bg3.jpg", "img/clients/slides/ipad-ud-bg4.jpg");
iPadImageArr[6]= new Array("fas", "img/clients/slides/fas-bg.jpg", "img/clients/slides/ipad-fas-bg1.jpg", "img/clients/slides/ipad-fas-bg2.jpg", "img/clients/slides/ipad-fas-bg3.jpg", "img/clients/slides/ipad-fas-bg4.jpg");
iPadImageArr[7]= new Array("jon", "", "img/clients/slides/jon-bg1.jpg", "img/clients/slides/ipad-jon-bg2.jpg");
iPadImageArr[8]= new Array("mtv", "", "img/clients/slides/mtv-bg1.jpg", "img/clients/slides/ipad-mtv-bg2.jpg", "img/clients/slides/ipad-mtv-bg3.jpg");
iPadImageArr[9]= new Array("hoo",  "img/clients/slides/hoo-bg.jpg","img/clients/slides/ipad-hoo-bg1.jpg", "img/clients/slides/ipad-hoo-bg2.jpg", "img/clients/slides/ipad-hoo-bg3.jpg");
iPadImageArr[10]= new Array("sho", "img/clients/slides/sho-bg.jpg", "img/clients/slides/ipad-sho-bg1.jpg", "img/clients/slides/ipad-sho-bg2.jpg", "img/clients/slides/ipad-sho-bg3.jpg");
iPadImageArr[11]= new Array("mal", "", "img/clients/slides/ipad-malibu-bg1.jpg", "img/clients/slides/ipad-malibu-bg2.jpg", "img/clients/slides/ipad-malibu-bg3.jpg");
iPadImageArr[12]= new Array("mlb", "img/clients/slides/mlb-bg.jpg",  "img/clients/slides/mlb-bg1.jpg", "img/clients/slides/mlb-bg2.jpg", "img/clients/slides/mlb-bg3.jpg", "img/clients/slides/mlb-bg4.jpg", "img/clients/slides/mlb-bg5.jpg");

//images on the home page, stored in array for preloading
homeImages = ["img/home/video-bg.png","img/home/malibu-home.jpg", "img/home/ipad-270-205.jpg","img/home/home-shop.jpg", "img/home/urbandaddy-270-205.jpg", "img/home/home-hark.jpg"];

$(document).ready(function(){
	// smooth hover effect for video player on homepage
	$('.wrapper .video .stu .content').hover(function(){
		$('.wrapper .video .stu .content .cover').stop().fadeIn(300);
	}, function(){
		$('.wrapper .video .stu .content .cover').stop().fadeOut(300);
	});
	
	var screenWidth = screen.width;
	if (screenWidth > 1024){
		deviceLike = "desktop";
		imageArr = desktopImageArr;
	}else if((screenWidth <= 1024) && (screenWidth > 641)){
		deviceLike = "iPad";
		imageArr = iPadImageArr;
	}else if(screenWidth <= 640){
		deviceLike = "iPhone";
		imageArr = iPhoneImageArr;
	}
	
	var windowWidth = $(window).width();
	if (windowWidth > 1024){
		currentState = "desktop";
	}else if((windowWidth <= 1024) && (windowWidth > 641)){
		currentState = "iPad";
	}else if(windowWidth <= 640){
		currentState = "iPhone";
	}
	prevState = currentState;
	var page_name = ""
	$('.nojs').removeClass('nojs');
	if(!$.browser.msie){
		$(".up").fadeOut(1);
	}
	$(document).scroll(function(){
		
		if (window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop>1){
			$(".up").fadeIn(500);
		}
		else if (window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop<=1){
			$(".up").fadeOut(500);
		}
	});
	$('.up a').live('click', function(e){
		e.preventDefault();
        $.scrollTo('0px', 1000);
        return false;
    });
	
	// if($("#nav ul .active").length){
	if($("#nav ul .active").length){
		page_name = $("#nav ul li.active a").attr('href');
	} else{
		// page_name = "home";
	}
	switch (page_name)
	{
	case "home":
	animHomePage_content();
	break;
	case "about-us":
	animAboutPage();
	break;
	case "services":
	animServicesPage()	
	break;
	case "showcase":
	animShowcasePage()
	break;	
	default:
	//animHomePage();
	}
	
	$("#showcase .plist li").each(function(){
		projId = $(this).attr('name');
		projArr = projId.split("_");
		projName = projArr[projArr.length -2];
		projWorkCount = projArr[projArr.length -1];
		projObj[projObj.length]= new project(projName, projWorkCount, "0")
	});

	var hashId = document.location.hash;
	var hash = ""
	switch (hashId){
		case "#tripta":
		hash = "tri";
		break;
		case "#hark":
		hash="har";
		break;
		case "#chicagoBulls":
		hash="chi";
		break;
		case "#effen":
		hash="eff";
		break;
		case "#bumped":
		hash="bum";
		break;
		case "#urbanDaddy":
		hash="ud";
		break;
		case "#fashism":
		hash="fas";
		break;
		case "#adler":
		hash="jon";
		break;
		case "#mtv":
		hash="mtv";
		break;
		case "#hoodhang":
		hash="hoo";
		break;
		case "#shopstar":
		hash="sho";
		break;
		case "#malibu":
		hash="mal"
		break;
		case "#mlb":
		hash="mlb"
		break;
	}
	if(!(hash=="")){
		
		projId = ""
		for (var i=0; i<projObj.length; i++){
			if(hash==projObj[i].proName){
				$("#rside").css("display", 'none');
				var loaderTop = (window.innerHeight - 50)/2 + "px";
				$('#loading').css({"display":"block", "top":loaderTop});
				for (var j=0; j<imageArr.length; j++){
					if(imageArr[j][0]==hash){
						path=imageArr[j][2];
						break;
					}
				}
				projId = hash + "_" + projObj[i].count;
				$("#rside").css("display", "none");
				$('<img/>')
				.load(function(){
					$("#loading").css("display", "none");
					openShowcase(projId, "first");
				}).attr('src', path)
				preloadProjects();
				preloadProjectFades();
			}
		}
	}
	

	$("#showcase .plist li").live('click',function(e){
		//$("#nav").css({'border':"none"})
		var href=$(this).find('a').attr('href');
		e.preventDefault();
		$("html").css({"margin":"0px"})
		projId = $(this).attr('name');
		projArr = projId.split("_");
		projName = projArr[projArr.length -2];
		projWorkCount = projArr[projArr.length -1];
		openShowcase(projId, "first");
		window.location=href
		//preloadWorks(projName, projWorkCount);
	});
	
	$("#rside .pimage").live('click', function(){
		var href=$(this).attr('title');
		$("html").css({"margin":"0px"})
		projId = $(this).attr('id');
		projArr = projId.split("_");
		projName = projArr[projArr.length -2];
		projWorkCount = projArr[projArr.length -1];
		openShowcase(projId, "first");
		window.location=href
		//preloadWorks(projName, projWorkCount);
	})
	
	$("#slide .control ul li").live('click', function(){
		
		var slideNum = $(this).attr('name');
		
		var next = slideNum.charAt(2);
		var current = "";
	
		proj = $("#showcase").attr('class');
		projArr =  proj.split(" ");
		$("#slide .control ul li").each(function(index){
			$(this).css({"background":"#eeeded"})
		});
		$(this).css({"background":"#be3131"})
		
		for (var i=0; i<projArr.length; i++){
			if (projArr[i].indexOf("bg")>-1){
				current = projArr[i].charAt(2);
				break;
			}
		}
		
		//remove class previourclient and nextClient
		$('#slide .left').removeClass('previousClient');
		$('#slide .right').removeClass('nextClient');
		
		if(next==projObj[currentProjNum].count && !(currentProjNum==projObj.length-1)){
			$('#slide .right').addClass('nextClient');
		}
		if(next==1 && !(currentProjNum == 0)){
			$('#slide .left').addClass('previousClient');
		}
		selectSlide(current, next);
	});
	
	$('#slide .previousClient').live('mouseover',function(e){
		$(this).append('<div class="tooltip"><p>Prev client</div>');
		$('.tooltip').css({"top": "0px", "left" : "-105px", "opacity": "0"});
		$('.tooltip').animate({left:"-110px", opacity:"1"}, 250);
	});
	$('#slide .previousClient').live('mouseout', function(){	
		$('tooltip').animate({left:"-105px"}, 250)
		$('.tooltip').remove();
	});
	$('#slide .nextClient').live('mouseover',function(e){
		$(this).append('<div class="tooltip"><p>next client</div>');
		$('.tooltip').css({"top": "0px", "left" : "-105px", "opacity": "0"});
		$('.tooltip').animate({left:"-110px", opacity:"1"}, 250);
	});
	$('#slide .nextClient').live('mouseout', function(){
		$('tooltip').animate({left:"-105px"}, 250)
		$('.tooltip').remove();

	});
	
	$("#slide .control ul li a").click(function(e){
		e.preventDefault();
	});
	$("#rside .pimage").each(function(){
		var animImage = 400;
		var delayBg = 700;
		var animFadeIn = 400;

		$(this).hover(function(){
			$(this).find('.data').stop().animate({opacity:"1"},animImage);
		},function(){
			$(this).find('.data').stop().animate({opacity:"0"},animImage)
		})
	});
	
	$(".recent .image").each(function(){
		var animImage = 400;
		var delayBg = 700;
		var animFadeIn = 400;

		$(this).hover(function(){
			$(this).find('.data').stop().animate({opacity:"1"},animImage);
		},function(){
			$(this).find('.data').stop().animate({opacity:"0"},animImage)
		})
	});

	$("#slide .left ").live("click", function(e){
		e.preventDefault();
		
		var currentProject = $("#showcase").attr('class');	
		var currentProjArr =  currentProject.split(" ");
		var currentProjNum = 0;
		var maxCount = 0;
		var name = "";
		for (var i=0; i<projObj.length; i++){
			if(projObj[i].status=="1"){
				maxCount = projObj[i].count;
				name = projObj[i].proName;
				currentProjNum = i;
			}
		}
		
		
		for (var i=0; i<currentProjArr.length; i++){
			if (currentProjArr[i].indexOf("bg")>-1){
				//$("#showcase").removeClass(currentProjArr[i]);
				current = parseInt(currentProjArr[i].charAt(2));
				
				//remove class previourclient and nextClient
				$('#slide .left').removeClass('previousClient');
				$('#slide .right').removeClass('nextClient');

				if(current==2 && !(currentProjNum==0)){	//current item is second work and not of first project, show prev project link
				
					$('#slide .left').addClass('previousClient');
					$('#slide .previousClient').trigger('mouseover');
				
				}
				
				if (current=="1"){
					if(!(currentProjNum=='0')){
						projId = projObj[currentProjNum - 1].proName + "_" + projObj[currentProjNum - 1].count;
						openShowcase(projId, "last");
					} else{
						
					}
				}
				else{
					next = current -1;
					selectSlide(current, next);
				}
			}
		}
	});

	$("#slide .right ").live("click", function(e){
		e.preventDefault();
		var currentProject = $("#showcase").attr('class');	
		var currentProjArr =  currentProject.split(" ");
		var currentProjNum = 0;
		var maxCount = 0
		var name = ""
		for (var i=0; i<projObj.length; i++){
			if(projObj[i].status=="1"){
				maxCount = projObj[i].count;
				name = projObj[i].proName;
				currentProjNum = i;
			}
		}
		
		for (var i=0; i<currentProjArr.length; i++){
			if (currentProjArr[i].indexOf("bg")>-1){
				//$("#showcase").removeClass(currentProjArr[i]);
				current = parseInt(currentProjArr[i].charAt(2));
				
				//remove class previourclient and nextClient
				$('#slide .left').removeClass('previousClient');
				$('#slide .right').removeClass('nextClient');
				
				if(current==maxCount-1 && !(currentProjNum==projObj.length-1)){	//current item is second last work and not of last project, show next project link
					$('#slide .right').addClass('nextClient');
					$('#slide .nextClient').trigger('mouseover');
				}
				
				if (current==maxCount){
					if(!(currentProjNum==projObj.length-1)){
						projId = projObj[currentProjNum + 1].proName + "_" + projObj[currentProjNum + 1].count;
						openShowcase(projId, "first");
					} else{
						
					}
				}else{
					next = (current % maxCount) + 1;
					selectSlide(current, next);
				}
			}
		}
	});	
	
	$("#slide .pause").live('click', function(e){
		e.preventDefault();
		if($("#lightbox").hasClass('disabled')){
			// do nothing
		} else if(!($("#lightbox").hasClass('visible'))){
			$("#lightbox").stop().fadeIn(500).animate({opacity:"1"}, 500);
			$("#lightbox").addClass('visible');
		} else {
			$("#lightbox").stop().fadeOut(500);
			$("#lightbox").removeClass('visible');
		}
		
	});
	
	$(".wdescription .cross").live('click', function(e){
		e.preventDefault();
		$("#lightbox").fadeOut('500');
	});
	
	$('.iproject').change( function() {    
	index = $(".iproject").attr("selectedIndex");
	projId = $('.iproject option:eq(' + index + ")").attr('title');
	openShowcase(projId, "first");
	});

	
	$(window).resize(function(){
	
		var preloaderTop = $(window).height()/2 - 70;
		$("#preloader").css("top", preloaderTop);
		var windowWidth = $(window).width();
		console.log(windowWidth);
		if (windowWidth > 1009){
			currentState = "desktop";
		}else if((windowWidth <= 1009) && (windowWidth > 641)){
			currentState = "iPad";
		}else if(windowWidth <= 640){
			currentState = "iPhone";
		}
		
		if (currentState != prevState){
			fixBlogHeight();
		}
		// fixBlogHeight();
		prevState = currentState;	
	});
	
});

/*
function name: project
description: project class constructor
*/

function project(proName, count, status){
	this.proName= proName;
	this.count=count;
	this.status = status;
}

/*
function name: selectSlide
description: based on user input (on next and pre button, displays the corresponding slide)
*/
function selectSlide(current,next){
	if (!(current==next)){		
		checkIfReady(current, next);
	}
}

/*
function name: animServices page
description: animates services page
*/

function animServicesPage(){
	var animHeader = 1000;
	var animHeadCont = 250;
	var animDisp = 125;
	//$(".approach .heading").css("opacity", "0");
	$(".approach .content > p").css("opacity", "0");

	$(".approach .content .approachcont .step1").css("opacity", "0");
	$(".approach .content .approachcont .step2").css("opacity", "0");
	$(".approach .content .approachcont .step3").css("opacity", "0");
	$(".approach .content .approachcont .strategy").css("opacity", "0");
	$(".approach .content .approachcont .creative").css("opacity", "0");
	$(".approach .content .approachcont .structure").css("opacity", "0");
	$(".approach .content .approachcont .production").css("opacity", "0");
	
	$(".approach .content .astep").css("opacity", "0");
	$(".trailer").css("opacity", "0");

	//$(".approach .heading").animate({opacity:"1"}, animHeader);
	$(".approach .content > p").animate({opacity:"1"}, animHeadCont, function(){
		$(".approach .content .approachcont").find('.strategy').animate({opacity:"1"}, animDisp);
		$(".approach .content .approachcont").find('.step1').delay(animDisp).animate({opacity:"1"}, animDisp);
		$(".approach .content .approachcont").find('.creative').delay(animDisp*2).animate({opacity:"1"}, animDisp);
		$(".approach .content .approachcont").find('.step3').delay(animDisp*3).animate({opacity:"1"}, animDisp);
		$(".approach .content .approachcont").find('.structure').delay(animDisp*4).animate({opacity:"1"}, animDisp);
		$(".approach .content .approachcont").find('.step2').delay(animDisp*5).animate({opacity:"1"}, animDisp);
		$(".approach .content .approachcont").find('.production').delay(animDisp*6).animate({opacity:"1"}, animDisp);
	});
	$(".trailer").delay(7*animDisp).animate({opacity:"1"});
}
/*
function name: animAboutPage
description: animates about page
*/
function animAboutPage(){
	var showMember = 250;
		//$(".fueled .heading").css("opacity", "0");
		$(".fueled .content").css("opacity", "0");
		$(".team .content .member").css("opacity", "0");

		$(".fueled .content").animate({opacity:"1"}, showMember*2);

		setTimeout(function(){
			$(".team .content .member").each(function(index){
				$(this).delay(index*showMember).animate({opacity:"1"}, showMember);
			});
		}, showMember*2);
}
/*
function name: animHomepage
description: animates home page
*/
function animHomePage(){
	var preloaderTop = $(window).height()/2 - 70;
	$("#preloader").css("visibility", 'visible').css("top", preloaderTop).fadeIn(500);
	var loaded = 0
	var animStarted  = 'false';
	for (var i=0; i<homeImages.length; i++){
		$('<img/>').load(function(){
			loaded++; 	
			if(animStarted=="true"){	//check if animation already started or not
			}else if(loaded==homeImages.length){
				animContent();
			}
		}).attr('src', homeImages[i])
	}

	setTimeout(function(){
		if(loaded<homeImages.length){	//check if loading has completed or not, if not set animstarted as true and start animation
			animStarted = 'true'
			animContent();
		}
	}, 5000)
	
}

function animContent(){
		var animPreloader = 500;
		var clientDelay= 0;
		$("#preloader").fadeOut(animPreloader);
		setTimeout(function(){
		if($("#container").hasClass('js_hidden')){
			$("#container").removeClass('js_hidden');
		}
		$("#client").css("opacity", "0");	
		$(".video").css("display", "none");	
		$(".video .content").css("display", "none");
		$(".recent").css("display", "none");
		$(".recent .heading").css("display", "none");
		$(".recent .content .work1 .limage").css("opacity", "0");
		$(".recent .content .descri").css("opacity", "0");
		$(".recent .content .work1 .image").css("opacity", "0");
		$(".recent .content .image").css("opacity", "0");
		$(".view").css("opacity", "0");

		$(".video").fadeIn(animLogo);
		$(".video .content").fadeIn(animLogo);
		$(".recent").fadeIn(animLogo);		
		$(".recent .heading").fadeIn(animLogo, function(){	
			$("#foot").css("display", "block");
			//$(".up").css("display", "block");	
			$(".view").animate({opacity:"1"}, animWork)
			$(".content > div").each(function(index){
				$(this).delay(index*animWork).animate({opacity:"1"}, animWork )
				clientDelay = animWork * (index + 1);
			});
			$("#client").delay(clientDelay).animate({opacity:"1"}, animWork);
		});
		fixBlogHeight();
	}, animPreloader);
}
/*
function name: showcase page
description: animates showcase page
*/
function animShowcasePage(){
	var animImages = 250
	$("#lside").css({"display":"none"});
	$("#rside .pimage").css({"display":"none"});
	
	$("#lside").fadeIn(animImages, function(){
		$("#rside > div").each(function(index){
			$(this).delay(animImages*index).fadeIn(animImages);
		});
	});	
	
	setTimeout(function(){
			preloadProjects();
			preloadProjectFades();
	}, 2000);
}


/*
function name: checkSlider
description: checks out the selected checkbox (by changing background color) 
*/
function checkSlider(count){
	$("#slide .control ul li").each(function(index){
		if(index == count-1){
			$(this).css({"background":"#be3131"});
			$(this).addClass('slact');
		}
		else{
			$(this).css({"background":"#eeeded"});
			$(this).removeClass('slact');
		}	
	});
}

/*
function name: checkSlider
description: sets status of project element
*/
project.prototype.setStatus = function(status){
	this.status = status
}

/*
function name: openShowcase
description: opens showcase for specified project
*/
function openShowcase(projId, moveToWork){
	$("#lightbox").fadeOut(500);
	$("#lightbox").removeClass('visible');
	$('.tooltip').fadeOut(500);
	$('.tooltip').remove();
	$('#slide .right').removeClass('nextClient');
	
	var currentProject = $("#showcase").attr('class');	
	var currentProjArr =  currentProject.split(" ");
	
	projArr = projId.split("_");
	projName = projArr[projArr.length -2];
	projWorkCount = projArr[projArr.length -1];
	
	for (var i=0; i<projObj.length; i++){
		if(projObj[i].proName == projName){
			projObj[i].setStatus("1")
			currentProjNum = i;
		}
		else{
			projObj[i].setStatus("0")
		}
	}
	selectIndex = currentProjNum + 1;
	$('.iproject option:eq(' + selectIndex + ")").attr('selected', 'selected');
	//if not first project then show link for previous project at prev slide
	if (moveToWork == "first"){
		if(!(currentProjNum==0)){
			if(!($('#slide .left').hasClass('previousClient'))){
				$('#slide .left').addClass('previousClient')
			}
		}else{
			$('#slide .left').removeClass('previousClient')
		}
	} else if(moveToWork == "last") {
		if(!(currentProjNum==projObj.length-1)){
			if(!($('#slide .right').hasClass('nextClient'))){
				$('#slide .right').addClass('nextClient')
			}
		}
	}
	
	preloadWorks(projName, projWorkCount);
	
	$("#showcase .plist li").each(function(){
		if($(this).hasClass('act')){
			$(this).removeClass('act');
		}
		if ($(this).attr('name')==projId){
			$(this).addClass('act');
		}
	});
	
	$("#rside").fadeOut(250);
	changeHash(projName);
	$("#slide").css({"display":"block"})
	//$("#backgroundfade").css({'background-color':"#fff"})
	$("#backgroundfade").animate({opacity:"1"}, 500)
	//$("#background").animate({opacity:"1"}, 500);
	setTimeout(function(){
		
		//$("#backgroundfade").animate({opacity:"0"}, 500)	
		for (var i=0; i<projArr.length; i++){
			$("#background").removeClass(currentProjArr[i]);
			$("#showcase").removeClass(currentProjArr[i]);
		}	
		$("#background").addClass(projName);
		$("#backgroundfade").animate({opacity:"0"}, 500);
		$("#showcase").addClass(projName);
		if (moveToWork == "first"){
			displaySlideBar("1"); //load just 1 slide bar checkbox
			$("#showcase").addClass("bg1");
			checkSlider(1);
		} else if(moveToWork == "last") {
			loadAndDisplayLastWork(projWorkCount);
		}
		setDescriptionLightbox(projId);
	}, 500);
}

function setDescriptionLightbox(projId){
	// Added code to disable lightbox for certain showcase items
	// TC @fueled
	if($("#rside #" + projId + " .lightbox-info").hasClass('disabled')){
	    $('#lightbox').addClass('disabled');
	} else if($('#lightbox').hasClass('disabled')){
	    $('#lightbox').removeClass('disabled');
	}
	
	var clientLogoSrc = $("#rside #" + projId + " .lightbox-info img").attr('src');
	var title1Content = $("#rside #" + projId + " .lightbox-info .desc-1").html();
	var title2Content = $("#rside #" + projId + " .lightbox-info .desc-2").html();
	var websiteLink = 	$("#rside #" + projId + " .lightbox-info a.website").attr('href');
	var appstoreLink = 	$("#rside #" + projId + " .lightbox-info a.appstore").attr('href');
	$(".wdescription .wcont .descLogo").css({'background-image':"url(" + clientLogoSrc + ")"});
	$(".wdescription .wcont .title-1 p").html(title1Content);
	$(".wdescription .wcont .title-2 p").html(title2Content);
	$(".wdescription .wcont a.appstore").attr('src', appstoreLink);
	$(".wdescription .wcont a.website").attr('src', websiteLink);
	
	if (websiteLink == ""){
		$(".wdescription .wcont a.website").addClass('invisible').attr('src', '#');
	} else {
		$(".wdescription .wcont a.website").attr('href', websiteLink).removeClass('invisible');
	}

	if (appstoreLink == "") {
		$(".wdescription .wcont a.appstore").addClass('invisible').attr('src', '#');
	} else {
		$(".wdescription .wcont a.appstore").attr('href', appstoreLink).removeClass('invisible');
	}
	
	
}
/*
function name: preloadProjects
description: preload work1 images for each listed project
*/
function preloadProjects(){
	for (var i=0; i<imageArr.length; i++){
		path = imageArr[i][2];	//work images starts at index 2 after project name and background
		$('<img/>')
		.attr('src', path);
	}
}

/*
function name: preloadProjectfades
description: preload background fade images for each listed project
*/
function preloadProjectFades(){
	for (var i=0; i<projObj.length; i++){
		//bg fade images starts at index 1 after project name
		path = imageArr[i][1];
		if (!(path=="")){
			$('<img/>')
			.attr('src', path);
		}
	}
}
/*
function name: preloadWorks
description: preload work images for specified project
*/
function preloadWorks(name, count){
	$("#slide").css({"display":"block"})
/*
	$("#slide .control ul li").css("display", "none");
	$("#slide .control ul li").removeClass("ready");*/

	$("#slide .control ul li").each(function(index){
		if((index>0)){
			$(this).css({"display":"none", "background":"#eeeded"}).removeClass("ready");
			if(index<count){
				$(this).fadeIn(200);
				$(this).css("border","1px solid #e3e3e3");
			}
		}
	});
	var j = 2;
	for (var k=0; k<imageArr.length; k++){
		if(name==imageArr[k][0]){
			for (var i=3; i<=imageArr[k].length; i++){
				path = imageArr[k][i];
				$('<img/>')
				.load(function(){
					displaySlideBar(j++);
				})
				.attr('src', path);
			}
		}
	}
}
/*
function name: displaySlideBar
description: displays the slidebar on showwcase page depending on the number of images/works for the project
*/
function displaySlideBar(count){
	$("#slide .control ul li").each(function(index){
		if (index==count-1){
				//$(this).fadeIn(100)
				$(this).css("border","1px solid #2f2e2e")
				$(this).addClass("ready");
/*
				if (index==0){
					$(this).css({"background":"#be3131"})
				}
				else{
					$(this).css({"background":"#eeeded"})
				}*/

			}
	});
}
/*
function name: fixBlogHeight
description: automatically modifies the blog post hieght to contain in the specified div height
*/
function fixBlogHeight(){
	$(".blog").each(function(index){
		var data = $(this).find("p#dummy").html();
		$(this).find("p#content").empty();
		if (data.indexOf("...") == data.length - 3){
		data.lenth =  data.length -3;
		}
		var ht = 0;
		var blogHeight;
		var contentHeight;
		var windowWidth = $(document).width();
		if (windowWidth > 1009){
			blogHeight = 205;
		}else if((windowWidth <= 1009) && (windowWidth > 641)){
			blogHeight = 170;
		}else if(windowWidth <= 640){
			blogHeight = 160;
		}
		contentHeight = blogHeight - $(this).find(".dheading").outerHeight() - $(this).find(".date").outerHeight() - $(this).find(".read").outerHeight() - 17; 
		var i = 0;
		while(ht <=contentHeight && i<=data.length){
			$(this).find("p#content").text(data.substr(0, i) + "...")
			ht = $(this).find('p#content').height()
			if(ht >= contentHeight){
				$(this).find("p#content").text(data.substr(0, i-1) + "...")
				break;
			}
			i++;
		}
		$(this).css("height", blogHeight + "px")
	});
}
/*
function name: changeHash
description: changes window location address based on the selected project
*/
function changeHash(projName){
	var href=""
	switch (projName){
		case "tri":
		href="#tripta"
		break;
		case "har":
		href="#hark"
		break;
		case "chi":
		href="#chicagoBulls"
		break;
		case "eff":
		href="#effen"
		break;
		case "bum":
		href="#bumped"
		break;
		case "ud":
		href="#urbanDaddy"
		break;
		case "fas":
		href="#fashism"
		break;
		case "jon":
		href="#adler"
		break;
		case "mtv":
		href="#mtv"
		break;
		case "hoo":
		href="#hoodhang"
		break;
		case "sho":
		href="#shopstar"
		break;
		case "mal":
		href = "#malibu"
		break;
		case "mlb":
		href = "#mlb"
		break;
	}
	window.location = href;
}

/*
function name: checkIfReady
description: checks if the slideshow image is loaded and ready to display if not, it rechecks until its ready 
*/
function checkIfReady(current, next){
	var slide_to="bg"+next;
	var slide_from="bg"+current;
	if(!$('li[name=' + slide_to + ']').hasClass('ready')){
		$('#loading').css({"display":"block", "top":loaderTop});
		setTimeout(function(){
			checkIfReady(current, next);
		}, 100);
	}else{
		$('#loading').fadeOut(100);
		showImage(current, next);
	}
}

/*
function name: showImage
description: displays image after its loaded from the server/cache
*/
function showImage(current, next){
	var slide_to="bg"+next;
	var slide_from="bg"+current;
	$("#backgroundfade").animate({opacity:"1"}, 500);
	setTimeout(function(){
		if($("#showcase").hasClass(slide_from)){
			$("#showcase").removeClass(slide_from);
		}
		$("#backgroundfade").animate({opacity:"0"}, 500);
		$("#showcase").addClass(slide_to);		
	}, 500);
	checkSlider(next);
}
function loadAndDisplayLastWork(projWorkCount){
	var slide_to="bg"+projWorkCount;

	if(!$('li[name=' + slide_to + ']').hasClass('ready')){
		$('#loading').css({"display":"block", "top":loaderTop});
		setTimeout(function(){
			loadAndDisplayLastWork(projWorkCount);
		}, 500);
	}else{
		$('#loading').fadeOut(100);
		$("#showcase").addClass(slide_to);
		checkSlider(projWorkCount)
	}
}
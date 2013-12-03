var projectsArr = new Array();
var iPhoneImageArr = new Array();
var currentProject = 0;
projectsArr[0] = new Array("ideeli", "iPhone Development", "ideeli offers members exclusive access to designer brands at exceptional prices. Shop our new limited-time sales every day, featuring dresses, handbags, jewelry, shoes, home, beauty, and more.", "images/projects/ideeli/showcase_bw.png", "images/projects/ideeli/showcase.png", "images/projects/ideeli/1.png", "images/projects/ideeli/2.png", "images/projects/ideeli/3.png", "http://bit.ly/W5ItRH");
projectsArr[1] = new Array("Audio Xciter", "iPhone Development", "Audio Xciter&trade; makes all your music, podcasts and audio books sound dramatically better, with richness, clarity and spaciousness that's typically lost in digital files.", "images/projects/aphex/showcase_bw.png", "images/projects/aphex/showcase.png", "images/projects/aphex/1.png", "images/projects/aphex/2.png", "images/projects/aphex/3.png", "http://bit.ly/L8O30R");
projectsArr[2] = new Array("Jackthreads", "iPhone Development", "A mobile app for fashion flash sales, which allow shoppers all the necessary functions of the browsing, buying, adjust sizes and shades, all the way through checking out and place orders. The app contain beautiful graphics and animation, and supports push-notifications for new sales.", "images/projects/jt/showcase.png", "images/projects/jt/showcase.png", "images/projects/jt/1.png", "images/projects/jt/2.png", "images/projects/jt/3.png", "http://bit.ly/wD8iPF");
projectsArr[3] = new Array("ATN", "iPhone Development", "Access The Night is an all-access ticket to the nightlife you have always wanted, providing you with the most current and personalized deals from your favorite bars, clubs, and restaurants. Through push notifications from venues themselves, local maps, and newsfeeds, ATN provides instant, up-to-the-minute word of discounts the moment they begin.", "images/projects/ATN/showcase_bw.png", "images/projects/ATN/showcase.png", "images/projects/ATN/1.png", "images/projects/ATN/2.png", "images/projects/ATN/3.png", "http://bit.ly/MllP7m");
projectsArr[4] = new Array("Ducati", "iPhone Development", "The Ducati Community for iPhone enables you to post your journeys on the go and see what others are doing right now as it happens in real-time.", "images/projects/ducati/showcase_bw.png", "images/projects/ducati/showcase.png", "images/projects/ducati/1.png", "images/projects/ducati/2.png", "images/projects/ducati/3.png", "http://bit.ly/z9eAe4");
projectsArr[5] = new Array("Pixi", "Strategy, Design & Development", "Pixi is the simplest way to order gorgeous photo prints directly from your iPhone. Getting your memories printed as Polaroids, Photobooks was never so easy!", "images/projects/pixi/showcase_bw.png", "images/projects/pixi/showcase.png", "images/projects/pixi/1.png", "images/projects/pixi/2.png", "images/projects/pixi/3.png","");


$(document).ready(function (){
    // $(".bar").delay(400).mouseenter(function(){
    //     if(!$('.bar').is(':animated')|| !$('.link').is(':animated')){
    //         $(this).animate({width:0},200);
    //         $(this).prev('div').delay(200).animate({width:145},200);
    //     }
    // });
    // $(".link").delay(400).mouseleave(function(){
    //     if(!$('.bar').is(':animated')|| !$('.link').is(':animated')){
    //         $(this).animate({width:0},200);
    //         $(this).next('div').delay(200).animate({width:17},200);
    //     }
    // });
	
	$(".link").each(function(){
		$(this).hover(function(){
	            $(this).stop().animate({width:145},200);
		},function(){
	            $(this).stop().animate({width:17},200);
		})
	});
	
        $(".aboutdetail").click(function(){
         $(".snap").animate({left:"-=970"},800);
         $(".about").animate({left:"-=970"},800);
         $(".snap1").animate({left:"-=970"},800);
         $(".about1").animate({left:"-=970"},800);
         });
    $(".aboutdetail1").click(function(){
             $(".snap1").animate({left:"+=970"},800);
             $(".about1").animate({left:"+=970"},800);
             $(".snap").animate({left:"+=970"},800);
             $(".about").animate({left:"+=970"},800);
             });

	$(".workImage").each(function(index){
		var src = projectsArr[index][4];
		var src_bw = projectsArr[index][4];
		$(this).css("background", 'url(' + src + ') 0 0');
		$(this).hover(function(){
			$(this).css("background",'url(' + src + ') -280px 0');
		},function(){
			$(this).css("background",'url(' + src + ') 0 0');
		})
	});
	$(".work .worktext").each(function(index){
		var desc = projectsArr[index][0] + "  |  " + projectsArr[index][1];
		 $(this).html(desc);
	});
	
	$(".work").each(function(index){
		$(this).click(function(){
			
			if ($(".picker").hasClass("active")) {
				$(".picker").removeClass("active");
			};
			$("#picker1").addClass("active");
			currentProject = index;
			var top = $("#proj_desc").offset().top;
			$(window).scrollTo(top - 110, 500);
			var src = projectsArr[index][5];
			$(".proj_desc #content #left #slideshow img").attr("src", src);
			var desc = projectsArr[index][0] + "  /  " + projectsArr[index][1];
			$(".proj_desc #content #right #title p").html(desc);
			var details = projectsArr[index][2];
			$(".proj_desc #content #right #details p").html(details);
			$(".proj_desc #content").animate({height:660}, 800);
			var href = projectsArr[index][8];
			console.log(href);
			if (href.length > 0) {
				$(".proj_desc #content a").show();
				$(".proj_desc #content a").attr("href", href);
			} else {
				$(".proj_desc #content a").hide();
			}
			preloadWorks(index);
		});
	});
	$("#image_selectors > div").each(function(index){
		$(this).click(function(){
			if ($(".picker").hasClass("active")) {
				$(".picker").removeClass("active")
			}
			$(this).addClass("active");
			var src = projectsArr[currentProject][index+5];
			$(".proj_desc #content #left #slideshow img").animate({opacity:"0.8"},500, function(){
				$(".proj_desc #content #left #slideshow img").attr("src", src);
				$(".proj_desc #content #left #slideshow img").animate({opacity:"1"},500);
			});
			
		});
	});
	
	$("#cross").click(function(){
		$(".proj_desc #content").animate({height:0}, 800);
	});

	$(".navlinks").click(function(e){
		e.preventDefault();
		var link = $(this).attr("name");
		var div = $("." + link);
		var top = div.offset().top;
		$(window).scrollTo(top - 110, 500);
	});
	
	$(".link").click(function(e){
		e.preventDefault();
		var link = $(this).attr("name");
		$(window).scrollTo("." + link, 500);
	});
		
	preloadProjectsHovers();
	preloadProjects();
});

function preloadProjects(){
	for (var i=0; i<projectsArr.length; i++){
		path = projectsArr[i][5];	//work images starts at index 5 after project name and background
		$('<img/>')
		.attr('src', path);
	}
}

function preloadProjectsHovers(){
	for (var i=0; i<projectsArr.length; i++){
		path = projectsArr[i][3];	//work images starts at index 5 after project name and background
		$('<img/>')
		.attr('src', path);
	}
}

function preloadWorks(index){

	var j = 2;
	for (var k=0; k<2; k++){
		path = projectsArr[index][6+k];	//work images starts at index 5 after project name and background
		$('<img/>')
		.attr('src', path);
	}
}


    



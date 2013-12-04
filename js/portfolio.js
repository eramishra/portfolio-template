var projectsArr = new Array();
var iPhoneImageArr = new Array();
var currentProject = 0;
projectsArr[0] = new Array("Project", "Web Development", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.", "", "images/projects/project-1/showcase.png", "images/projects/project-1/1.png", "images/projects/project-1/2.png", "images/projects/project-1/3.png", "#");
projectsArr[1] = new Array("Project", "Web Development", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.", "", "images/projects/project-2/showcase.png", "images/projects/project-2/1.png", "images/projects/project-2/2.png", "images/projects/project-2/3.png", "#");
projectsArr[2] = new Array("Project", "Web Development", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.", "", "images/projects/project-3/showcase.png", "images/projects/project-3/1.png", "images/projects/project-3/2.png", "images/projects/project-3/3.png", "#");
projectsArr[3] = new Array("Project", "Web Development", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.", "", "images/projects/project-4/showcase.png", "images/projects/project-4/1.png", "images/projects/project-4/2.png", "images/projects/project-4/3.png", "#");
projectsArr[4] = new Array("Project", "Web Development", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.", "", "images/projects/project-5/showcase.png", "images/projects/project-5/1.png", "images/projects/project-5/2.png", "images/projects/project-5/3.png", "#");
projectsArr[5] = new Array("Project", "Web Development", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.", "", "images/projects/project-6/showcase.png", "images/projects/project-6/1.png", "images/projects/project-6/2.png", "images/projects/project-6/3.png", "#");


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
			$(".proj_desc #content").animate({height:590}, 800);
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


    



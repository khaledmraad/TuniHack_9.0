var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

$(document).ready(function(){
    
    // click outside spy
    $("html").on("click",function(){
        $(".search").removeClass("active");
    });// end click outside spy
    
    // toggle search 
    $(".search .search-button").on("click",function(e){        
        $(this).parent(".search").toggleClass("active");
        e.stopPropagation();
    });
    $(".search .search-container").on("click",function(e){
        e.stopPropagation();
    });// end toggle search

    // MixItUp
    if($(".mix-grid").length > 0)
        $(".mix-grid").mixItUp();  
    // end MixItUp
    
    // animate on scroll
    $(".this-animate").each(function(){
        $(this).appear(function(){
            $(this).addClass("animated").addClass($(this).data("animate")).addClass("this-animated");            
        });        
    });
    // end animate on scroll
    
});

$(function(){    
    onPageResize();
    navController();    
});

$(window).scroll(function(){    
    if($(window).scrollTop() > 40){
        $(".page-container").addClass("page-header-fixed");
        
        if($(window).scrollTop() < 40)
            $(".page-container .page-content").css("padding-top",$(window).scrollTop());
    }else{
        $(".page-container").removeClass("page-header-fixed");    
        $(".page-container .page-content").css("padding-top","");
    }
});

$(window).resize(function(){
    onPageResize();
});

// on page resize actions
function onPageResize(){
    
    var pageWidth = window.innerWidth || $(document).width();
    
    if(pageWidth <= 1100)
        $(".page-header .navigation").addClass("navigation-mobile");
    else
        $(".page-header .navigation").removeClass("navigation-mobile,active").find("li").removeClass("open");
    
}// end on page resize actions

// navigation controller 
function navController(){
    
    // toggle navigation
    $(".navigation-toggle-button").on("click",function(){
        $(".page-header .navigation").toggleClass("active");
    });// end toggle navigation
    
    $(".page-header-holder").on("click",".navigation-mobile li > a",function(e){
        
        var li = $(this).parent("li");
        
        if(li.children("ul").length > 0){            
            li.toggleClass("open");
        }
        
    });    
    
}// end navigation controller 

}
/*
     FILE ARCHIVED ON 06:17:59 Jan 15, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:13:23 Nov 21, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 61.76
  exclusion.robots: 0.078
  exclusion.robots.policy: 0.066
  cdx.remote: 0.067
  esindex: 0.013
  LoadShardBlock: 41.972 (3)
  PetaboxLoader3.datanode: 67.531 (5)
  load_resource: 283.236 (2)
  PetaboxLoader3.resolve: 229.914 (2)
*/
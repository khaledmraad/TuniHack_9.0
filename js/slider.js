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

$(document).ready(function() {
  $(".banner")
    .show()
    .revolution({
      dottedOverlay: "none",
      delay: 16000,
      startwidth: 1100,
      startheight: 600,
      hideThumbs: 200,

      thumbWidth: 100,
      thumbHeight: 50,
      thumbAmount: 5,

      navigationType: "none",
      navigationArrows: "solo",
      navigationStyle: "preview4",

      touchenabled: "on",
      onHoverStop: "on",

      swipe_velocity: 0.7,
      swipe_min_touches: 1,
      swipe_max_touches: 1,
      drag_block_vertical: false,

      parallax: "mouse",
      parallaxBgFreeze: "on",
      parallaxLevels: [7, 4, 3, 2, 5, 4, 3, 2, 1, 0],

      keyboardNavigation: "off",

      navigationHAlign: "center",
      navigationVAlign: "bottom",
      navigationHOffset: 0,
      navigationVOffset: 20,

      soloArrowLeftHalign: "left",
      soloArrowLeftValign: "center",
      soloArrowLeftHOffset: 20,
      soloArrowLeftVOffset: 0,

      soloArrowRightHalign: "right",
      soloArrowRightValign: "center",
      soloArrowRightHOffset: 20,
      soloArrowRightVOffset: 0,

      shadow: 0,
      fullWidth: "on",
      fullScreen: "off",

      spinner: "spinner4",

      stopLoop: "off",
      stopAfterLoops: -1,
      stopAtSlide: -1,

      shuffle: "off",

      autoHeight: "off",
      forceFullWidth: "off",

      hideThumbsOnMobile: "off",
      hideNavDelayOnMobile: 1500,
      hideBulletsOnMobile: "off",
      hideArrowsOnMobile: "off",
      hideThumbsUnderResolution: 0,

      hideSliderAtLimit: 0,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      startWithSlide: 0,
      videoJsPath: "rs-plugin/videojs/",
      fullScreenOffsetContainer: ""
    });
}); //ready

/******************************************************************************************************************************
COMMING SOON PAGE
*******************************************************************************************************************************/
(function($) {
  /**
   * Set your date here  (YEAR, MONTH (0 for January/11 for December), DAY, HOUR, MINUTE, SECOND)
   * according to the GMT+0 Timezone
   **/
  var launch = new Date(2018, 10, 30, 23, 00);
  /**
   * The script
   **/
  var message = $("#message");
  var days = $("#days");
  var hours = $("#hours");
  var minutes = $("#minutes");
  var seconds = $("#seconds");

  setDate();
  function setDate() {
    var now = new Date();
    if (launch < now) {
      days.html("<h1>0</H1><p>Day</p>");
      hours.html("<h1>0</h1><p>Hour</p>");
      minutes.html("<h1>0</h1><p>Minute</p>");
      seconds.html("<h1>0</h1><p>Second</p>");
      // message.html('OUR SITE IS NOT READY YET...');
    } else {
      var s =
        -now.getTimezoneOffset() * 60 +
        (launch.getTime() - now.getTime()) / 1000;
      var d = Math.floor(s / 86400);
      days.html("<h1>" + d + "</h1><p>Day" + (d > 1 ? "s" : ""), "</p>");
      s -= d * 86400;

      var h = Math.floor(s / 3600);
      hours.html("<h1>" + h + "</h1><p>Hour" + (h > 1 ? "s" : ""), "</p>");
      s -= h * 3600;

      var m = Math.floor(s / 60);
      minutes.html("<h1>" + m + "</h1><p>Minute" + (m > 1 ? "s" : ""), "</p>");

      s = Math.floor(s - m * 60);
      seconds.html("<h1>" + s + "</h1><p>Second" + (s > 1 ? "s" : ""), "</p>");
      setTimeout(setDate, 1000);

      // message.html('OUR SITE IS NOT READY YET, BUT WE ARE COMING SOON');
    }
  }
})(jQuery);
/******************************************************************************************************************************
ANIMATIONS
*******************************************************************************************************************************/
(function($) {
  "use strict";
  var isMobile = false;
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i)
  ) {
    isMobile = true;
  }
  if (isMobile == true) {
    $("body").removeClass("nomobile");
    $(".animated").removeClass("animated");
  }
  $(function() {
    if (isMobile == false) {
      $("*[data-animated]").addClass("animated");
    }
    function animated_contents() {
      $(".animated:appeared").each(function(i) {
        var $this = $(this),
          animated = $(this).data("animated");

        setTimeout(function() {
          $this.addClass(animated);
        }, 50 * i);
      });
    }
    animated_contents();
    $(window).scroll(function() {
      animated_contents();
    });
  });
})(jQuery);
/******************************************************************************************************************************
SLIDER
*******************************************************************************************************************************/
(function($) {
  "use strict";
  $("body.nomobile #slider").revolution({
    delay: 9000,
    startheight: 450,
    startwidth: 890,

    thumbWidth: 100,
    thumbHeight: 50,
    thumbAmount: 5,

    onHoverStop: "on",
    hideThumbs: 200,
    navigationType: "bullet",
    navigationStyle: "round",
    navigationArrows: "none",

    touchenabled: "on",

    navOffsetHorizontal: 0,
    navOffsetVertical: 80,
    shadow: undefined,
    fullWidth: "on",
    fullScreen: "on"
  });
})(jQuery);
/******************************************************************************************************************************
BOOTSTRAP
*******************************************************************************************************************************/
(function($) {
  "use strict";
  $("[data-rel=tooltip]").tooltip();
  $(".alert").alert();
})(jQuery);
/******************************************************************************************************************************
PROGRESS BAR
*******************************************************************************************************************************/
(function($) {
  "use strict";
  $("a.btn-progress").click(function() {
    $("#bar-container").slideToggle();
  });
})(jQuery);


}
/*
     FILE ARCHIVED ON 04:25:55 Jan 04, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:13:24 Nov 21, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 93.574
  exclusion.robots: 0.08
  exclusion.robots.policy: 0.069
  cdx.remote: 0.066
  esindex: 0.01
  LoadShardBlock: 66.931 (3)
  PetaboxLoader3.datanode: 78.4 (4)
  load_resource: 68.4
  PetaboxLoader3.resolve: 35.995
*/
function getImgCapaHeight(){

    var imgCapaHeight = $(".imgCapa").height();
	$(".dateCounter").css('margin-top', - (imgCapaHeight-200)/2-200);
    $(".capaContent").css('height', imgCapaHeight);
}


function dateCounterTime(){
    // Set the targetDate
    var targetDate = new Date("December 6, 2014 16:30:00");

    var remainingSeconds = ~ ~((targetDate - new Date()) / 1000);
    var remainingTime = remainingSeconds / (60 * 60 * 24);

    var str = remainingTime;
    var intRemainingTime = parseInt(remainingTime);

    $(".dateCounter span").text(intRemainingTime);
    
    // Store the result in the element
   // counter.innerHTML = str.substring(n);
 }


function flexSliderPlay(){
 $('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 210,
        itemMargin: 5,
        asNavFor: '#slider'
      });

  $('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel",
    start: function(slider){
      $('body').removeClass('loading');
    }
  });
}


function presentAction(event){
    event.preventDefault();

        $(".imgLayerDisplay").attr("src", imgLayer)
        $(".layer").css("display", "block");
        

        //return false;

}

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1100 );
        return false;
      }
    }
  });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.navMain a').each(function () {
        console.log("oi");
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.navMain a').removeClass("navMainActive");
            currLink.addClass("navMainActive");
        }
        else{
            currLink.removeClass("navMainActive");
        }
    });
}


$(window).load(function() {
	getImgCapaHeight();
	flexSliderPlay();

  $('.flexslider').flexslider({
    animation: "slide"
  });

});

$(window).resize(function() {
	getImgCapaHeight();
});

$(document).ready(function(){
	dateCounterTime();
    $(document).on("scroll", onScroll);

    $(".presentContentAction a.openLayer").click(function(event){
        event.preventDefault();
        
        var imgLayer = $(this).find('img').attr('src');
        var spanLayer = $(this).find("span").text();
        var priceLayer = $(this).find("b").text();
        
        $(".imgLayerDisplay").attr("src", imgLayer);
        $(".layerCaption b").html(spanLayer);
        $(".layerCaption span").html(priceLayer);
        $(".layer").css("display", "block");

        return false;
    });

    $("a.voltarAction").click(function(event){
            event.preventDefault();
            $(".layer").css("display", "none");
            return false;
        });
});


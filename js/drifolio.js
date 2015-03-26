var html = [];

var youTubeVideos = [
  { "videoId": "h8MSere_Gr8", "title": "Count on me... by Ashni Modi" },
  { "videoId": "H2BkgQbexco", "title": "Teri galiyaan... by Ashni Modi." },
  { "videoId": "F23DQD5FWCk", "title": "Ishq bulava... by Chirag Solanki." },
  { "videoId": "f2Xlq0MzVYI", "title": "Give thanks... by Joy Ashish" }
]

$.each(youTubeVideos, function (i, youTubeVideo) {
        html.push('<li><a href="' + youTubeVideo.title + '">');
        html.push('<iframe width="420" height="315" src="https://www.youtube.com/embed/' + youTubeVideo.videoId + '" frameborder="0" allowfullscreen="" style="width: 100%;"></iframe>');
        html.push('</a>');
        html.push('<h3><a href="' + youTubeVideo.title + '">' + youTubeVideo.title + '</h3>');
        html.push('</a></li>');
    });

$('#shotsByPlayerId').html(html.join(''));


//========================
//PRELOADER
//========================
$(window).load(function() { // makes sure the whole site is loaded
	$('#status').fadeOut(); // will first fade out the loading animation
	$('#preloader').delay(350).fadeOut('slow');
    // will fade out the white DIV that covers the website.
	$('body').delay(350).css({'overflow':'visible'});
})
//========================
//CUSTOM SCROLLBAR
//========================
$("html").niceScroll({
    mousescrollstep: 70,
    cursorcolor: "#ea9312",
    cursorwidth: "5px",
    cursorborderradius: "10px",
    cursorborder: "none",
});


//========================
//SMOOTHSCROLL
//========================
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


//========================
//NAVBAR
//========================
(function ($) {
  $(document).ready(function(){

    // hide .navbar first
    $(".navbar").hide();

    // fade in .navbar
    $(function () {
        $(window).scroll(function () {

                 // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > 40) {
                $('.navbar')
                .removeClass('animated fadeOutUp')
                .addClass('animated fadeInDown')
                .fadeIn();
                
            } else {
                $('.navbar')
                .removeClass('animated fadeInDown')
                .addClass('animated fadeOutUp')
                .fadeOut();
            }
        });
    });

});
  }(jQuery));

//========================
//icon hover effect
//========================
$('#services img').hover(
       function(){ $(this).addClass('animated pulse') },
       function(){ $(this).removeClass('animated pulse') })
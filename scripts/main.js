



/*Top navigation toggle menu*/
function navIconClick() {
    var x = document.getElementById("nav-bar");
    if (x.className === "topnav") {
        x.className += " topnav-expand";
    } else {
        x.className = "topnav";
    }
}




$(document).ready(function(){

/*skip to content*/

    // bind a click event to the 'skip' link
  $(".skip").click(function(event){
        // strip the leading hash and declare
        // the content we're skipping to
      var skipTo="#"+this.href.split('#')[1];
        // Setting 'tabindex' to -1 takes an element out of normal
        // tab flow but allows it to be focused via javascript
      $(skipTo).attr('tabindex', -1).on('blur focusout', function () {
            // when focus leaves this element,
            // remove the tabindex attribute
          $(this).removeAttr('tabindex');
      }).focus(); // focus on the content container
  });

  /*side-nav*/

    $('#side-nav').hide(); // inidially hide the side nav
    var topOfMainContent = $('#1').offset().top;
    $(window).scroll(function(){
      if($(window).scrollTop() > topOfMainContent){
        $('#side-nav').show();
      } else {
        $('#side-nav').hide();
      }
    });

    $('#side-nav nav a').on('click', function(event) {
        $(this).parent().find('a').removeClass('active');
        $(this).addClass('active');
    });

    $(window).on('scroll', function() {
        $('.aside-target').each(function() {
            if($(window).scrollTop() >= $(this).offset().top) {
                var id = $(this).attr('id');
                $('#side-nav nav a').removeClass('active');
                $('#side-nav nav a[href = "#'+ id +'"]').addClass('active');
            }
        });
    });


});

// When the user scrolls the page, execute myFunction//
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {scrollbarFunction()};

function scrollbarFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("bar").style.width = scrolled + "%";

  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav-whole").style.top = "5px";
  } else {
    document.getElementById("nav-whole").style.top = "-77px";
  }
  prevScrollpos = currentScrollPos;
}

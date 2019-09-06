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

});

$(function() {

  /**
   * highlight active nav item
   */
  let url = window.location.href;
  // console.log(links);
  $('nav a, footer a').each(function(index, link) {
    // console.log(link);
    if (link.href === url) {
      link.dataset.active = true;
      link.removeAttribute('href');
      return false; // https://stackoverflow.com/a/5515211/13765033
    }
  });

  /**
   * open close aside cards based on screen width
   */
   let breakpoint = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-md'));
   // console.log(breakpoint);
   $(window).on('load resize', function() {
     // screen is big enough, expand all aside cards
     if ($(window).width() > breakpoint) {
       $('aside details').attr('open', true);
     }
     // screen to small, collapse all aside cards
     else {
       $('aside details').attr('open', false);
     }
   });

});

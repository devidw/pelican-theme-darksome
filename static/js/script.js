$(function() {

  /**
   * highlight active nav item in navigations (nav and toc), footer, …
   */
  let url = window.location.href;
  let anchors = $('nav a, footer a');

  /**
   * @param anchor {node}
   */
  function highlight(anchor) {
    // console.log(anchor);
    if (anchor.href === url) {
      anchor.dataset.active = true;
      anchor.removeAttribute('href');
    }
  }

  anchors.each(function(i, anchor) {
    // console.log(anchor);
    highlight(anchor);
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

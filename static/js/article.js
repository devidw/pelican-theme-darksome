$(function() {

  /**
   * built article contents navigation of headlines
   * give each article headline refererencing link
   */

  let headlines = $('.entry-content h1, .entry-content h2, .entry-content h3, .entry-content h4, .entry-content h5, .entry-content h6');

  // fill navigation
  if (headlines.length !== 0) {
    headlines.each(function(i, e) {
      // console.log(i, e);
      let lvl, link;

      // extract headline number from tag:
      // h1 -> 1 - 1 => 0; h2 -> 2 - 1 => 1; ...
      lvl = Number($(e).prop('tagName').charAt(1)) - 1;
      // console.log(lvl);

      // nav items
      link = $(`<li><a href='#${i}'>${$(this).text()}</a></li>`);
      link.attr('data-nav-level', lvl);
      link.appendTo('aside nav ul'); // add # to headings

      // headlines
      $(e).attr('id', i);
      $(`<a href='#${i}'><i class='icon'>link</i></a>`).appendTo(e);

    });
  }
  // no headings - no navigation, go hide it
  else {
    $('aside nav').hide();
  }


  /**
   * share data for native share dialog
   */
  let shareCard = $('.share');
  let shareBtn = shareCard.find('button');
  // console.log(shareBtn);

  // collect share data and set function to call
  if (navigator.share) {
    const shareData = {
      title: document.title,
      text: '',
      url: document.href,
    }
    let description = $('meta[name="description"]').attr('content');
    if (description) {
      shareData.text = description;
    }
    shareBtn.click(function() {
      navigator.share(shareData);
    });
  }
  // no browser support, hide sharing card
  else {
    shareCard.hide();
  }

});

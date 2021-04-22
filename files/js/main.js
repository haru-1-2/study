$(function () {
  const $win = $(window);

  const $btnMenu = $('.btn-menu');
  const $nav = $('header > nav');
  const isAnimate = 'is-animate';
  const isOpen = 'is-open';

  $btnMenu.on('click', function () {
    const $this = $(this);
    if ($nav.is(':animated')) {
      return;
    }
    if (!$this.hasClass(isOpen)) {
      $nav.slideDown();
      $this.addClass(isOpen).addClass(isAnimate);
    } else {
      $nav.slideUp();
      $this.removeClass(isOpen).removeClass(isAnimate);
    }
  });

  $win.on('resize', function () {
    if ($win.width() > 768) {
      $nav.show();
      $btnMenu.removeClass(isOpen).removeClass(isAnimate);
    } else {
      if (!$btnMenu.hasClass(isOpen)) {
        $nav.hide();
      }
    }
  });


  $win.on('scroll', function () {
    const $heading = $('.mask_inner');
    const isAnimate = 'is-animate';
    $heading.each(function () {
      const $this = $(this);
      const headingTop = $this.offset().top;
      const scrollPos = $win.scrollTop();
      const wh = $win.height();
      if (scrollPos > headingTop - wh + (wh / 4)) {
        $this.addClass(isAnimate);
      }
    });
  });


});
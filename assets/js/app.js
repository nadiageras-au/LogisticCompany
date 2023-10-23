$(function () {
  let intro = $("#intro");
  let header = $("#header");
  let introHeight = intro.innerHeight();
  let headerHeight = header.innerHeight();

  headerScroll();

  $(window).on("scroll resize", function () {
    headerScroll();
  });

  function headerScroll() {
    introHeight = intro.innerHeight();
    headerHeight = header.innerHeight();

    let scrollTop = $(this).scrollTop();

    if (scrollTop >= introHeight - headerHeight) {
      header.addClass("header--dark");
    } else {
      header.removeClass("header--dark");
    }
  }
});

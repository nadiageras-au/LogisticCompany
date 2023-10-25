$(function () {
  let intro = $("#intro");
  let header = $("#header");
  let introHeight = intro.innerHeight();
  let headerHeight = header.innerHeight();
  let scrollTop = $(window).scrollTop();

  /* Header class on scroll
  ==============================================*/

  headerScroll();

  $(window).on("scroll resize", function () {
    headerScroll();
  });

  function headerScroll() {
    introHeight = intro.innerHeight();
    headerHeight = header.innerHeight();

    scrollTop = $(this).scrollTop();

    if (scrollTop >= introHeight - headerHeight) {
      header.addClass("header--dark");
    } else {
      header.removeClass("header--dark");
    }
  }

  /* Smooth scroll to sections
  =========================================================*/

  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    let scrollEl = $(this).data("scroll");
    let scrollElPos =
      $(scrollEl).offset().top; /* get position of block from the top */

    $("html, body").animate(
      {
        scrollTop: scrollElPos - headerHeight,
      },
      500
    );
  });

  /* ScrollSpy
  ========================================================= */

  let windowH = $(window).height();
  scrollSpy(scrollTop);

  $(window).on("scroll", function () {
    let scrollTop = $(this).scrollTop();
    scrollSpy(scrollTop);
  });

  function scrollSpy(scrollTop) {
    $("[data-scrollspy]").each(function () {
      let $this = $(this);
      let sectionId = $(this).data("scrollspy");
      let sectionOffset = $this.offset().top;
      sectionOffset = sectionOffset - windowH * 0.25;

      if (scrollTop >= sectionOffset) {
        $("#nav [data-scroll]").removeClass("active");
        $('#nav [data-scroll="' + sectionId + '"]').addClass("active");
      }

      if (scrollTop == 0) {
        $("#nav [data-scroll]").removeClass("active");
      }
    });
  }
});

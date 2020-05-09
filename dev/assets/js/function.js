$(document).ready(function () {
  $('.file input[type="file"]').on("change", function (e) {
    if ($(this).parents(".file").hasClass("muliple")) {
      // 멀티
    } else {
      // 하나만
      $(this).siblings("span").text(e.target.files[0].name);
    }
  });

  $(".left-nav__bg").on("click", function () {
    $("html, body").css("overflow", "auto");
    $(".left-nav").hide();
  });

  $(".header .header__menu").on("click", function (e) {
    e.preventDefault();
    $("html, body").css("overflow", "hidden");
    $(".left-nav").show();
  });
});

function showModal(el) {
  document.querySelector(el).style.display = "flex";
}

$(".js-modal-close").on("click", function (e) {
  e.preventDefault();
  $(this).parents(".modal").hide();
});

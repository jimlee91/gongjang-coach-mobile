$(document).ready(function () {
  $(".feed__slider").slick({
    dots: true,
    arrows: false,
    adaptiveHeight: true,
  });

  $('.file input[type="file"]').on("change", function (e) {
    if ($(this).parents(".file").hasClass("muliple")) {
      // 멀티
      var html = "";
      for (var i = 0; i < e.target.files.length; i++) {
        console.dir(e.target.files[i]); // 각각의 파일 객체
        html += '<li class="fileField-item"><p>' + e.target.files[i]["name"] + '</p><a href="" class="remove-fileField-item">삭제</a></li>';
      }
      $(this).siblings(".lists").append(html);
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

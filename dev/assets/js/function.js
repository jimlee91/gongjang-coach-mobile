$(document).ready(function () {});

function showModal(el) {
  document.querySelector(el).style.display = "flex";
}

$(".js-modal-close").on("click", function (e) {
  e.preventDefault();
  $(this).parents(".modal").hide();
});

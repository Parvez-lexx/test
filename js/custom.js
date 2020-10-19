
$(".box-wrap h2").click(function() {
  $(this).next().slideToggle();
  $(this).find(".fa").toggleClass("fa-minus fa-plus");
});
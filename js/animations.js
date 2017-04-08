var offset = $('.box2').offset();
var leftOffset = offset.left;

$('.box2').animate({
  left: -leftOffset
}, 10000);

$(".draggable").draggable({
  containment: ".container",
  start: function() {
    $('.box2').stop();
  },
  stop: function() {
    offset = $('.box2').offset();
    leftOffset = offset.left;

    $('.box2').animate({
      left: -leftOffset
    }, 10000);
  }
});

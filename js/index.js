// Select Bus Line by Row
var $;

$('.row').click(function () {
  $(this).toggleClass('active');
});
/* when a user clicks, toggle the 'is-animating' class */
$(".row").on('click touchstart', function () {
  $(this).toggleClass('is_animating');
});

/*when the animation is over, remove the class*/
$(".row").on('animationend', function () {
  $(this).toggleClass('is_animating');
});


// Favorite Button - Star
$('.favstar').click(function() {
	$(this).toggleClass('active');
});

/* when a user clicks, toggle the 'is-animating' class */
$(".favstar").on('click touchstart', function(){
  $(this).toggleClass('is_animating');
});

/*when the animation is over, remove the class*/
$(".favstar").on('animationend', function(){
  $(this).toggleClass('is_animating');
});
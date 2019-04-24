document.getElementById('slider-right').onclick = sliderRight;

// autoSlider();
var right = 0;
var timer;


// function autoSlider (){

// 	timer = setTimeout(sliderLeft, 1000);
// }

function sliderRight(){
		var poloska = document.getElementById('poloska');
		right = right - 120;
		if (right < -512) {
			right = +152;
			clearTimeout(timer);
		}
		poloska.style.right = right +'px';
		// autoSlider ();
}

window.HELP_IMPROVE_VIDEOJS = false;

var INTERP_BASE = "https://raw.githubusercontent.com/VVM-hub/project_page_assets/main/L0NeRF_page/figures/lego_base";//./static/interpolation/stacked
var INTERP_L0 = "https://raw.githubusercontent.com/VVM-hub/project_page_assets/main/L0NeRF_page/figures/lego_L0";//./static/interpolation/stacked

var NUM_INTERP_FRAMES = 200;//240

var interp_images = [];
var interp_images_l0 = [];
function preloadInterpolationImages() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE + '/' + String(i).padStart(3, '0') + '.png';//changed: String(i).padStart(6, '0') + '.jpg'
    interp_images[i] = new Image();
    interp_images[i].src = path;
    var path = INTERP_L0 + '/' + String(i).padStart(3, '0') + '.png';
    interp_images_l0[i] = new Image();
    interp_images_l0[i].src = path;
  }
}

function setInterpolationImage(i) {
  var image = interp_images[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper').empty().append(image);
}

function setInterpolationImagel0(i) {
  var image = interp_images_l0[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper2').empty().append(image);
}

$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    var options = {
			slidesToScroll: 1,
			slidesToShow: 3,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

    // Loop on each carousel initialized
    for(var i = 0; i < carousels.length; i++) {
    	// Add listener to  event
    	carousels[i].on('before:show', state => {
    		console.log(state);
    	});
    }

    // Access to bulmaCarousel instance of an element
    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
    	// bulmaCarousel instance is available as element.bulmaCarousel
    	element.bulmaCarousel.on('before-show', function(state) {
    		console.log(state);
    	});
    }

    /*var player = document.getElementById('interpolation-video');
    player.addEventListener('loadedmetadata', function() {
      $('#interpolation-slider').on('input', function(event) {
        console.log(this.value, player.duration);
        player.currentTime = player.duration / 100 * this.value;
      })
    }, false);*/
    preloadInterpolationImages();

    $('#interpolation-slider').on('input', function(event) {
      setInterpolationImage(this.value);
    });
    setInterpolationImage(0);
    $('#interpolation-slider').prop('max', NUM_INTERP_FRAMES - 1);

    $('#interpolation-slider2').on('input', function(event) {
      setInterpolationImagel0(this.value);
    });
    setInterpolationImagel0(0);
    $('#interpolation-slider2').prop('max', NUM_INTERP_FRAMES - 1);

    bulmaSlider.attach();

})

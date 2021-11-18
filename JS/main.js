
function changeimage()
{
document.getElementById("onclick").src="Resources/Images/covid19masked.png"
 });


// As A Vanilla JavaScript Plugin
var gallery = new SimpleLightbox('.gallery a', { 
    /* options */ 
});

// As A jQuery Plugin -->
var gallery = $('.gallery a').simpleLightbox({
    /* options */
});

// default source attribute
sourceAttr: 'href',

// shows fullscreen overlay
overlay: true,

// shows loading spinner
spinner: true,

// shows navigation arrows
nav: true,

// text for navigation arrows
navText: ['&larr;','&rarr;'],

// shows image captions
captions: true,
captionDelay: 0,
captionSelector: 'img',
captionType: 'attr',
captionPosition: 'bottom',
captionClass: '',

// captions attribute (title or data-title)
captionsData: 'title',

// shows close button
close: true,

// text for close button
closeText: 'X',

// swipe up or down to close gallery
swipeClose: true,

// show counter
showCounter: true,

// file extensions
fileExt: 'png|jpg|jpeg|gif',

// weather to slide in new photos or not, disable to fade
animationSlide: true,

// animation speed in ms
animationSpeed: 250,

// image preloading
preloading: true,

// keyboard navigation
enableKeyboard: true,

// endless looping
loop:  true,

// group images by rel attribute of link with same selector
rel: false,

// closes the lightbox when clicking outside
docClose:  true,

// how much pixel you have to swipe
swipeTolerance: 50,

// lightbox wrapper Class
className: 'simple-lightbox',

// width / height ratios
widthRatio: 0.8,
heightRatio: 0.9,

// scales the image up to the defined ratio size
scaleImageToRatio: false,

// disable right click
disableRightClick: false,

// disable page scroll
disable<a href="https://www.jqueryscript.net/tags.php?/Scroll/">Scroll</a>: true,

// show an alert if image was not found
alertError:  true,

// alert message
alertErrorMessage: 'Image not found, next image will be loaded',

// additional HTML showing inside every image
additionalHtml: false,

// enable history back closes lightbox instead of reloading the page
history: true,

// time to wait between slides
throttleInterval: 0,

// Pinch to <a href="https://www.jqueryscript.net/zoom/">Zoom</a> feature for touch devices
doubleTapZoom: 2,
maxZoom: 10,

// adds class to html element if lightbox is open
htmlClass: 'has-lightbox',

// RTL mode
rtl: false,

// elements with this class are fixed and get the right padding when lightbox opens
fixedClass: 'sl-fixed',

// fade speed in ms
fadeSpeed: 300,

// whether to uniqualize images
uniqueImages: true,

// focus the lightbox on open to enable tab control
focus: true,

// Opens the lightbox
gallery.open(); 

// Closes the lightbox
gallery.close(); 

// Goto next image
gallery.next(); 

// Goto previous image
gallery.prev(); 

// re-init the lightbox
gallery.refresh(); 

// get lightbox data
gallery.getLighboxData(); 

// Destroys the lightbox
gallery.destroy(); 

$('.gallery a').on('open.simplelightbox', function () {
    // do something…
  });

//Lightweight slider

// $(document).ready(function() {
// $('#lightSlider').lightSlider({
// gallery:true,
// minSlide:1,
// maxSlide:1,
// auto:true     
// });  
// });


// $(document).ready(function() {
//     $('#lightSlider').lightSlider({
//     item: 3,
//     slideMove: 1,
//     slideMargin: 10,
//     addClass: '',
    
//     mode:"slide", // Type of transition 'slide' and 'fade'.
//     useCSS:true, // If true LightSlider will use CSS transitions. if falls jquery animation will be used.
//     speed: 1000, // Transition duration (in ms). 
//     cssEasing: 'ease', // 'cubic-bezier(0.25, 0, 0.25, 1)'
//     easing: 'linear', // The type of "easing". ex: 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out', 'cubic-bezier(n,n,n,n)'.
//     auto: false, // If true, the Slider will automatically start to play.
//     pause: 3000, // The time (in ms) between each auto transition
//     loop:true, // If false, will disable the ability to loop back to the beginning of the slide when on the last element.
    
//     controls:true, // if controls:false, controls will not be added
//     prevHtml:'', // custom text for prev control
//     nextHtml:'', // custom text for next control
//     rtl: false,
//     keyPress:true, // Enable keyboard navigation
//     adaptiveHeight: false,
//     vertical: false,
//     verticalHeight: 500,
//     vThumbWidth: 100,
//     thumbItem: 10,
//     galleryMargin: 5,
//     pager:true, // Enable pager option
//     gallery:false, // Enable gallery mode
//     thumbMargin:3, // Spacing between each thumbnails 
//     currentPagerPosition:'middle', // 'left' OR 'middle', 'right'
    
//     enableTouch: true,
//     enableDrag: true,
//     freeMove: false,
//     swipeThreshold:40, // By setting the swipeThreshold you can set how far the user must swipe for the next/prev slide
//     responsive: [],
    
//     onBeforeStart: function($el) {},
//     onSliderLoad: function($el) {},
//     onBeforeSlide: function($el,scene) {},
//     onAfterSlide: function($el,scene) {},
//     onBeforeNextSlide: function($el,scene) {},
//     onBeforePrevSlide: function($el,scene) {}
//     });  
//     });
    
// // // Lightbox Gallery 

// myModal.modal
// {
//   display: block;
// }

// myModal(); 
// {
//   myModal.modal
//   {
//       display: none;
//   }
// }

// function my.myModal() {
// }

//     lightbox.option({
//       'resizeDuration': 200,
//       'wrapAround': true
//       'alwaysShowNavOnTouchDevices' : false	
//     })


// // var slideIndex = 1;
// // showSlide(slideIndex);

// // function openLightbox() {
// //   document.getElementById('Lightbox').style.display = 'block';
// // }

// // function closeLightbox() {
// //   document.getElementById('Lightbox').style.display = 'none';
// // }

// // function changeSlide(n) {
// // 	showSlide(slideIndex += n);
// // }

// // function toSlide(n) {
// // 	showSlide(slideIndex = n);
// // }

// // function showSlide(n) {

// //   const slides = document.getElementsByClassName('slide');
// //   let modalPreviews = document.getElementsByClassName('modal-preview');

// //   if (n > slides.length) {
// //     slideIndex = 1;	
// //   }
  
// //   if (n < 1) {
// //   	slideIndex = slides.length;
// //   }

// //   for (let i = 0; i < slides.length; i++) {
// //       slides[i].style.display = "none";
// //   }
// //   for (let i = 0; i < modalPreviews.length; i++) {
// //       modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
// //   }
  
// //   slides[slideIndex - 1].style.display = 'block';
// //   modalPreviews[slideIndex - 1].className += ' active';
// // }

// $(function() {
//     $('#activator').click(function(){
//         $('#overlay').fadeIn(200,function(){
//             $('#box').animate({'top':'20px'},200);
//         });
//         return false;
//     });
//     $('#boxclose').click(function(){
//         $('#box').animate({'top':'-200px'},500,function(){
//             $('#overlay').fadeOut('fast');
//         });
//     });
 
// });

// function openModal() {
//     document.getElementById("myModal").style.display = "block";
//   }
  
//   function closeModal() {
//     document.getElementById("myModal").style.display = "none";
//   }
  
//   var slideIndex = 1;
//   showSlides(slideIndex);
  
//   function plusSlides(n) {
//     showSlides(slideIndex += n);
//   }
  
//   function currentSlide(n) {
//     showSlides(slideIndex = n);
//   }
  
//   function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("demo");
//     var captionText = document.getElementById("caption");
//     if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += " active";
//     captionText.innerHTML = dots[slideIndex-1].alt;
//   }
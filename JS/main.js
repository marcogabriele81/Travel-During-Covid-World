
function changeimage()
{
document.getElementById("onclick").src="Resources/Images/covid19masked.png"
}


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
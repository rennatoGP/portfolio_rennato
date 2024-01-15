let list = document.querySelector('.menuResponsivo');
let menu = document.querySelector('.menu')
list.addEventListener('click', function () {
   this.classList.toggle('active');
   menu.classList.toggle('active');
})



// =========script carrossel===========
var swiper = new Swiper('.swiper-container', {
   slidesPerView: 1,
   spaceBetween: 35,
   navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
   },
   pagination: {
       el: '.swiper-pagination',
       clickable: true,
   },
});

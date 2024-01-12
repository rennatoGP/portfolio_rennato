let list = document.querySelector('.menuResponsivo');
let menu = document.querySelector('.menu')
list.addEventListener('click',function(){
   this.classList.toggle('active');
   menu.classList.toggle('active');
})



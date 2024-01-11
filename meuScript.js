let list = document.querySelector('.menuResponsivo');
let menu = document.querySelector('.menu')
list.addEventListener('click',function(){
   this.classList.toggle('active');
   menu.classList.toggle('active');
})

// let ContentsubMenu = document.querySelector('.content__linkMenu')
// let subMenu = document.querySelector('.subMenu') 
// subMenu.addEventListener('click',function(){
//    this.classList.toggle('active');
//    ContentsubMenu.classList.toggle('active');
// })
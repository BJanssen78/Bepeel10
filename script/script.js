const btns = document.querySelectorAll('#colorlist .colorlist-item');
const box = document.getElementsByClassName('box');
const hamburgerMenu = document.getElementById('#hamburger-menu');
const colorlist = document.querySelector('#colorlist');

hamburgerMenu.addEventListener('click', function(em){
    console.log(em.target);
    colorlist.classList.add('on');

})

// Array.from(btns).forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         const li = e.target.parentElement;

//         if(className == 'lblue'){
//             box.style.background = 'light blue';
//         }
//         else if(className == 'green'){
//             box.style.background = 'green';
//         }
//         else if(className == 'pink'){
//             box.style.background = 'pink';
//         }
//         else if(className == 'violet'){
//             box.style.background = 'violet';
//         }
//     });
// });
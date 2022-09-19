const btns = document.querySelectorAll('#colorlist .colorlist-item-button');
const box = document.getElementById('box');
const txt = document.getElementById('txt');
let homebtn = btns[0];
let lbluebtn = btns[1];
let greenbtn = btns[2];
let pinkbtn = btns[3];
let violetbtn = btns[4];

Array.from(btns).forEach(function(btn){
    btn.addEventListener('click', function(e){
        console.log(e.target);

        if(e.target === homebtn){
            txt.innerHTML = ('');
            location.reload();
        }
        else if(e.target === lbluebtn){
            txt.innerHTML = ('Light Blue');
            box.className = '';
            box.classList.add('lblue');
        }
        else if(e.target === greenbtn){
            txt.innerHTML = ('Green');
            box.className = '';
            box.classList.add('green');
        }
        else if(e.target === pinkbtn){
            txt.innerHTML = ('Pink');
            box.className = '';
            box.classList.add('pink');
        }
        else if(e.target === violetbtn){
            txt.innerHTML = ('Violet');
            box.className = '';
            box.classList.add('violet');
        }   
    });
});
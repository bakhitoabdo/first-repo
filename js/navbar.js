var nav_btn=document.getElementById('nav_btn'),
    unvisible_part=document.getElementById('unvisible_part'),
    navbar=document.getElementById('navbar');

nav_btn.addEventListener('click',nav_toggle);


function nav_close(){
    unvisible_part.style.height='0px';
    nav_btn.classList.remove('fa-times');
    nav_btn.classList.add('fa-bars');
    navbar.style.background='none';
}
function nav_open(){
    unvisible_part.style.height='250px';
    nav_btn.classList.remove('fa-bars');
    nav_btn.classList.add('fa-times');
    navbar.style.background='var(--navbar_bg)';
}
function nav_toggle(){
    if(unvisible_part.style.height=='0px'){
        nav_open()
    }
    else if(unvisible_part.style.height==''){
        nav_open()
    }
    else{
        nav_close()
    }
}
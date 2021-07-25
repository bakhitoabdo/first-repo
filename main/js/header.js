//start of the header section
var nav_btn_toggler=document.getElementById('nav_btn');
var nav_items_container=document.getElementById('nav_items_container');

function nav_close(){
    nav_btn_toggler.classList.remove('fa-times');
    nav_btn_toggler.classList.add('fa-bars');
    nav_items_container.style.maxHeight='0px';
    nav_items_container.style.borderTop='none';

}
function nav_open(){
    nav_btn_toggler.classList.remove('fa-bars');
    nav_btn_toggler.classList.add('fa-times');
    nav_items_container.style.maxHeight='70vh';
    nav_items_container.style.borderTop='1px solid rgb(182, 150, 90)';
}

function nav_toggler(){
    if(nav_items_container.style.maxHeight=="0px"){
        nav_open()
    }
    else if(nav_items_container.style.maxHeight==""){
        nav_open()
    }
    else{
        nav_close()
    }
}
nav_btn_toggler.addEventListener('click',nav_toggler);
//end of the header section
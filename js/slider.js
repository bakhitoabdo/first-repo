var images=document.querySelectorAll(".slider .slide");
var buttons=document.querySelectorAll(".btn_container .slider_btn");

console.log(buttons)

buttons.forEach(function(btn){
    btn.addEventListener('click',change);
});

function change(){
    if(this.id=="btn1"){
        var index=this.childElementCount;
        swich(0);
        this.style.background="orange";
    }
    else if(this.id=="btn2"){
        swich(1);
        this.style.background="orange";
    }
    else if(this.id=="btn3"){
        swich(2);
        this.style.background="orange";
    }
    else if(this.id=="btn4"){
        swich(3);
        this.style.background="orange";
    }
    else{
        swich(4);
        this.style.background="orange";
    }
}

function swich(num){
    images.forEach(function(img){
        img.classList.remove("active");
    });

    buttons.forEach(function(btn){
        btn.style.background="none";
    });

    images[num].classList.add("active");
    buttons[num].style.background="orange";
}

function automatic(){
    var numbers=[1,2,3,4,5]
    var number=Math.floor(Math.random() * numbers.length);

    swich(number);
}

setInterval(automatic,10000);

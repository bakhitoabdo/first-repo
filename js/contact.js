var user_name=document.getElementById('user');
var email=document.getElementById('sender_email');
var subject=document.getElementById('sender_subject');
var message=document.getElementById('sender_message');
var send_btn=document.getElementById('send_btn');

var ok_btn=document.getElementById('ok_btn');
var waiting_container=document.getElementById('waiting_container');
var result=document.getElementById("result");

var receiver_email="bakhitoabdo@gmail.com";
var user="bakhit1droid@gmail.com";
var pass="ggbbmqchktzfczth";
var exception=/\s/g;

send_btn.addEventListener("click", check);
ok_btn.addEventListener("click",cancel_waiting_container);

// start check function
function check(){
    u=user_name.value;
    em=email.value;
    sub=subject.value;
    mes=message.value;
    waiting_container.style.top="50%";
    result.innerText='please wait a few seconds !'

    if(u.replace(exception,"")!=""&&em.replace(exception,"")!=""&&sub.replace(exception,"")!=""&&mes.replace(exception,"")!=""){
      if(email.value.length>8&&em.includes("@")==true){
          waiting_container.style.top="50%";
          reaction_icon.classList.remove("fas","fa-check-circle","fa-exclamation");
          reaction_icon.classList.add("fa","fa-spinner");
          reaction_icon.style.color="red";
          reaction_icon.style.animation="loading .2s linear infinite";
          sending()
      }
      else{
          waiting_container.style.top="50%";
          result.innerHTML='please enter a valid email address ! <br> <span> " your correct email is so important for us so we can response back" .</span>';
          reaction_icon.classList.remove("fa","fa-spinner","fa-check-circle");
          reaction_icon.classList.add("fas","fa-exclamation");
          reaction_icon.style.color="red";
          reaction_icon.style.animation="none";
      }
  }
  else{
    waiting_container.style.top="50%";
    result.innerText="please make sure thats all the fields are full ! .";
    reaction_icon.classList.remove("fa","fa-spinner","fa-check-circle");
    reaction_icon.classList.add("fas","fa-exclamation");
    reaction_icon.style.color="red";
    reaction_icon.style.animation="none";
  }
}
// end check function

// start send function
function sending(){
    Email.send({
    Host : "smtp.gmail.com",
    Username : user,
    Password : pass,
    To : receiver_email,
    From : email.value,
    Subject: subject.value,
    Body : user_name.value+" "+ message.value
}).then(
    function response (mes){
        if(mes=="OK"){
            console.log(mes)
            result.innerText="your message has been delivered successfully .";
            reaction_icon.classList.remove("fa","fa-spinner","fa-exclamation");
            reaction_icon.classList.add("fas","fa-check-circle");
            reaction_icon.style.color="red";
            reaction_icon.style.animation="none";}

        else{
            waiting_container.style.top="50%";
            result.innerText="unfortunately your message has not been delivered successfully  .please check the network and try again ."+mes;
            reaction_icon.classList.remove("fa","fa-spinner","fa-check-circle");
            reaction_icon.classList.add("fas","fa-exclamation");
            reaction_icon.style.color="red";
            reaction_icon.style.animation="none";
        }
    }
  )
}

/*start of  open & close functions */
function open_waiting_container(){
  waiting_container.style.top="50%";
}

function cancel_waiting_container(){
  waiting_container.style.top="-50%";
}
/*end of  open & close functions */
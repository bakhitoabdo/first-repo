var elements=document.querySelectorAll(".scroll_animation");



window.addEventListener("scroll",scrolling);

function scrolling(){
    var options={
        root:null,
        rootMargin: "0px",
        threshold: 0.3
    }

    let observer=new IntersectionObserver(animate,options);

    elements.forEach(function(element){
        observer.observe(element);
    });

    function animate(entries){
        entries.forEach(function(entry){
            if(entry.isIntersecting==true){
                entry.target.classList.add("scroll_animation");
                console.log(entry)

                if(entry.target.id=="skills_wraper"){
                    var skills=document.querySelectorAll("#skills_wraper .fill");
                    skills[0].style.animation="html_css_width 2s linear 1";
                    skills[1].style.animation="javascript_width 2s linear 1";
                    skills[2].style.animation="php_width 2s linear 1";
                    skills[3].style.animation="communication_width 2s linear 1";
                    skills[4].style.animation="teamwork_width 2s linear 1";
                    skills[5].style.animation="creativity_width 2s linear 1";
                    console.log('skills')
                }
                else{
                    var skills=document.querySelectorAll("#skills_wraper .fill");
                    skills.forEach(function(skill){
                        skill.style.animation="none";
                    });
                    console.log("not skills")
                }
            }
            else{
                entry.target.classList.remove("scroll_animation");
                console.log("not intersecting")
                var skills=document.querySelectorAll("#skills_wraper .fill");
                skills.forEach(function(skill){
                    skill.style.animation="none";
                });                console.log("not skills")
            }
        });
    }
}

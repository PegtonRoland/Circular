var active=3;

var panels = document.querySelectorAll(".p  > h2");
var second = document.querySelectorAll("#second");
var content = document.querySelectorAll("#second > h1:nth-child(2)");

gsap.to(panels[active-1], {
    opacity:0.8
})

gsap.to(second[active-1], {
    opacity:0.8
})

gsap.to(content[active-1], {
    opacity:1
})

panels.forEach(function(val, index){
    val.addEventListener("click", function(){
        gsap.to("#center", {
            rotate: (3-(index+1))*20,
            ease:Expo.easeInOut,
            duration:1                   
        })
        greyout();
        gsap.to(this,{
            opacity:0.8
        })
        gsap.to(second[index] ,{
            opacity:1
        })
        gsap.to(content[index],{
            opacity:1
        })
    })
})

function greyout(){
    gsap.to(panels, {
        opacity:0.2
    })

    gsap.to(second,{
        opacity:0.2
    })
    
    gsap.to(content,{
        opacity:0
    })
}


gsap.to("#center",{
    duration:2,
    rotate:0,
    ease:Expo.easeInOut
})


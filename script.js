function pg1animation(){
    var tl=gsap.timeline();

tl.from("nav h1",{
    y:-40,
    duration:1,
    opacity:0
})

tl.to("nav h4",{
    y:2,
    duration:0.5,
    opacity:1,
    stagger:0.3
})
tl.to("nav button",{
    y:2,
    duration:0.5,
    opacity:1,
})

var tl2=gsap.timeline();
tl2.from(".center1 h1",{
    x:-500,
    duration:1,
    opacity:0
})

tl2.from(".center1 p",{
    x:-200,
    duration:0.5,
    opacity:0
})

tl2.from(".center1 button",{
    duration:1,
    opacity:0
})

tl2.from(".center2 img",{
    x:200,
    duration:0.5,
    opacity:0
},"-=1.5")

tl2.from(".secbottom img",{
    x:-200,
    duration:0.5,
    opacity:0,
    stagger:0.2
})
}

pg1animation();

function pg2animation(){
    var tl1=gsap.timeline({
        scrollTrigger:{
            trigger:".section2",
            scroller:"body",
            top:"top 50%",
            end:"top 30%",
    
            scrub:1
        }
    })
    tl1.from(".services h3",{
        x:-300,
        duration:0.2,
        opacity:0,
    
    })
    tl1.from(".services p",{
        x:300,
        duration:0.2,
        opacity:0,
    })
    
    var tl2=gsap.timeline({
        scrollTrigger:{
            trigger:".section2",
            scroller:"body",
            top:"top 50%",
            end:"top 30%",
            scrub:2
        }
    })
    
    tl1.from(".elem.black.c1",{
        x:200,
        duration:0.2,
        opacity:0,
    },"eksath")
    tl1.from(".elem.black.c2",{
        x:-200,
        duration:0.2,
        opacity:0,
    },"eksath")
    
    tl2.from(".elem.cc1",{
        x:-300,
        duration:0.2,
        opacity:0,
    },"eksath2")
    
    tl2.from(".elem.cc2",{
        x:300,
        duration:0.2,
        opacity:0,
    },"eksath2")
}

pg2animation();

var button=document.querySelector(".center button")

button.addEventListener("mouseover",function(){
    gsap.to(button,{
        boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.656)",
    }) 
}
)
button.addEventListener("mouseout",function(){
    gsap.to(button,{
        boxShadow: "0px 0px 0px rgba(0, 0, 0)",
    }) 
}
)
document.addEventListener("DOMContentLoaded", function() {
    const preloader = document.querySelector('.preloader');
    const progressBar = document.querySelector('.progress-bar');
    const progressText = document.querySelector('.progress-text');
    let progress = 0;
    
    // Add loading class to body
    document.body.classList.add('loading');
    
    // Simulate loading progress
    const interval = setInterval(() => {
        progress += Math.random() * 30;
        if (progress > 100) progress = 100;
        
        progressBar.style.width = `${progress}%`;
        progressText.textContent = `${Math.round(progress)}%`;
        
        if (progress === 100) {
            clearInterval(interval);
            setTimeout(completeLoading, 500);
        }
    }, 500);
    
    // Complete loading function
    function completeLoading() {
        preloader.classList.add('exit');
        
        setTimeout(() => {
            document.body.classList.remove('loading');
            preloader.style.display = 'none';
            
            // Start page animations
            pg1animation();
            pg2animation();
        }, 1000);
    }
});



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

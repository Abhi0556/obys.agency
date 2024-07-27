var t1= gsap.timeline()
t1.from(".line h1",{
    y: +150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.2,
})
t1.from("#linepart1",{
    opacity: 0,
    duration:0.3,
    delay:0.01,
    onStart: function(){
        var timer = document.querySelector("#linepart1 h5");
        var grow=0;
        setInterval(function(){
            if(grow<=100){
                timer.innerHTML = grow++
            }
        },30)        
    }
})
t1.to(".line h2",{
    AnimationName : "anime",
    opacity: 1,
})
t1.to("#loader",{
    opacity:0,
    delay: 2.5,
    duration:1
})
t1.from("#page1",{
    delay: 0.19,
    y: 1700,
    opacity: 0,
    ease: Power4
})
t1.to("#loader",{
    display:"none",
})

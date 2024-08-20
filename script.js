function ScrollAnimation(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    

}
function LoadingAnimation(){
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
    delay: 2.4,
    duration:1
})
t1.to("#loader",{
    display:"none",

})
t1.from("#page1",{
    y: 1100,
    duration: 1,
    opacity: 0,
    ease: Power4
})
t1.from("#nav",{
    y: +150,
    stagger: 0.25,
    duration: 0.4,
    delay: 0.2,
    opacity: 0,
    delay:0.1,
})
t1.from(".hero h1,#heroline h1,#nu",{
    y:300,
    stagger: 0.1
})
t1.from(".hero, #page2",{
    opacity: 0
},"-=1")
}
function curser(){

    // document.addEventListener("mousemove",function(dets){
    //     gsap.to("#curser",{
    //         left: dets.x,
    //         top: dets.y
    //     })
    // })
    Shery.mouseFollower({
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 0.5,
    });
    
}
function shreyAnimation(){
    Shery.imageEffect(".image-div",{
        style: 4,
        config : {"uColor":{"value":false},"uSpeed":{"value":0.1,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":0,"range":[0,5]},"uFrequency":{"value":0,"range":[0,10]},"geoVertex":{"range":[1,64],"value":1},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7272695760684946},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":0.1,"range":[0.1,5]},"durationIn":{"value":0.1,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.53,"range":[0,10]},"metaball":{"value":0.31,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.03,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
        gooey : true
    })
    
    const vid = document.querySelector("#video-con");
    vid.addEventListener("mouseenter",function(){
        vid.addEventListener("mousemove",function(dets){
            gsap.to(".mousefollower",{
                opacity:0
            })
            gsap.to("#vid-curser",{
                x: dets.x - 1230,
                y: dets.y - 130
            })
        })
        
    })

    vid.addEventListener("mouseleave",function(){
        gsap.to(".mousefollower",{
            opacity:1
        })        
        gsap.to("#vid-curser",{
            y:"0%",
            x:"0%"
        })
    })

    const circle1 = document.querySelector(".page3-circle1")
    circle1.addEventListener("mouseenter",function(){
        gsap.to(".mousefollower",{
            opacity:0
        })        
    })
    circle1.addEventListener("mouseleave",function(){
        gsap.to(".mousefollower",{
            opacity:1
        })        
    })

    const circle2 = document.querySelector(".page3-circle2")
    circle2.addEventListener("mouseenter",function(){
        gsap.to(".mousefollower",{
            opacity:0
        })        
    })
    circle2.addEventListener("mouseleave",function(){
        gsap.to(".mousefollower",{
            opacity:1
        })        
    })

    const circle3 = document.querySelector(".page3-circle3")
    circle3.addEventListener("mouseenter",function(){
        gsap.to(".mousefollower",{
            opacity:0
        })        
    })
    circle3.addEventListener("mouseleave",function(){
        gsap.to(".mousefollower",{
            opacity:1
        })        
    })

    const orange = document.querySelector(".all-projects")
    orange.addEventListener("mouseenter",function(){
        gsap.to(".mousefollower",{
            opacity:0
        })        
        gsap.to(".all-projects",{
            height: "20vw",
            width: "20vw"   
        })
    })
    orange.addEventListener("mouseleave",function(){
        gsap.to(".mousefollower",{
            opacity:1
        })        
        gsap.to(".all-projects",{
            height: "25vw",
            width: "25vw"   
        })
    })

    const video =document.querySelector("#myvideo");
    var flag =0
    vid.addEventListener("click",function(){
        if (flag ==0){
            video.style.opacity = 1;
            video.play();
            document.querySelector("#vid-curser").innerHTML = `<img src="./logo/pause-fill.png" alt="">`
            gsap.to("#vid-curser",{
                scale: 0.5
            })
            flag = 1
        }
        else{
            video.pause();
            video.style.opacity = 0;
            document.querySelector("#vid-curser").innerHTML = `<img src="./logo/play-large-fill.png" alt="">`
            gsap.to("#vid-curser",{
            scale: 1
            })
            flag = 0
        }
    })   

    document.addEventListener("mousemove",function(dets){
        gsap.to("#flag",{
            x : dets.x,
            y : dets.y
        })
    })
    document.querySelector("#heroline").addEventListener("mouseenter",function(){
        gsap.to("#flag",{
            display: "initial",
            opacity: 1,
        })
    })
    document.querySelector("#heroline").addEventListener("mouseleave",function(){
        gsap.to("#flag",{
            display: "none",
            opacity: 0,
        })
    })
    Shery.makeMagnet("#part2 h5",{});
}

LoadingAnimation();
curser();
ScrollAnimation();
shreyAnimation();
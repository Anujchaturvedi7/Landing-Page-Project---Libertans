const lenis = new Lenis();
lenis.on('scroll', (e) => {
  console.log(e);
});
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// Register ScrollTrigger once
gsap.registerPlugin(ScrollTrigger);

// Main Timeline Animation
var tl = gsap.timeline();

tl.from("nav #left", {
    y: -25,
    duration: 1,
    opacity: 0,
}, "a")
.from("nav #center", { // Corrected selector
    y: -25,
    duration: 1,
    opacity: 0,
}, "a")
.from("nav #right button", {
    x: -25,
    duration: 1,
    opacity: 0,
}, "a");

// Page 2 Timeline Animation
let page2Timeline = gsap.timeline({
    scrollTrigger: {
        trigger: "#page2",
        start: "top center",
        toggleActions: "play none none reverse"
    }
});

page2Timeline.from("#page2 #righttext h3", {
    x: -25,
    duration: 0.8,
    opacity: 0,
}, "b")
.from("#page2 #shoes", {
    y: 100,
    duration: 0.8,
    opacity: 0,
}, "b")
.from("#page2 #centertext", {
    y: -100,
    duration: 0.8,
    opacity: 0,
}, "c")
.from("#page2 #cream", {
    y: 50,
    duration: 0.8,
    opacity: 0,
}, "b")
.from("#page2 #first #man", {
    x: -25,
    duration: 0.8,
    opacity: 0,
}, "c")
.from("#page2 #first #lasttext", {
    y: 25,
    duration: 0.8,
    opacity: 0,
});

// Additional ScrollTrigger Animations
gsap.from("#second", {
    scrollTrigger: {
        trigger: "#second",
        start: "top center",
        end: "bottom 100%",
        toggleActions: "play pause resume reset",
        preventOverlaps: true,
        fastScrollEnd: true
    },
    opacity: 0,
    y: 60,
    duration: 2.5,
    ease: "expo.out"
}, "d");

gsap.from("#page2 #second #h1text", {
    scrollTrigger: {
        trigger: "#page2 #second #h1text",
        start: "top 80%",
        end: "bottom 100%",
        toggleActions: "play none none reverse",
        preventOverlaps: true,
        fastScrollEnd: true
    },
    x: -35,
    duration: 0.8,
    opacity: 0,
    ease: "power2.out"
}, "d");

gsap.from("#page2 #second #logo", {
    scrollTrigger: {
        trigger: "#page2 #second #logo",
        start: "top 80%",
        end: "bottom 100%",
        toggleActions: "play none none reverse",
        preventOverlaps: true,
        fastScrollEnd: true
    },
    x: 35,
    duration: 0.8,
    opacity: 0,
    ease: "power2.out"
}, "d");

gsap.from("#page3 #uptext", {
    scrollTrigger: {
        trigger: "#page3 #uptext",
        start: "top 80%",
        end: "bottom 100%",
        toggleActions: "play none none reverse",
        preventOverlaps: true,
        fastScrollEnd: true
    },
    x: -35,
    duration: 0.8,
    opacity: 0,
    ease: "power2.out"
});

gsap.from("#page3 #imgntext #container1", {
    scrollTrigger: {
        trigger: "#page3 #imgntext #container1",
        start: "top 80%",
        end: "bottom 100%",
        toggleActions: "play none none reverse",
        preventOverlaps: true,
        fastScrollEnd: true
    },
    x: -45,
    duration: 0.8,
    opacity: 0,
    ease: "power2.out"
}, "d");

gsap.from("#page3 #imgntext #container2", {
    scrollTrigger: {
        trigger: "#page3 #imgntext #container2",
        start: "top 80%",
        end: "bottom 100%",
        toggleActions: "play none none reverse",
        preventOverlaps: true,
        fastScrollEnd: true
    },
    x: 45,
    duration: 0.8,
    opacity: 0,
    ease: "power2.out"
}, "d");

gsap.from("#page4 #blackbox", {
    scrollTrigger: {
        trigger: "#page4",
        start: "top 50%",
        end: "bottom 100%",
        toggleActions: "play pause resume reset",
        preventOverlaps: true,
        fastScrollEnd: true
    },
    opacity: 0,
    y: 60,
    duration: 2.5,
    ease: "expo.out"
});

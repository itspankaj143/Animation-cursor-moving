let circle = document.querySelector("#circle");
let frames = document.querySelectorAll(".frame");

// window.addEventListener("mousemove", function (e) {
// //   console.log(e.clientX, e.clientY);
// circle.style.transform=`translate(${e.clientX}px, ${e.clientY}px)`
// });

frames.forEach((frame) => {
  frame.addEventListener("mousemove", function (e) {
    let dimensions = frame.getBoundingClientRect();
    //   console.log(dimensions);

    let xstart = dimensions.x;
    let xend = dimensions.x + dimensions.width;

    //   gsap.utils.clamp(xstart, xend);

    let zeroone = gsap.utils.mapRange(xstart, xend, 0, 1, e.clientX);
    // console.log(zeroone);
    //   console.log(lerp(-50, 50, zeroone));

    gsap.to(circle, {
      scale: 8,
    });
    gsap.to(frame.children, {
      color: "#fff",
      duration: 0.4,
      y: "-5vw",
    });
    gsap.to(frame.children, {
      x: lerp(-50, 50, zeroone),
      duration: 0.3,
    });
  });
  frame.addEventListener("mouseleave", function (e) {
    gsap.to(circle, {
      scale: 1,
    });
    gsap.to(frame.children, {
      color: "#000",
      duration: 0.4,
      y: 0,
    });
    gsap.to(frame.children, {
      x: 0,
      duration: 0.3,
    });
  });
});

const lerp = (x, y, a) => x * (1 - a) + y * a;
window.addEventListener("mousemove", function (e) {
  gsap.to(circle, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.2,
    ease: Expo,
  });
});

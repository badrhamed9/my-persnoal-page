const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");

//we can use this with content with first page for animation
let hero = document.querySelector(".hero");
let slider = document.querySelector(".right");

const d1 = new TimelineMax();

d1.fromTo(
  hero,
  { height: "0%" },
  { duration: 1, height: "80%", ease: Power2.easeInOut },
  "+=3.35"
)
  .fromTo(
    hero,
    { width: "100%" },
    { duration: 1.2, width: "80%", ease: Power2.easeInOut }
  )
  .fromTo(
    slider,
    { x: "-100%" },
    { duration: 1.2, x: "0%", ease: Power2.easeInOut },
    "-=1.2"
  )
  .fromTo(
    ".heading",
    { opacity: 0, x: 30 },
    { duration: 0.5, opacity: 1, x: 0 }
  )
  .fromTo(
    ".hero > p:first-of-type",
    { opacity: 0, x: 30 },
    { duration: 0.5, opacity: 1, x: 0 }
  )
  .fromTo(
    ".hero > p:last-of-type",
    { opacity: 0, x: 30 },
    { duration: 0.5, opacity: 1, x: 0 },
    "-=0.5"
  )
  .fromTo(".nav", { opacity: 0, x: 30 }, { duration: 0.5, opacity: 1, x: 0 });

let nav = document.querySelector(".nav");

$(document).ready(function () {
  $(".nav").click(function () {
    if ($(".nav").find("i").hasClass("la-angle-double-left")) {
      $(this).find("i").removeClass("la-angle-double-left");
      $(this).find("i").addClass("la-angle-double-right");
      $("#fp-nav.fp-right").fadeIn(400);
      $(".nav").css("animation-play-state", "paused");
      $(".nav").css("right", "80px");
      $(".nav").css("opacity", " 0.6");
    } else {
      $(this).find("i").removeClass("la-angle-double-right");
      $(this).find("i").addClass("la-angle-double-left");
      $("#fp-nav.fp-right").fadeOut(400);
      $(".nav").css("right", "10px");
      $(".nav").css("opacity", "1");
      $(".nav").css("animation-play-state", "running");
    }
  });
});

//change image

let img = document.querySelector(
  "#fullpage .s2 .second .container > .row > div:last-of-type > div"
);

let cli = document.querySelectorAll(
  "#fullpage .s2 .second .container > .row > div:last-of-type > div > div"
);

cli.forEach(function (el) {
  el.addEventListener("click", (ele) => {
    cli.forEach(function (el) {
      el.classList.remove("bigactive");
    });
    el.classList.add("bigactive");
  });
});

cli[2].onclick = function () {
  img.style.cssText = "background-image: url(../images/badr2.jpg);";
  document.querySelector(
    "#fullpage .s2 .second .container > .row > div:first-of-type"
  ).style.cssText = "background-color: #fe9f17;";
  document.querySelector("#fullpage .s2 .second > p > span").style.cssText =
    "color:#fe9f17;";
  document.querySelector("#fullpage .s2 .second > h1 > span").style.cssText =
    "color:#fe9f17";
  document
    .querySelectorAll(
      "#fullpage .s2 .second .container > .row > div:first-of-type > div > .row > div > div > p > span:first-of-type"
    )
    .forEach(function (el) {
      el.style.cssText = "color:#fe9f17";
    });
};
cli[0].onclick = function () {
  img.style.cssText = "background-image: url(../images/badr.jpg);";
  document.querySelector(
    "#fullpage .s2 .second .container > .row > div:first-of-type"
  ).style.cssText = "background-color: #fdd800;";
  document.querySelector("#fullpage .s2 .second > p > span").style.cssText =
    "color:#fdd800;";
  document.querySelector("#fullpage .s2 .second > h1 > span").style.cssText =
    "color:#fdd800";
  document
    .querySelectorAll(
      "#fullpage .s2 .second .container > .row > div:first-of-type > div > .row > div > div > p > span:first-of-type"
    )
    .forEach(function (el) {
      el.style.cssText = "color:#fdd800";
    });
};

cli[1].onclick = function () {
  img.style.cssText = "background-image: url(../images/badr3.jpg);";
  document.querySelector(
    "#fullpage .s2 .second .container > .row > div:first-of-type"
  ).style.cssText = "background-color: rgb(92 167 173);";
  document.querySelector("#fullpage .s2 .second > p > span").style.cssText =
    "color:rgb(92 167 173);";
  document.querySelector("#fullpage .s2 .second > h1 > span").style.cssText =
    "color:rgb(92 167 173)";
  document
    .querySelectorAll(
      "#fullpage .s2 .second .container > .row > div:first-of-type > div > .row > div > div > p > span:first-of-type"
    )
    .forEach(function (el) {
      el.style.cssText = "color:rgb(92 167 173)";
    });
};

/////portfolio
const t2 = gsap.timeline({ defaults: { ease: "power4" } });
let first = document.querySelector(
  ".s3 .slide1 .first > .container .row > div:first-of-type > div"
);
//slide one first div
first.addEventListener("mouseenter", function () {
  t2.fromTo(
    ".s3 .slide1 .first > .container .row > div:first-of-type > div >.detail",
    { rotate: "90", scale: "0", opacity: "0" },
    { duration: 0.7, rotate: "0", scale: "1", opacity: "1", ease: "bounce" }
  ).fromTo(
    ".s3 .slide1 .first > .container .row > div:first-of-type > div >.detail > .project",
    { rotate: "90", scale: "0", opacity: "0" },
    { duration: 1, rotate: "0", scale: "1", opacity: "1", ease: "back" }
  );
});
first.addEventListener("mouseleave", function () {
  t2.fromTo(
    ".s3 .slide1 .first > .container .row > div:first-of-type > div > .detail",
    { rotate: "0", scale: "1", opacity: "1" },
    { duration: 1, rotate: "90", scale: "0", opacity: "0" }
  );
});
//slide one second div
document
  .querySelector(
    ".s3 .slide1 .first > .container .row > div:nth-of-type(2) > div"
  )
  .addEventListener("mouseenter", function () {
    t2.fromTo(
      ".s3 .slide1 .first > .container .row > div:nth-of-type(2) > div >.detail",
      { rotate: "90", scale: "0", opacity: "0" },
      { duration: 1, rotate: "0", scale: "1", opacity: "1", ease: "bounce" }
    ).fromTo(
      ".s3 .slide1 .first > .container .row > div:nth-of-type(2) > div >.detail > .project",
      { rotate: "90", scale: "0", opacity: "0" },
      { duration: 1, rotate: "0", scale: "1", opacity: "1", ease: "back" }
    );
  });
document
  .querySelector(
    ".s3 .slide1 .first > .container .row > div:nth-of-type(2) > div"
  )
  .addEventListener("mouseleave", function () {
    t2.fromTo(
      ".s3 .slide1 .first > .container .row > div:nth-of-type(2) > div > .detail",
      { rotate: "0", scale: "1", opacity: "1" },
      { duration: 1, rotate: "90", scale: "0", opacity: "0" }
    );
  });
//slide one thrid div
document
  .querySelector(
    ".s3 .slide1 .first > .container .row > div:last-of-type > div"
  )
  .addEventListener("mouseenter", function () {
    t2.fromTo(
      ".s3 .slide1 .first > .container .row > div:last-of-type > div >.detail",
      { rotate: "90", scale: "0", opacity: "0" },
      { duration: 1, rotate: "0", scale: "1", opacity: "1", ease: "bounce" }
    ).fromTo(
      ".s3 .slide1 .first > .container .row > div:last-of-type > div >.detail > .project",
      { rotate: "90", scale: "0", opacity: "0" },
      { duration: 1, rotate: "0", scale: "1", opacity: "1", ease: "back" }
    );
  });
document
  .querySelector(
    ".s3 .slide1 .first > .container .row > div:last-of-type > div"
  )
  .addEventListener("mouseleave", function () {
    t2.fromTo(
      ".s3 .slide1 .first > .container .row > div:last-of-type > div > .detail",
      { rotate: "0", scale: "1", opacity: "1" },
      { duration: 1, rotate: "90", scale: "0", opacity: "0" }
    );
  });

//slide two first div

document
  .querySelector(".s3 .slide2 .sec > .container .row > div:first-of-type > div")
  .addEventListener("mouseenter", function () {
    t2.fromTo(
      ".s3 .slide2 .sec > .container .row > div:first-of-type > div >.detail",
      { rotate: "90", scale: "0", opacity: "0" },
      { duration: 0.7, rotate: "0", scale: "1", opacity: "1", ease: "bounce" }
    ).fromTo(
      ".s3 .slide2 .sec > .container .row > div:first-of-type > div >.detail > .project",
      { rotate: "90", scale: "0", opacity: "0" },
      { duration: 1, rotate: "0", scale: "1", opacity: "1", ease: "back" }
    );
  });
document
  .querySelector(".s3 .slide2 .sec > .container .row > div:first-of-type > div")
  .addEventListener("mouseleave", function () {
    t2.fromTo(
      ".s3 .slide2 .sec > .container .row > div:first-of-type > div > .detail",
      { rotate: "0", scale: "1", opacity: "1" },
      { duration: 1, rotate: "90", scale: "0", opacity: "0" }
    );
  });
//slide one second div
document
  .querySelector(
    ".s3 .slide2 .sec > .container .row > div:nth-of-type(2) > div"
  )
  .addEventListener("mouseenter", function () {
    t2.fromTo(
      ".s3 .slide2 .sec > .container .row > div:nth-of-type(2) > div >.detail",
      { rotate: "90", scale: "0", opacity: "0" },
      { duration: 1, rotate: "0", scale: "1", opacity: "1", ease: "bounce" }
    ).fromTo(
      ".s3 .slide2 .sec > .container .row > div:nth-of-type(2) > div >.detail > .project",
      { rotate: "90", scale: "0", opacity: "0" },
      { duration: 1, rotate: "0", scale: "1", opacity: "1", ease: "back" }
    );
  });
document
  .querySelector(
    ".s3 .slide2 .sec > .container .row > div:nth-of-type(2) > div"
  )
  .addEventListener("mouseleave", function () {
    t2.fromTo(
      ".s3 .slide2 .sec > .container .row > div:nth-of-type(2) > div > .detail",
      { rotate: "0", scale: "1", opacity: "1" },
      { duration: 1, rotate: "90", scale: "0", opacity: "0" }
    );
  });
//slide one thrid div
document
  .querySelector(".s3 .slide2 .sec > .container .row > div:last-of-type > div")
  .addEventListener("mouseenter", function () {
    t2.fromTo(
      ".s3 .slide2 .sec > .container .row > div:last-of-type > div >.detail",
      { rotate: "90", scale: "0", opacity: "0" },
      { duration: 1, rotate: "0", scale: "1", opacity: "1", ease: "bounce" }
    ).fromTo(
      ".s3 .slide2 .sec > .container .row > div:last-of-type > div >.detail > .project",
      { rotate: "90", scale: "0", opacity: "0" },
      { duration: 1, rotate: "0", scale: "1", opacity: "1", ease: "back" }
    );
  });
document
  .querySelector(".s3 .slide2 .sec > .container .row > div:last-of-type > div")
  .addEventListener("mouseleave", function () {
    t2.fromTo(
      ".s3 .slide2 .sec > .container .row > div:last-of-type > div > .detail",
      { rotate: "0", scale: "1", opacity: "1" },
      { duration: 1, rotate: "90", scale: "0", opacity: "0" }
    );
  });
// slide three
document
  .querySelector(
    ".s3 .slide3 .third > .container .row > div:first-of-type > div"
  )
  .addEventListener("mouseenter", function () {
    t2.fromTo(
      ".s3 .slide3 .third > .container .row > div:first-of-type > div >.detail",
      { rotate: "90", scale: "0", opacity: "0" },
      { duration: 0.7, rotate: "0", scale: "1", opacity: "1", ease: "bounce" }
    ).fromTo(
      ".s3 .slide3 .third > .container .row > div:first-of-type > div >.detail > .project",
      { rotate: "90", scale: "0", opacity: "0" },
      { duration: 1, rotate: "0", scale: "1", opacity: "1", ease: "back" }
    );
  });
document
  .querySelector(
    ".s3 .slide3 .third > .container .row > div:first-of-type > div"
  )
  .addEventListener("mouseleave", function () {
    t2.fromTo(
      ".s3 .slide3 .third > .container .row > div:first-of-type > div > .detail",
      { rotate: "0", scale: "1", opacity: "1" },
      { duration: 1, rotate: "90", scale: "0", opacity: "0" }
    );
  });
//slide one second div
document
  .querySelector(
    ".s3 .slide3 .third > .container .row > div:nth-of-type(2) > div"
  )
  .addEventListener("mouseenter", function () {
    t2.fromTo(
      ".s3 .slide3 .third > .container .row > div:nth-of-type(2) > div >.detail",
      { rotate: "90", scale: "0", opacity: "0" },
      { duration: 1, rotate: "0", scale: "1", opacity: "1", ease: "bounce" }
    ).fromTo(
      ".s3 .slide3 .third > .container .row > div:nth-of-type(2) > div >.detail > .project",
      { rotate: "90", scale: "0", opacity: "0" },
      { duration: 1, rotate: "0", scale: "1", opacity: "1", ease: "back" }
    );
  });
document
  .querySelector(
    ".s3 .slide3 .third > .container .row > div:nth-of-type(2) > div"
  )
  .addEventListener("mouseleave", function () {
    t2.fromTo(
      ".s3 .slide3 .third > .container .row > div:nth-of-type(2) > div > .detail",
      { rotate: "0", scale: "1", opacity: "1" },
      { duration: 1, rotate: "90", scale: "0", opacity: "0" }
    );
  });
//slide one thrid div
document
  .querySelector(
    ".s3 .slide3 .third > .container .row > div:last-of-type > div"
  )
  .addEventListener("mouseenter", function () {
    t2.fromTo(
      ".s3 .slide3 .third > .container .row > div:last-of-type > div >.detail",
      { rotate: "90", scale: "0", opacity: "0" },
      { duration: 1, rotate: "0", scale: "1", opacity: "1", ease: "bounce" }
    ).fromTo(
      ".s3 .slide3 .third > .container .row > div:last-of-type > div >.detail > .project",
      { rotate: "90", scale: "0", opacity: "0" },
      { duration: 1, rotate: "0", scale: "1", opacity: "1", ease: "back" }
    );
  });
document
  .querySelector(
    ".s3 .slide3 .third > .container .row > div:last-of-type > div"
  )
  .addEventListener("mouseleave", function () {
    t2.fromTo(
      ".s3 .slide3 .third > .container .row > div:last-of-type > div > .detail",
      { rotate: "0", scale: "1", opacity: "1" },
      { duration: 1, rotate: "90", scale: "0", opacity: "0" }
    );
  });
//tasks

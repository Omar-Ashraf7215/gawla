    const up = document.querySelector("#up"); 

    up.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY >200) {
            up.classList.remove("d-none");
        } else {
            up.classList.add("d-none");
        }
    });
        window.addEventListener("scroll", function () {
        const nav = document.querySelector("nav"); 
        if (window.scrollY > 300) {
        nav.classList.add("sticky-on-scroll");
        } else {
        nav.classList.remove("sticky-on-scroll");
        }
        });

///////////////////////////////////////////
window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".sticky-on-scroll");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});        
///////////////////////////////////////////////////////  scroll


// //////////////////////////////////radwa
// favorite
// document.querySelectorAll(".fav-btn").forEach(btn => {
//   btn.addEventListener("click", () => {
//     btn.classList.toggle("active");
//   });
// });

document.querySelectorAll(".fav-btn").forEach(icon => {

    icon.addEventListener("click", function () {

        this.classList.toggle("active");

    });

});

// testimonials
$('#testimonials').owlCarousel({
  loop:true,
  autoplay:true,
  margin:30,
  responsive:{
    0:{items:1.3},
    768:{items:2.3},
    1024:{items:3.1}
  }
});

// packages
$('#packages').owlCarousel({
  loop: true,
  margin: 17,
  nav: true,
  dots: false,
  responsive: {
    0: { items: 1.2 },
    768: { items: 2.2 },
    1024: { items: 3.4 }
  }
})
//offers
$('.offers-carousel').owlCarousel({
  loop: true,
  margin: 35,
  autoplay: true,
  autoplayTimeout: 5000,
  smartSpeed: 800,
  dots: false,
  responsive: {
    0: { items: 1.3 },
    768: { items: 2.2},
    1024: { items: 2.3 }
  }
})
  //category
$('#category').owlCarousel({
  loop: true,
  margin: 17,
  autoplay: true,
  nav: true,
  dots: false,
  responsive: {
    0: { items: 1 },
    768: { items: 2 },
    1024: { items: 3 }
  }
});
//////////////////////////////////////radwaa
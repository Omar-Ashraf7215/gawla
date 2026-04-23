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
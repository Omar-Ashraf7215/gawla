const up = document.querySelector("#up");

if (up) {
    up.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            up.classList.remove("d-none");
        } else {
            up.classList.add("d-none");
        }
    });
}
////////////////////////////////////////////////////////////////////metthod
const doneBtn = document.getElementById("doneBtn");

if (doneBtn) {
    doneBtn.addEventListener("click", function () {

        const selected = document.querySelector('input[name="payment"]:checked');

        if (!selected) {
            alert("Please choose a payment method");
            return;
        }

        if (selected.value === "insta") {
            window.location.href = "instapay.html";
        } else if (selected.value === "aman") {
            window.location.href = "aman.html";
        }

    });
}

/////////////////////////////////////////////////////////points

const input = document.getElementById("pointsInput");
const warning = document.getElementById("pointsWarning");

if (input && warning) {

    input.addEventListener("input", function () {

        if (this.value > 0 && this.value < 200) {
            warning.classList.remove("d-none");
        } else {
            warning.classList.add("d-none");
        }

    });

}

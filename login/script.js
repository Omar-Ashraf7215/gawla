//////////////////////////////////////////////// password toggle
const toggles = document.querySelectorAll(".togglePassword");

toggles.forEach(toggle => {

    toggle.addEventListener("click", function () {

        const input = this.previousElementSibling;

        if (input.type === "password") {
            input.type = "text";
            this.classList.remove("bi-eye");
            this.classList.add("bi-eye-slash");
        } else {
            input.type = "password";
            this.classList.remove("bi-eye-slash");
            this.classList.add("bi-eye");
        }

    });

});

//////////////////////////////////////////////// modal + email
document.addEventListener("DOMContentLoaded", function () {

    const inputs = document.querySelectorAll(".otp-input");

    inputs.forEach((input, index) => {

        input.addEventListener("input", () => {
            if (input.value.length === 1 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });

        input.addEventListener("keydown", (e) => {
            if (e.key === "Backspace" && input.value === "" && index > 0) {
                inputs[index - 1].focus();
            }
        });

    });

});




// ////////////////////////////
// document.addEventListener("DOMContentLoaded", function () {

//     const password = document.querySelector(".main-password");
//     const confirmPassword = document.querySelector(".confirm-password");
//     const message = document.querySelector(".password-message");
//     const errorAlert = document.querySelector(".password-error");
//     const resetBtn = document.querySelector(".reset-btn");
//     const modalElement = document.querySelector(".password-modal");

//     const regex = /^(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

//     // password validation
//     if (password && message) {
//         password.addEventListener("input", function () {
//             message.style.display = regex.test(password.value.trim()) ? "none" : "block";
//         });
//     }

//     // button click
//     if (resetBtn && password && confirmPassword) {
//         resetBtn.addEventListener("click", function () {

//             const pass = password.value.trim();
//             const confirm = confirmPassword.value.trim();

//             if (pass === "" || confirm === "") {
//                 alert("Please enter password first");
//                 return;
//             }

//             if (!regex.test(pass)) {
//                 message.style.display = "block";
//                 return;
//             }

//             if (pass !== confirm) {
//                 errorAlert.classList.remove("d-none");
//                 return;
//             } else {
//                 errorAlert.classList.add("d-none");
//             }

//             // modal
//             if (modalElement) {
//                 const modal = new bootstrap.Modal(modalElement);
//                 modal.show();
//             }

//         });
//     }

// });
////////////////////////////////////////////////////////////////////////otp2
const verifyBtn = document.getElementById("verifyBtn");
const emaillInput = document.getElementById("emailInput");

if (verifyBtn && emaillInput) {

    verifyBtn.addEventListener("click", function () {

        const email = emaillInput.value.trim();

        if (email === "") {
            alert("Please enter your email first");
            return;
        }

        window.location.href = "otp2.html";
    });

}

////////////////////////////////////////////////////////////////////////password


document.addEventListener("DOMContentLoaded", function () {

    const password = document.querySelector(".main-password");
    const confirmPassword = document.querySelector(".confirm-password");
    const message = document.querySelector(".password-message");
    const errorAlert = document.querySelector(".password-error");

    const signupBtn = document.querySelector(".signup-btn");
    const resetBtn = document.querySelector(".reset-btn");

    const name = document.getElementById("text");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const checkbox = document.getElementById("rememberMe");

    const modalElement = document.querySelector(".password-modal");

    const regex = /^(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

    //  password live validation
    if (password && message) {
        password.addEventListener("input", function () {
            message.style.display = regex.test(password.value.trim()) ? "none" : "block";
        });
    }

    //  SIGN UP
    if (signupBtn) {
        signupBtn.addEventListener("click", function () {

            const nameValue = name ? name.value.trim() : "";
            const emailValue = email ? email.value.trim() : "";
            const phoneValue = phone ? phone.value.trim() : "";
            const pass = password ? password.value.trim() : "";
            const confirm = confirmPassword ? confirmPassword.value.trim() : "";

            // 1. check empty fields
            if (
                nameValue === "" ||
                emailValue === "" ||
                phoneValue === "" ||
                pass === "" ||
                confirm === ""
            ) {
                alert("Please fill all fields");
                return;
            }

            // 2. checkbox
            if (checkbox && !checkbox.checked) {
                alert("Agree to terms first");
                return;
            }

            // 3. password strength
            if (!regex.test(pass)) {
                message.style.display = "block";
                return;
            }

            // 4. confirm match
            if (pass !== confirm) {
                errorAlert?.classList.remove("d-none");
                return;
            } else {
                errorAlert?.classList.add("d-none");
            }
            console.log("GO LOGIN");
            //  success → go login
            window.location.href = "index.html";
        });
    }

    //  RESET PASSWORD
    if (resetBtn) {
        resetBtn.addEventListener("click", function () {

            const pass = password ? password.value.trim() : "";
            const confirm = confirmPassword ? confirmPassword.value.trim() : "";

            if (pass === "" || confirm === "") {
                alert("Enter password first");
                return;
            }

            if (!regex.test(pass)) {
                message.style.display = "block";
                return;
            }

            if (pass !== confirm) {
                errorAlert?.classList.remove("d-none");
                return;
            } else {
                errorAlert?.classList.add("d-none");
            }

            //  show modal
            if (modalElement) {
                const modal = new bootstrap.Modal(modalElement);
                modal.show();
            }
        });
    }

});
/////////////////////////////////////////////////////////////////////////


document.addEventListener("DOMContentLoaded", function () {

    let sendBtn = document.getElementById("sendBtn");

    if (sendBtn) {

        sendBtn.addEventListener("click", function () {

            let email = document.getElementById("email").value.trim();

            if (email === "") {
                alert("Please enter your email");
                return;
            }

            let modal = new bootstrap.Modal(document.getElementById("myModal"));
            modal.show();

        });

    }

});
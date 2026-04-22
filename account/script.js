document.querySelectorAll('.view-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    const arrow = this.querySelector('.arrow');
    if (arrow) {
      arrow.textContent = arrow.textContent === '▼' ? '▲' : '▼';
    }
  });
});
// ///////////////////////////////////////////////////////////////
function editField(element) {

    let input = element.previousElementSibling;

    /* لو الحقل مقفول */
    if (input.hasAttribute("readonly")) {

        input.removeAttribute("readonly");   // يفتح التعديل
        input.focus();                      // يحط الكيرسر جوه
        element.innerText = "Save";         // Change تبقى Save

    } else {

        input.setAttribute("readonly", true); // يقفل تاني بعد الحفظ
        element.innerText = "Change";         // يرجع النص تاني

        console.log("Updated Value:", input.value);
        // هنا الباك إند يقدر ياخد القيمة الجديدة
    }

}

////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {

   document.querySelectorAll(".fav-btn").forEach(icon => {
      icon.addEventListener("click", function () {
         this.classList.toggle("active");
      });
   });

});
/* Variables */
var inputPass = document.getElementById('inputPass');
var confirmInputPass = document.getElementById('confirmInputPass');
var btn_signup = document.getElementById('btn_signup');
var form_signup = document.getElementById('form_signup');

btn_signup.setAttribute("disabled", true)

confirmInputPass.addEventListener('keyup', () => {
    validate();
})

inputPass.addEventListener('keyup', () => {
    validate();
})

/* Función de validación*/
function validate() {
    if (confirmInputPass.value == inputPass.value) {
        confirmInputPass.classList.remove('failedpass')
        inputPass.classList.add('successpass')
        confirmInputPass.classList.add('successpass')
        btn_signup.removeAttribute("disabled");
    } else {
        confirmInputPass.classList.remove('successpass')
        inputPass.classList.remove('successpass')
        confirmInputPass.classList.add('failedpass')
        btn_signup.setAttribute("disabled", true)
    }
}

btn_signup.addEventListener("click", (e) => {
    form_signup.submit();
    Swal.fire({
        title: 'Uusario creado!',
        timer: 2000,
        icon: 'success',
        timerProgressBar: true,
        showConfirmButton: false,
        willClose: () => {
            clearInterval(timerInterval)
        }
    })
})
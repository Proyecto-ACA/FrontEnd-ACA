var inputPass = document.getElementById('inputPass');
var confirmInputPass = document.getElementById('confirmInputPass');
var btn_signup = document.getElementById('btn_signup');

btn_signup.setAttribute("disabled", true)

confirmInputPass.addEventListener('keyup', ()=>{
    validate();
})

inputPass.addEventListener('keyup', ()=>{
    validate();
})

function validate(){
    if(confirmInputPass.value == inputPass.value){
        confirmInputPass.classList.remove('failedpass')
        inputPass.classList.add('successpass')
        confirmInputPass.classList.add('successpass')
        btn_signup.removeAttribute("disabled");
    }
    else{
        confirmInputPass.classList.remove('successpass')
        inputPass.classList.remove('successpass')
        confirmInputPass.classList.add('failedpass')
        btn_signup.setAttribute("disabled", true)
    }
}
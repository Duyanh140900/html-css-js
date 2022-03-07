var username = document.querySelector('#name');
var email = document.querySelector('#email');
var password = document.querySelector('#pass');
var confirmPassword = document.querySelector('#repass');
var form = document.querySelector('form');

function showError(input, message){
   let small =  input.parentElement.querySelector('small');
   input.parentElement.classList.add('error');
   small.innerText = message;
}

function showSuccess(input){
    let small =  input.parentElement.querySelector('small');
    input.parentElement.classList.remove('error');
    small.innerText = '';
 }

 function checkValidate(listInput){
    for(let i = 0; i < listInput.length; i++){
        listInput[i].value = listInput[i].value.trim();
        if(!listInput[i].value) {
            showError(listInput[i], "Không được bỏ trống...")
        } else{
            if(listInput[i]==email){
                checkEmail(listInput[i]);
            }else if(listInput[i] == username){
                checkLength(listInput[i], 3, 20);
            } else if(listInput[i] == password){
                checkLength(listInput[i],6,20);
            }
        }
    }
}


    function checkEmail(input){
        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(regexEmail.test(input.value.trim())){
            showSuccess(input);
            return true
        } else{
            showError(input, 'Email không hợp lệ...')
            return false
        }
    }

    function checkLength(input, min, max){
        input.value = input.value.trim();
        if(input.value.length < min){
            showError(input, `Phải có ít nhất ${min} kí tự...`);
            
        } else if(input.value.length > max){
            showError(input, `Không được quá ${max} kí tự...`)
            
        } else{
            showSuccess(input)
        }
    }

    function checkMatch(pass, repass){
        if(pass.value==repass.value){
            showSuccess(repass);
        } else {
            showError(repass, "Mật khẩu không khớp...")
        }
    }

 form.addEventListener('submit', function(e){
     e.preventDefault();
    
    checkValidate([username,email,password,confirmPassword]);
    checkMatch(password,confirmPassword);
 })

var btn_success = document.querySelector('.success-btn');
var btn_warning = document.querySelector('.warning-btn');
var btn_error = document.querySelector('.error-btn');

btn_success.addEventListener('click',function(){
    createToast('success');
})

btn_error.addEventListener('click',function(){
    createToast('error');
})

btn_warning.addEventListener('click',function(){
    createToast('warning');
})



function createToast(status) {
    let statusToast = ``;

    switch(status){
        case 'success': 
                        statusToast = ` <i class="fa-solid fa-circle-check"></i>
                                        <p>This is a success message</p>
                                        `
            break;

        case 'warning': 
                        statusToast = `
                                        <i class="fa-solid fa-circle-exclamation"></i>
                                        <p>This is a warning message</p>
                                        `
            break;
        
        case 'error': 
                        statusToast = `
                                        <i class="fa-solid fa-triangle-exclamation"></i>
                                        <p>This is a error message</p>
                                        `
            break;
    }

    var toast = document.createElement('div');
    toast.classList.add('toast')
    toast.classList.add(status)
    toast.innerHTML = `${statusToast}
                        <div class="countdown"></div>
                        `
    var toastList = document.querySelector('.toasts')
    toastList.appendChild(toast)

    setTimeout(function(){
        toast.style.animation = 'truotvao 2s ease forwards'
    },4000)

    setTimeout(function(){
        toast.remove();
    },5000)
}
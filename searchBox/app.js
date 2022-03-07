var button = document.querySelector('.search-button');

button.addEventListener('click', function(){
    this.parentElement.classList.toggle('open');
    this.previousElementSibling.focus();
})
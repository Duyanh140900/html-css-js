var images = document.querySelectorAll('.image img');
var close = document.querySelector('.close');
var left = document.querySelector('.pre');
var right = document.querySelector('.right');
var gallery = document.querySelector('.gallery');
var galleryImg = document.querySelector('.gallery-inner img');

var currentIndex = 0;

function show(){
    galleryImg.src = images[currentIndex].src;
    gallery.classList.add('show');
    if(currentIndex==0){
        left.classList.add('hiden');
    } else{
        left.classList.remove('hiden');
    }

    if(currentIndex==images.length - 1){
        right.classList.add('hiden');
    } else {
        right.classList.remove('hiden');
    }
}

images.forEach((item, index) => {
    item.addEventListener('click', function(){
        currentIndex = index;
        show();
    })
})

close.addEventListener('click',function(){
    gallery.classList.remove('show');
})

left.addEventListener('click', function(){
    if(currentIndex>0){
        currentIndex--;
        show();
    }
})

right.addEventListener('click', function(){
    if(currentIndex < images.length - 1){
        currentIndex++;
        show();
    }
})
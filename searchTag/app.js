var content = document.querySelector('.content')
var input = document.querySelector('.content input')
var tags = []
var btnRemoveAll = document.querySelector('.remove-all')

function createTags(){
    content.innerHTML = ''
    tags.forEach((tag,index) => {
        content.innerHTML += `
            <li>
                ${tag}
                <i class="fa-solid fa-xmark" onclick="removeTag(${index})"></i>
            </li>
        `
    })

    content.appendChild(input)
    input.focus();
}

createTags();

input.addEventListener('keydown', function(e){
    if(e.key=='Enter') {
        console.log();
        tags.push(input.value.trim())
        createTags();
        input.value=''
    }
})

function removeTag(index){
    console.log(index);
    tags.splice(index, 1);
    createTags();
}

btnRemoveAll.addEventListener('click', function(){
    tags=[];
    createTags();
})


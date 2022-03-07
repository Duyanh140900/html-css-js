var products = document.querySelector('.products')

fetch('https://fakestoreapi.com/products')
.then(res => {
    return res.json();
})
.then(datas => {
    datas.forEach(data => {
    var product = document.createElement('div');
    product.classList.add('product')
        product.innerHTML = `
        <img src="${data.image}">
        <div class="info">
            <div class="name-product">${data.title}</div>
            <div class="price-product">${data.price}</div>
        </div> 
        `
    products.appendChild(product);
    });
})

var searchInput = document.querySelector('.search input');

searchInput.addEventListener('input', function(e){
    let txtSearch = e.target.value.trim().toLowerCase();
    let listProductDom = document.querySelectorAll('.product');
    listProductDom.forEach(item => {
        if(item.innerText.toLowerCase().includes(txtSearch)){
            item.classList.remove('hide');
        } else{
            item.classList.add('hide');
        }
    })
})
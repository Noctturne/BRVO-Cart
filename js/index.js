/* Cart */
const cart = document.querySelector('#cart');
/* Cart container */
const cartContainer = document.querySelector('.cart_products');
/* Cart Button  */
const removeItemsBTN = document.querySelector('#remove-btn');
/* Product List  */
const productList = document.querySelector('#products');


eventListeners();
function eventListeners() {
    productList.addEventListener('click', addProduct);
}

/* FUNCTIONS */
function addProduct(e) {
    e.preventDefault();

    if(e.target.classList.contains('product__link')){
        const selectedproduct = e.target.parentElement;
        getData(selectedproduct);
    }
}

/* READ CONTENT */
function getData(product) {

    // Content
    const infoProduct = {
        image: product.querySelector('img').src,
        name: product.querySelector('h3').textContent,
        price: product.querySelector('small').textContent,
        id: product.querySelector('a').getAttribute('data-id'),
    }

    console.log(infoProduct);
}

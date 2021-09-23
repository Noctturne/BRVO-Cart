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
        console.log("Testing...");
    }
}

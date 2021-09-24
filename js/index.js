/* Cart */
const cart = document.querySelector('#cart');
/* Cart container */
const cartContainer = document.querySelector('.cart__products');
const cartAmmount = document.querySelector('.site-header__items');
/* Cart Button  */
const removeItemsBTN = document.querySelector('#remove-btn');
/* Product List  */
const productList = document.querySelector('#products');
/* Products cart */
let productsCart = [];
let amountProductsCart = 0;

/* Cart icon */
const cartIcon = document.querySelector('.site-header__icon');



eventListeners();
function eventListeners() {
    cartIcon.addEventListener('click', toggleCart);
    productList.addEventListener('click', addProduct);
    // Remove products
    cart.addEventListener('click', removeProduct);
}



/* FUNCTIONS */
function toggleCart(){
    if(cart.style.display === "none") {
        cart.style.display = "block";
    } else {
        cart.style.display = "none";
    }
}


function addProduct(e) {
    e.preventDefault();

    if(e.target.classList.contains('product__link')){
        const selectedproduct = e.target.parentElement;
        getData(selectedproduct);
    }
}

function removeProduct(e) {
    console.log(e.target.classList.classList);
}


/* READ CONTENT */
function getData(product) {

    // Content
    const infoProduct = {
        image: product.querySelector('img').src,
        name: product.querySelector('h3').textContent,
        price: product.querySelector('small').textContent,
        id: product.querySelector('a').getAttribute('data-id'),
        amount: 1
    }

    // Duplicate elements
    const exists = productsCart.some( product => product.id === infoProduct.id);
    if(exists){
        const products = productsCart.map(product => {
            if(product.id === infoProduct.id){
                product.amount++;
                return product;
            }else{
                return product;
            }
        });
        productsCart = [...products];
    }else{
        // Adding products in a cart
        productsCart = [...productsCart, infoProduct];
    }

    amountProductsCart++;
    cartAmmount.innerHTML = amountProductsCart;
    showProducts();
}

/* SHOW PRODUCTS */
function showProducts() {
    cleanHTML();

    productsCart.forEach((product) => {
        const {image, name, amount, price, id} = product;

        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            <img src="${image}" width="35">
        </td>
        <td> 
            ${name} 
        </td>
        <td>
            ${amount} x ${price}
        </td>
        <td>
            <a href="#" class="delete__product" data-id="${id}">
                <i class="fas fa-times-circle link-primary"></i>
            </a>
        </td>
        `;

        cartContainer.appendChild(row);
    });
}

/* CLEAN PRODUCTS  */ 
function cleanHTML() {
    while(cartContainer.firstChild) {
        cartContainer.removeChild(cartContainer.firstChild);
    }
}

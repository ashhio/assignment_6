/*const add_to_cart = document.getElementsByClassName("big-button add-to-cart");
add_to_cart[0].addEventListener('click', addToCart);



function addToCart()
{
    add_to_cart.submit();
    var cart_number_elem = document.getElementById("cart-number");
    var cart_number = cart_number_elem.innerHTML;
    cart_number++;

    cart_number_elem.innerHTML = cart_number;
    
}
    
*/ 

/*
let cart_number_elem = document.getElementById("cart-number");

console.log(cart_number_elem);

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
   
    const cart_number = form.elements.namedItem("quantity").value;
    cart_number_elem.innerHTML = cart_number;
   
    
    
});
*/ 

//referenced from JS help session run by Steven Moore
var productArray = [];
const form = document.getElementById('form');
var totalProducts = 0;

class Product{
    constructor(quantity, glaze) {
        this.quantity = quantity;
        this.glaze = glaze; 
    }
}

function addToCart()
{
    var quantity = form.elements.namedItem("quantity").value;
    totalProducts = Number(quantity) + Number(totalProducts);

    document.getElementById("cart-number").innerHTML = totalProducts;
   
}
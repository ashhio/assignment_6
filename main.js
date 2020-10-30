//referenced from JS help session run by Steven Moore

//an array containing product data
var productArray = [];
var totalProducts = 0;
//gets form data from product detail page
const form = document.getElementById('form');

//creates Product object with quantity & glaze information
class Product{
    constructor(quantity, glaze) {
        this.quantity = quantity;
        this.glaze = glaze; 
    }
}

//called when add to cart button is pressed
function addToCart()
{
    //gets the quantity of items selected from the form
    var quantity = form.elements.namedItem("quantity").value;
    //adds the quantity selected to the total number of items in the cart
    totalProducts = Number(quantity) + Number(totalProducts);
    //updates the number of items in the cart in the navbar
    document.getElementById("cart-number").innerHTML = totalProducts;  
}
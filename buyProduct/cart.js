// JavaScript-the cart.
//This adds the products names and prices to the total with the quantity itself.

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('sh-it-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

//After the purchase this will dispaly a alert massage.
function purchaseClicked() {
    alert('Thank you for your purchase, Thanks for selecting Lions Cricket')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

//This is the remove button(remove a product)
function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

//This one is for the quantity changements.
function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

//This  takes the price, image and the name of the product, to the cart when you click "Add to Cart"
function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('sh-it-title')[0].innerText
    var price = shopItem.getElementsByClassName('sh-it-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('sh-it-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

//This also does not allows to user to add same item twice or more.
function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart.')
            return
        }
    }


    //This is for the width and height adjusments for the products images and the buttons(Add to cart and the Remove buttons)
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

//Total calculation.
function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('Rs', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100000)
    document.getElementsByClassName('cart-total-price')[0].innerText = 'Rs ' + total
}


function RequiredN() {

    let x = document.forms["myForm"]["fn"].value;
    if (x == "") {
        alert("Please Enter Your First Name");
        return false;
    }
    let z = document.forms["myForm"]["Ln"].value;
    if (z == "") {
        alert("Please Enter Your Last Name");
        return false;
    }
    let y = document.forms["myForm"]["em"].value;
    if (y == "") {
        alert("Please Enter Your Email");
        return false;
    }

    let radios = document.getElementsByName("de");
    var formValid = false; {

        var i = 0;
        while (!formValid && i < radios.length) {
            if (radios[i].checked) formValid = true;
            i++;
        }

        if (!formValid) alert("Please Select the Option!");
        return formValid;
    }
}

function showInput() {
    var e = document.getElementById("user_input5");
    var f = document.getElementById("user_input6");
    var g = document.getElementById("user_input7");




    document.getElementById('display').innerHTML = ("First Name  :" + document.getElementById("user_input").value);
    document.getElementById('display3').innerHTML = ("Last Name  :" + document.getElementById("user_input3").value);
    document.getElementById('display2').innerHTML = ("Your Email :" + document.getElementById("user_input2").value);

    //document.getElementById('display5').innerHTML = ("Subject:"+ document.getElementById("user_input5").value);



}
var quantity = 1;
var price = 0;
var fee = 35;
var total = 0;

function disable(){
    var c = document.getElementById('username');
    var x = document.getElementById('pinakbet1');
    var y = document.getElementById('pancit1');
    var z = document.getElementById('sitaw1');
    if (x.style.display === "block" || y.style.display === "block" || z.style.display === "block"){
        alert('Order one at a time.');
        exit();
    }else if(c.style.display === "none"){
        alert('Please Login First.');
        exit();
    }
}

function login(){
    var val = document.getElementById('user').value;
    document.getElementById('id01').style.display='none';
    document.getElementById('log').style.display='none';
    document.getElementById('username').innerHTML = "Welcome " + val;
    document.getElementById('id01').style.display='none';
    document.getElementById('log').style.display='none';
    document.getElementById('logout').style.display='inline-block';
    document.getElementById('username').style.display='inline-block';
}

function logout(){
    document.getElementById('log').style.display='inline-block';
    document.getElementById('username').style.display='none';
    document.getElementById('logout').style.display='none';
}

function add(){
    if (quantity < 10){
        quantity = quantity + 1;
        total = total + price;
        document.getElementById('q').innerHTML = quantity;
        document.getElementById('q1').innerHTML = quantity;
        document.getElementById('q2').innerHTML = quantity;
        document.getElementById('total').innerHTML = total;
        document.getElementById('total1').innerHTML = total;
        document.getElementById('total2').innerHTML = total;
    }else{
        alert('Quantity Exceed the maximum amount');
    }
    
}

function sub(){
    if (quantity > 1){
        quantity = quantity - 1;
        total = total - price;
        document.getElementById('q').innerHTML = quantity;
        document.getElementById('q1').innerHTML = quantity;
        document.getElementById('q2').innerHTML = quantity;
        document.getElementById('total').innerHTML = total;
        document.getElementById('total1').innerHTML = total;
        document.getElementById('total2').innerHTML = total;
    }else{
        alert('Quantity Cannot be zero');
    }
}
//PINAKBET
function pinakbet(){
    disable()

    price = price + 35;
    total = total + price + fee;
    document.getElementById('total').innerHTML = total;

    var x = document.getElementById('pinakbet');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    } 
    var y = document.getElementById('pinakbet1');
    if (y.style.display === "none") {
        y.style.display = "block";
        document.querySelector('btn2').disable = true;
        document.querySelector('btn2.1').disable = true;
    } else {
        y.style.display = "none";
    } 
    var a = document.getElementById('pinakbet');
}
function cancel(){
    fee = 0;
    price = 0;
    total = 0;
    quantity = 1
    document.getElementById('q').innerHTML = "1";
    document.getElementById('total').innerHTML = total;

    var x = document.getElementById('pinakbet');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    } 
    var y = document.getElementById('pinakbet1');
    if (y.style.display === "none") {
        y.style.display = "block";
        document.querySelector('btn2').disable = false;
        document.querySelector('btn2.1').disable = false;
    } else {
        y.style.display = "none";
        
    } 
}

function pancit(){
    disable()

    price = price + 45;
    total = total + price + fee;
    document.getElementById('total1').innerHTML = total;

    var x = document.getElementById('pancit');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    } 
    var y = document.getElementById('pancit1');
    if (y.style.display === "none") {
        y.style.display = "block";
        
    } else {
        y.style.display = "none";
    } 
}
function cancel1(){
    price = 0;
    total = 0;
    quantity = 1
    document.getElementById('q1').innerHTML = "1";
    document.getElementById('total1').innerHTML = total;

    var x = document.getElementById('pancit');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    } 
    var y = document.getElementById('pancit1');
    if (y.style.display === "none") {
        y.style.display = "block";
        
    } else {
        y.style.display = "none";
        
    } 
}

function sitaw(){
    disable()

    price = price + 40;
    total = total + price + fee;
    document.getElementById('total2').innerHTML = total;

    var x = document.getElementById('sitaw');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    } 
    var y = document.getElementById('sitaw1');
    if (y.style.display === "none") {
        y.style.display = "block";
        
    } else {
        y.style.display = "none";
    } 
}
function cancel2(){
    fee = 0;
    price = 0;
    total = 0;
    quantity = 1
    document.getElementById('q2').innerHTML = "1";
    document.getElementById('total2').innerHTML = total;

    var x = document.getElementById('sitaw');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    } 
    var y = document.getElementById('sitaw1');
    if (y.style.display === "none") {
        y.style.display = "block";
        
    } else {
        y.style.display = "none";
        
    } 
}

//ADD TO CART

/* get cart total from session on load */
updateCartTotal();

/* button event listeners */
document.getElementById("emptycart").addEventListener("click", emptyCart);
var btns = document.getElementsByClassName('addtocart');
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {addToCart(this);});
}

/* ADD TO CART functions */

function addToCart(elem) {
    //init
    var sibs = [];
    var getprice;
    var getproductName;
    var cart = [];
     var stringCart;
    //cycles siblings for product info near the add button
    while(elem = elem.previousSibling) {
        if (elem.nodeType === 3) continue; // text node
        if(elem.className == "price"){
            getprice = elem.innerText;
        }
        if (elem.className == "productname") {
            getproductName = elem.innerText;
        }
        sibs.push(elem);
    }
    //create product object
    var product = {
        productname : getproductName,
        price : getprice
    };
    //convert product data to JSON for storage
    var stringProduct = JSON.stringify(product);
    /*send product data to session storage */
    
    if(!sessionStorage.getItem('cart')){
        //append product JSON object to cart array
        cart.push(stringProduct);
        //cart to JSON
        stringCart = JSON.stringify(cart);
        //create session storage cart item
        sessionStorage.setItem('cart', stringCart);
        addedToCart(getproductName);
        updateCartTotal();
    }
    else {
        //get existing cart data from storage and convert back into array
       cart = JSON.parse(sessionStorage.getItem('cart'));
        //append new product JSON object
        cart.push(stringProduct);
        //cart back to JSON
        stringCart = JSON.stringify(cart);
        //overwrite cart data in sessionstorage 
        sessionStorage.setItem('cart', stringCart);
        addedToCart(getproductName);
        updateCartTotal();
    }
}
/* Calculate Cart Total */
function updateCartTotal(){
    //init
    var total = 0;
    var price = 0;
    var items = 0;
    var productname = "";
    var address = "";
    var carttable = "";
    if(sessionStorage.getItem('cart')) {
        //get cart data & parse to array
        var cart = JSON.parse(sessionStorage.getItem('cart'));
        //get no of items in cart 
        items = cart.length;
        //loop over cart array
        for (var i = 0; i < items; i++){
            //convert each JSON product in array back into object
            var x = JSON.parse(cart[i]);
            //get property value of price
            price = parseFloat(x.price.split('$')[1]);
            productname = x.productname;
            //add price to total
            carttable += "<tr><td>" + productname + "</td><td>$" + price.toFixed(2) + "</td></tr>";
            total += price;
        }
        
    }
    //update total on website HTML
    document.getElementById("carttotal").innerHTML = total.toFixed(2);
    //insert saved products to cart table
    document.getElementById("carttable").innerHTML = carttable;
    //update items in cart on website HTML
    document.getElementById("itemsquantity").innerHTML = items;
}
//user feedback on successful add
function addedToCart(pname) {
  var message = pname + " was added to the cart";
  var alerts = document.getElementById("alerts");
  alerts.innerHTML = message;
  if(!alerts.classList.contains("message")){
     alerts.classList.add("message");
  }
}
/* User Manually empty cart */
function emptyCart() {
    //remove cart session storage object & refresh cart totals
    if(sessionStorage.getItem('cart')){
        sessionStorage.removeItem('cart');
        updateCartTotal();
      //clear message and remove class style
      var alerts = document.getElementById("alerts");
      alerts.innerHTML = "";
      if(alerts.classList.contains("message")){
          alerts.classList.remove("message");
      }
    }
}


    
var quantity = 1;
var price = 0;
var fee = 0;
var total = 0 + fee;

function login(){
    document.getElementById('log').style.display='none';
    const val = document.querySelector('user').value;
    document.getElementById('username').innerHTML = "Welcome " + val;
    console.log(val);
    document.getElementById('id01').style.display='none'
}

function add(){
    if (quantity < 10){
        quantity = quantity + 1;
        total = total + price;
        document.getElementById('q').innerHTML = quantity;
        document.getElementById('total').innerHTML = total;
    }else{
        alert('Quantity Exceed the maximum amount');
    }
    
}

function sub(){
    if (quantity > 1){
        quantity = quantity - 1;
        total = total - price;
        document.getElementById('q').innerHTML = quantity;
        document.getElementById('total').innerHTML = total;
    }else{
        alert('Quantity Cannot be zero');
    }
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
        
    } else {
        y.style.display = "none";
        
    } 
}

function pinakbet(){
    fee = fee + 35;
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
        
    } else {
        y.style.display = "none";
    } 
}



    
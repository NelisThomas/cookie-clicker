/*OPEN AND CLOSE OVERLAY*/
function openNav() {
    document.getElementById("shopMenu").style.width = "100%";
    /*  INITIALISE PRICES*/
    document.getElementById("autoClickerButton").value = "$"+price2;
    document.getElementById("doubleClickButton").value = "$"+price1;
}

function closeNav() {
    document.getElementById("shopMenu").style.width = "0%";
}
/*DECLARING VARIABLES*/
var count = 0;
var multiplier = 1;
/*COUNTER INCREMENTATION FUNCTION*/
    function counterIncrement() {
    count= count +(1*multiplier);
    document.getElementById("counter").innerHTML = "$ "+count;
    document.getElementById("multiplier").innerHTML = "x"+multiplier;
}
/*UPGRADES*/


var price1 = 10;
function extraClick() {
    if (count >= price1) {
        count = count - price1;
        multiplier = multiplier + 1;
        price1 = price1*2;
        document.getElementById("counter").innerHTML = "$ " + count;
        document.getElementById("multiplier").innerHTML = "x"+multiplier;
        document.getElementById("doubleClickButton").value = "$"+price1;
    }
    else {
        alert("Not enough $");
    }
}

var price2 = 200;
function autoClicker(){
    if (count >= price2){
        count = count - price2;
        document.getElementById("counter").innerHTML = "$ " + count;
        document.getElementById("autoClickerButton").value = "$"+price2;
        window.setInterval(counterIncrement, 1000);
    }
    else {
        alert("Not enough $");
    }
}

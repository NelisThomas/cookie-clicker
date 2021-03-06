/*OPEN AND CLOSE OVERLAY*/
function openNav() {
    document.getElementById("shopMenu").style.width = "100%";
    /*  INITIALISE PRICES*/
    document.getElementById("autoClickerButton").value = "Auto Clicker $"+price2;
    document.getElementById("doubleClickButton").value = "Extra Click $"+price1;
}

function closeNav() {
    document.getElementById("shopMenu").style.width = "0%";
}
/*TOGGLE NIGHT MODE*/
var night = 0;
function toggleNightMode(){
    
    if (night == 0){
        document.getElementById("body").style.color="white";
        document.getElementById("body").style.backgroundColor="black";
        night = 1;
    } 
    else  if(night == 1){
        document.getElementById("body").style.color="black";
        document.getElementById("body").style.backgroundColor="white";
        night=0;
    }
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
        document.getElementById("doubleClickButton").value = "Extra Click $"+price1;
        document.getElementById("shopMenu").style.width = "0%";
    }
    else {
        alert("Not enough $");
    }
}

var price2 = 200;
var time2 = 2000;
function autoClicker(){
    if (count >= price2){
        count = count - price2;
        price2 = price2*3;
        time2 = time2 / 2;
        document.getElementById("counter").innerHTML = "$ " + count;
        document.getElementById("autoClickerButton").value = "Auto Clicker $"+price2;
        window.setInterval(counterIncrement, time2);
        document.getElementById("shopMenu").style.width = "0%";
    }
    else {
        alert("Not enough $");
    }
}

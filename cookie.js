/*OPEN AND CLOSE OVERLAY*/
function openNav() {
    document.getElementById("shopMenu").style.width = "100%";
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
}
/*UPGRADES*/
function extraClick() {
    if (count > 9) {
        count = count - 10;
        multiplier = multiplier + 1;
        document.getElementById("counter").innerHTML = "$ " + count;
    }
    else {
        alert("Not enough $");
    }
}
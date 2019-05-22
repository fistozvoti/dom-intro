var billItemTypeRadio = document.querySelector(".billItemTypeRadio")
var radioBillAddBtnElement = document.querySelector(".radioBillAddBtn")
var callTotalTwoElement = document.querySelector(".callTotalTwo")
var smsTotalTwoElement = document.querySelector(".smsTotalTwo")
var totalTwoElement = document.querySelector(".totalTwo")

var callsTotal = 0;
var smsTotalTwo = 0;
var totalCost = 0;

function radioBillAddBtn(){
    var billItemEntered = billItemTypeRadio.value.trim();

    if (billItemEntered === "call"){
        callsTotal += 2.75;
    }
    else if (billItemEntered === "sms"){
        smsTotalTwo += 0.75;
    }
    
    callTotalTwoElement.innerHTML = callsTotal.toFixed(2);
    smsTotalTwoElement.innerHTML = smsTotalTwo.toFixed(2);
    var totalCost = callsTotal + smsTotalTwo;
    totalTwoElement.innerHTML = totalCost.toFixed(2);

    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");

    if (checkedRadioBtn){
        var billItemType = checkedRadioBtn.value
    }
    
    if (totalCost >= 50){
        totalTwoElement.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalTwoElement.classList.add("warning");
    }
}

radioBillAddBtnElement.addEventListener('click', radioBillAddBtn);
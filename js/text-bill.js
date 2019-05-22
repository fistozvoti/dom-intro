var billTypeText = document.querySelector(".billTypeText")
var addToBillBtnElement = document.querySelector(".addToBillBtn")
var callTotalOneElement = document.querySelector(".callTotalOne")
var smsTotalOneElement = document.querySelector(".smsTotalOne")
var totalOneElement = document.querySelector(".totalOne")

var callsTotal = 0;
var smsTotalOne = 0;
var totalCost = 0;

function textBillTotal(){
    var billTypeEntered = billTypeText.value.trim();

    if (billTypeEntered === "call"){
        callsTotal += 2.75;
    }
    else if (billTypeEntered === "sms"){
        smsTotalOne += 0.75;
    }
    
    callTotalOneElement.innerHTML = callsTotal.toFixed(2);
    smsTotalOneElement.innerHTML = smsTotalOne.toFixed(2);
    var totalCost = callsTotal + smsTotalOne;
    totalOneElement.innerHTML = totalCost.toFixed(2);

    if (totalCost >= 50){
        totalOneElement.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalOneElement.classList.add("warning");
    }
}

addToBillBtnElement.addEventListener('click', textBillTotal);

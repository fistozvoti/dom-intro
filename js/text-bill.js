var billTypeText = document.querySelector(".billTypeText")
var addToBillBtnElement = document.querySelector(".addToBillBtn")
var callTotalOneElement = document.querySelector(".callTotalOne")
var smsTotalOneElement = document.querySelector(".smsTotalOne")
var totalOneElement = document.querySelector(".totalOne")

var totalCalls = 0;
var smsTotalOne = 0;
var costTotal = 0;

function textBillTotal(){
    var billEntered = billTypeText.value.trim();

    if (billEntered === "call"){
        totalCalls += 2.75;
    }
    else if (billEntered === "sms"){
        smsTotalOne += 0.75;
    }
    
    callTotalOneElement.innerHTML = totalCalls.toFixed(2);
    smsTotalOneElement.innerHTML = smsTotalOne.toFixed(2);
    var costsTotal = totalCalls + smsTotalOne;
    totalOneElement.innerHTML = costsTotal.toFixed(2);

    if (costTotal >= 50){
        totalOneElement.classList.add("danger");
    }
    else if (costTotal >= 30){
        totalOneElement.classList.add("warning");
    }
}

addToBillBtnElement.addEventListener('click', textBillTotal);

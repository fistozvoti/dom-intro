var billTypeText = document.querySelector(".billTypeText")
var addToBillBtnElement = document.querySelector(".addToBillBtn")
var callTotalOneElement = document.querySelector(".callTotalOne")
var smsTotalOneElement = document.querySelector(".smsTotalOne")
var totalOneElement = document.querySelector(".totalOne")

var totalCalls = 0;
var smsTotalOne = 0;
var costsTotal = 0;

function textBillTotal(){
    var billEntered = billTypeText.value.trim();
console.log(billEntered)
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

    if (costsTotal >= 50){
        totalOneElement.classList.add("danger");
    }
    else if (costsTotal >= 30){
        totalOneElement.classList.add("warning");
    }
}

addToBillBtnElement.addEventListener('click', textBillTotal);

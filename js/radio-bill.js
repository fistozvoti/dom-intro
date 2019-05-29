var billItemTypeRadio = document.querySelector(".billItemTypeRadio")
var radioBillAddBtnElement = document.querySelector(".radioBillAddBtn")
var callTotalTwoElement = document.querySelector(".callTotalTwo")
var smsTotalTwoElement = document.querySelector(".smsTotalTwo")
var totalTwoElement = document.querySelector(".totalTwo")

var callsTotal = 0;
var smsTotalTwo = 0;
var totalCosts = 0;

function radioBillAddBtn(){
    var billItem = billItemTypeRadio.value.trim();
console.log(billItem)
    if (billItem === "call"){
        callsTotal += 2.75;
    }
    else if (billItem === "sms"){
        smsTotalTwo += 0.75;
    }
    
    callTotalTwoElement.innerHTML = callsTotal.toFixed(2);
    smsTotalTwoElement.innerHTML = smsTotalTwo.toFixed(2);
    var totalCosts = callsTotal + smsTotalTwo;
    totalTwoElement.innerHTML = totalCosts.toFixed(2);

    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");

    if (checkedRadioBtn){
        var billItemType = checkedRadioBtn.value
    }

    
    
    if (totalCosts >= 50){
        totalTwoElement.classList.add("danger");
    }
    else if (totalCosts >= 30){
        totalTwoElement.classList.add("warning");
    }
}

radioBillAddBtnElement.addEventListener('click', radioBillAddBtn);